/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PlaylistSnapshotStatus } from "./../../../types/globalTypes";

// ====================================================
// GraphQL query operation: PlaylistDetails
// ====================================================

export interface PlaylistDetails_playlist_owner {
  __typename: "User";
  id: string;
  display_name: string | null;
}

export interface PlaylistDetails_playlist_image {
  __typename: "Image";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface PlaylistDetails_playlist_latest_snapshot {
  __typename: "PlaylistSnapshot";
  id: string;
  status: PlaylistSnapshotStatus;
  track_count: number;
  loaded_tracks: number;
}

export interface PlaylistDetails_playlist {
  __typename: "Playlist";
  id: string;
  name: string | null;
  uri: string | null;
  owner: PlaylistDetails_playlist_owner;
  image: PlaylistDetails_playlist_image | null;
  latest_snapshot: PlaylistDetails_playlist_latest_snapshot | null;
}

export interface PlaylistDetails {
  playlist: PlaylistDetails_playlist;
}

export interface PlaylistDetailsVariables {
  id?: string | null;
  upsert?: boolean | null;
}
