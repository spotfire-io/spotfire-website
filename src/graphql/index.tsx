import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Maybe<T> = T | null;
export type AggregatePlaylist = {
  count: number,
};

export type Album = {
  uri?: Maybe<string>,
  href?: Maybe<string>,
  album_type?: Maybe<AlbumType>,
  artists?: Maybe<Array<Artist>>,
  available_markets?: Maybe<Array<Market>>,
  genres?: Maybe<Array<Genre>>,
  images?: Maybe<Array<Image>>,
  label?: Maybe<string>,
  name?: Maybe<string>,
  popularity?: Maybe<number>,
  release_date?: Maybe<Date>,
  release_date_precision?: Maybe<ReleaseDatePrecision>,
  tracks?: Maybe<Array<Track>>,
  updated_at: Date,
  created_at: Date,
  id: string,
};


export type AlbumArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type AlbumAvailable_MarketsArgs = {
  where?: Maybe<MarketWhereInput>,
  orderBy?: Maybe<MarketOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type AlbumGenresArgs = {
  where?: Maybe<GenreWhereInput>,
  orderBy?: Maybe<GenreOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type AlbumImagesArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type AlbumTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type AlbumCreateManyWithoutArtistsInput = {
  create: Maybe<Array<AlbumCreateWithoutArtistsInput>>,
  connect: Maybe<Array<AlbumWhereUniqueInput>>,
};

export type AlbumCreateManyWithoutGenresInput = {
  create: Maybe<Array<AlbumCreateWithoutGenresInput>>,
  connect: Maybe<Array<AlbumWhereUniqueInput>>,
};

export type AlbumCreateOneWithoutTracksInput = {
  create: Maybe<AlbumCreateWithoutTracksInput>,
  connect: Maybe<AlbumWhereUniqueInput>,
};

export type AlbumCreateWithoutArtistsInput = {
  id: Maybe<string>,
  album_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  album_type: Maybe<AlbumType>,
  available_markets: Maybe<MarketCreateManyInput>,
  genres: Maybe<GenreCreateManyWithoutAlbumsInput>,
  images: Maybe<ImageCreateManyInput>,
  label: Maybe<string>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  release_date: Maybe<Date>,
  release_date_precision: Maybe<ReleaseDatePrecision>,
  tracks: Maybe<TrackCreateManyWithoutAlbumInput>,
  updated_at: Date,
  created_at: Date,
};

export type AlbumCreateWithoutGenresInput = {
  id: Maybe<string>,
  album_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  album_type: Maybe<AlbumType>,
  artists: Maybe<ArtistCreateManyWithoutAlbumsInput>,
  available_markets: Maybe<MarketCreateManyInput>,
  images: Maybe<ImageCreateManyInput>,
  label: Maybe<string>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  release_date: Maybe<Date>,
  release_date_precision: Maybe<ReleaseDatePrecision>,
  tracks: Maybe<TrackCreateManyWithoutAlbumInput>,
  updated_at: Date,
  created_at: Date,
};

export type AlbumCreateWithoutTracksInput = {
  id: Maybe<string>,
  album_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  album_type: Maybe<AlbumType>,
  artists: Maybe<ArtistCreateManyWithoutAlbumsInput>,
  available_markets: Maybe<MarketCreateManyInput>,
  genres: Maybe<GenreCreateManyWithoutAlbumsInput>,
  images: Maybe<ImageCreateManyInput>,
  label: Maybe<string>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  release_date: Maybe<Date>,
  release_date_precision: Maybe<ReleaseDatePrecision>,
  updated_at: Date,
  created_at: Date,
};

export enum AlbumOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Album_Id_Asc = 'album_id_ASC', 
  Album_Id_Desc = 'album_id_DESC', 
  Uri_Asc = 'uri_ASC', 
  Uri_Desc = 'uri_DESC', 
  Href_Asc = 'href_ASC', 
  Href_Desc = 'href_DESC', 
  Album_Type_Asc = 'album_type_ASC', 
  Album_Type_Desc = 'album_type_DESC', 
  Label_Asc = 'label_ASC', 
  Label_Desc = 'label_DESC', 
  Name_Asc = 'name_ASC', 
  Name_Desc = 'name_DESC', 
  Popularity_Asc = 'popularity_ASC', 
  Popularity_Desc = 'popularity_DESC', 
  Release_Date_Asc = 'release_date_ASC', 
  Release_Date_Desc = 'release_date_DESC', 
  Release_Date_Precision_Asc = 'release_date_precision_ASC', 
  Release_Date_Precision_Desc = 'release_date_precision_DESC', 
  Updated_At_Asc = 'updated_at_ASC', 
  Updated_At_Desc = 'updated_at_DESC', 
  Created_At_Asc = 'created_at_ASC', 
  Created_At_Desc = 'created_at_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export enum AlbumType {
  Album = 'ALBUM', 
  Single = 'SINGLE', 
  Compilation = 'COMPILATION'
};

export type AlbumWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  album_id: Maybe<string>,
  album_id_not: Maybe<string>,
  album_id_in: Maybe<Array<string>>,
  album_id_not_in: Maybe<Array<string>>,
  album_id_lt: Maybe<string>,
  album_id_lte: Maybe<string>,
  album_id_gt: Maybe<string>,
  album_id_gte: Maybe<string>,
  album_id_contains: Maybe<string>,
  album_id_not_contains: Maybe<string>,
  album_id_starts_with: Maybe<string>,
  album_id_not_starts_with: Maybe<string>,
  album_id_ends_with: Maybe<string>,
  album_id_not_ends_with: Maybe<string>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  href: Maybe<string>,
  href_not: Maybe<string>,
  href_in: Maybe<Array<string>>,
  href_not_in: Maybe<Array<string>>,
  href_lt: Maybe<string>,
  href_lte: Maybe<string>,
  href_gt: Maybe<string>,
  href_gte: Maybe<string>,
  href_contains: Maybe<string>,
  href_not_contains: Maybe<string>,
  href_starts_with: Maybe<string>,
  href_not_starts_with: Maybe<string>,
  href_ends_with: Maybe<string>,
  href_not_ends_with: Maybe<string>,
  album_type: Maybe<AlbumType>,
  album_type_not: Maybe<AlbumType>,
  album_type_in: Maybe<Array<AlbumType>>,
  album_type_not_in: Maybe<Array<AlbumType>>,
  artists_every: Maybe<ArtistWhereInput>,
  artists_some: Maybe<ArtistWhereInput>,
  artists_none: Maybe<ArtistWhereInput>,
  available_markets_every: Maybe<MarketWhereInput>,
  available_markets_some: Maybe<MarketWhereInput>,
  available_markets_none: Maybe<MarketWhereInput>,
  genres_every: Maybe<GenreWhereInput>,
  genres_some: Maybe<GenreWhereInput>,
  genres_none: Maybe<GenreWhereInput>,
  images_every: Maybe<ImageWhereInput>,
  images_some: Maybe<ImageWhereInput>,
  images_none: Maybe<ImageWhereInput>,
  label: Maybe<string>,
  label_not: Maybe<string>,
  label_in: Maybe<Array<string>>,
  label_not_in: Maybe<Array<string>>,
  label_lt: Maybe<string>,
  label_lte: Maybe<string>,
  label_gt: Maybe<string>,
  label_gte: Maybe<string>,
  label_contains: Maybe<string>,
  label_not_contains: Maybe<string>,
  label_starts_with: Maybe<string>,
  label_not_starts_with: Maybe<string>,
  label_ends_with: Maybe<string>,
  label_not_ends_with: Maybe<string>,
  name: Maybe<string>,
  name_not: Maybe<string>,
  name_in: Maybe<Array<string>>,
  name_not_in: Maybe<Array<string>>,
  name_lt: Maybe<string>,
  name_lte: Maybe<string>,
  name_gt: Maybe<string>,
  name_gte: Maybe<string>,
  name_contains: Maybe<string>,
  name_not_contains: Maybe<string>,
  name_starts_with: Maybe<string>,
  name_not_starts_with: Maybe<string>,
  name_ends_with: Maybe<string>,
  name_not_ends_with: Maybe<string>,
  popularity: Maybe<number>,
  popularity_not: Maybe<number>,
  popularity_in: Maybe<Array<number>>,
  popularity_not_in: Maybe<Array<number>>,
  popularity_lt: Maybe<number>,
  popularity_lte: Maybe<number>,
  popularity_gt: Maybe<number>,
  popularity_gte: Maybe<number>,
  release_date: Maybe<Date>,
  release_date_not: Maybe<Date>,
  release_date_in: Maybe<Array<Date>>,
  release_date_not_in: Maybe<Array<Date>>,
  release_date_lt: Maybe<Date>,
  release_date_lte: Maybe<Date>,
  release_date_gt: Maybe<Date>,
  release_date_gte: Maybe<Date>,
  release_date_precision: Maybe<ReleaseDatePrecision>,
  release_date_precision_not: Maybe<ReleaseDatePrecision>,
  release_date_precision_in: Maybe<Array<ReleaseDatePrecision>>,
  release_date_precision_not_in: Maybe<Array<ReleaseDatePrecision>>,
  tracks_every: Maybe<TrackWhereInput>,
  tracks_some: Maybe<TrackWhereInput>,
  tracks_none: Maybe<TrackWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<AlbumWhereInput>>,
  OR: Maybe<Array<AlbumWhereInput>>,
  NOT: Maybe<Array<AlbumWhereInput>>,
};

export type AlbumWhereUniqueInput = {
  id: Maybe<string>,
  album_id: Maybe<string>,
  uri: Maybe<string>,
  href: Maybe<string>,
};

export type Artist = {
  uri?: Maybe<string>,
  href?: Maybe<string>,
  genres?: Maybe<Array<Genre>>,
  follower_count?: Maybe<number>,
  images?: Maybe<Array<Image>>,
  name?: Maybe<string>,
  popularity?: Maybe<number>,
  albums?: Maybe<Array<Album>>,
  tracks?: Maybe<Array<Track>>,
  updated_at: Date,
  created_at: Date,
  id: string,
};


export type ArtistGenresArgs = {
  where?: Maybe<GenreWhereInput>,
  orderBy?: Maybe<GenreOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type ArtistImagesArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type ArtistAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type ArtistTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type ArtistCreateManyWithoutAlbumsInput = {
  create: Maybe<Array<ArtistCreateWithoutAlbumsInput>>,
  connect: Maybe<Array<ArtistWhereUniqueInput>>,
};

export type ArtistCreateManyWithoutGenresInput = {
  create: Maybe<Array<ArtistCreateWithoutGenresInput>>,
  connect: Maybe<Array<ArtistWhereUniqueInput>>,
};

export type ArtistCreateManyWithoutTracksInput = {
  create: Maybe<Array<ArtistCreateWithoutTracksInput>>,
  connect: Maybe<Array<ArtistWhereUniqueInput>>,
};

export type ArtistCreateWithoutAlbumsInput = {
  id: Maybe<string>,
  artist_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  genres: Maybe<GenreCreateManyWithoutArtistsInput>,
  follower_count: Maybe<number>,
  images: Maybe<ImageCreateManyInput>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  tracks: Maybe<TrackCreateManyWithoutArtistsInput>,
  updated_at: Date,
  created_at: Date,
};

export type ArtistCreateWithoutGenresInput = {
  id: Maybe<string>,
  artist_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  follower_count: Maybe<number>,
  images: Maybe<ImageCreateManyInput>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  albums: Maybe<AlbumCreateManyWithoutArtistsInput>,
  tracks: Maybe<TrackCreateManyWithoutArtistsInput>,
  updated_at: Date,
  created_at: Date,
};

export type ArtistCreateWithoutTracksInput = {
  id: Maybe<string>,
  artist_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  genres: Maybe<GenreCreateManyWithoutArtistsInput>,
  follower_count: Maybe<number>,
  images: Maybe<ImageCreateManyInput>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  albums: Maybe<AlbumCreateManyWithoutArtistsInput>,
  updated_at: Date,
  created_at: Date,
};

export enum ArtistOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Artist_Id_Asc = 'artist_id_ASC', 
  Artist_Id_Desc = 'artist_id_DESC', 
  Uri_Asc = 'uri_ASC', 
  Uri_Desc = 'uri_DESC', 
  Href_Asc = 'href_ASC', 
  Href_Desc = 'href_DESC', 
  Follower_Count_Asc = 'follower_count_ASC', 
  Follower_Count_Desc = 'follower_count_DESC', 
  Name_Asc = 'name_ASC', 
  Name_Desc = 'name_DESC', 
  Popularity_Asc = 'popularity_ASC', 
  Popularity_Desc = 'popularity_DESC', 
  Updated_At_Asc = 'updated_at_ASC', 
  Updated_At_Desc = 'updated_at_DESC', 
  Created_At_Asc = 'created_at_ASC', 
  Created_At_Desc = 'created_at_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type ArtistWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  artist_id: Maybe<string>,
  artist_id_not: Maybe<string>,
  artist_id_in: Maybe<Array<string>>,
  artist_id_not_in: Maybe<Array<string>>,
  artist_id_lt: Maybe<string>,
  artist_id_lte: Maybe<string>,
  artist_id_gt: Maybe<string>,
  artist_id_gte: Maybe<string>,
  artist_id_contains: Maybe<string>,
  artist_id_not_contains: Maybe<string>,
  artist_id_starts_with: Maybe<string>,
  artist_id_not_starts_with: Maybe<string>,
  artist_id_ends_with: Maybe<string>,
  artist_id_not_ends_with: Maybe<string>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  href: Maybe<string>,
  href_not: Maybe<string>,
  href_in: Maybe<Array<string>>,
  href_not_in: Maybe<Array<string>>,
  href_lt: Maybe<string>,
  href_lte: Maybe<string>,
  href_gt: Maybe<string>,
  href_gte: Maybe<string>,
  href_contains: Maybe<string>,
  href_not_contains: Maybe<string>,
  href_starts_with: Maybe<string>,
  href_not_starts_with: Maybe<string>,
  href_ends_with: Maybe<string>,
  href_not_ends_with: Maybe<string>,
  genres_every: Maybe<GenreWhereInput>,
  genres_some: Maybe<GenreWhereInput>,
  genres_none: Maybe<GenreWhereInput>,
  follower_count: Maybe<number>,
  follower_count_not: Maybe<number>,
  follower_count_in: Maybe<Array<number>>,
  follower_count_not_in: Maybe<Array<number>>,
  follower_count_lt: Maybe<number>,
  follower_count_lte: Maybe<number>,
  follower_count_gt: Maybe<number>,
  follower_count_gte: Maybe<number>,
  images_every: Maybe<ImageWhereInput>,
  images_some: Maybe<ImageWhereInput>,
  images_none: Maybe<ImageWhereInput>,
  name: Maybe<string>,
  name_not: Maybe<string>,
  name_in: Maybe<Array<string>>,
  name_not_in: Maybe<Array<string>>,
  name_lt: Maybe<string>,
  name_lte: Maybe<string>,
  name_gt: Maybe<string>,
  name_gte: Maybe<string>,
  name_contains: Maybe<string>,
  name_not_contains: Maybe<string>,
  name_starts_with: Maybe<string>,
  name_not_starts_with: Maybe<string>,
  name_ends_with: Maybe<string>,
  name_not_ends_with: Maybe<string>,
  popularity: Maybe<number>,
  popularity_not: Maybe<number>,
  popularity_in: Maybe<Array<number>>,
  popularity_not_in: Maybe<Array<number>>,
  popularity_lt: Maybe<number>,
  popularity_lte: Maybe<number>,
  popularity_gt: Maybe<number>,
  popularity_gte: Maybe<number>,
  albums_every: Maybe<AlbumWhereInput>,
  albums_some: Maybe<AlbumWhereInput>,
  albums_none: Maybe<AlbumWhereInput>,
  tracks_every: Maybe<TrackWhereInput>,
  tracks_some: Maybe<TrackWhereInput>,
  tracks_none: Maybe<TrackWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<ArtistWhereInput>>,
  OR: Maybe<Array<ArtistWhereInput>>,
  NOT: Maybe<Array<ArtistWhereInput>>,
};

export type ArtistWhereUniqueInput = {
  id: Maybe<string>,
  artist_id: Maybe<string>,
  uri: Maybe<string>,
  href: Maybe<string>,
};

export type AudioAnalysis = {
  id: string,
  uri: string,
  track?: Maybe<Track>,
  num_samples?: Maybe<number>,
  duration?: Maybe<number>,
  end_of_fade_in?: Maybe<number>,
  start_of_fade_out?: Maybe<number>,
  loudnes?: Maybe<number>,
  tempo?: Maybe<number>,
  tempo_confidence?: Maybe<number>,
  time_signature?: Maybe<number>,
  time_signature_confidence?: Maybe<number>,
  key?: Maybe<Key>,
  root_note_confidence?: Maybe<number>,
  mode_confidence?: Maybe<number>,
  sections?: Maybe<Array<AudioAnalysisSection>>,
};


export type AudioAnalysisSectionsArgs = {
  where?: Maybe<AudioAnalysisSectionWhereInput>,
  orderBy?: Maybe<AudioAnalysisSectionOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type AudioAnalysisCreateOneWithoutTrackInput = {
  create: Maybe<AudioAnalysisCreateWithoutTrackInput>,
  connect: Maybe<AudioAnalysisWhereUniqueInput>,
};

export type AudioAnalysisCreateWithoutTrackInput = {
  id: Maybe<string>,
  uri: string,
  num_samples: Maybe<number>,
  duration: Maybe<number>,
  end_of_fade_in: Maybe<number>,
  start_of_fade_out: Maybe<number>,
  loudnes: Maybe<number>,
  tempo: Maybe<number>,
  tempo_confidence: Maybe<number>,
  time_signature: Maybe<number>,
  time_signature_confidence: Maybe<number>,
  key: Maybe<KeyCreateOneInput>,
  root_note_confidence: Maybe<number>,
  mode_confidence: Maybe<number>,
  sections: Maybe<AudioAnalysisSectionCreateManyWithoutAnalysisInput>,
};

export type AudioAnalysisSection = {
  id: string,
  analysis?: Maybe<AudioAnalysis>,
  start?: Maybe<number>,
  duration?: Maybe<number>,
  confidence?: Maybe<number>,
  loudness?: Maybe<number>,
  tempo?: Maybe<number>,
  tempo_confidence?: Maybe<number>,
  key?: Maybe<Key>,
  root_note_confidence?: Maybe<number>,
  mode_confidence?: Maybe<number>,
  time_signature?: Maybe<number>,
  time_signature_confidence?: Maybe<number>,
};

export type AudioAnalysisSectionCreateManyWithoutAnalysisInput = {
  create: Maybe<Array<AudioAnalysisSectionCreateWithoutAnalysisInput>>,
  connect: Maybe<Array<AudioAnalysisSectionWhereUniqueInput>>,
};

export type AudioAnalysisSectionCreateWithoutAnalysisInput = {
  id: Maybe<string>,
  start: Maybe<number>,
  duration: Maybe<number>,
  confidence: Maybe<number>,
  loudness: Maybe<number>,
  tempo: Maybe<number>,
  tempo_confidence: Maybe<number>,
  key: Maybe<KeyCreateOneInput>,
  root_note_confidence: Maybe<number>,
  mode_confidence: Maybe<number>,
  time_signature: Maybe<number>,
  time_signature_confidence: Maybe<number>,
};

export enum AudioAnalysisSectionOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Start_Asc = 'start_ASC', 
  Start_Desc = 'start_DESC', 
  Duration_Asc = 'duration_ASC', 
  Duration_Desc = 'duration_DESC', 
  Confidence_Asc = 'confidence_ASC', 
  Confidence_Desc = 'confidence_DESC', 
  Loudness_Asc = 'loudness_ASC', 
  Loudness_Desc = 'loudness_DESC', 
  Tempo_Asc = 'tempo_ASC', 
  Tempo_Desc = 'tempo_DESC', 
  Tempo_Confidence_Asc = 'tempo_confidence_ASC', 
  Tempo_Confidence_Desc = 'tempo_confidence_DESC', 
  Root_Note_Confidence_Asc = 'root_note_confidence_ASC', 
  Root_Note_Confidence_Desc = 'root_note_confidence_DESC', 
  Mode_Confidence_Asc = 'mode_confidence_ASC', 
  Mode_Confidence_Desc = 'mode_confidence_DESC', 
  Time_Signature_Asc = 'time_signature_ASC', 
  Time_Signature_Desc = 'time_signature_DESC', 
  Time_Signature_Confidence_Asc = 'time_signature_confidence_ASC', 
  Time_Signature_Confidence_Desc = 'time_signature_confidence_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type AudioAnalysisSectionWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  analysis: Maybe<AudioAnalysisWhereInput>,
  start: Maybe<number>,
  start_not: Maybe<number>,
  start_in: Maybe<Array<number>>,
  start_not_in: Maybe<Array<number>>,
  start_lt: Maybe<number>,
  start_lte: Maybe<number>,
  start_gt: Maybe<number>,
  start_gte: Maybe<number>,
  duration: Maybe<number>,
  duration_not: Maybe<number>,
  duration_in: Maybe<Array<number>>,
  duration_not_in: Maybe<Array<number>>,
  duration_lt: Maybe<number>,
  duration_lte: Maybe<number>,
  duration_gt: Maybe<number>,
  duration_gte: Maybe<number>,
  confidence: Maybe<number>,
  confidence_not: Maybe<number>,
  confidence_in: Maybe<Array<number>>,
  confidence_not_in: Maybe<Array<number>>,
  confidence_lt: Maybe<number>,
  confidence_lte: Maybe<number>,
  confidence_gt: Maybe<number>,
  confidence_gte: Maybe<number>,
  loudness: Maybe<number>,
  loudness_not: Maybe<number>,
  loudness_in: Maybe<Array<number>>,
  loudness_not_in: Maybe<Array<number>>,
  loudness_lt: Maybe<number>,
  loudness_lte: Maybe<number>,
  loudness_gt: Maybe<number>,
  loudness_gte: Maybe<number>,
  tempo: Maybe<number>,
  tempo_not: Maybe<number>,
  tempo_in: Maybe<Array<number>>,
  tempo_not_in: Maybe<Array<number>>,
  tempo_lt: Maybe<number>,
  tempo_lte: Maybe<number>,
  tempo_gt: Maybe<number>,
  tempo_gte: Maybe<number>,
  tempo_confidence: Maybe<number>,
  tempo_confidence_not: Maybe<number>,
  tempo_confidence_in: Maybe<Array<number>>,
  tempo_confidence_not_in: Maybe<Array<number>>,
  tempo_confidence_lt: Maybe<number>,
  tempo_confidence_lte: Maybe<number>,
  tempo_confidence_gt: Maybe<number>,
  tempo_confidence_gte: Maybe<number>,
  key: Maybe<KeyWhereInput>,
  root_note_confidence: Maybe<number>,
  root_note_confidence_not: Maybe<number>,
  root_note_confidence_in: Maybe<Array<number>>,
  root_note_confidence_not_in: Maybe<Array<number>>,
  root_note_confidence_lt: Maybe<number>,
  root_note_confidence_lte: Maybe<number>,
  root_note_confidence_gt: Maybe<number>,
  root_note_confidence_gte: Maybe<number>,
  mode_confidence: Maybe<number>,
  mode_confidence_not: Maybe<number>,
  mode_confidence_in: Maybe<Array<number>>,
  mode_confidence_not_in: Maybe<Array<number>>,
  mode_confidence_lt: Maybe<number>,
  mode_confidence_lte: Maybe<number>,
  mode_confidence_gt: Maybe<number>,
  mode_confidence_gte: Maybe<number>,
  time_signature: Maybe<number>,
  time_signature_not: Maybe<number>,
  time_signature_in: Maybe<Array<number>>,
  time_signature_not_in: Maybe<Array<number>>,
  time_signature_lt: Maybe<number>,
  time_signature_lte: Maybe<number>,
  time_signature_gt: Maybe<number>,
  time_signature_gte: Maybe<number>,
  time_signature_confidence: Maybe<number>,
  time_signature_confidence_not: Maybe<number>,
  time_signature_confidence_in: Maybe<Array<number>>,
  time_signature_confidence_not_in: Maybe<Array<number>>,
  time_signature_confidence_lt: Maybe<number>,
  time_signature_confidence_lte: Maybe<number>,
  time_signature_confidence_gt: Maybe<number>,
  time_signature_confidence_gte: Maybe<number>,
  AND: Maybe<Array<AudioAnalysisSectionWhereInput>>,
  OR: Maybe<Array<AudioAnalysisSectionWhereInput>>,
  NOT: Maybe<Array<AudioAnalysisSectionWhereInput>>,
};

export type AudioAnalysisSectionWhereUniqueInput = {
  id: Maybe<string>,
};

export type AudioAnalysisWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  track: Maybe<TrackWhereInput>,
  num_samples: Maybe<number>,
  num_samples_not: Maybe<number>,
  num_samples_in: Maybe<Array<number>>,
  num_samples_not_in: Maybe<Array<number>>,
  num_samples_lt: Maybe<number>,
  num_samples_lte: Maybe<number>,
  num_samples_gt: Maybe<number>,
  num_samples_gte: Maybe<number>,
  duration: Maybe<number>,
  duration_not: Maybe<number>,
  duration_in: Maybe<Array<number>>,
  duration_not_in: Maybe<Array<number>>,
  duration_lt: Maybe<number>,
  duration_lte: Maybe<number>,
  duration_gt: Maybe<number>,
  duration_gte: Maybe<number>,
  end_of_fade_in: Maybe<number>,
  end_of_fade_in_not: Maybe<number>,
  end_of_fade_in_in: Maybe<Array<number>>,
  end_of_fade_in_not_in: Maybe<Array<number>>,
  end_of_fade_in_lt: Maybe<number>,
  end_of_fade_in_lte: Maybe<number>,
  end_of_fade_in_gt: Maybe<number>,
  end_of_fade_in_gte: Maybe<number>,
  start_of_fade_out: Maybe<number>,
  start_of_fade_out_not: Maybe<number>,
  start_of_fade_out_in: Maybe<Array<number>>,
  start_of_fade_out_not_in: Maybe<Array<number>>,
  start_of_fade_out_lt: Maybe<number>,
  start_of_fade_out_lte: Maybe<number>,
  start_of_fade_out_gt: Maybe<number>,
  start_of_fade_out_gte: Maybe<number>,
  loudnes: Maybe<number>,
  loudnes_not: Maybe<number>,
  loudnes_in: Maybe<Array<number>>,
  loudnes_not_in: Maybe<Array<number>>,
  loudnes_lt: Maybe<number>,
  loudnes_lte: Maybe<number>,
  loudnes_gt: Maybe<number>,
  loudnes_gte: Maybe<number>,
  tempo: Maybe<number>,
  tempo_not: Maybe<number>,
  tempo_in: Maybe<Array<number>>,
  tempo_not_in: Maybe<Array<number>>,
  tempo_lt: Maybe<number>,
  tempo_lte: Maybe<number>,
  tempo_gt: Maybe<number>,
  tempo_gte: Maybe<number>,
  tempo_confidence: Maybe<number>,
  tempo_confidence_not: Maybe<number>,
  tempo_confidence_in: Maybe<Array<number>>,
  tempo_confidence_not_in: Maybe<Array<number>>,
  tempo_confidence_lt: Maybe<number>,
  tempo_confidence_lte: Maybe<number>,
  tempo_confidence_gt: Maybe<number>,
  tempo_confidence_gte: Maybe<number>,
  time_signature: Maybe<number>,
  time_signature_not: Maybe<number>,
  time_signature_in: Maybe<Array<number>>,
  time_signature_not_in: Maybe<Array<number>>,
  time_signature_lt: Maybe<number>,
  time_signature_lte: Maybe<number>,
  time_signature_gt: Maybe<number>,
  time_signature_gte: Maybe<number>,
  time_signature_confidence: Maybe<number>,
  time_signature_confidence_not: Maybe<number>,
  time_signature_confidence_in: Maybe<Array<number>>,
  time_signature_confidence_not_in: Maybe<Array<number>>,
  time_signature_confidence_lt: Maybe<number>,
  time_signature_confidence_lte: Maybe<number>,
  time_signature_confidence_gt: Maybe<number>,
  time_signature_confidence_gte: Maybe<number>,
  key: Maybe<KeyWhereInput>,
  root_note_confidence: Maybe<number>,
  root_note_confidence_not: Maybe<number>,
  root_note_confidence_in: Maybe<Array<number>>,
  root_note_confidence_not_in: Maybe<Array<number>>,
  root_note_confidence_lt: Maybe<number>,
  root_note_confidence_lte: Maybe<number>,
  root_note_confidence_gt: Maybe<number>,
  root_note_confidence_gte: Maybe<number>,
  mode_confidence: Maybe<number>,
  mode_confidence_not: Maybe<number>,
  mode_confidence_in: Maybe<Array<number>>,
  mode_confidence_not_in: Maybe<Array<number>>,
  mode_confidence_lt: Maybe<number>,
  mode_confidence_lte: Maybe<number>,
  mode_confidence_gt: Maybe<number>,
  mode_confidence_gte: Maybe<number>,
  sections_every: Maybe<AudioAnalysisSectionWhereInput>,
  sections_some: Maybe<AudioAnalysisSectionWhereInput>,
  sections_none: Maybe<AudioAnalysisSectionWhereInput>,
  AND: Maybe<Array<AudioAnalysisWhereInput>>,
  OR: Maybe<Array<AudioAnalysisWhereInput>>,
  NOT: Maybe<Array<AudioAnalysisWhereInput>>,
};

export type AudioAnalysisWhereUniqueInput = {
  id: Maybe<string>,
  uri: Maybe<string>,
};

export type AudioFeatures = {
  id: string,
  uri: string,
  track?: Maybe<Track>,
  danceability?: Maybe<number>,
  energy?: Maybe<number>,
  key?: Maybe<Key>,
  loudness?: Maybe<number>,
  speechiness?: Maybe<number>,
  acousticness?: Maybe<number>,
  instrumentalness?: Maybe<number>,
  liveness?: Maybe<number>,
  valence?: Maybe<number>,
  tempo?: Maybe<number>,
  duration_ms?: Maybe<number>,
  time_signature?: Maybe<number>,
  updated_at: Date,
  created_at: Date,
};

export type AudioFeaturesCreateOneWithoutTrackInput = {
  create: Maybe<AudioFeaturesCreateWithoutTrackInput>,
  connect: Maybe<AudioFeaturesWhereUniqueInput>,
};

export type AudioFeaturesCreateWithoutTrackInput = {
  id: Maybe<string>,
  uri: string,
  danceability: Maybe<number>,
  energy: Maybe<number>,
  key: Maybe<KeyCreateOneInput>,
  loudness: Maybe<number>,
  speechiness: Maybe<number>,
  acousticness: Maybe<number>,
  instrumentalness: Maybe<number>,
  liveness: Maybe<number>,
  valence: Maybe<number>,
  tempo: Maybe<number>,
  duration_ms: Maybe<number>,
  time_signature: Maybe<number>,
  updated_at: Date,
  created_at: Date,
};

export type AudioFeaturesWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  track: Maybe<TrackWhereInput>,
  danceability: Maybe<number>,
  danceability_not: Maybe<number>,
  danceability_in: Maybe<Array<number>>,
  danceability_not_in: Maybe<Array<number>>,
  danceability_lt: Maybe<number>,
  danceability_lte: Maybe<number>,
  danceability_gt: Maybe<number>,
  danceability_gte: Maybe<number>,
  energy: Maybe<number>,
  energy_not: Maybe<number>,
  energy_in: Maybe<Array<number>>,
  energy_not_in: Maybe<Array<number>>,
  energy_lt: Maybe<number>,
  energy_lte: Maybe<number>,
  energy_gt: Maybe<number>,
  energy_gte: Maybe<number>,
  key: Maybe<KeyWhereInput>,
  loudness: Maybe<number>,
  loudness_not: Maybe<number>,
  loudness_in: Maybe<Array<number>>,
  loudness_not_in: Maybe<Array<number>>,
  loudness_lt: Maybe<number>,
  loudness_lte: Maybe<number>,
  loudness_gt: Maybe<number>,
  loudness_gte: Maybe<number>,
  speechiness: Maybe<number>,
  speechiness_not: Maybe<number>,
  speechiness_in: Maybe<Array<number>>,
  speechiness_not_in: Maybe<Array<number>>,
  speechiness_lt: Maybe<number>,
  speechiness_lte: Maybe<number>,
  speechiness_gt: Maybe<number>,
  speechiness_gte: Maybe<number>,
  acousticness: Maybe<number>,
  acousticness_not: Maybe<number>,
  acousticness_in: Maybe<Array<number>>,
  acousticness_not_in: Maybe<Array<number>>,
  acousticness_lt: Maybe<number>,
  acousticness_lte: Maybe<number>,
  acousticness_gt: Maybe<number>,
  acousticness_gte: Maybe<number>,
  instrumentalness: Maybe<number>,
  instrumentalness_not: Maybe<number>,
  instrumentalness_in: Maybe<Array<number>>,
  instrumentalness_not_in: Maybe<Array<number>>,
  instrumentalness_lt: Maybe<number>,
  instrumentalness_lte: Maybe<number>,
  instrumentalness_gt: Maybe<number>,
  instrumentalness_gte: Maybe<number>,
  liveness: Maybe<number>,
  liveness_not: Maybe<number>,
  liveness_in: Maybe<Array<number>>,
  liveness_not_in: Maybe<Array<number>>,
  liveness_lt: Maybe<number>,
  liveness_lte: Maybe<number>,
  liveness_gt: Maybe<number>,
  liveness_gte: Maybe<number>,
  valence: Maybe<number>,
  valence_not: Maybe<number>,
  valence_in: Maybe<Array<number>>,
  valence_not_in: Maybe<Array<number>>,
  valence_lt: Maybe<number>,
  valence_lte: Maybe<number>,
  valence_gt: Maybe<number>,
  valence_gte: Maybe<number>,
  tempo: Maybe<number>,
  tempo_not: Maybe<number>,
  tempo_in: Maybe<Array<number>>,
  tempo_not_in: Maybe<Array<number>>,
  tempo_lt: Maybe<number>,
  tempo_lte: Maybe<number>,
  tempo_gt: Maybe<number>,
  tempo_gte: Maybe<number>,
  duration_ms: Maybe<number>,
  duration_ms_not: Maybe<number>,
  duration_ms_in: Maybe<Array<number>>,
  duration_ms_not_in: Maybe<Array<number>>,
  duration_ms_lt: Maybe<number>,
  duration_ms_lte: Maybe<number>,
  duration_ms_gt: Maybe<number>,
  duration_ms_gte: Maybe<number>,
  time_signature: Maybe<number>,
  time_signature_not: Maybe<number>,
  time_signature_in: Maybe<Array<number>>,
  time_signature_not_in: Maybe<Array<number>>,
  time_signature_lt: Maybe<number>,
  time_signature_lte: Maybe<number>,
  time_signature_gt: Maybe<number>,
  time_signature_gte: Maybe<number>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<AudioFeaturesWhereInput>>,
  OR: Maybe<Array<AudioFeaturesWhereInput>>,
  NOT: Maybe<Array<AudioFeaturesWhereInput>>,
};

export type AudioFeaturesWhereUniqueInput = {
  id: Maybe<string>,
  uri: Maybe<string>,
};

export type DateTime = Date;

export type Genre = {
  id: string,
  name: string,
  artists?: Maybe<Array<Artist>>,
  albums?: Maybe<Array<Album>>,
  tracks?: Maybe<Array<Track>>,
};


export type GenreArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type GenreAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type GenreTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type GenreCreateManyWithoutAlbumsInput = {
  create: Maybe<Array<GenreCreateWithoutAlbumsInput>>,
  connect: Maybe<Array<GenreWhereUniqueInput>>,
};

export type GenreCreateManyWithoutArtistsInput = {
  create: Maybe<Array<GenreCreateWithoutArtistsInput>>,
  connect: Maybe<Array<GenreWhereUniqueInput>>,
};

export type GenreCreateWithoutAlbumsInput = {
  id: Maybe<string>,
  name: string,
  artists: Maybe<ArtistCreateManyWithoutGenresInput>,
  tracks: Maybe<TrackCreateManyInput>,
};

export type GenreCreateWithoutArtistsInput = {
  id: Maybe<string>,
  name: string,
  albums: Maybe<AlbumCreateManyWithoutGenresInput>,
  tracks: Maybe<TrackCreateManyInput>,
};

export enum GenreOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Name_Asc = 'name_ASC', 
  Name_Desc = 'name_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type GenreWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  name: Maybe<string>,
  name_not: Maybe<string>,
  name_in: Maybe<Array<string>>,
  name_not_in: Maybe<Array<string>>,
  name_lt: Maybe<string>,
  name_lte: Maybe<string>,
  name_gt: Maybe<string>,
  name_gte: Maybe<string>,
  name_contains: Maybe<string>,
  name_not_contains: Maybe<string>,
  name_starts_with: Maybe<string>,
  name_not_starts_with: Maybe<string>,
  name_ends_with: Maybe<string>,
  name_not_ends_with: Maybe<string>,
  artists_every: Maybe<ArtistWhereInput>,
  artists_some: Maybe<ArtistWhereInput>,
  artists_none: Maybe<ArtistWhereInput>,
  albums_every: Maybe<AlbumWhereInput>,
  albums_some: Maybe<AlbumWhereInput>,
  albums_none: Maybe<AlbumWhereInput>,
  tracks_every: Maybe<TrackWhereInput>,
  tracks_some: Maybe<TrackWhereInput>,
  tracks_none: Maybe<TrackWhereInput>,
  AND: Maybe<Array<GenreWhereInput>>,
  OR: Maybe<Array<GenreWhereInput>>,
  NOT: Maybe<Array<GenreWhereInput>>,
};

export type GenreWhereUniqueInput = {
  id: Maybe<string>,
  name: Maybe<string>,
};

export type Image = {
  url?: Maybe<string>,
  height?: Maybe<number>,
  width?: Maybe<number>,
};

export type ImageCreateInput = {
  id: Maybe<string>,
  url: Maybe<string>,
  height: Maybe<number>,
  width: Maybe<number>,
};

export type ImageCreateManyInput = {
  create: Maybe<Array<ImageCreateInput>>,
  connect: Maybe<Array<ImageWhereUniqueInput>>,
};

export enum ImageOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Url_Asc = 'url_ASC', 
  Url_Desc = 'url_DESC', 
  Height_Asc = 'height_ASC', 
  Height_Desc = 'height_DESC', 
  Width_Asc = 'width_ASC', 
  Width_Desc = 'width_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type ImageWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  url: Maybe<string>,
  url_not: Maybe<string>,
  url_in: Maybe<Array<string>>,
  url_not_in: Maybe<Array<string>>,
  url_lt: Maybe<string>,
  url_lte: Maybe<string>,
  url_gt: Maybe<string>,
  url_gte: Maybe<string>,
  url_contains: Maybe<string>,
  url_not_contains: Maybe<string>,
  url_starts_with: Maybe<string>,
  url_not_starts_with: Maybe<string>,
  url_ends_with: Maybe<string>,
  url_not_ends_with: Maybe<string>,
  height: Maybe<number>,
  height_not: Maybe<number>,
  height_in: Maybe<Array<number>>,
  height_not_in: Maybe<Array<number>>,
  height_lt: Maybe<number>,
  height_lte: Maybe<number>,
  height_gt: Maybe<number>,
  height_gte: Maybe<number>,
  width: Maybe<number>,
  width_not: Maybe<number>,
  width_in: Maybe<Array<number>>,
  width_not_in: Maybe<Array<number>>,
  width_lt: Maybe<number>,
  width_lte: Maybe<number>,
  width_gt: Maybe<number>,
  width_gte: Maybe<number>,
  AND: Maybe<Array<ImageWhereInput>>,
  OR: Maybe<Array<ImageWhereInput>>,
  NOT: Maybe<Array<ImageWhereInput>>,
};

export type ImageWhereUniqueInput = {
  id: Maybe<string>,
  url: Maybe<string>,
};

export type Key = {
  id: string,
  label: string,
  camelot_code: string,
  root_note: Note,
  mode: Mode,
  camelot_position: number,
};

export type KeyCreateInput = {
  id: Maybe<string>,
  label: string,
  camelot_code: string,
  root_note: NoteCreateOneInput,
  mode: Mode,
  camelot_position: number,
};

export type KeyCreateOneInput = {
  create: Maybe<KeyCreateInput>,
  connect: Maybe<KeyWhereUniqueInput>,
};

export enum KeyOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Label_Asc = 'label_ASC', 
  Label_Desc = 'label_DESC', 
  Camelot_Code_Asc = 'camelot_code_ASC', 
  Camelot_Code_Desc = 'camelot_code_DESC', 
  Mode_Asc = 'mode_ASC', 
  Mode_Desc = 'mode_DESC', 
  Camelot_Position_Asc = 'camelot_position_ASC', 
  Camelot_Position_Desc = 'camelot_position_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type KeyWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  label: Maybe<string>,
  label_not: Maybe<string>,
  label_in: Maybe<Array<string>>,
  label_not_in: Maybe<Array<string>>,
  label_lt: Maybe<string>,
  label_lte: Maybe<string>,
  label_gt: Maybe<string>,
  label_gte: Maybe<string>,
  label_contains: Maybe<string>,
  label_not_contains: Maybe<string>,
  label_starts_with: Maybe<string>,
  label_not_starts_with: Maybe<string>,
  label_ends_with: Maybe<string>,
  label_not_ends_with: Maybe<string>,
  camelot_code: Maybe<string>,
  camelot_code_not: Maybe<string>,
  camelot_code_in: Maybe<Array<string>>,
  camelot_code_not_in: Maybe<Array<string>>,
  camelot_code_lt: Maybe<string>,
  camelot_code_lte: Maybe<string>,
  camelot_code_gt: Maybe<string>,
  camelot_code_gte: Maybe<string>,
  camelot_code_contains: Maybe<string>,
  camelot_code_not_contains: Maybe<string>,
  camelot_code_starts_with: Maybe<string>,
  camelot_code_not_starts_with: Maybe<string>,
  camelot_code_ends_with: Maybe<string>,
  camelot_code_not_ends_with: Maybe<string>,
  root_note: Maybe<NoteWhereInput>,
  mode: Maybe<Mode>,
  mode_not: Maybe<Mode>,
  mode_in: Maybe<Array<Mode>>,
  mode_not_in: Maybe<Array<Mode>>,
  camelot_position: Maybe<number>,
  camelot_position_not: Maybe<number>,
  camelot_position_in: Maybe<Array<number>>,
  camelot_position_not_in: Maybe<Array<number>>,
  camelot_position_lt: Maybe<number>,
  camelot_position_lte: Maybe<number>,
  camelot_position_gt: Maybe<number>,
  camelot_position_gte: Maybe<number>,
  AND: Maybe<Array<KeyWhereInput>>,
  OR: Maybe<Array<KeyWhereInput>>,
  NOT: Maybe<Array<KeyWhereInput>>,
};

export type KeyWhereUniqueInput = {
  id: Maybe<string>,
  label: Maybe<string>,
  camelot_code: Maybe<string>,
};

export type Market = {
  id: string,
  country_code: string,
};

export type MarketCreateInput = {
  id: Maybe<string>,
  country_code: string,
};

export type MarketCreateManyInput = {
  create: Maybe<Array<MarketCreateInput>>,
  connect: Maybe<Array<MarketWhereUniqueInput>>,
};

export enum MarketOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Country_Code_Asc = 'country_code_ASC', 
  Country_Code_Desc = 'country_code_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type MarketWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  country_code: Maybe<string>,
  country_code_not: Maybe<string>,
  country_code_in: Maybe<Array<string>>,
  country_code_not_in: Maybe<Array<string>>,
  country_code_lt: Maybe<string>,
  country_code_lte: Maybe<string>,
  country_code_gt: Maybe<string>,
  country_code_gte: Maybe<string>,
  country_code_contains: Maybe<string>,
  country_code_not_contains: Maybe<string>,
  country_code_starts_with: Maybe<string>,
  country_code_not_starts_with: Maybe<string>,
  country_code_ends_with: Maybe<string>,
  country_code_not_ends_with: Maybe<string>,
  AND: Maybe<Array<MarketWhereInput>>,
  OR: Maybe<Array<MarketWhereInput>>,
  NOT: Maybe<Array<MarketWhereInput>>,
};

export type MarketWhereUniqueInput = {
  id: Maybe<string>,
  country_code: Maybe<string>,
};

export enum Mode {
  Major = 'MAJOR', 
  Minor = 'MINOR'
};

export type Mutation = {
  createSolverStatusUpdate: SolverStatusUpdate,
  loadPlaylistTracks: Playlist,
  completePlaylistOptimization: Playlist,
  startPlaylistOptimization: OptimizationJob,
};


export type MutationCreateSolverStatusUpdateArgs = {
  data: SolverStatusUpdateCreateInput
};


export type MutationLoadPlaylistTracksArgs = {
  playlist_id: string,
  snapshot_id?: Maybe<string>
};


export type MutationCompletePlaylistOptimizationArgs = {
  jobId: string,
  trackIds: Array<string>
};


export type MutationStartPlaylistOptimizationArgs = {
  playlist_id: string,
  snapshot_id: string,
  playlist_name?: Maybe<string>
};

export enum MutationType {
  Created = 'CREATED', 
  Updated = 'UPDATED', 
  Deleted = 'DELETED'
};

export type Note = {
  id: string,
  label: string,
  index: number,
};

export type NoteCreateInput = {
  id: Maybe<string>,
  label: string,
  index: number,
};

export type NoteCreateOneInput = {
  create: Maybe<NoteCreateInput>,
  connect: Maybe<NoteWhereUniqueInput>,
};

export type NoteWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  label: Maybe<string>,
  label_not: Maybe<string>,
  label_in: Maybe<Array<string>>,
  label_not_in: Maybe<Array<string>>,
  label_lt: Maybe<string>,
  label_lte: Maybe<string>,
  label_gt: Maybe<string>,
  label_gte: Maybe<string>,
  label_contains: Maybe<string>,
  label_not_contains: Maybe<string>,
  label_starts_with: Maybe<string>,
  label_not_starts_with: Maybe<string>,
  label_ends_with: Maybe<string>,
  label_not_ends_with: Maybe<string>,
  index: Maybe<number>,
  index_not: Maybe<number>,
  index_in: Maybe<Array<number>>,
  index_not_in: Maybe<Array<number>>,
  index_lt: Maybe<number>,
  index_lte: Maybe<number>,
  index_gt: Maybe<number>,
  index_gte: Maybe<number>,
  AND: Maybe<Array<NoteWhereInput>>,
  OR: Maybe<Array<NoteWhereInput>>,
  NOT: Maybe<Array<NoteWhereInput>>,
};

export type NoteWhereUniqueInput = {
  id: Maybe<string>,
  label: Maybe<string>,
  index: Maybe<number>,
};

export type OptimizationJob = {
  id: string,
  original_playlist_snapshot: PlaylistSnapshot,
  new_playlist_snapshot?: Maybe<PlaylistSnapshot>,
  status: OptimizationJobStatus,
  playlist_name: string,
  extract_path?: Maybe<string>,
  start: Date,
  end?: Maybe<Date>,
  latest_status_update?: Maybe<SolverStatusUpdate>,
};

export type OptimizationJobCreateInput = {
  id: Maybe<string>,
  original_playlist_snapshot: PlaylistSnapshotCreateOneInput,
  new_playlist_snapshot: Maybe<PlaylistSnapshotCreateOneInput>,
  status: Maybe<OptimizationJobStatus>,
  playlist_name: string,
  extract_path: Maybe<string>,
  start: Date,
  end: Maybe<Date>,
};

export type OptimizationJobCreateOneInput = {
  create: Maybe<OptimizationJobCreateInput>,
  connect: Maybe<OptimizationJobWhereUniqueInput>,
};

export enum OptimizationJobOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Status_Asc = 'status_ASC', 
  Status_Desc = 'status_DESC', 
  Playlist_Name_Asc = 'playlist_name_ASC', 
  Playlist_Name_Desc = 'playlist_name_DESC', 
  Extract_Path_Asc = 'extract_path_ASC', 
  Extract_Path_Desc = 'extract_path_DESC', 
  Start_Asc = 'start_ASC', 
  Start_Desc = 'start_DESC', 
  End_Asc = 'end_ASC', 
  End_Desc = 'end_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export enum OptimizationJobStatus {
  Tracks_Loaded = 'TRACKS_LOADED', 
  Extract_Uploaded = 'EXTRACT_UPLOADED', 
  Optimized = 'OPTIMIZED', 
  Saved = 'SAVED'
};

export type OptimizationJobWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  original_playlist_snapshot: Maybe<PlaylistSnapshotWhereInput>,
  new_playlist_snapshot: Maybe<PlaylistSnapshotWhereInput>,
  status: Maybe<OptimizationJobStatus>,
  status_not: Maybe<OptimizationJobStatus>,
  status_in: Maybe<Array<OptimizationJobStatus>>,
  status_not_in: Maybe<Array<OptimizationJobStatus>>,
  playlist_name: Maybe<string>,
  playlist_name_not: Maybe<string>,
  playlist_name_in: Maybe<Array<string>>,
  playlist_name_not_in: Maybe<Array<string>>,
  playlist_name_lt: Maybe<string>,
  playlist_name_lte: Maybe<string>,
  playlist_name_gt: Maybe<string>,
  playlist_name_gte: Maybe<string>,
  playlist_name_contains: Maybe<string>,
  playlist_name_not_contains: Maybe<string>,
  playlist_name_starts_with: Maybe<string>,
  playlist_name_not_starts_with: Maybe<string>,
  playlist_name_ends_with: Maybe<string>,
  playlist_name_not_ends_with: Maybe<string>,
  extract_path: Maybe<string>,
  extract_path_not: Maybe<string>,
  extract_path_in: Maybe<Array<string>>,
  extract_path_not_in: Maybe<Array<string>>,
  extract_path_lt: Maybe<string>,
  extract_path_lte: Maybe<string>,
  extract_path_gt: Maybe<string>,
  extract_path_gte: Maybe<string>,
  extract_path_contains: Maybe<string>,
  extract_path_not_contains: Maybe<string>,
  extract_path_starts_with: Maybe<string>,
  extract_path_not_starts_with: Maybe<string>,
  extract_path_ends_with: Maybe<string>,
  extract_path_not_ends_with: Maybe<string>,
  start: Maybe<Date>,
  start_not: Maybe<Date>,
  start_in: Maybe<Array<Date>>,
  start_not_in: Maybe<Array<Date>>,
  start_lt: Maybe<Date>,
  start_lte: Maybe<Date>,
  start_gt: Maybe<Date>,
  start_gte: Maybe<Date>,
  end: Maybe<Date>,
  end_not: Maybe<Date>,
  end_in: Maybe<Array<Date>>,
  end_not_in: Maybe<Array<Date>>,
  end_lt: Maybe<Date>,
  end_lte: Maybe<Date>,
  end_gt: Maybe<Date>,
  end_gte: Maybe<Date>,
  AND: Maybe<Array<OptimizationJobWhereInput>>,
  OR: Maybe<Array<OptimizationJobWhereInput>>,
  NOT: Maybe<Array<OptimizationJobWhereInput>>,
};

export type OptimizationJobWhereUniqueInput = {
  id: Maybe<string>,
};

export type PageInfo = {
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  startCursor?: Maybe<string>,
  endCursor?: Maybe<string>,
};

export type Playlist = {
  id: string,
  latest_snapshot_id: string,
  description?: Maybe<string>,
  href?: Maybe<string>,
  name?: Maybe<string>,
  owner: User,
  uri?: Maybe<string>,
  public?: Maybe<boolean>,
  collaborative?: Maybe<boolean>,
  images: Array<Image>,
  snapshots?: Maybe<Array<PlaylistSnapshot>>,
  updated_at?: Maybe<string>,
  created_at?: Maybe<string>,
  latest_snapshot?: Maybe<PlaylistSnapshot>,
  image?: Maybe<Image>,
};


export type PlaylistSnapshotsArgs = {
  where?: Maybe<PlaylistSnapshotWhereInput>,
  orderBy?: Maybe<PlaylistSnapshotOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type PlaylistImageArgs = {
  size: number
};

export type PlaylistConnection = {
  pageInfo: PageInfo,
  edges: Array<PlaylistEdge>,
  aggregate: AggregatePlaylist,
};

export type PlaylistCreateOneWithoutSnapshotsInput = {
  create: Maybe<PlaylistCreateWithoutSnapshotsInput>,
  connect: Maybe<PlaylistWhereUniqueInput>,
};

export type PlaylistCreateWithoutSnapshotsInput = {
  id: Maybe<string>,
  playlist_id: string,
  latest_snapshot_id: string,
  description: Maybe<string>,
  href: Maybe<string>,
  name: Maybe<string>,
  owner: Maybe<UserCreateOneInput>,
  uri: Maybe<string>,
  public: Maybe<boolean>,
  collaborative: Maybe<boolean>,
  images: Maybe<ImageCreateManyInput>,
  updated_at: Date,
  created_at: Date,
};

export type PlaylistEdge = {
  node: Playlist,
  cursor: string,
};

export enum PlaylistOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Playlist_Id_Asc = 'playlist_id_ASC', 
  Playlist_Id_Desc = 'playlist_id_DESC', 
  Latest_Snapshot_Id_Asc = 'latest_snapshot_id_ASC', 
  Latest_Snapshot_Id_Desc = 'latest_snapshot_id_DESC', 
  Description_Asc = 'description_ASC', 
  Description_Desc = 'description_DESC', 
  Href_Asc = 'href_ASC', 
  Href_Desc = 'href_DESC', 
  Name_Asc = 'name_ASC', 
  Name_Desc = 'name_DESC', 
  Uri_Asc = 'uri_ASC', 
  Uri_Desc = 'uri_DESC', 
  Public_Asc = 'public_ASC', 
  Public_Desc = 'public_DESC', 
  Collaborative_Asc = 'collaborative_ASC', 
  Collaborative_Desc = 'collaborative_DESC', 
  Updated_At_Asc = 'updated_at_ASC', 
  Updated_At_Desc = 'updated_at_DESC', 
  Created_At_Asc = 'created_at_ASC', 
  Created_At_Desc = 'created_at_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type PlaylistSnapshot = {
  playlist?: Maybe<Playlist>,
  status: PlaylistSnapshotStatus,
  track_count: number,
  loaded_tracks: number,
  playlist_tracks?: Maybe<Array<PlaylistTrack>>,
  updated_at: Date,
  created_at: Date,
  id: string,
};


export type PlaylistSnapshotPlaylist_TracksArgs = {
  where?: Maybe<PlaylistTrackWhereInput>,
  orderBy?: Maybe<PlaylistTrackOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type PlaylistSnapshotCreateInput = {
  id: Maybe<string>,
  snapshot_id: string,
  playlist: Maybe<PlaylistCreateOneWithoutSnapshotsInput>,
  status: Maybe<PlaylistSnapshotStatus>,
  track_count: number,
  loaded_tracks: Maybe<number>,
  playlist_tracks: Maybe<PlaylistTrackCreateManyWithoutSnapshotInput>,
  updated_at: Date,
  created_at: Date,
};

export type PlaylistSnapshotCreateOneInput = {
  create: Maybe<PlaylistSnapshotCreateInput>,
  connect: Maybe<PlaylistSnapshotWhereUniqueInput>,
};

export type PlaylistSnapshotCreateOneWithoutPlaylist_TracksInput = {
  create: Maybe<PlaylistSnapshotCreateWithoutPlaylist_TracksInput>,
  connect: Maybe<PlaylistSnapshotWhereUniqueInput>,
};

export type PlaylistSnapshotCreateWithoutPlaylist_TracksInput = {
  id: Maybe<string>,
  snapshot_id: string,
  playlist: Maybe<PlaylistCreateOneWithoutSnapshotsInput>,
  status: Maybe<PlaylistSnapshotStatus>,
  track_count: number,
  loaded_tracks: Maybe<number>,
  updated_at: Date,
  created_at: Date,
};

export enum PlaylistSnapshotOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Snapshot_Id_Asc = 'snapshot_id_ASC', 
  Snapshot_Id_Desc = 'snapshot_id_DESC', 
  Status_Asc = 'status_ASC', 
  Status_Desc = 'status_DESC', 
  Track_Count_Asc = 'track_count_ASC', 
  Track_Count_Desc = 'track_count_DESC', 
  Loaded_Tracks_Asc = 'loaded_tracks_ASC', 
  Loaded_Tracks_Desc = 'loaded_tracks_DESC', 
  Updated_At_Asc = 'updated_at_ASC', 
  Updated_At_Desc = 'updated_at_DESC', 
  Created_At_Asc = 'created_at_ASC', 
  Created_At_Desc = 'created_at_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type PlaylistSnapshotPreviousValues = {
  id: string,
  snapshot_id: string,
  status: PlaylistSnapshotStatus,
  track_count: number,
  loaded_tracks: number,
  updated_at: Date,
  created_at: Date,
};

export enum PlaylistSnapshotStatus {
  Not_Loaded = 'NOT_LOADED', 
  Initialized = 'INITIALIZED', 
  Loading = 'LOADING', 
  Loaded = 'LOADED'
};

export type PlaylistSnapshotSubscriptionPayload = {
  mutation: MutationType,
  node?: Maybe<PlaylistSnapshot>,
  updatedFields?: Maybe<Array<string>>,
  previousValues?: Maybe<PlaylistSnapshotPreviousValues>,
};

export type PlaylistSnapshotWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  snapshot_id: Maybe<string>,
  snapshot_id_not: Maybe<string>,
  snapshot_id_in: Maybe<Array<string>>,
  snapshot_id_not_in: Maybe<Array<string>>,
  snapshot_id_lt: Maybe<string>,
  snapshot_id_lte: Maybe<string>,
  snapshot_id_gt: Maybe<string>,
  snapshot_id_gte: Maybe<string>,
  snapshot_id_contains: Maybe<string>,
  snapshot_id_not_contains: Maybe<string>,
  snapshot_id_starts_with: Maybe<string>,
  snapshot_id_not_starts_with: Maybe<string>,
  snapshot_id_ends_with: Maybe<string>,
  snapshot_id_not_ends_with: Maybe<string>,
  playlist: Maybe<PlaylistWhereInput>,
  status: Maybe<PlaylistSnapshotStatus>,
  status_not: Maybe<PlaylistSnapshotStatus>,
  status_in: Maybe<Array<PlaylistSnapshotStatus>>,
  status_not_in: Maybe<Array<PlaylistSnapshotStatus>>,
  track_count: Maybe<number>,
  track_count_not: Maybe<number>,
  track_count_in: Maybe<Array<number>>,
  track_count_not_in: Maybe<Array<number>>,
  track_count_lt: Maybe<number>,
  track_count_lte: Maybe<number>,
  track_count_gt: Maybe<number>,
  track_count_gte: Maybe<number>,
  loaded_tracks: Maybe<number>,
  loaded_tracks_not: Maybe<number>,
  loaded_tracks_in: Maybe<Array<number>>,
  loaded_tracks_not_in: Maybe<Array<number>>,
  loaded_tracks_lt: Maybe<number>,
  loaded_tracks_lte: Maybe<number>,
  loaded_tracks_gt: Maybe<number>,
  loaded_tracks_gte: Maybe<number>,
  playlist_tracks_every: Maybe<PlaylistTrackWhereInput>,
  playlist_tracks_some: Maybe<PlaylistTrackWhereInput>,
  playlist_tracks_none: Maybe<PlaylistTrackWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<PlaylistSnapshotWhereInput>>,
  OR: Maybe<Array<PlaylistSnapshotWhereInput>>,
  NOT: Maybe<Array<PlaylistSnapshotWhereInput>>,
};

export type PlaylistSnapshotWhereUniqueInput = {
  id: Maybe<string>,
  snapshot_id: Maybe<string>,
};

export type PlaylistTrack = {
  id: string,
  snapshot?: Maybe<PlaylistSnapshot>,
  added_by?: Maybe<User>,
  added_at?: Maybe<Date>,
  is_local?: Maybe<boolean>,
  order: number,
  track: Track,
  updated_at?: Maybe<Date>,
  created_at?: Maybe<Date>,
};

export type PlaylistTrackCreateManyWithoutSnapshotInput = {
  create: Maybe<Array<PlaylistTrackCreateWithoutSnapshotInput>>,
  connect: Maybe<Array<PlaylistTrackWhereUniqueInput>>,
};

export type PlaylistTrackCreateManyWithoutTrackInput = {
  create: Maybe<Array<PlaylistTrackCreateWithoutTrackInput>>,
  connect: Maybe<Array<PlaylistTrackWhereUniqueInput>>,
};

export type PlaylistTrackCreateWithoutSnapshotInput = {
  id: Maybe<string>,
  added_by: Maybe<UserCreateOneInput>,
  added_at: Maybe<Date>,
  is_local: Maybe<boolean>,
  order: number,
  track: TrackCreateOneWithoutPlaylist_TracksInput,
  updated_at: Maybe<Date>,
  created_at: Maybe<Date>,
};

export type PlaylistTrackCreateWithoutTrackInput = {
  id: Maybe<string>,
  snapshot: Maybe<PlaylistSnapshotCreateOneWithoutPlaylist_TracksInput>,
  added_by: Maybe<UserCreateOneInput>,
  added_at: Maybe<Date>,
  is_local: Maybe<boolean>,
  order: number,
  updated_at: Maybe<Date>,
  created_at: Maybe<Date>,
};

export enum PlaylistTrackOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Added_At_Asc = 'added_at_ASC', 
  Added_At_Desc = 'added_at_DESC', 
  Is_Local_Asc = 'is_local_ASC', 
  Is_Local_Desc = 'is_local_DESC', 
  Order_Asc = 'order_ASC', 
  Order_Desc = 'order_DESC', 
  Updated_At_Asc = 'updated_at_ASC', 
  Updated_At_Desc = 'updated_at_DESC', 
  Created_At_Asc = 'created_at_ASC', 
  Created_At_Desc = 'created_at_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type PlaylistTrackWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  snapshot: Maybe<PlaylistSnapshotWhereInput>,
  added_by: Maybe<UserWhereInput>,
  added_at: Maybe<Date>,
  added_at_not: Maybe<Date>,
  added_at_in: Maybe<Array<Date>>,
  added_at_not_in: Maybe<Array<Date>>,
  added_at_lt: Maybe<Date>,
  added_at_lte: Maybe<Date>,
  added_at_gt: Maybe<Date>,
  added_at_gte: Maybe<Date>,
  is_local: Maybe<boolean>,
  is_local_not: Maybe<boolean>,
  order: Maybe<number>,
  order_not: Maybe<number>,
  order_in: Maybe<Array<number>>,
  order_not_in: Maybe<Array<number>>,
  order_lt: Maybe<number>,
  order_lte: Maybe<number>,
  order_gt: Maybe<number>,
  order_gte: Maybe<number>,
  track: Maybe<TrackWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<PlaylistTrackWhereInput>>,
  OR: Maybe<Array<PlaylistTrackWhereInput>>,
  NOT: Maybe<Array<PlaylistTrackWhereInput>>,
};

export type PlaylistTrackWhereUniqueInput = {
  id: Maybe<string>,
};

export type PlaylistWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  playlist_id: Maybe<string>,
  playlist_id_not: Maybe<string>,
  playlist_id_in: Maybe<Array<string>>,
  playlist_id_not_in: Maybe<Array<string>>,
  playlist_id_lt: Maybe<string>,
  playlist_id_lte: Maybe<string>,
  playlist_id_gt: Maybe<string>,
  playlist_id_gte: Maybe<string>,
  playlist_id_contains: Maybe<string>,
  playlist_id_not_contains: Maybe<string>,
  playlist_id_starts_with: Maybe<string>,
  playlist_id_not_starts_with: Maybe<string>,
  playlist_id_ends_with: Maybe<string>,
  playlist_id_not_ends_with: Maybe<string>,
  latest_snapshot_id: Maybe<string>,
  latest_snapshot_id_not: Maybe<string>,
  latest_snapshot_id_in: Maybe<Array<string>>,
  latest_snapshot_id_not_in: Maybe<Array<string>>,
  latest_snapshot_id_lt: Maybe<string>,
  latest_snapshot_id_lte: Maybe<string>,
  latest_snapshot_id_gt: Maybe<string>,
  latest_snapshot_id_gte: Maybe<string>,
  latest_snapshot_id_contains: Maybe<string>,
  latest_snapshot_id_not_contains: Maybe<string>,
  latest_snapshot_id_starts_with: Maybe<string>,
  latest_snapshot_id_not_starts_with: Maybe<string>,
  latest_snapshot_id_ends_with: Maybe<string>,
  latest_snapshot_id_not_ends_with: Maybe<string>,
  description: Maybe<string>,
  description_not: Maybe<string>,
  description_in: Maybe<Array<string>>,
  description_not_in: Maybe<Array<string>>,
  description_lt: Maybe<string>,
  description_lte: Maybe<string>,
  description_gt: Maybe<string>,
  description_gte: Maybe<string>,
  description_contains: Maybe<string>,
  description_not_contains: Maybe<string>,
  description_starts_with: Maybe<string>,
  description_not_starts_with: Maybe<string>,
  description_ends_with: Maybe<string>,
  description_not_ends_with: Maybe<string>,
  href: Maybe<string>,
  href_not: Maybe<string>,
  href_in: Maybe<Array<string>>,
  href_not_in: Maybe<Array<string>>,
  href_lt: Maybe<string>,
  href_lte: Maybe<string>,
  href_gt: Maybe<string>,
  href_gte: Maybe<string>,
  href_contains: Maybe<string>,
  href_not_contains: Maybe<string>,
  href_starts_with: Maybe<string>,
  href_not_starts_with: Maybe<string>,
  href_ends_with: Maybe<string>,
  href_not_ends_with: Maybe<string>,
  name: Maybe<string>,
  name_not: Maybe<string>,
  name_in: Maybe<Array<string>>,
  name_not_in: Maybe<Array<string>>,
  name_lt: Maybe<string>,
  name_lte: Maybe<string>,
  name_gt: Maybe<string>,
  name_gte: Maybe<string>,
  name_contains: Maybe<string>,
  name_not_contains: Maybe<string>,
  name_starts_with: Maybe<string>,
  name_not_starts_with: Maybe<string>,
  name_ends_with: Maybe<string>,
  name_not_ends_with: Maybe<string>,
  owner: Maybe<UserWhereInput>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  public: Maybe<boolean>,
  public_not: Maybe<boolean>,
  collaborative: Maybe<boolean>,
  collaborative_not: Maybe<boolean>,
  images_every: Maybe<ImageWhereInput>,
  images_some: Maybe<ImageWhereInput>,
  images_none: Maybe<ImageWhereInput>,
  snapshots_every: Maybe<PlaylistSnapshotWhereInput>,
  snapshots_some: Maybe<PlaylistSnapshotWhereInput>,
  snapshots_none: Maybe<PlaylistSnapshotWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<PlaylistWhereInput>>,
  OR: Maybe<Array<PlaylistWhereInput>>,
  NOT: Maybe<Array<PlaylistWhereInput>>,
};

export type PlaylistWhereUniqueInput = {
  id: Maybe<string>,
  playlist_id: Maybe<string>,
  latest_snapshot_id: Maybe<string>,
  href: Maybe<string>,
  uri: Maybe<string>,
};

export type Query = {
  albums: Array<Album>,
  album?: Maybe<Album>,
  artist?: Maybe<Artist>,
  artists: Array<Artist>,
  genre?: Maybe<Genre>,
  genres: Array<Genre>,
  key?: Maybe<Key>,
  keys: Array<Key>,
  optimizationJob?: Maybe<OptimizationJob>,
  optimizationJobs: Array<OptimizationJob>,
  playlistSnapshot?: Maybe<PlaylistSnapshot>,
  track?: Maybe<Track>,
  tracks: Array<Track>,
  playlistsConnection: PlaylistConnection,
  playlists: Array<Playlist>,
  playlist: Playlist,
};


export type QueryAlbumsArgs = {
  where?: Maybe<AlbumWhereInput>,
  orderBy?: Maybe<AlbumOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryAlbumArgs = {
  where: AlbumWhereUniqueInput
};


export type QueryArtistArgs = {
  where: ArtistWhereUniqueInput
};


export type QueryArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryGenreArgs = {
  where: GenreWhereUniqueInput
};


export type QueryGenresArgs = {
  where?: Maybe<GenreWhereInput>,
  orderBy?: Maybe<GenreOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryKeyArgs = {
  where: KeyWhereUniqueInput
};


export type QueryKeysArgs = {
  where?: Maybe<KeyWhereInput>,
  orderBy?: Maybe<KeyOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryOptimizationJobArgs = {
  where: OptimizationJobWhereUniqueInput
};


export type QueryOptimizationJobsArgs = {
  where?: Maybe<OptimizationJobWhereInput>,
  orderBy?: Maybe<OptimizationJobOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryPlaylistSnapshotArgs = {
  where: PlaylistSnapshotWhereUniqueInput
};


export type QueryTrackArgs = {
  where: TrackWhereUniqueInput
};


export type QueryTracksArgs = {
  where?: Maybe<TrackWhereInput>,
  orderBy?: Maybe<TrackOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryPlaylistsConnectionArgs = {
  where?: Maybe<PlaylistWhereInput>,
  orderBy?: Maybe<PlaylistOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type QueryPlaylistsArgs = {
  query?: Maybe<string>,
  limit: number
};


export type QueryPlaylistArgs = {
  uri?: Maybe<string>,
  id?: Maybe<string>,
  upsert: boolean
};

export enum ReleaseDatePrecision {
  Year = 'YEAR', 
  Month = 'MONTH', 
  Day = 'DAY'
};

export type SolverConstraintViolation = {
  id: string,
  solver_status: SolverStatusUpdate,
  constraint_name: string,
  violation_count: number,
  score_impact: string,
};

export type SolverConstraintViolationCreateManyWithoutSolver_StatusInput = {
  create: Maybe<Array<SolverConstraintViolationCreateWithoutSolver_StatusInput>>,
  connect: Maybe<Array<SolverConstraintViolationWhereUniqueInput>>,
};

export type SolverConstraintViolationCreateWithoutSolver_StatusInput = {
  id: Maybe<string>,
  constraint_name: string,
  violation_count: number,
  score_impact: string,
};

export type SolverConstraintViolationWhereUniqueInput = {
  id: Maybe<string>,
};

export type SolverStatusUpdate = {
  id: string,
  job: OptimizationJob,
  best_score: string,
  time_millis_spent: number,
  constraint_violations: Array<SolverConstraintViolation>,
};

export type SolverStatusUpdateCreateInput = {
  id: Maybe<string>,
  job: OptimizationJobCreateOneInput,
  best_score: string,
  time_millis_spent: number,
  constraint_violations: Maybe<SolverConstraintViolationCreateManyWithoutSolver_StatusInput>,
};

export type Subscription = {
  playlistSnapshot: PlaylistSnapshotSubscriptionPayload,
};


export type SubscriptionPlaylistSnapshotArgs = {
  snapshot_id: string
};

export type Track = {
  uri?: Maybe<string>,
  href?: Maybe<string>,
  disc_number?: Maybe<number>,
  track_number?: Maybe<number>,
  duration_ms?: Maybe<number>,
  explicit?: Maybe<boolean>,
  name?: Maybe<string>,
  popularity?: Maybe<number>,
  preview_url?: Maybe<string>,
  album?: Maybe<Album>,
  playlist_tracks?: Maybe<Array<PlaylistTrack>>,
  artists?: Maybe<Array<Artist>>,
  features?: Maybe<AudioFeatures>,
  analysis?: Maybe<AudioAnalysis>,
  updated_at: Date,
  created_at: Date,
  id: string,
};


export type TrackPlaylist_TracksArgs = {
  where?: Maybe<PlaylistTrackWhereInput>,
  orderBy?: Maybe<PlaylistTrackOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};


export type TrackArtistsArgs = {
  where?: Maybe<ArtistWhereInput>,
  orderBy?: Maybe<ArtistOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type TrackCreateInput = {
  id: Maybe<string>,
  track_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  disc_number: Maybe<number>,
  track_number: Maybe<number>,
  duration_ms: Maybe<number>,
  explicit: Maybe<boolean>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  preview_url: Maybe<string>,
  album: Maybe<AlbumCreateOneWithoutTracksInput>,
  playlist_tracks: Maybe<PlaylistTrackCreateManyWithoutTrackInput>,
  artists: Maybe<ArtistCreateManyWithoutTracksInput>,
  features: Maybe<AudioFeaturesCreateOneWithoutTrackInput>,
  analysis: Maybe<AudioAnalysisCreateOneWithoutTrackInput>,
  updated_at: Date,
  created_at: Date,
};

export type TrackCreateManyInput = {
  create: Maybe<Array<TrackCreateInput>>,
  connect: Maybe<Array<TrackWhereUniqueInput>>,
};

export type TrackCreateManyWithoutAlbumInput = {
  create: Maybe<Array<TrackCreateWithoutAlbumInput>>,
  connect: Maybe<Array<TrackWhereUniqueInput>>,
};

export type TrackCreateManyWithoutArtistsInput = {
  create: Maybe<Array<TrackCreateWithoutArtistsInput>>,
  connect: Maybe<Array<TrackWhereUniqueInput>>,
};

export type TrackCreateOneWithoutPlaylist_TracksInput = {
  create: Maybe<TrackCreateWithoutPlaylist_TracksInput>,
  connect: Maybe<TrackWhereUniqueInput>,
};

export type TrackCreateWithoutAlbumInput = {
  id: Maybe<string>,
  track_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  disc_number: Maybe<number>,
  track_number: Maybe<number>,
  duration_ms: Maybe<number>,
  explicit: Maybe<boolean>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  preview_url: Maybe<string>,
  playlist_tracks: Maybe<PlaylistTrackCreateManyWithoutTrackInput>,
  artists: Maybe<ArtistCreateManyWithoutTracksInput>,
  features: Maybe<AudioFeaturesCreateOneWithoutTrackInput>,
  analysis: Maybe<AudioAnalysisCreateOneWithoutTrackInput>,
  updated_at: Date,
  created_at: Date,
};

export type TrackCreateWithoutArtistsInput = {
  id: Maybe<string>,
  track_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  disc_number: Maybe<number>,
  track_number: Maybe<number>,
  duration_ms: Maybe<number>,
  explicit: Maybe<boolean>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  preview_url: Maybe<string>,
  album: Maybe<AlbumCreateOneWithoutTracksInput>,
  playlist_tracks: Maybe<PlaylistTrackCreateManyWithoutTrackInput>,
  features: Maybe<AudioFeaturesCreateOneWithoutTrackInput>,
  analysis: Maybe<AudioAnalysisCreateOneWithoutTrackInput>,
  updated_at: Date,
  created_at: Date,
};

export type TrackCreateWithoutPlaylist_TracksInput = {
  id: Maybe<string>,
  track_id: string,
  uri: Maybe<string>,
  href: Maybe<string>,
  disc_number: Maybe<number>,
  track_number: Maybe<number>,
  duration_ms: Maybe<number>,
  explicit: Maybe<boolean>,
  name: Maybe<string>,
  popularity: Maybe<number>,
  preview_url: Maybe<string>,
  album: Maybe<AlbumCreateOneWithoutTracksInput>,
  artists: Maybe<ArtistCreateManyWithoutTracksInput>,
  features: Maybe<AudioFeaturesCreateOneWithoutTrackInput>,
  analysis: Maybe<AudioAnalysisCreateOneWithoutTrackInput>,
  updated_at: Date,
  created_at: Date,
};

export enum TrackOrderByInput {
  Id_Asc = 'id_ASC', 
  Id_Desc = 'id_DESC', 
  Track_Id_Asc = 'track_id_ASC', 
  Track_Id_Desc = 'track_id_DESC', 
  Uri_Asc = 'uri_ASC', 
  Uri_Desc = 'uri_DESC', 
  Href_Asc = 'href_ASC', 
  Href_Desc = 'href_DESC', 
  Disc_Number_Asc = 'disc_number_ASC', 
  Disc_Number_Desc = 'disc_number_DESC', 
  Track_Number_Asc = 'track_number_ASC', 
  Track_Number_Desc = 'track_number_DESC', 
  Duration_Ms_Asc = 'duration_ms_ASC', 
  Duration_Ms_Desc = 'duration_ms_DESC', 
  Explicit_Asc = 'explicit_ASC', 
  Explicit_Desc = 'explicit_DESC', 
  Name_Asc = 'name_ASC', 
  Name_Desc = 'name_DESC', 
  Popularity_Asc = 'popularity_ASC', 
  Popularity_Desc = 'popularity_DESC', 
  Preview_Url_Asc = 'preview_url_ASC', 
  Preview_Url_Desc = 'preview_url_DESC', 
  Updated_At_Asc = 'updated_at_ASC', 
  Updated_At_Desc = 'updated_at_DESC', 
  Created_At_Asc = 'created_at_ASC', 
  Created_At_Desc = 'created_at_DESC', 
  CreatedAt_Asc = 'createdAt_ASC', 
  CreatedAt_Desc = 'createdAt_DESC', 
  UpdatedAt_Asc = 'updatedAt_ASC', 
  UpdatedAt_Desc = 'updatedAt_DESC'
};

export type TrackWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  track_id: Maybe<string>,
  track_id_not: Maybe<string>,
  track_id_in: Maybe<Array<string>>,
  track_id_not_in: Maybe<Array<string>>,
  track_id_lt: Maybe<string>,
  track_id_lte: Maybe<string>,
  track_id_gt: Maybe<string>,
  track_id_gte: Maybe<string>,
  track_id_contains: Maybe<string>,
  track_id_not_contains: Maybe<string>,
  track_id_starts_with: Maybe<string>,
  track_id_not_starts_with: Maybe<string>,
  track_id_ends_with: Maybe<string>,
  track_id_not_ends_with: Maybe<string>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  href: Maybe<string>,
  href_not: Maybe<string>,
  href_in: Maybe<Array<string>>,
  href_not_in: Maybe<Array<string>>,
  href_lt: Maybe<string>,
  href_lte: Maybe<string>,
  href_gt: Maybe<string>,
  href_gte: Maybe<string>,
  href_contains: Maybe<string>,
  href_not_contains: Maybe<string>,
  href_starts_with: Maybe<string>,
  href_not_starts_with: Maybe<string>,
  href_ends_with: Maybe<string>,
  href_not_ends_with: Maybe<string>,
  disc_number: Maybe<number>,
  disc_number_not: Maybe<number>,
  disc_number_in: Maybe<Array<number>>,
  disc_number_not_in: Maybe<Array<number>>,
  disc_number_lt: Maybe<number>,
  disc_number_lte: Maybe<number>,
  disc_number_gt: Maybe<number>,
  disc_number_gte: Maybe<number>,
  track_number: Maybe<number>,
  track_number_not: Maybe<number>,
  track_number_in: Maybe<Array<number>>,
  track_number_not_in: Maybe<Array<number>>,
  track_number_lt: Maybe<number>,
  track_number_lte: Maybe<number>,
  track_number_gt: Maybe<number>,
  track_number_gte: Maybe<number>,
  duration_ms: Maybe<number>,
  duration_ms_not: Maybe<number>,
  duration_ms_in: Maybe<Array<number>>,
  duration_ms_not_in: Maybe<Array<number>>,
  duration_ms_lt: Maybe<number>,
  duration_ms_lte: Maybe<number>,
  duration_ms_gt: Maybe<number>,
  duration_ms_gte: Maybe<number>,
  explicit: Maybe<boolean>,
  explicit_not: Maybe<boolean>,
  name: Maybe<string>,
  name_not: Maybe<string>,
  name_in: Maybe<Array<string>>,
  name_not_in: Maybe<Array<string>>,
  name_lt: Maybe<string>,
  name_lte: Maybe<string>,
  name_gt: Maybe<string>,
  name_gte: Maybe<string>,
  name_contains: Maybe<string>,
  name_not_contains: Maybe<string>,
  name_starts_with: Maybe<string>,
  name_not_starts_with: Maybe<string>,
  name_ends_with: Maybe<string>,
  name_not_ends_with: Maybe<string>,
  popularity: Maybe<number>,
  popularity_not: Maybe<number>,
  popularity_in: Maybe<Array<number>>,
  popularity_not_in: Maybe<Array<number>>,
  popularity_lt: Maybe<number>,
  popularity_lte: Maybe<number>,
  popularity_gt: Maybe<number>,
  popularity_gte: Maybe<number>,
  preview_url: Maybe<string>,
  preview_url_not: Maybe<string>,
  preview_url_in: Maybe<Array<string>>,
  preview_url_not_in: Maybe<Array<string>>,
  preview_url_lt: Maybe<string>,
  preview_url_lte: Maybe<string>,
  preview_url_gt: Maybe<string>,
  preview_url_gte: Maybe<string>,
  preview_url_contains: Maybe<string>,
  preview_url_not_contains: Maybe<string>,
  preview_url_starts_with: Maybe<string>,
  preview_url_not_starts_with: Maybe<string>,
  preview_url_ends_with: Maybe<string>,
  preview_url_not_ends_with: Maybe<string>,
  album: Maybe<AlbumWhereInput>,
  playlist_tracks_every: Maybe<PlaylistTrackWhereInput>,
  playlist_tracks_some: Maybe<PlaylistTrackWhereInput>,
  playlist_tracks_none: Maybe<PlaylistTrackWhereInput>,
  artists_every: Maybe<ArtistWhereInput>,
  artists_some: Maybe<ArtistWhereInput>,
  artists_none: Maybe<ArtistWhereInput>,
  features: Maybe<AudioFeaturesWhereInput>,
  analysis: Maybe<AudioAnalysisWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<TrackWhereInput>>,
  OR: Maybe<Array<TrackWhereInput>>,
  NOT: Maybe<Array<TrackWhereInput>>,
};

export type TrackWhereUniqueInput = {
  id: Maybe<string>,
  track_id: Maybe<string>,
  uri: Maybe<string>,
  href: Maybe<string>,
};

export type User = {
  birthday?: Maybe<Date>,
  country?: Maybe<string>,
  display_name?: Maybe<string>,
  email?: Maybe<string>,
  href?: Maybe<string>,
  product?: Maybe<string>,
  uri?: Maybe<string>,
  images?: Maybe<Array<Image>>,
  updated_at: Date,
  created_at: Date,
  id: string,
};


export type UserImagesArgs = {
  where?: Maybe<ImageWhereInput>,
  orderBy?: Maybe<ImageOrderByInput>,
  skip?: Maybe<number>,
  after?: Maybe<string>,
  before?: Maybe<string>,
  first?: Maybe<number>,
  last?: Maybe<number>
};

export type UserCreateInput = {
  id: Maybe<string>,
  user_id: string,
  birthday: Maybe<Date>,
  country: Maybe<string>,
  display_name: Maybe<string>,
  email: Maybe<string>,
  href: Maybe<string>,
  product: Maybe<string>,
  uri: Maybe<string>,
  images: Maybe<ImageCreateManyInput>,
  updated_at: Date,
  created_at: Date,
};

export type UserCreateOneInput = {
  create: Maybe<UserCreateInput>,
  connect: Maybe<UserWhereUniqueInput>,
};

export type UserWhereInput = {
  id: Maybe<string>,
  id_not: Maybe<string>,
  id_in: Maybe<Array<string>>,
  id_not_in: Maybe<Array<string>>,
  id_lt: Maybe<string>,
  id_lte: Maybe<string>,
  id_gt: Maybe<string>,
  id_gte: Maybe<string>,
  id_contains: Maybe<string>,
  id_not_contains: Maybe<string>,
  id_starts_with: Maybe<string>,
  id_not_starts_with: Maybe<string>,
  id_ends_with: Maybe<string>,
  id_not_ends_with: Maybe<string>,
  user_id: Maybe<string>,
  user_id_not: Maybe<string>,
  user_id_in: Maybe<Array<string>>,
  user_id_not_in: Maybe<Array<string>>,
  user_id_lt: Maybe<string>,
  user_id_lte: Maybe<string>,
  user_id_gt: Maybe<string>,
  user_id_gte: Maybe<string>,
  user_id_contains: Maybe<string>,
  user_id_not_contains: Maybe<string>,
  user_id_starts_with: Maybe<string>,
  user_id_not_starts_with: Maybe<string>,
  user_id_ends_with: Maybe<string>,
  user_id_not_ends_with: Maybe<string>,
  birthday: Maybe<Date>,
  birthday_not: Maybe<Date>,
  birthday_in: Maybe<Array<Date>>,
  birthday_not_in: Maybe<Array<Date>>,
  birthday_lt: Maybe<Date>,
  birthday_lte: Maybe<Date>,
  birthday_gt: Maybe<Date>,
  birthday_gte: Maybe<Date>,
  country: Maybe<string>,
  country_not: Maybe<string>,
  country_in: Maybe<Array<string>>,
  country_not_in: Maybe<Array<string>>,
  country_lt: Maybe<string>,
  country_lte: Maybe<string>,
  country_gt: Maybe<string>,
  country_gte: Maybe<string>,
  country_contains: Maybe<string>,
  country_not_contains: Maybe<string>,
  country_starts_with: Maybe<string>,
  country_not_starts_with: Maybe<string>,
  country_ends_with: Maybe<string>,
  country_not_ends_with: Maybe<string>,
  display_name: Maybe<string>,
  display_name_not: Maybe<string>,
  display_name_in: Maybe<Array<string>>,
  display_name_not_in: Maybe<Array<string>>,
  display_name_lt: Maybe<string>,
  display_name_lte: Maybe<string>,
  display_name_gt: Maybe<string>,
  display_name_gte: Maybe<string>,
  display_name_contains: Maybe<string>,
  display_name_not_contains: Maybe<string>,
  display_name_starts_with: Maybe<string>,
  display_name_not_starts_with: Maybe<string>,
  display_name_ends_with: Maybe<string>,
  display_name_not_ends_with: Maybe<string>,
  email: Maybe<string>,
  email_not: Maybe<string>,
  email_in: Maybe<Array<string>>,
  email_not_in: Maybe<Array<string>>,
  email_lt: Maybe<string>,
  email_lte: Maybe<string>,
  email_gt: Maybe<string>,
  email_gte: Maybe<string>,
  email_contains: Maybe<string>,
  email_not_contains: Maybe<string>,
  email_starts_with: Maybe<string>,
  email_not_starts_with: Maybe<string>,
  email_ends_with: Maybe<string>,
  email_not_ends_with: Maybe<string>,
  href: Maybe<string>,
  href_not: Maybe<string>,
  href_in: Maybe<Array<string>>,
  href_not_in: Maybe<Array<string>>,
  href_lt: Maybe<string>,
  href_lte: Maybe<string>,
  href_gt: Maybe<string>,
  href_gte: Maybe<string>,
  href_contains: Maybe<string>,
  href_not_contains: Maybe<string>,
  href_starts_with: Maybe<string>,
  href_not_starts_with: Maybe<string>,
  href_ends_with: Maybe<string>,
  href_not_ends_with: Maybe<string>,
  product: Maybe<string>,
  product_not: Maybe<string>,
  product_in: Maybe<Array<string>>,
  product_not_in: Maybe<Array<string>>,
  product_lt: Maybe<string>,
  product_lte: Maybe<string>,
  product_gt: Maybe<string>,
  product_gte: Maybe<string>,
  product_contains: Maybe<string>,
  product_not_contains: Maybe<string>,
  product_starts_with: Maybe<string>,
  product_not_starts_with: Maybe<string>,
  product_ends_with: Maybe<string>,
  product_not_ends_with: Maybe<string>,
  uri: Maybe<string>,
  uri_not: Maybe<string>,
  uri_in: Maybe<Array<string>>,
  uri_not_in: Maybe<Array<string>>,
  uri_lt: Maybe<string>,
  uri_lte: Maybe<string>,
  uri_gt: Maybe<string>,
  uri_gte: Maybe<string>,
  uri_contains: Maybe<string>,
  uri_not_contains: Maybe<string>,
  uri_starts_with: Maybe<string>,
  uri_not_starts_with: Maybe<string>,
  uri_ends_with: Maybe<string>,
  uri_not_ends_with: Maybe<string>,
  images_every: Maybe<ImageWhereInput>,
  images_some: Maybe<ImageWhereInput>,
  images_none: Maybe<ImageWhereInput>,
  updated_at: Maybe<Date>,
  updated_at_not: Maybe<Date>,
  updated_at_in: Maybe<Array<Date>>,
  updated_at_not_in: Maybe<Array<Date>>,
  updated_at_lt: Maybe<Date>,
  updated_at_lte: Maybe<Date>,
  updated_at_gt: Maybe<Date>,
  updated_at_gte: Maybe<Date>,
  created_at: Maybe<Date>,
  created_at_not: Maybe<Date>,
  created_at_in: Maybe<Array<Date>>,
  created_at_not_in: Maybe<Array<Date>>,
  created_at_lt: Maybe<Date>,
  created_at_lte: Maybe<Date>,
  created_at_gt: Maybe<Date>,
  created_at_gte: Maybe<Date>,
  AND: Maybe<Array<UserWhereInput>>,
  OR: Maybe<Array<UserWhereInput>>,
  NOT: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id: Maybe<string>,
  user_id: Maybe<string>,
  email: Maybe<string>,
  href: Maybe<string>,
  uri: Maybe<string>,
};
export type GetOptimizationJobStatusQueryVariables = {
  jobId?: Maybe<string>
};


export type GetOptimizationJobStatusQuery = ({ __typename?: 'Query' } & { optimizationJob: Maybe<({ __typename?: 'OptimizationJob' } & Pick<OptimizationJob, 'id' | 'status' | 'playlist_name'> & { original_playlist_snapshot: ({ __typename?: 'PlaylistSnapshot' } & Pick<PlaylistSnapshot, 'track_count'> & { playlist: Maybe<({ __typename?: 'Playlist' } & { image: Maybe<({ __typename?: 'Image' } & Pick<Image, 'url' | 'width' | 'height'>)> })> }), new_playlist_snapshot: Maybe<({ __typename?: 'PlaylistSnapshot' } & Pick<PlaylistSnapshot, 'track_count' | 'id'> & { playlist: Maybe<({ __typename?: 'Playlist' } & Pick<Playlist, 'id' | 'href' | 'uri'>)> })>, latest_status_update: Maybe<({ __typename?: 'SolverStatusUpdate' } & Pick<SolverStatusUpdate, 'best_score' | 'time_millis_spent'> & { constraint_violations: Array<({ __typename?: 'SolverConstraintViolation' } & Pick<SolverConstraintViolation, 'constraint_name' | 'score_impact' | 'violation_count'>)> })> })> });

export type GetPlaylistTracksQueryVariables = {
  id?: Maybe<string>
};


export type GetPlaylistTracksQuery = ({ __typename?: 'Query' } & { playlist: ({ __typename?: 'Playlist' } & Pick<Playlist, 'name'> & { owner: ({ __typename?: 'User' } & Pick<User, 'id' | 'display_name'>), image: Maybe<({ __typename?: 'Image' } & Pick<Image, 'url' | 'width' | 'height'>)>, latest_snapshot: Maybe<({ __typename?: 'PlaylistSnapshot' } & Pick<PlaylistSnapshot, 'track_count' | 'loaded_tracks'> & { playlist_tracks: Maybe<Array<({ __typename?: 'PlaylistTrack' } & Pick<PlaylistTrack, 'order'> & { track: ({ __typename?: 'Track' } & Pick<Track, 'id' | 'name'> & { artists: Maybe<Array<({ __typename?: 'Artist' } & Pick<Artist, 'name'>)>>, features: Maybe<({ __typename?: 'AudioFeatures' } & Pick<AudioFeatures, 'tempo'> & { key: Maybe<({ __typename?: 'Key' } & Pick<Key, 'label' | 'camelot_code'>)> })> }) })>> })> }) });

export type LoadPlaylistTracksMutationVariables = {
  id: string
};


export type LoadPlaylistTracksMutation = ({ __typename?: 'Mutation' } & { loadPlaylistTracks: ({ __typename?: 'Playlist' } & Pick<Playlist, 'id'> & { latest_snapshot: Maybe<({ __typename?: 'PlaylistSnapshot' } & Pick<PlaylistSnapshot, 'id' | 'status' | 'track_count' | 'loaded_tracks'>)> }) });

export type PlaylistDetailsQueryVariables = {
  id?: Maybe<string>,
  upsert: boolean
};


export type PlaylistDetailsQuery = ({ __typename?: 'Query' } & { playlist: ({ __typename?: 'Playlist' } & Pick<Playlist, 'id' | 'name' | 'uri'> & { owner: ({ __typename?: 'User' } & Pick<User, 'id' | 'display_name'>), image: Maybe<({ __typename?: 'Image' } & Pick<Image, 'url' | 'width' | 'height'>)>, latest_snapshot: Maybe<({ __typename?: 'PlaylistSnapshot' } & Pick<PlaylistSnapshot, 'id' | 'status' | 'track_count' | 'loaded_tracks'>)> }) });

export type PlaylistSearchQueryVariables = {
  query?: Maybe<string>,
  limit?: Maybe<number>
};


export type PlaylistSearchQuery = ({ __typename?: 'Query' } & { playlists: Array<({ __typename?: 'Playlist' } & Pick<Playlist, 'id' | 'name' | 'uri' | 'href'> & { image: Maybe<({ __typename?: 'Image' } & Pick<Image, 'url'>)>, latest_snapshot: Maybe<({ __typename?: 'PlaylistSnapshot' } & Pick<PlaylistSnapshot, 'id' | 'status' | 'track_count'>)>, owner: ({ __typename?: 'User' } & Pick<User, 'id' | 'display_name'>) })> });

export type StartPlaylistOptimizationMutationVariables = {
  playlistId: string,
  snapshotId: string,
  playlistName?: Maybe<string>
};


export type StartPlaylistOptimizationMutation = ({ __typename?: 'Mutation' } & { startPlaylistOptimization: ({ __typename?: 'OptimizationJob' } & Pick<OptimizationJob, 'id' | 'extract_path' | 'start' | 'end'>) });

export const GetOptimizationJobStatusDocument = gql`
    query GetOptimizationJobStatus($jobId: ID) {
  optimizationJob(where: {id: $jobId}) {
    id
    status
    playlist_name
    original_playlist_snapshot {
      track_count
      playlist {
        image(size: 300) {
          url
          width
          height
        }
      }
    }
    new_playlist_snapshot {
      track_count
      id
      playlist {
        id
        href
        uri
      }
    }
    latest_status_update {
      best_score
      time_millis_spent
      constraint_violations {
        constraint_name
        score_impact
        violation_count
      }
    }
  }
}
    `;
export type GetOptimizationJobStatusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables>, 'query'>;

    export const GetOptimizationJobStatusComponent = (props: GetOptimizationJobStatusComponentProps) => (
      <ApolloReactComponents.Query<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables> query={GetOptimizationJobStatusDocument} {...props} />
    );
    
export type GetOptimizationJobStatusProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables> & TChildProps;
export function withGetOptimizationJobStatus<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOptimizationJobStatusQuery,
  GetOptimizationJobStatusQueryVariables,
  GetOptimizationJobStatusProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables, GetOptimizationJobStatusProps<TChildProps>>(GetOptimizationJobStatusDocument, {
      alias: 'getOptimizationJobStatus',
      ...operationOptions
    });
};

    export function useGetOptimizationJobStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables>) {
      return ApolloReactHooks.useQuery<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables>(GetOptimizationJobStatusDocument, baseOptions);
    }
      export function useGetOptimizationJobStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables>(GetOptimizationJobStatusDocument, baseOptions);
      }
      
export type GetOptimizationJobStatusQueryHookResult = ReturnType<typeof useGetOptimizationJobStatusQuery>;
export type GetOptimizationJobStatusQueryResult = ApolloReactCommon.QueryResult<GetOptimizationJobStatusQuery, GetOptimizationJobStatusQueryVariables>;
export const GetPlaylistTracksDocument = gql`
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
export type GetPlaylistTracksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables>, 'query'>;

    export const GetPlaylistTracksComponent = (props: GetPlaylistTracksComponentProps) => (
      <ApolloReactComponents.Query<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables> query={GetPlaylistTracksDocument} {...props} />
    );
    
export type GetPlaylistTracksProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables> & TChildProps;
export function withGetPlaylistTracks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPlaylistTracksQuery,
  GetPlaylistTracksQueryVariables,
  GetPlaylistTracksProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables, GetPlaylistTracksProps<TChildProps>>(GetPlaylistTracksDocument, {
      alias: 'getPlaylistTracks',
      ...operationOptions
    });
};

    export function useGetPlaylistTracksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables>) {
      return ApolloReactHooks.useQuery<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables>(GetPlaylistTracksDocument, baseOptions);
    }
      export function useGetPlaylistTracksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables>(GetPlaylistTracksDocument, baseOptions);
      }
      
export type GetPlaylistTracksQueryHookResult = ReturnType<typeof useGetPlaylistTracksQuery>;
export type GetPlaylistTracksQueryResult = ApolloReactCommon.QueryResult<GetPlaylistTracksQuery, GetPlaylistTracksQueryVariables>;
export const LoadPlaylistTracksDocument = gql`
    mutation LoadPlaylistTracks($id: String!) {
  loadPlaylistTracks(playlist_id: $id) {
    id
    latest_snapshot {
      id
      status
      track_count
      loaded_tracks
    }
  }
}
    `;
export type LoadPlaylistTracksMutationFn = ApolloReactCommon.MutationFunction<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables>;
export type LoadPlaylistTracksComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables>, 'mutation'>;

    export const LoadPlaylistTracksComponent = (props: LoadPlaylistTracksComponentProps) => (
      <ApolloReactComponents.Mutation<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables> mutation={LoadPlaylistTracksDocument} {...props} />
    );
    
export type LoadPlaylistTracksProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables> & TChildProps;
export function withLoadPlaylistTracks<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoadPlaylistTracksMutation,
  LoadPlaylistTracksMutationVariables,
  LoadPlaylistTracksProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables, LoadPlaylistTracksProps<TChildProps>>(LoadPlaylistTracksDocument, {
      alias: 'loadPlaylistTracks',
      ...operationOptions
    });
};

    export function useLoadPlaylistTracksMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables>) {
      return ApolloReactHooks.useMutation<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables>(LoadPlaylistTracksDocument, baseOptions);
    }
export type LoadPlaylistTracksMutationHookResult = ReturnType<typeof useLoadPlaylistTracksMutation>;
export type LoadPlaylistTracksMutationResult = ApolloReactCommon.MutationResult<LoadPlaylistTracksMutation>;
export type LoadPlaylistTracksMutationOptions = ApolloReactCommon.BaseMutationOptions<LoadPlaylistTracksMutation, LoadPlaylistTracksMutationVariables>;
export const PlaylistDetailsDocument = gql`
    query PlaylistDetails($id: String, $upsert: Boolean = true) {
  playlist(id: $id, upsert: $upsert) {
    id
    name
    uri
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
      id
      status
      track_count
      loaded_tracks
    }
  }
}
    `;
export type PlaylistDetailsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlaylistDetailsQuery, PlaylistDetailsQueryVariables>, 'query'>;

    export const PlaylistDetailsComponent = (props: PlaylistDetailsComponentProps) => (
      <ApolloReactComponents.Query<PlaylistDetailsQuery, PlaylistDetailsQueryVariables> query={PlaylistDetailsDocument} {...props} />
    );
    
export type PlaylistDetailsProps<TChildProps = {}> = ApolloReactHoc.DataProps<PlaylistDetailsQuery, PlaylistDetailsQueryVariables> & TChildProps;
export function withPlaylistDetails<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlaylistDetailsQuery,
  PlaylistDetailsQueryVariables,
  PlaylistDetailsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PlaylistDetailsQuery, PlaylistDetailsQueryVariables, PlaylistDetailsProps<TChildProps>>(PlaylistDetailsDocument, {
      alias: 'playlistDetails',
      ...operationOptions
    });
};

    export function usePlaylistDetailsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaylistDetailsQuery, PlaylistDetailsQueryVariables>) {
      return ApolloReactHooks.useQuery<PlaylistDetailsQuery, PlaylistDetailsQueryVariables>(PlaylistDetailsDocument, baseOptions);
    }
      export function usePlaylistDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaylistDetailsQuery, PlaylistDetailsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PlaylistDetailsQuery, PlaylistDetailsQueryVariables>(PlaylistDetailsDocument, baseOptions);
      }
      
export type PlaylistDetailsQueryHookResult = ReturnType<typeof usePlaylistDetailsQuery>;
export type PlaylistDetailsQueryResult = ApolloReactCommon.QueryResult<PlaylistDetailsQuery, PlaylistDetailsQueryVariables>;
export const PlaylistSearchDocument = gql`
    query PlaylistSearch($query: String, $limit: Int) {
  playlists(query: $query, limit: $limit) {
    id
    name
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
export type PlaylistSearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PlaylistSearchQuery, PlaylistSearchQueryVariables>, 'query'>;

    export const PlaylistSearchComponent = (props: PlaylistSearchComponentProps) => (
      <ApolloReactComponents.Query<PlaylistSearchQuery, PlaylistSearchQueryVariables> query={PlaylistSearchDocument} {...props} />
    );
    
export type PlaylistSearchProps<TChildProps = {}> = ApolloReactHoc.DataProps<PlaylistSearchQuery, PlaylistSearchQueryVariables> & TChildProps;
export function withPlaylistSearch<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PlaylistSearchQuery,
  PlaylistSearchQueryVariables,
  PlaylistSearchProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, PlaylistSearchQuery, PlaylistSearchQueryVariables, PlaylistSearchProps<TChildProps>>(PlaylistSearchDocument, {
      alias: 'playlistSearch',
      ...operationOptions
    });
};

    export function usePlaylistSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PlaylistSearchQuery, PlaylistSearchQueryVariables>) {
      return ApolloReactHooks.useQuery<PlaylistSearchQuery, PlaylistSearchQueryVariables>(PlaylistSearchDocument, baseOptions);
    }
      export function usePlaylistSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PlaylistSearchQuery, PlaylistSearchQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<PlaylistSearchQuery, PlaylistSearchQueryVariables>(PlaylistSearchDocument, baseOptions);
      }
      
export type PlaylistSearchQueryHookResult = ReturnType<typeof usePlaylistSearchQuery>;
export type PlaylistSearchQueryResult = ApolloReactCommon.QueryResult<PlaylistSearchQuery, PlaylistSearchQueryVariables>;
export const StartPlaylistOptimizationDocument = gql`
    mutation StartPlaylistOptimization($playlistId: String!, $snapshotId: String!, $playlistName: String) {
  startPlaylistOptimization(playlist_id: $playlistId, snapshot_id: $snapshotId, playlist_name: $playlistName) {
    id
    extract_path
    start
    end
  }
}
    `;
export type StartPlaylistOptimizationMutationFn = ApolloReactCommon.MutationFunction<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables>;
export type StartPlaylistOptimizationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables>, 'mutation'>;

    export const StartPlaylistOptimizationComponent = (props: StartPlaylistOptimizationComponentProps) => (
      <ApolloReactComponents.Mutation<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables> mutation={StartPlaylistOptimizationDocument} {...props} />
    );
    
export type StartPlaylistOptimizationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables> & TChildProps;
export function withStartPlaylistOptimization<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  StartPlaylistOptimizationMutation,
  StartPlaylistOptimizationMutationVariables,
  StartPlaylistOptimizationProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables, StartPlaylistOptimizationProps<TChildProps>>(StartPlaylistOptimizationDocument, {
      alias: 'startPlaylistOptimization',
      ...operationOptions
    });
};

    export function useStartPlaylistOptimizationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables>) {
      return ApolloReactHooks.useMutation<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables>(StartPlaylistOptimizationDocument, baseOptions);
    }
export type StartPlaylistOptimizationMutationHookResult = ReturnType<typeof useStartPlaylistOptimizationMutation>;
export type StartPlaylistOptimizationMutationResult = ApolloReactCommon.MutationResult<StartPlaylistOptimizationMutation>;
export type StartPlaylistOptimizationMutationOptions = ApolloReactCommon.BaseMutationOptions<StartPlaylistOptimizationMutation, StartPlaylistOptimizationMutationVariables>;