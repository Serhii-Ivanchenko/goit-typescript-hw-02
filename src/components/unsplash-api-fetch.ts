import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'GnQjZdKq8ut7mPn4cKm-uRXIzb8FNJgqXoZUMLmbnm8';

export default async function getPhotos<T>(searchQuery: string, page: number): Promise<T> {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      page,
      per_page: 12,
    },
  });
  return response.data as T;
}
