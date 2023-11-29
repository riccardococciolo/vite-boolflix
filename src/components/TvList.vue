<script>
import TvCard from './TvCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    components: { TvCard }
}
</script>

<template>
    <div>
        <div class="container">
            <div v-if="store.loading">
                <p>La pagina sta caricando...</p>
            </div>
            <div class="row" v-else>
                <div v-for="(Tv) in store.Tv" class="col">
                    <FilmCard :Tv="Tv" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;



</style>