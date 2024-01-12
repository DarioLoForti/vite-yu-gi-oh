<script>
import { store } from '../store'
export default {
    name: 'result',
    data(){
        return{
            store
        }
    },
    computed: {
        cardresult() {
            return store.yu_gi_oh_list.length;
        }
    }
}
</script>
<template lang="">
    
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h5 class="my-4" v-if="cardresult > 0"> Numero Carte : {{ cardresult }}</h5>
                <h5 v-else > Nessuna Carta di questo archetipo</h5>       
            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';

h5{
    font-weight: 600;
}
    
</style>