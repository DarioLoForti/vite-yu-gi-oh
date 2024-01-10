<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import loader from './components/loader.vue';
import { store } from './store.js';


export default {

  components: {
    AppHeader,
    AppMain,
    loader,
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
        store.loading = false;
      })
    }
  },
  created() {
    this.getyu_gi_oh_list();
  }
}
</script>
<template lang="">
    <loader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <AppMain />
    </div>
</template>
<style lang="scss" >
@use'./styles/generals.scss'
  
</style>