import Message from './Message.vue'
import {createApp,h} from 'vue'


export const openMessage = (options) => {
  const {message, type, canClose, displayTime, top=10} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
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
  // app.$close = close;
  return app;
};
