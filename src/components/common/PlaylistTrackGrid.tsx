import { useGetPlaylistTracksQuery } from "../../graphql";
import React from "react";
import LoadingDialog from "./LoadingDialog";
import ErrorMessage from "./ErrorMessage";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Theme,
  createMuiTheme,
} from "@material-ui/core";
import {
  fade,
  lighten,
  emphasize,
  darken,
} from "@material-ui/core/styles/colorManipulator";
import siteTheme from "../../gatsby-theme-material-ui-top-layout/theme";
import _ from "lodash";
import { ThemeProvider } from "@material-ui/styles";

interface Props {
  playlistId: string;
}

// const theme = createMuiTheme(
//   Object.assign(siteTheme, {
//     overrides: {
//       MuiTable: {
//         root: {
//           margin: 20,
//         },
//       },
//       MuiTableHead: {
//         root: {
//           backgroundColor: fade("#fff", 0.9),
//         },
//       },
//       MuiTableCell: {
//         head: { color: "#333", fontWeight: 600 },
//         root: {
//           fontSize: "0.75rem",
//         },
//         body: {
//           color: "#333",
//           fontWeight: 500,
//           textOverflow: "ellipsis",
//         },
//       },
//     },
//   })
// );

const scaleColors = {
  "1A": "56f1da",
  "1B": "01edca",
  "2A": "7df2aa",
  "2B": "3cee81",
  "3A": "aef589",
  "3B": "86f24f",
  "4A": "e8daa1",
  "4B": "dfca73",
  "5A": "fdbfa7",
  "5B": "ffa07c",
  "6A": "fdafb7",
  "6B": "ff8894",
  "7A": "fdaacc",
  "7B": "ff81b4",
  "8A": "f2abe4",
  "8B": "f2abe4",
  "9A": "ddb4fd",
  "9B": "ce8fff",
  "10A": "becdfd",
  "10B": "9fb6ff",
  "11A": "8ee4f9",
  "11B": "56d9f9",
  "12A": "55f0f0",
  "12B": "00ebeb",
};

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    margin: 20,
  },
  tableHead: {
    backgroundColor: fade("#fff", 0.9),
  },
  tableHeadCell: { color: "#333", fontWeight: 600 },
  tableBodyCell: {
    fontSize: "0.75rem",
    color: darken("#2c3e50", 0.2),
    fontWeight: 600,
    textOverflow: "ellipsis",
  },
}));

const useScaleStyles = makeStyles((theme: Theme) =>
  _.mapValues(scaleColors, v => ({
    backgroundColor: fade(emphasize(lighten(`#${v}`, 0.6)), 0.9),
    color: fade("#333", 0.2),
  }))
);

export const PlaylistTrackGrid = ({ playlistId }: Props) => {
  const scaleClasses = useScaleStyles();
  const classes = useStyles();

  const { loading, error, data } = useGetPlaylistTracksQuery({
    variables: { id: playlistId },
  });

  if (loading) {
    return <LoadingDialog message="Loading Playlist Tracks..." />;
  } else if (
    // I know this is ugly, I will make it better. I promise.
    error ||
    !data ||
    !data.playlist ||
    !data.playlist.latest_snapshot ||
    !data.playlist.latest_snapshot.playlist_tracks
  ) {
    return <ErrorMessage error={error} data={data} />;
  } else {
    return (
      //   <ThemeProvider theme={theme}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>
              &nbsp;&nbsp;&nbsp;&nbsp;#
            </TableCell>
            <TableCell className={classes.tableHeadCell}>Track Name</TableCell>
            <TableCell className={classes.tableHeadCell}>Key</TableCell>
            <TableCell className={classes.tableHeadCell}>Camelot</TableCell>
            <TableCell className={classes.tableHeadCell}>Tempo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.playlist.latest_snapshot.playlist_tracks.map(
            ({ order, track }) => {
              const name = `${track.artists!!.map(a => a.name).join(" + ")} - ${
                track.name
              }`;
              const key = _.get(track, "features.key");
              const tempo = _.get(track, "features.tempo");
              return (
                <TableRow className={key ? scaleClasses[key.camelot_code] : ""}>
                  <TableCell className={classes.tableBodyCell}>
                    &nbsp;&nbsp;&nbsp;&nbsp;{order}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell}>
                    {name}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell}>
                    {key ? key.label : "Unknown"}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell}>
                    {key ? key.camelot_code : "Unknown"}
                  </TableCell>
                  <TableCell className={classes.tableBodyCell}>
                    {tempo || "Unknown"}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
      //   </ThemeProvider>
    );
  }
};
