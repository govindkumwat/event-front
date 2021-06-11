import axios from "axios";

export default axios.create({
  baseURL: "http://envent-backend.herokuapp.com",
});
