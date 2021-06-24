import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/switchDemo.vue'
import buttonDemo from './components/buttonDemo.vue'
import dialogDemo from './components/dialogDemo.vue'
import tabsDemo from './components/tabsDemo.vue'
import docDemo from './components/docDemo.vue'
import {h} from 'vue'
import Markdown from './components/Markdown.vue'
const history = createWebHashHistory();
const md= filename => h(Markdown,{path: `../markdown/${filename}.md`,key: filename})
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children:[
        {path: '',component: docDemo},
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component:md('install')},
        {path: 'switch',component: switchDemo},
        {path: 'button',component: buttonDemo},
        {path: 'dialog',component: dialogDemo},
        {path: 'tabs',component: tabsDemo},
      ]}
  ]
});
router.afterEach(()=>{

})
