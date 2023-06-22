import axios from "axios";

const api = axios.create({
  baseURL: " https://games-test-api-81e9fb0d564a.herokuapp.com/api",
  headers: {
    "dev-email-address": "flavicastelocc@gmail.com",
    "Content-type": "application/json"
  }
});



export default api;