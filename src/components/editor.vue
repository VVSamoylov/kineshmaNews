<template>
<div class="container">
    <div class="row">
        <form class="row g-3">
        <div class="col-md-6">
            <label for="articleHeader" class="form-label">Заголовок статьи</label>
            <input v-model="publishedHeader" type="text" class="form-control" id="articleHeader">
        </div>
        <div class="col-6">
            <label for="auterName" class="form-label">Автор</label>
            <input v-model="autor" type="text" class="form-control" id="auterName" >
        </div>
        <div class="col-6">
            <label for="preview" class="form-label">Текст предпросмотра</label>
            <textarea v-model="publishedPreview" class="form-control" id="preview" ></textarea>
        </div>
        <div class="col-md-2">
            <label for="articleData" class="form-label">Дата публикации</label>
            <input v-model="publishedDate" type="date" class="form-control" id="articleHeader">
        </div>

        <div class="col-md-3">
            <label for="categoryName" class="form-label">Категория</label>
            <select v-model="publishedCategory" id="categoryName" class="form-select">
            <option selected>Выберите категорию...</option>
            <option>Политика</option>
            <option>Экономика</option>
            <option>Общество</option>
            <option>Проиществия</option>
            <option>Наука</option>
            <option>Спорт</option>
            </select>
        </div>


        <div class="col-md-12">
            <label for="contentItem" class="form-label">Контент</label>
            <textarea  v-model="publishedBody" class="form-control" id="contentItem" ></textarea>
        </div>

        <div class="row  justify-content-end">
            <div class="col-3 pRight">
                <button  class="btn btn-primary">Сохранить</button>
                <button  class="btn btn-danger">Закрыть</button>
            </div>
        
        </div>
        </form>
    </div>
</div>
</template>

<script>

  export default {
    name: 'editor',
    data() {
      return {
          autor: '',
          publishedDate: Date,
          publishedHeader: '',
          publishedBody: '',
          publishedPreview: '',
          publishedCategory: ''
      }
    } 
    
  };
</script>

<style scoped>
button{
    margin-right: 0px;
    margin-left: 2px;
}
label{
    font-weight: bold;
}
.pRight{
    padding-top: 15px;
  
}
#contentItem{
    height: 300px;
}
</style>