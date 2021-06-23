import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/switchDemo.vue'
import buttonDemo from './components/buttonDemo.vue'
import dialogDemo from './components/dialogDemo.vue'
import tabsDemo from './components/tabsDemo.vue'
import docDemo from './components/docDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children:[
        {path: '',component: docDemo},
        {path: 'intro', component: Intro},
        {path: 'get-started', component: GetStarted},
        {path: 'install', component: Install},
        {path: 'switch',component: switchDemo},
        {path: 'button',component: buttonDemo},
        {path: 'dialog',component: dialogDemo},
        {path: 'tabs',component: tabsDemo},
      ]}
  ]
});
router.afterEach(()=>{

})
