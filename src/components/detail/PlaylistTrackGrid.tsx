import { GetPlaylistTracks as GetPlaylistTracksQuery } from "../../queries/GetPlaylistTracks";
import {
  GetPlaylistTracks,
  GetPlaylistTracksVariables,
} from "../../queries/types/GetPlaylistTracks";
import { useQuery } from "react-apollo";
import React from "react";
import LoadingDialog from "../common/LoadingDialog";
import ErrorMessage from "../common/ErrorMessage";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import _ from "lodash";

interface Props {
  playlistId: string;
}

export const PlaylistTrackGrid = ({ playlistId }: Props) => {
  const { loading, error, data } = useQuery<
    GetPlaylistTracks,
    GetPlaylistTracksVariables
  >(GetPlaylistTracksQuery, { variables: { id: playlistId } });

  if (loading) {
    return <LoadingDialog message="Loading Playlist Tracks..." />;
  } else if (
    // I know this is ugly, I will make it better. I promise.
    error ||
    !data ||
    !data.playlist ||
    !data.playlist.latest_snapshot ||
    !data.playlist.latest_snapshot.playlist_tracks
  ) {
    return <ErrorMessage error={error} data={data} />;
  } else {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Track Name</TableCell>
            <TableCell>Key</TableCell>
            <TableCell>Tempo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.playlist.latest_snapshot.playlist_tracks.map(
            ({ order, track }) => {
              const name = `${track.artists!!.map(a => a.name).join(" + ")} - ${
                track.name
              }`;
              const key = _.get(track, "features.key");
              const tempo = _.get(track, "features.tempo");
              return (
                <TableRow>
                  <TableCell>{order}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    {key ? `${key.label} (${key.camelot_code})` : "Unknown"}
                  </TableCell>
                  <TableCell>{tempo || "Unknown"}</TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    );
  }
};
