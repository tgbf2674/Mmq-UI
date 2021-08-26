import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/switchDemo.vue'
import buttonDemo from './components/buttonDemo.vue'
import dialogDemo from './components/dialogDemo.vue'
import tabsDemo from './components/tabsDemo.vue'
import card from './components/CardDemo.vue'
import icon from './components/IconDemo.vue'
import {h} from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
const history = createWebHashHistory();
const md= string => h(Markdown,{content: string,key: string})
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children:[
        {path: '', redirect: '/doc/intro' },
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component:md(install)},
        {path: 'switch',component: switchDemo},
        {path: 'button',component: buttonDemo},
        {path: 'dialog',component: dialogDemo},
        {path: 'tabs',component: tabsDemo},
        {path: 'card',component: card},
        {path: 'icon',component: icon}
      ]}
  ]
});
router.afterEach(()=>{

})
