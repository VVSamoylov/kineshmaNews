import { createStore } from 'vuex'

export default createStore({
  state: {

    article: [{
      id: 123,
      heading: 'Статья первая',
      content: 'контент 1',
      autor: 'Бублико',
      category: 'Общество',
      description: 'Пожирание бублико',
      dateArticle: ' '
    },
    {
      id: 234,
      heading: 'Статья вторая',
      content: 'контент 2',
      autor: 'Колбаскин',
      category: 'Общество',
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
    }
  },
  getters:{
      getArticle: state => {
        return state.article
      }
  },
  modules: {
  }
})
