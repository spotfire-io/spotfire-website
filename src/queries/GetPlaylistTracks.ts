import { gql } from "apollo-boost";

export const GetPlaylistTracks = gql`
  query GetPlaylistTracks($id: String) {
    playlist(id: $id) {
      name
      owner {
        id
        display_name
      }
      image(size: 300) {
        url
        width
        height
      }
      latest_snapshot {
        track_count
        loaded_tracks
        playlist_tracks(orderBy: order_ASC) {
          order
          track {
            id
            name
            artists {
              name
            }
            features {
              key {
                label
                camelot_code
              }
              tempo
            }
          }
        }
      }
    }
  }
`;
