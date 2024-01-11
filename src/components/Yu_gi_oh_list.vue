<script>
import yu_gi_oh_card from './yu_gi_oh_card.vue';

import { store } from '../store';
export default {
    name: 'yu_gi_oh_list',
    components: {
        yu_gi_oh_card,
    },
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
    
        <div class="bg-main">
            <div class="container">
                <div class="row">
                    <yu_gi_oh_card v-for="Cards, index in store.yu_gi_oh_list" :key="index" :Cards="Cards">
                    </yu_gi_oh_card>
                </div>
            </div>
        </div>  
    
</template>
<style lang="scss" scoped>
.bg-main{
    background-color:#D48F38 ;
    width: 100%;
    padding: 50px;

    .container{
        background-color: white;
    }
}
    
</style>