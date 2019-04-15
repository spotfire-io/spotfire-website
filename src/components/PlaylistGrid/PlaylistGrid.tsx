import React from "react"
import PropTypes from "prop-types"
import { orderBy } from "lodash"
import {
  AutoSizer,
  Table,
  Column,
  createTableMultiSort,
  SortIndicator,
} from "react-virtualized"

// Local Deps
import "./PlaylistGrid.scss"
import fixture from "./fixture"

interface Song {
  album: string
  artist: string
  duration: string
  key: string
  title: string
}

interface Props {
  songList: Song[]
}

interface State {
  songList: Song[]
  sortBy: string
  sortDirection: string
}

class PlaylistGrid extends React.Component<Props, State> {
  defaultProps = {
    songList: fixture,
  }

  state = {
    songList: fixture,
    sortBy: "title",
    sortDirection: "ASC",
  }

  sort = ({ sortBy, sortDirection }) => {
    const { songList } = this.state
    const sortedList = orderBy(songList, sortBy, sortDirection.toLowerCase())
    this.setState({
      songList: sortedList,
      sortBy,
      sortDirection,
    })
  }

  headerRenderer = ({ dataKey, label, sortBy, sortDirection }) => {
    const showSortIndicator = sortBy === dataKey
    return (
      <div className="sp-playlist-grid__header">
        <span title={label}>{label}</span>
        {showSortIndicator && <SortIndicator sortDirection={sortDirection} />}
      </div>
    )
  }

  cellRenderer = ({ cellData }) => {
    return <div className="sp-playlist-grid__cell">{cellData}</div>
  }

  rowGetter = ({ index }) => {
    const { songList } = this.state
    const song = songList[index]
    return song
  }

  render() {
    const { songList, sortBy, sortDirection } = this.state

    return (
      <div className="sp-playlist-grid">
        <AutoSizer>
          {({ width, height }) => (
            <Table
              className="sp-playlist-grid__table"
              height={height}
              headerHeight={60}
              sort={this.sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              rowHeight={45}
              rowCount={songList.length}
              rowGetter={this.rowGetter}
              width={width}
            >
              <Column
                headerRenderer={this.headerRenderer}
                cellRenderer={this.cellRenderer}
                label="Title"
                dataKey="title"
                width={width / 5}
              />
              <Column
                headerRenderer={this.headerRenderer}
                cellRenderer={this.cellRenderer}
                label="Artist"
                dataKey="artist"
                width={width / 5}
              />
              <Column
                headerRenderer={this.headerRenderer}
                cellRenderer={this.cellRenderer}
                label="Album"
                dataKey="album"
                width={width / 5}
              />
              <Column
                headerRenderer={this.headerRenderer}
                cellRenderer={this.cellRenderer}
                label="Duration"
                dataKey="duration"
                width={width / 5}
              />
              <Column
                headerRenderer={this.headerRenderer}
                cellRenderer={this.cellRenderer}
                label="Key"
                dataKey="key"
                width={width / 5}
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    )
  }
}

export default PlaylistGrid
