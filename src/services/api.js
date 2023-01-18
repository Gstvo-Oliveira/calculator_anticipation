import axios from "axios";

export const calculator = axios.create({
  baseURL: process.env.BASE_URL,
});
