<script>
import { store } from '../store';
export default {
    name: 'Search',
    data(){
        return{
            store,
        }
    },
    methods:{
        reset(){
            store.archetype =" ";
            this.$emit('reset')
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <label for="filter" class="control-label">Archetypes</label>
                <select class="form-select" id="filter" v-model="store.archetype">
                    <option value="" selected> select archetypes</option>
                    <option v-for="archetype, index in store.archetypes" :key="index" :value="archetype.archetype_name">
                        {{ archetype.archetype_name }}
                    </option>
                </select>
            </div>
            <div class="col-3">
                <button class="btn btn-primary m-4" @click="$emit('sendSearch')"> Filter </button>
            </div>
            <div class="col-3">
                <button class="btn btn-warning m-4" @click="reset"> Reset </button>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;


    
</style>