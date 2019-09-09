/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PlaylistSnapshotStatus } from "./../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: LoadPlaylistTracks
// ====================================================

export interface LoadPlaylistTracks_loadPlaylistTracks_latest_snapshot {
  __typename: "PlaylistSnapshot";
  id: string;
  status: PlaylistSnapshotStatus;
  track_count: number;
  loaded_tracks: number;
}

export interface LoadPlaylistTracks_loadPlaylistTracks {
  __typename: "Playlist";
  id: string;
  latest_snapshot_id: string;
  latest_snapshot: LoadPlaylistTracks_loadPlaylistTracks_latest_snapshot | null;
}

export interface LoadPlaylistTracks {
  loadPlaylistTracks: LoadPlaylistTracks_loadPlaylistTracks;
}

export interface LoadPlaylistTracksVariables {
  id: string;
}
