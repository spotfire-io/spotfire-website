import { StartPlaylistOptimization_startPlaylistOptimization } from "../../queries/types/StartPlaylistOptimization";
import {
  Typography,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { useQuery } from "react-apollo";

import {
  GetOptimizationJobStatus,
  GetOptimizationJobStatusVariables,
} from "../../queries/types/GetOptimizationJobStatus";
import { GetOptimizationJobStatus as GetOptimizationJobStatusQuery } from "../../queries/GetOptimizationJobStatus";
import LoadingDialog from "../common/LoadingDialog";
import { ErrorMessage } from "../common/ErrorMessage";
import { RouteComponentProps, Link } from "@reach/router";

interface Props extends RouteComponentProps {
  id: string;
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    button: {
      color: "#fff",
      padding: "19px 56px",
      borderRadius: 500,
      boxShadow: "none",
      fontWeight: 800,
      marginTop: theme.spacing(6),
    },
  };
});

export const OptimizationJobView = ({ id }: Props) => {
  const { loading, error, data } = useQuery<
    GetOptimizationJobStatus,
    GetOptimizationJobStatusVariables
  >(GetOptimizationJobStatusQuery, {
    variables: { jobId: id },
    pollInterval: 1000,
  });
  const classes = useStyles();

  if (loading) {
    return <LoadingDialog message="Loading Optimization Job Status..." />;
  } else if (error || !data || !data.optimizationJob) {
    return <ErrorMessage error={error} data={data} />;
  } else {
    const job = data.optimizationJob;
    const status = job.latest_status_update;
    const snapshot = job.new_playlist_snapshot;
    const originalSnapshot = job.original_playlist_snapshot;
    return (
      <Grid item xs={12}>
        {job.status == "SAVED" && (
          <>
            <Typography>
              This <strong>{originalSnapshot.track_count}</strong> track
              playlist has been saved <strong>{job.playlist_name}</strong> under
              your Spotify account.
            </Typography>
            {status && (
              <Typography>
                Spotfire Solver took{" "}
                <strong>{status.time_millis_spent / 1000}</strong> seconds and
                produced a Best Score of <strong>{status.best_score}</strong>.
              </Typography>
            )}
          </>
        )}
        {job.status != "SAVED" && status && (
          <>
            <Typography>
              This <strong>{originalSnapshot.track_count}</strong> track
              playlist will be saved <strong>{job.playlist_name}</strong> under
              your Spotify account.
            </Typography>
            {status && (
              <Typography>
                Spotfire Solver has taken{" "}
                <strong>{status.time_millis_spent / 1000}</strong> seconds so
                far and current has a Best Score of{" "}
                <strong>{status.best_score}</strong>.
              </Typography>
            )}
          </>
        )}

        {status && (
          <>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Constraint</TableCell>
                  <TableCell align="right">Violation Count</TableCell>
                  <TableCell align="right">Score Impact</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {status.constraint_violations.map(rule => (
                  <TableRow key={rule.constraint_name}>
                    <TableCell component="th" scope="row">
                      {rule.constraint_name}
                    </TableCell>
                    <TableCell align="right">{rule.violation_count}</TableCell>
                    <TableCell align="right">{rule.score_impact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
        {snapshot && snapshot.playlist && snapshot.playlist.id && (
          <Grid container justify="center">
            <a
              href={`https://open.spotify.com/playlist/${snapshot.playlist.id}`}
              style={{ textDecoration: "none" }}
              target="_spotify"
            >
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Listen to Your Spotfired Playlist
              </Button>
            </a>
          </Grid>
        )}
      </Grid>
    );
  }
};

export default OptimizationJobView;
