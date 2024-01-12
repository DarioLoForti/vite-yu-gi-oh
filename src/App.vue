<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import loader from './components/loader.vue';
import yu_gi_oh_list from './components/yu_gi_oh_list.vue';
import Search from './components/Search.vue';
import result from './components/result.vue';
import { store } from './store.js';


export default {

  components: {
    AppHeader,
    yu_gi_oh_list,
    loader,
    Search,
    result,
  },
  data() {
    return {
      store
    }
  },
  methods: {
getarchetypes_list(){

  axios.get(store.endpointarchetype).then((response) => {
    store.archetypes = response.data
  })
},

    getyu_gi_oh_list() {
      // axios.get(store.endpoint).then((response) => {
      //   store.yu_gi_oh_list = response.data.data
      //   store.loading = false;

      let apiarchetypes = store.endpoint;

      if (store.archetype !== " ") {
        apiarchetypes = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${store.archetype}&num=100&offset=0`
      };

      axios.get(apiarchetypes).then((response) => {
        store.loading = true;
        store.yu_gi_oh_list = response.data.data;
        store.loading = false;
      });
    }
  },
  created() {
    this.getyu_gi_oh_list();
    this.getarchetypes_list();
    
  }
}
</script>
<template lang="">
    <loader v-if="store.loading" />
    <div v-else>
      <AppHeader />
      <Search @reset ="getyu_gi_oh_list" @sendSearch ="getyu_gi_oh_list" />
      <result />
      <yu_gi_oh_list />
    </div>
</template>
<style lang="scss" >
@use'./styles/generals.scss'
  
</style>