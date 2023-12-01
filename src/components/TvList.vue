<script>
import FilmCard from './FilmCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: { FilmCard }
}
</script>

<template>
    <div class="p-5">
        <div class="container">
            <div v-if="store.loading">
                <p>La pagina sta caricando...</p>
            </div>
            <div class="row g-5" v-else>
                <h2 class="text-white p-4">Tv Series</h2>
                <div v-for="(tv) in store.tv" class="col">
                    <FilmCard :film="tv" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;



</style>