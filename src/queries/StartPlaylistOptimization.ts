import { gql } from "apollo-boost";

export const StartPlaylistOptimization = gql`
  mutation StartPlaylistOptimization(
    $playlistId: String!
    $snapshotId: String!
    $playlistName: String
  ) {
    startPlaylistOptimization(
      playlist_id: $playlistId
      snapshot_id: $snapshotId
      playlist_name: $playlistName
    ) {
      id
      extract_path
      start
      end
    }
  }
`;

export default StartPlaylistOptimization;
