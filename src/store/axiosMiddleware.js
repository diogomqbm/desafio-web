import axios from "axios";
import { BASE_URL } from "../constants";
import { multiClientMiddleware } from "redux-axios-middleware";

const client = {
  default: {
    client: axios.create({ BASE_URL, responseType: "json" })
  }
}

export default multiClientMiddleware(client);