import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchDemo from './components/demo/switchDemo.vue'
import buttonDemo from './components/demo/buttonDemo.vue'
import dialogDemo from './components/demo/dialogDemo.vue'
import tabsDemo from './components/demo/tabsDemo.vue'
import card from './components/demo/CardDemo.vue'
import icon from './components/demo/IconDemo.vue'
import input from './components/demo/InputDemo.vue'
import inputNumber from './components/demo/inputNumberDemo.vue'
import loading from './components/demo/LoadingDemo.vue'
import message from './components/demo/MessageDemo.vue'
import collapse from './components/demo/CollapseDemo.vue'
import spread from './components/demo/SpreadDemo.vue'
import radio from './components/demo/RadioDemo.vue'
import checkbox from './components/demo/CheckboxDemo.vue';
import dropdown from './components/demo/DropDownDemo.vue'
import tooltip from './components/demo/TooltipDemo.vue'
import swiper from './components/demo/SwiperDemo.vue'
import sticky from './components/demo/StickyDemo.vue'
import grid from './components/demo/GridDemo.vue'
import image from './components/demo/ImageDemo.vue'
import container from './components/demo/ContainerDemo.vue'
import link from './components/demo/LinkDemo.vue'
import tag from './components/demo/TagDemo.vue'
import badge from './components/demo/BadgeDemo.vue'
import empty from './components/demo/EmptyDemo.vue'
import result from './components/demo/ResultDemo.vue'
import breadcrumb from './components/demo/BreadcrumbDemo.vue'
import skeleton from './components/demo/SkeletonDemo.vue'
import alert from './components/demo/AlertDemo.vue'
import form from './components/demo/FormDemo.vue'
import backTop from './components/demo/BackTopDemo.vue';
import pagination from './components/demo/PaginationDemo.vue'
import select from './components/demo/SelectDemo.vue'
import Table from './components/demo/TableDemo.vue'
import {h} from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'
const history = createWebHashHistory();

const md= (string:string) => h(Markdown,{content: string,key: string})
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
        {path: 'icon',component: icon},
        {path: 'input',component: input},
        {path: 'inputNumber',component: inputNumber},
        {path: 'loading',component: loading},
        {path: 'message',component: message},
        {path: 'collapse',component: collapse},
        {path: 'spread',component: spread},
        {path: 'radio',component: radio},
        {path: 'checkbox',component: checkbox},
        {path: 'dropdown',component: dropdown},
        {path: 'tooltip',component: tooltip},
        {path: 'swiper',component: swiper},
        {path: 'sticky', component: sticky},
        {path: 'grid', component: grid},
        {path: 'image', component: image},
        {path: 'container', component: container},
        {path: 'link', component: link},
        {path: 'tag', component: tag},
        {path: 'badge', component: badge},
        {path: 'empty', component: empty},
        {path: 'result',component: result},
        {path: 'breadcrumb',component: breadcrumb},
        {path: 'skeleton', component: skeleton},
        {path: 'alert', component: alert},
        {path: 'form',component: form},
        {path: 'backTop',component: backTop},
        {path: 'pagination',component: pagination},
        {path: 'select',component: select},
        {path: 'table',component: Table}
      ]}
  ]
});
