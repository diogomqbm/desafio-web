import axios from "axios";
import { BASE_URL } from "../constants";
import axiosMiddleware from "redux-axios-middleware";

const client = axios.create({ baseURL: BASE_URL, responseType: "json" });

export default axiosMiddleware(client);