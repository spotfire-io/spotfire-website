import { gql } from "apollo-boost";

export default gql`
  mutation LoadPlaylistTracks($id: String!) {
    loadPlaylistTracks(playlist_id: $id) {
      id
      latest_snapshot_id
      latest_snapshot {
        id
        status
        track_count
        loaded_tracks
      }
    }
  }
`;
