<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { store } from './store.js';


export default {

  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getyu_gi_oh_list() {
      axios.get(store.endpoint).then((response) => {
        store.yu_gi_oh_list = response.data.data
      })
    }
  },
  created() {
    this.getyu_gi_oh_list();
  }
}
</script>
<template lang="">
    <AppHeader />
    <AppMain />
</template>
<style lang="scss" >
@use'./styles/generals.scss'
  
</style>