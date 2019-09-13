/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { OptimizationJobStatus } from "./../../../types/globalTypes";

// ====================================================
// GraphQL query operation: GetOptimizationJobStatus
// ====================================================

export interface GetOptimizationJobStatus_optimizationJob_new_playlist_snapshot_playlist {
  __typename: "Playlist";
  id: string;
  href: string | null;
}

export interface GetOptimizationJobStatus_optimizationJob_new_playlist_snapshot {
  __typename: "PlaylistSnapshot";
  id: string;
  playlist: GetOptimizationJobStatus_optimizationJob_new_playlist_snapshot_playlist | null;
}

export interface GetOptimizationJobStatus_optimizationJob_latest_status_update_constraint_violations {
  __typename: "SolverConstraintViolation";
  constraint_name: string;
  score_impact: string;
  violation_count: number;
}

export interface GetOptimizationJobStatus_optimizationJob_latest_status_update {
  __typename: "SolverStatusUpdate";
  best_score: string;
  time_millis_spent: number;
  constraint_violations: GetOptimizationJobStatus_optimizationJob_latest_status_update_constraint_violations[];
}

export interface GetOptimizationJobStatus_optimizationJob {
  __typename: "OptimizationJob";
  id: string;
  status: OptimizationJobStatus;
  playlist_name: string;
  new_playlist_snapshot: GetOptimizationJobStatus_optimizationJob_new_playlist_snapshot | null;
  latest_status_update: GetOptimizationJobStatus_optimizationJob_latest_status_update | null;
}

export interface GetOptimizationJobStatus {
  optimizationJob: GetOptimizationJobStatus_optimizationJob | null;
}

export interface GetOptimizationJobStatusVariables {
  jobId?: string | null;
}
