<script>
export default {
    name: 'yu_gi_oh_card',
    props: {
        Cards: Object,
    },
    data(){
        return{

        }
    }
}
</script>
<template lang="">
   <div class="my-cards-col">
        <div class="card-container">
            <img :src="Cards.card_images[0].image_url_small" alt="">
            <h4>{{ Cards.name }}</h4>
            <h5>{{ Cards.archetype }}</h5>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use'../styles/generals.scss' as *;

.my-cards-col {
    width: calc(100% / 5 - 40px);
    background-color: #D48F38;
    margin: 20px;
}

.card-container {
    padding-bottom: 10px;
    text-align: center;

    h4 {
        color: white;
        font-weight: bold;
        font-size: 22px;
    }

    h5 {
        font-size: 16px;
    }

    h4,
    h5 {
        margin-top: 5px;
    }

    img {
        width: 100%;
    }
}
    
</style>