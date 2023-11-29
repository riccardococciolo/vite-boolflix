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
        <input class="form-control form-control-lg" type="text" placeholder="scrivi cosa vuoi guardare oggi" aria-label=".form-control-lg example" v-model.trim="store.searchText">
        <button type="button" class="btn" @click="$emit('performSearch')">cerca</button>
    </div>
</template>

<style lang="scss" scoped>
    
</style>