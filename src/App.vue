<script>
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';
import axios from 'axios';
import { store } from './store.js';
import TvList from './components/TvList.vue';

export default {
  components: { AppHeader, FilmList, TvList },
  data() {
    return {
      store,
    }
  },
  methods: {
    handleSearch() {
      this.store.loading = true;

      axios
        .get(this.store.apiFilm, {
          params: {
            api_key: "86c79a6209320737aed481d99f20801f",
            query: this.store.searchText,
          }
        })
        .then((resp) => {
          this.store.films = resp.data.results;
        })
        .catch((err) => {
          alert("Il film non é disponibile")
        })
        .finally(() => {
          this.store.loading = false;
        });

        axios
        .get(this.store.apiTv, {
          params: {
            api_key: "86c79a6209320737aed481d99f20801f",
            query: this.store.searchText,
          }
        })
        .then((resp) => {
          this.store.tv = resp.data.results;
        })
        .catch((err) => {
          alert("Il film non é disponibile")
        })
        .finally(() => {
          this.store.loading = false;
        });
    }
  },
};

</script>

<template>
  <div>
    <header>
      <AppHeader @performSearch="handleSearch"/>
    </header>
    <main>
      <FilmList />
      <TvList />
    </main>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
