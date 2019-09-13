import { gql } from "apollo-boost";

export const GetOptimizationJobStatus = gql`
  query GetOptimizationJobStatus($jobId: ID) {
    optimizationJob(where: { id: $jobId }) {
      id
      status
      playlist_name
      original_playlist_snapshot {
        track_count
        playlist {
          image(size: 300) {
            url
            width
            height
          }
        }
      }
      new_playlist_snapshot {
        track_count
        id
        playlist {
          id
          href
        }
      }
      latest_status_update {
        best_score
        time_millis_spent
        constraint_violations {
          constraint_name
          score_impact
          violation_count
        }
      }
    }
  }
`;
