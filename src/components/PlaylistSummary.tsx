import gql from "graphql-tag"
import { Query } from "react-apollo"
import React from "react"
import {
  createStyles,
  withStyles,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  IconButton,
} from "@material-ui/core"
import classNames from "classnames"

const GET_PLAYLIST_BY_URI = gql`
  query PlaylistByUri($uri: String) {
    playlist(uri: $uri) {
      images(where: { width: 300 }) {
        url
      }
      name
      description
      owner {
        display_name
      }
      latest_snapshot {
        status
        track_count
      }
    }
  }
`

const styles = createStyles({
  root: {
    marginTop: "1em",
  },
  text: {
    color: "#fff",
  },
  card: {
    display: "flex",
    minHeight: 300,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    minWidth: 300,
  },
  actions: {
    textAlign: "center",
  },
})

const PlaylistSummary = ({ classes, uri }) => (
  <Query query={GET_PLAYLIST_BY_URI} variables={{ uri }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading..."
      if (error) return `Error! ${error.message}`

      const { playlist } = data
      return (
        <div className={classNames(classes.root)}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={playlist.images[0].url}
            />
            <div className={classes.details}>
              <CardHeader
                titleTypographyProps={{ variant: "h6" }}
                title={playlist.name}
                subheader={`A ${
                  playlist.latest_snapshot.track_count
                } track playlist by ${playlist.owner.display_name}.`}
              />
              <CardContent>
                <Typography
                  component="p"
                  dangerouslySetInnerHTML={{ __html: playlist.description }}
                />
              </CardContent>
              <CardActions className={classes.actions}>
                {playlist.latest_snapshot.status == "INITIALIZED" && (
                  <Button>Load Tracks</Button>
                )}
              </CardActions>
            </div>
          </Card>
        </div>
      )
    }}
  </Query>
)

export default withStyles(styles, { withTheme: true })(PlaylistSummary)
