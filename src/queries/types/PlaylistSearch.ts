/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PlaylistSnapshotStatus } from "./../../../types/globalTypes";

// ====================================================
// GraphQL query operation: PlaylistSearch
// ====================================================

export interface PlaylistSearch_playlists_image {
  __typename: "Image";
  url: string | null;
}

export interface PlaylistSearch_playlists_latest_snapshot {
  __typename: "PlaylistSnapshot";
  id: string;
  status: PlaylistSnapshotStatus;
}

export interface PlaylistSearch_playlists_owner {
  __typename: "User";
  id: string;
  display_name: string | null;
}

export interface PlaylistSearch_playlists {
  __typename: "Playlist";
  id: string;
  name: string | null;
  latest_snapshot_id: string;
  uri: string | null;
  href: string | null;
  image: PlaylistSearch_playlists_image | null;
  latest_snapshot: PlaylistSearch_playlists_latest_snapshot | null;
  owner: PlaylistSearch_playlists_owner;
}

export interface PlaylistSearch {
  playlists: PlaylistSearch_playlists[];
}

export interface PlaylistSearchVariables {
  query?: string | null;
}
