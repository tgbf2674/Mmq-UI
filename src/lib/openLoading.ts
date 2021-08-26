import Loading from './Loading.vue'
import {createApp, h} from 'vue'
export const openLoading = (options) => {
  const {text, background} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(Loading, {
        loading: true,
        text,
        background,
      });
    }
  });
  app.mount(div);
  Object.assign(app, {'$close': close})
  return app;
}
