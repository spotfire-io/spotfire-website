import React, { useState } from "react";

import { RouteComponentProps } from "@reach/router";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";
import _ from "lodash";
import {
  usePlaylistDetailsQuery,
  useLoadPlaylistTracksMutation,
  useStartPlaylistOptimizationMutation,
  PlaylistSnapshotStatus,
} from "../../graphql";
import { client } from "../../utils/apolloClient";
import { QueryGuard } from "../common/QueryGuard";
import ErrorMessage from "../common/ErrorMessage";
import { LoadPlaylistTracksStatus } from "./LoadPlaylistTracksStatus";
import { ActionButton } from "../common/ActionButton";
import { navigate } from "gatsby";

const useStyles = makeStyles((theme: Theme) => {});

interface Props extends RouteComponentProps {
  id: string;
  autoAdvance?: boolean;
}

export const LoadPlaylistTracksView = ({ id, autoAdvance }: Props) => {
  const classes = useStyles();

  const detailsResult = usePlaylistDetailsQuery({
    variables: { id, upsert: true },
  });
  const playlistData = detailsResult.data;

  const [loadTracksMutation, loadTracksResult] = useLoadPlaylistTracksMutation({
    variables: { id },
  });

  if (detailsResult.data && detailsResult.variables.upsert == true) {
    detailsResult.refetch({ upsert: false });
    detailsResult.startPolling(1000);
  }

  const [
    startOptimizationMutation,
    startOptimizationResult,
  ] = useStartPlaylistOptimizationMutation();

  const status: PlaylistSnapshotStatus = _.get(
    playlistData,
    "playlist.latest_snapshot.status"
  );

  if (status == "INITIALIZED" && !loadTracksResult.called) {
    loadTracksMutation();
  } else if (
    status == "LOADED" &&
    !startOptimizationResult.called &&
    playlistData &&
    playlistData.playlist.latest_snapshot &&
    autoAdvance
  ) {
    detailsResult.stopPolling();
    startOptimizationMutation({
      variables: {
        playlistId: id,
        snapshotId: playlistData.playlist.latest_snapshot.id,
        playlistName: `${playlistData.playlist.name} (Spotfired)`,
      },
    });
  }

  if (startOptimizationResult.data) {
    const jobData = startOptimizationResult.data;
    navigate(`/jobs/${jobData.startPlaylistOptimization.id}`);
  }

  return (
    <QueryGuard result={detailsResult}>
      {playlistData &&
        playlistData.playlist &&
        playlistData.playlist.latest_snapshot && (
          <>
            <LoadPlaylistTracksStatus playlist={playlistData.playlist} />
            {status == "LOADED" && !autoAdvance && (
              <ActionButton onClick={() => startOptimizationMutation()}>
                Optimize Playlist
              </ActionButton>
            )}
            {loadTracksResult.error && (
              <ErrorMessage error={loadTracksResult.error} />
            )}
          </>
        )}
    </QueryGuard>
  );
};
