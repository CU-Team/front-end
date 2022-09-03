export interface TrackType {
  artist: string;
  image: Array<ImageType>;
  listeners: string;
  name: string;
  url: string;
}

export interface ImageType {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
}
