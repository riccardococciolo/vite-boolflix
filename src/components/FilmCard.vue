<script>
import { store } from '../store';
import axios from 'axios';

export default {
    props: {
        film: Object,
    },
    data() {
        return {
            store,
            flag: ["en", "es", "it"],
            isHovered: false,

        }
    },
    methods: {
        getFlagPath(language) {
            return new URL(`../assets/img/${language}-flag.png`, import.meta.url).href
        },
        handleCast(id) {
            axios
                .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                    params: {
                        api_key: "86c79a6209320737aed481d99f20801f",
                    }
                })
                .then((resp) => {
                    console.log(resp);
                    this.film.cast = resp.data.cast;
                })
                .catch((err) => {
                    console.error(err);
                    console.log("Il cast non é disponibile")
                })
                .finally(() => {
                });

        },
        showDetail() {
            this.isHovered = true;
            //console.log("in", this.isHovered)
        },
        hideDetail() {
            this.isHovered = false;
            //console.log("out", this.isHovered)
        }
    },
    computed: {
        isFlagImageExist() {
            return this.flag.includes(this.film.original_language);
        },
        backdropUrl() {
            return this.film.backdrop_path
                ? `https://image.tmdb.org/t/p/w342${this.film.poster_path}`
                : 'https://via.placeholder.com/342x192?text=No+Image';
        },
        filledStars() {
            const filledStars = Math.ceil(this.film.vote_average / 2);
            return Array(filledStars).fill('filled-star');
        },
        emptyStars() {
            const emptyStars = 5 - Math.ceil(this.film.vote_average / 2);
            return Array(emptyStars).fill('empty-star');
        },
        title() {
            return this.film.title ? this.film.title : this.film.name;
        },
        originalTitle() {
            return this.film.original_title ? this.film.original_title : this.film.original_name
        },
        // formattedGenres() {
        //     return this.film.genres.map(genre => genre.name).join(', ');
        // },
        formattedCast() {
            const limitedCast = this.film.cast.slice(0, 5);
            return limitedCast.map(actor => ({
                name: `${actor.name}`,
            }))
        }
    }
}
</script>

<template>
    <div class="card bg-dark h-100 text-white align-items-stretch position-relative" style="width: 18rem;"
        @mouseover="showDetail" @mouseout="hideDetail">
        <div v-show="isHovered" class="card-body bg-black h-100 w-100 bg-opacity-75 position-absolute p-5 overflow-y-auto">
            <h5 class="card-title py-2"><strong>Titolo</strong>: {{ title }}</h5>
            <h5 v-show="title !== originalTitle" class="card-title py-2"><strong>Titolo originale</strong>: {{ originalTitle
            }}
            </h5>
            <div v-if="isFlagImageExist" class="py-2">
                <span><strong>Lingua originale: </strong></span>
                <img :src="getFlagPath(film.original_language)" alt="">
            </div>
            <p v-else class="card-text py-2"><strong>Lingua originale</strong>: {{ film.original_language }}</p>
            <!-- <p class="card-text">{{ formattedGenres }}</p> -->
            <div class="py-2">
                <span><strong>Voto: </strong></span>
                <span v-for="(star) in filledStars"><i class="fa-solid fa-star"></i></span>
                <span v-for="(star) in emptyStars"><i class="fa-regular fa-star"></i></span>
            </div>
            <p class="py-2"><strong>Overview</strong>: {{ film.overview }}</p>
            <div v-if="film.cast">
                <h5>
                    Cast
                </h5>
                <ul>
                    <li v-for="actor in formattedCast" :key="actor.id">{{ actor.name }}</li>
                </ul>
            </div>
            <button v-else class="btn btn-outline-warning" type="button" @click="handleCast(film.id)">Cast</button>
        </div>
        <img :src="backdropUrl" class="card-img-top object-fit-cover" alt="...">
    </div>
</template>

<style lang="scss" scoped>
i {
    color: rgb(255, 183, 48);
}

li {
    text-decoration: none;
}
</style>