import { gql } from "apollo-boost";

export default gql`
  query PlaylistSearch($query: String) {
    playlists(query: $query) {
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
      }
      owner {
        id
        display_name
      }
    }
  }
`;
