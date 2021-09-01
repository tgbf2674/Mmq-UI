
import Message from './Message.vue'
import {createApp,h} from 'vue'

export const openMessage = (options: MessageOptions) => {
    const {message, type, canClose, displayTime = 3, top = 10} = options;
    const div = document.createElement('div');
    div.id = 'fuck'
    document.body.appendChild(div);
    const close = () => {
      if (div) {
        app.unmount(div);
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
    setTimeout(() => {
      if (displayTime) {
        close();
      }
    }, displayTime! * 1000);
    app.mount(div);
};
