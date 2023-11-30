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
    <div>
        <div class="container">
            <div v-if="store.loading">
                <p>La pagina sta caricando...</p>
            </div>
            <div class="row" v-else>
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