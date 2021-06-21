import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/switchDemo.vue'
import buttonDemo from './components/buttonDemo.vue'
import dialogDemo from './components/dialogDemo.vue'
import tabsDemo from './components/tabsDemo.vue'
import docDemo from './components/docDemo.vue'

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children:[
        {path: '',component: docDemo},
        {path: 'switch',component: switchDemo},
        {path: 'button',component: buttonDemo},
        {path: 'dialog',component: dialogDemo},
        {path: 'tabs',component: tabsDemo},
      ]}
  ]
});
router.afterEach(()=>{

})
