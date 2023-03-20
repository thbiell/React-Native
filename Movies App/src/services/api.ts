import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1f6ea72b459892f323b83dc55e0a9493",
    language: "pt-BR",
    include_adult: false,
  },
});

export default api;

