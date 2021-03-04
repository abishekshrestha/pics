import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID UshVtC_7nHhJa6kBQqVboGrCQtB_zcCOH6qQM3FlLAo",
  },
});
