<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        test() {
            console.log("funziona");
        }
    },
};
</script>

<template>
    <div>
        <nav class="navbar bg-black">
            <div class="container-fluid">
                <a class="navbar-brand text-danger fs-5">Boolflix</a>
                <div class="d-flex">
                    <input class="form-control me-2" type="text" placeholder="Cosa vuoi guardare oggi" aria-label=".form-control-lg example" @keyup.enter="$emit('performSearch')" v-model.trim="store.searchText">
                    <button class="btn btn-outline-success" type="button" @click="$emit('performSearch')">Search</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>