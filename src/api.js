import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5f8df37c4c15c40016a1e46d.mockapi.io/',
});

export function getProducts() {
  return api({
    method: 'GET',
    url: `/api/v1/products`,
    data: null,
  });
}
