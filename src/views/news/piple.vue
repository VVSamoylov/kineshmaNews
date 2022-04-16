<template>
<newsmenu/>
Общество
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
import newsmenu from '@/components/newsmenu';
import Newsmenu from '../../components/newsmenu.vue';
export default{
    name: 'piple',
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