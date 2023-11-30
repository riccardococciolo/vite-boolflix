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
        backdropUrl() {
            return this.film.backdrop_path
                ? `https://image.tmdb.org/t/p/w342${this.film.backdrop_path}`
                : 'https://via.placeholder.com/342x192?text=No+Image';
        },
        filledStars() {
            const filledStars = Math.ceil(this.film.vote_average / 2);
            return Array(filledStars).fill('filled-star');
        },
        emptyStars() {
            const emptyStars = 5 - Math.ceil(this.film.vote_average / 2);
            return Array(emptyStars).fill('empty-star');
        }
    },
};
</script>

<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img :src="backdropUrl" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ film.title ? film.title : film.name }}</h5>
                <h5 class="card-title">{{ film.original_title ? film.original_title : film.original_name }}</h5>
                <img v-if="isFlagImageExist" :src="getFlagPath(film.original_language)" alt="">
                <p v-else class="card-text">{{ film.original_language }}</p>
                <span v-for="(star) in filledStars"><i class="fa-solid fa-star"></i></span>
                <span v-for="(star) in emptyStars"><i class="fa-regular fa-star"></i></span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    i {
        color: black;
    }
</style>