export interface Modal {
  isOpen: boolean;
  url: string;
  description: string;
}

interface ImageLinks {
  self: string;
  html: string;
  download: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface User {
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: {
    self: string;
    html: string;
    portfolio: string;
    likes: string;
    photos: string;
  };
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  total_collections: number;
  total_illustrations: number;
  total_likes: number;
  total_photos: number;
  total_promoted_illustrations: number;
  total_promoted_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
}

export interface Image {
  alt_description: string;
  asset_type: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: any[];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ImageLinks;
  promoted_at: string;
  tags: any[];
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
}

export interface SearchResults {
  total: number;
  total_pages: number;
  results: Image[];
}

export type HandleSearch = (newQuery: string) => void;

export type HandleLoadMoreClick = () => void;

export type HandleImageClick = (url: string, description: string) => void;

export type HandleModalClose = () => void;
