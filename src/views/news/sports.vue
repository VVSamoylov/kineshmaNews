<template>
<newsmenu />
Спорт
{{getArt}}
</template>
<script>
import newsmenu from '@/components/newsmenu.vue'
export default{
    name: 'sports',
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