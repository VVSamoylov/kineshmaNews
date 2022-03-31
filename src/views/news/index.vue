<template>
index
<ul id="e">
  <li v-for="art in getArt" :key="art.autor">
    {{ art.heading}} 
    {{ art.description }}
    
  </li>
</ul>

</template>

<script>

export default{
    name: 'index',
    components:{
    
    },
    computed:{
        getArt(){
            return  this.$store.getters.getArticle;
           
            
        }
    }
}
</script>