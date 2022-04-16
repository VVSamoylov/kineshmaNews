<template>
<newsmenu />
Проишествия
<div class="container">
    <div class="row">
        <div v-for="item in getArt" :key="item.heading"  class="card">
        <h5 class="card-header">{{item.heading}}</h5>
        <div class="card-body">
            <p class="card-text">{{item.description}}</p>
            <div class="col-lg-2">
                <a href="#" class="btn btn-primary">Подробнее...</a>
            </div>    
        </div>
</div>
    </div>
</div>

</template>
<script>
import newsmenu from '@/components/newsmenu.vue'
export default{
    name: 'incidents',
    components:{
        newsmenu
    },
    computed:{
        getArt(){
            return this.$store.getters.getArticle
        }
    }
}
</script>
<style scoped>
.card{
    border-color:red;
    padding-left:0px;
    padding-right:0px;
}
</style>