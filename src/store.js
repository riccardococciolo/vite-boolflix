import { reactive } from "vue";

export const store = reactive({
    films: [],
    tv: [],
    id: "",
    apiFilm:  "https://api.themoviedb.org/3/search/movie",
    apiTv: "https://api.themoviedb.org/3/search/tv",
    loading: false,
    searchText: "",
})