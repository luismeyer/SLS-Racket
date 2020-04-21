import { API_URL } from "../utils";

const baseFetch = (url, body) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const fetchLogin = (body) => baseFetch(`${API_URL}/post/login`, body);

export const fetchAuth = (body) => baseFetch(`${API_URL}/post/auth`, body);
