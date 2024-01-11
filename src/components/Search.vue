<script>
import { store } from '../store';
export default {
    name: 'Search',
    data(){
        return{
            store,
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <label for="filter" class="control-label">Archetypes</label>
                <select id="filter" v-model="store.archetype">
                    <option value="" selected> select archetypes</option>
                    <option v-for="archetype, index in store.archetypes" :key="index" :value="archetype.archetype_name">
                        {{ archetype.archetype_name }}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <button class="btn btn-primary" @click="$emit('sendSearch')"> Filter </button>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss'
    
</style>