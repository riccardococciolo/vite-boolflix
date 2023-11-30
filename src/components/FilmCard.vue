<script>
export default {
    props: {
        film: Object,
    },
    data() {
        return {
            flag: ["en", "es", "it"],
        }
    },
    methods: {
        getFlagPath(language) {
           return new URL(`../assets/img/${language}-flag.png`, import.meta.url).href
        },
    },
    computed: {
        isFlagImageExist() {
           return this.flag.includes(this.film.original_language);
        },
    },
};
</script>

<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ film.title ? film.title : film.name }}</h5>
                <h5 class="card-title">{{ film.original_title ? film.original_title : film.original_name }}</h5>
                <img v-if="isFlagImageExist"  :src="getFlagPath(film.original_language)" alt="">
                <p v-else class="card-text">{{ film.original_language }}</p>
                <p class="card-text">{{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>