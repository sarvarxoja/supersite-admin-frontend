import axios from "axios";

const API_URL = "http://localhost:2222";
axios.defaults.withCredentials = true;

const $axios = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}`,
});

export { $axios, API_URL };