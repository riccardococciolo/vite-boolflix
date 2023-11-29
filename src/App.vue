<script>
import AppHeader from './components/AppHeader.vue';
import FilmList from './components/FilmList.vue';

export default {
  components: {AppHeader, FilmList},
  data() {
    return {
      
    }
  },
};

</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <FilmList />
  </main>
</template>

<style lang="scss">
  @use "./style/general.scss";


</style>
