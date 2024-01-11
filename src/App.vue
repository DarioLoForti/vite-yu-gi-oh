<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import loader from './components/loader.vue';
import yu_gi_oh_list from './components/yu_gi_oh_list.vue';
import { store } from './store.js';


export default {

  components: {
    AppHeader,
    yu_gi_oh_list,
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
      <yu_gi_oh_list />
    </div>
</template>
<style lang="scss" >
@use'./styles/generals.scss'
  
</style>