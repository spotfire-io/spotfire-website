import React from "react"
import { orderBy } from "lodash"
import { AutoSizer, Table, Column, SortIndicator } from "react-virtualized"

// Local Deps
import "./PlaylistGrid.scss"
import fixture from "./fixture"
import keys from "./keyColors"

interface Song {
  album: string
  artist: string
  duration: string
  key: string
  title: string
}

interface Props {}

interface State {
  songList: Song[]
  sortBy: string
  sortDirection: string
}

class PlaylistGrid extends React.Component<Props, State> {
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

  keyCellRenderer = ({ cellData }) => {
    return (
      <div className="sp-playlist-grid__cell--key">
        <div
          className="sp-playlist-grid__key"
          style={{ backgroundColor: keys[cellData] }}
        >
          {cellData}
        </div>
      </div>
    )
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
          {({ width, height }) => {
            const smallColumnWidth = 200
            const columnWidth = (width - 100) / 3
            return (
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
                  width={columnWidth}
                />
                <Column
                  headerRenderer={this.headerRenderer}
                  cellRenderer={this.cellRenderer}
                  label="Artist"
                  dataKey="artist"
                  width={columnWidth}
                />
                <Column
                  headerRenderer={this.headerRenderer}
                  cellRenderer={this.cellRenderer}
                  label="Album"
                  dataKey="album"
                  width={columnWidth}
                />
                <Column
                  headerRenderer={this.headerRenderer}
                  cellRenderer={this.cellRenderer}
                  label="Duration"
                  dataKey="duration"
                  width={smallColumnWidth}
                />
                <Column
                  headerRenderer={this.headerRenderer}
                  cellRenderer={this.keyCellRenderer}
                  label="Key"
                  dataKey="key"
                  width={smallColumnWidth}
                />
              </Table>
            )
          }}
        </AutoSizer>
      </div>
    )
  }
}

export default PlaylistGrid
