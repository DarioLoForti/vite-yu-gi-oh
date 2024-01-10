<script>
import { store } from '../store';
export default {
    name: 'loader',
    data(){
        return{
            store,
        }
    }
}
</script>
<template lang="">
    <div class="loader">
    </div> 
    <div class="text">Loading...</div>
</template>
<style lang="scss" scoped>
@use'../styles/generals.scss' as *;

.loader {
    border: 16px solid #f3f3f3; 
    border-top: 16px solid black; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 45%;
 
    
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .text{
    font-size: 30px;
    font-weight: 900;
    position: absolute;
    top: 65%;
    left: 45%;
  }
    
</style>