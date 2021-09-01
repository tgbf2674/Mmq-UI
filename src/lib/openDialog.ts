import Dialog from './Dialog.vue'
import {createApp, h} from 'vue';
export const openDialog = (options: DialogOptions)=>{
  const {title,content,ok,cancel} = options
  const div = document.createElement('div')
  document.body.append(div)
  const close = ()=>{
    // @ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render(){
      return h(Dialog, {visible: true,
        'onUpdate:visible':(newVisible:any)=>{
          if(newVisible===false) {
            close()
          }
        },
        ok,cancel,
        }, {title(){
          return h('h2',title)
        },
        content(){
          return h('p',{
            style: {
              color: '#443456'
            }
          },content)
        }
    })
    }
  })
    app.mount(div)
}
