import { createStore } from 'vuex'

export default createStore({
  state: {

    article: [{
      id: 123,
      heading: 'Статья первая',
      content: 'контент 1',
      autor: 'Бублико',
      category: '1',
      description: 'Пожирание бублико',
      dateArticle: ' '
    },
    {
      id: 234,
      heading: 'Статья вторая',
      content: 'контент 2',
      autor: 'Колбаскин',
      category: '2',
      description: 'Пожирание колбасы',
      dateArticle: ' '
    }

    ]
  },
  mutations: {
    addArt(state, playload){
      state.article.push(playload)
    }
  },
  actions: {
    saveArticle(state, payload){
      state.article.push(payload);        
    }
  },
  getters:{
      getArticle: state =>{
        return state.article
      }, 
      getArticleItem: state =>(id) =>{
        console.log(id)
        /*for(let i = 0; i < state.article.length; i++){
          console.log(state.article[i].id)
          if(state.article[i].id == id){
             return state.article[i]
          }
        } */
        return state.article.find(art => art.id == id)
      }
    
  },
  modules: {
  }
})
