import Message from './Message.vue'
import {createApp,h} from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export const openMessage = (options: MessageOptions) => {
    const {message, type, canClose, displayTime = 3, top = 10} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
      if (div) {
        app.unmount();
        div.remove();
      }
    };
    const app = createApp({
      render() {
        return h(Message, {
          message,
          type,
          canClose,
          close,
          top
        });
      }
    });
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
    setTimeout(() => {
        close();
    }, displayTime! * 1000);
    app.mount(div);
};
