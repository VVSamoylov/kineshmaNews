<template>
<newsmenu />
Общество
{{getArt}}
</template>
<script>
import newsmenu from '@/components/newsmenu.vue'
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