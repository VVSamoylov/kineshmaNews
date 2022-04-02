<template>
<newsmenu />
index

{{getArt}}
</template>

<script>
import newsmenu from '@/components/newsmenu.vue'
export default{
    name: 'index',
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