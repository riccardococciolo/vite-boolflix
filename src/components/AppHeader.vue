<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <div>
        <nav class="navbar bg-black">
            <div class="container-fluid">
                <a class="navbar-brand text-danger fs-5">Boolflix</a>
                <form class="d-flex" role="text">
                    <input class="form-control me-2" type="text" placeholder="Cosa vuoi guardare oggi" aria-label=".form-control-lg example" v-model.trim="store.searchText">
                    <button class="btn btn-outline-success" type="button" @click="$emit('performSearch')">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>