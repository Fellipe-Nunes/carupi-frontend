import axios from "axios";

const localAccess = "http://localhost:3001";

const http = axios.create({
  baseURL: process.env.REACT_APP_API || localAccess,
});

http.defaults.headers["Content-Type"] = "application/json";

export { http };
