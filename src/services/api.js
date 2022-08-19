import axios from "axios";

const api = axios.create({
  // baseURL: "http://127.0.0.1:5000",
  baseUrl:'https://sentimentclassierapi.herokuapp.com',
  headers: { 'Access-Control-Allow-Origin': true }
});

export default api;
