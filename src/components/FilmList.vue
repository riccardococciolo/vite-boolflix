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
            <div class="row">
                <div v-for="(film) in store.films" class="col">
                    <FilmCard :film="film" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;



</style>