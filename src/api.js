import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5f8df37c4c15c40016a1e46d.mockapi.io/api/v1',
});

export function getProducts() {
  return api({
    method: 'GET',
    url: `/products`,
    data: null,
  });
}

export function postSubscription(data) {
  console.log(data);
  return api({
    method: 'POST',
    url: `/subscription`,
    data,
  });
}
