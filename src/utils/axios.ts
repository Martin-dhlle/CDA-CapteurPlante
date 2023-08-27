import axios from "axios";
import apiUri from "../config/api/api-uri";

const api = axios.create({
  baseURL: apiUri,
  validateStatus: (status) => status < 500,
});

export default api;
