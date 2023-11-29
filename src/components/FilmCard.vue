<script>
export default {
    props: {
        film: Object,
    },
};
</script>

<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ film.title }}</h5>
                <h5 class="card-title">{{ film.original_title }}</h5>
                <p class="card-text">{{ film.original_language }}</p>
                <p class="card-text">{{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>