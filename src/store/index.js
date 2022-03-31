import { createStore } from 'vuex'

export default createStore({
  state: {
    article:  [{
      heading: 'test getters',
      autor: 'Куприн',
      description: 'Гранатовый браслет рассказ',
      artBody: 'Рассказ о гранатовом браслете',
      artDate: new Date()
    },{
      heading: 'Заголовок 2',
      autor: 'Чехов',
      description: 'Гроза рассказ',
      artBody: 'Рассказ о грозе',
      artDate: new Date()
    }]
  },
  mutations: {
    addArticle(state, payload){
      state.article.push(payload);
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
  modules: {
  }
})
