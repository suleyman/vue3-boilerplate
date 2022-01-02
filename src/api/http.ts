import Axios from "axios";

const http = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
});

export default http;