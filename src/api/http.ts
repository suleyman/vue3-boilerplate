import Axios from "axios";

const http = Axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

export default http;