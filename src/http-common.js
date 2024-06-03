import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5264/api",
  headers: {
    "Content-Type": "application/json",
  }
});