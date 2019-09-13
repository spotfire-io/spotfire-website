/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StartPlaylistOptimization
// ====================================================

export interface StartPlaylistOptimization_startPlaylistOptimization {
  __typename: "OptimizationJob";
  id: string;
  extract_path: string | null;
  start: any;
  end: any | null;
}

export interface StartPlaylistOptimization {
  startPlaylistOptimization: StartPlaylistOptimization_startPlaylistOptimization;
}

export interface StartPlaylistOptimizationVariables {
  playlistId: string;
  snapshotId: string;
  playlistName?: string | null;
}
