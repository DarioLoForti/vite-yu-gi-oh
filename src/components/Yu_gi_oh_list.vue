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
    <yu_gi_oh_card v-for="Cards, index in store.yu_gi_oh_list" :key="index" :Cards="Cards">
    </yu_gi_oh_card>
</template>
<style lang="scss">
    
</style>