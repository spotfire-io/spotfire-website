import { gql } from "apollo-boost";

export default gql`
  query PlaylistSearch($query: String, $limit: Int) {
    playlists(query: $query, limit: $limit) {
      id
      name
      latest_snapshot_id
      uri
      href
      image(size: 300) {
        url
      }
      latest_snapshot {
        id
        status
        track_count
      }
      owner {
        id
        display_name
      }
    }
  }
`;
