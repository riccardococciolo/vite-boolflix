<script>
export default {
    props: {
        tv: Object,
    },
};
</script>

<template>
    <div>
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ film.name }}</h5>
                <h5 class="card-title">{{ film.original_name }}</h5>
                <p class="card-text">{{ film.original_language }}</p>
                <p class="card-text">{{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>