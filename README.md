# kineshmanews

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Подключение github ##
 * git remote add origin git@github.com:VVSamoylov/kineshmaNews.git 
 * git push origim master
 ## добавляем boostrap в проект ##
 * npm install bootstrap
 * npm install @popperjs/core
[ссылка на инструкцию] (https://www.youtube.com/watch?v=oZ9zlS5V5WU)
 * add main.js 
 * import 'bootstrap/dist/css/bootstrap.css' 
* остальное как обычно в проекте
* import { createApp } from 'vue'
* import App from './App.vue'
* import router from './router'
* import store from './store'
* createApp(App).use(store).use(router).mount('#app') 
* внизу добавляем javascript от boostrap
* import 'bootstrap/dist/js/bootstrap.js'
* добавить firebase  npm install firebase   vue create freebase-authcd  
veniaminsamoylov@gmail.com


