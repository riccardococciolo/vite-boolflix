<script>
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';
import axios from 'axios';
import { store } from './store.js';

export default {
  components: { AppHeader, FilmList },
  data() {
    return {
      store,
    }
  },
  methods: {
    handleSearch() {
      axios
        .get(this.store.apiUrl, {
          params: {
            api_key: "86c79a6209320737aed481d99f20801f",
            query: this.store.searchText,
          }
        })
        .then((resp) => {
          this.store.films = resp.data.results;
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
    </main>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
