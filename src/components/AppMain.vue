<script>
import Yu_gi_oh_list from './yu_gi_oh_list.vue';
export default {
    components:{
        Yu_gi_oh_list,
    },
    name: 'AppMain'
}
</script>
<template lang="">
    <main>
        <div class="bg-main">
            <div class="container">
                <div class="row">
                        <Yu_gi_oh_list  />
                </div>
            </div>
        </div>  
    </main>
</template>
<style lang="scss" scoped>
@use'../styles/generals.scss' as *;
    
.bg-main{
    background-color:#D48F38 ;
    width: 100%;
    padding: 50px;

    .container{
        background-color: white;
    }
}
</style>