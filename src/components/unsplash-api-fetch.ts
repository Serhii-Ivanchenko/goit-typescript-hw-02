import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'GnQjZdKq8ut7mPn4cKm-uRXIzb8FNJgqXoZUMLmbnm8';

interface Params {
  client_id: string;
  query: string;
  page: number;
  per_page: number;
}

export default async function getPhotos<T>(searchQuery: string, page: number): Promise<T> {
  const response = await axios.get(`/search/photos`, {
    params: <Params> {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data as T;
}
