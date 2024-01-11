<script>
export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/800px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
                        <div class="text-start">
                            <h2>Yu-Gi-Oh Api</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use'../styles/generals.scss' as *;

header{
   
    padding: 20px 0px;

    h2{
        margin-top: 20px;
        font-weight: 600;
    }
    img{
        width: 10%;
    }

}
    
</style>