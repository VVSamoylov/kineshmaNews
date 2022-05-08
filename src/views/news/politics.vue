<template>
<newsmenu/>
Политика
<div class="container">
    <div class="row">
        <div v-for="item in getArt" :key="item.heading"  class="card">
            <h5 class="card-header">{{item.heading}}</h5>
            <div class="card-body">
                <p class="card-text">{{item.description}}</p> aa
                {{item.id}}
                <div v-if="item.id" class="col-lg-2">
                  <router-link  class="btn btn-primary"  :to="{ name: 'article', params:{id: item.id }}">Подробнее... </router-link>  
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
    name: 'politics',
    components:{
        newsmenu
    },
    computed:{
        getArt(){
            return this.$store.getters.getArticleSort(1)
            
        }
    }
}
</script>