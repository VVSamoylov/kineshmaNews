<template>
 <adminmenu/>
 <form class="row g-3">
  <div class="col-md-6">
    <label for="Heading" class="form-label">Заголовк</label>
    <input v-model="artcile.heading"  type="text" class="form-control" id="Heading">
  </div>
  <div class="col-md-6">
    <label for="ArticleAutor" class="form-label">Автор</label>
    <input v-model="artcile.autor" type="text" class="form-control" id="ArticleAutor">
  </div>
    <div class="col-md-6">
    <label for="escpition" class="form-label">Краткое описание</label>
    <textarea v-model="artcile.description" type="text" class="form-control" id="description"></textarea>
  </div>
  <div class="col-md-4">
    <label for="category" class="form-label">Категория</label>
    <select v-model="artcile.category" id="category" class="form-select">
      <option selected>Выберите категорию...</option>
      <option>Политика</option>
      <option>Экономика</option>
      <option>Общество</option>
      <option>Проишествия</option>
      <option>Наука</option>
      <option>Спорт</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="arcticleDate" class="form-label">Дата публикации</label>
    <input v-model="artcile.dateArticle" type="date" class="form-control" id="arcticleDate">
  </div>
  <div class="col-12">
    <label for="content" class="form-label">Контент</label>
    <textarea v-model="artcile.content" type="text" class="form-control" id="content" ></textarea>
  </div>
 


  <div class="col-12">
    <button v-on:click="addArticle" class="btn btn-primary">Сохранить</button>
  </div>
</form>
</template>

<script>
import adminmenu from '@/components/adminmenu'
export default {
    name: 'createArticle',
    components:{
        adminmenu
    },
    data(){
        return{
            artcile:{
               heading: '',
               content: '',
               autor: '',
               category: '',
               description: '',
               dateArticle: ' '
            }

        }
    },
    methods:{
        addArticle(){
                this.$store.commit('addArt', this.artcile)
        }
    }
}

</script>

<style scoped>
#content{
    height: 300px;
}
</style>