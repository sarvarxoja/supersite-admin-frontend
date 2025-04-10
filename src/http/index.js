import axios from "axios";

// https://www.isouzbekistan.uz/api/ 
const API_URL = "http://localhost:2222/api";
axios.defaults.withCredentials = true;

const $axios = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}`,
});

export { $axios, API_URL };