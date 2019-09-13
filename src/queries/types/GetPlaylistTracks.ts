/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlaylistTracks
// ====================================================

export interface GetPlaylistTracks_playlist_owner {
  __typename: "User";
  id: string;
  display_name: string | null;
}

export interface GetPlaylistTracks_playlist_image {
  __typename: "Image";
  url: string | null;
  width: number | null;
  height: number | null;
}

export interface GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track_artists {
  __typename: "Artist";
  name: string | null;
}

export interface GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track_features_key {
  __typename: "Key";
  label: string;
  camelot_code: string;
}

export interface GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track_features {
  __typename: "AudioFeatures";
  key: GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track_features_key | null;
  tempo: number | null;
}

export interface GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track {
  __typename: "Track";
  id: string;
  name: string | null;
  artists: GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track_artists[] | null;
  features: GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track_features | null;
}

export interface GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks {
  __typename: "PlaylistTrack";
  order: number;
  track: GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks_track;
}

export interface GetPlaylistTracks_playlist_latest_snapshot {
  __typename: "PlaylistSnapshot";
  track_count: number;
  loaded_tracks: number;
  playlist_tracks: GetPlaylistTracks_playlist_latest_snapshot_playlist_tracks[] | null;
}

export interface GetPlaylistTracks_playlist {
  __typename: "Playlist";
  name: string | null;
  owner: GetPlaylistTracks_playlist_owner;
  image: GetPlaylistTracks_playlist_image | null;
  latest_snapshot: GetPlaylistTracks_playlist_latest_snapshot | null;
}

export interface GetPlaylistTracks {
  playlist: GetPlaylistTracks_playlist;
}

export interface GetPlaylistTracksVariables {
  id?: string | null;
}
