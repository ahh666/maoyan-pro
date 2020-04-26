import Vue, { VueConstructor } from 'vue'
import VueToast from './Toast.vue'

let queue: any[] = []
const createInstance = (opt: ToastOptions) => {
  const toast = new (Vue.extend(VueToast))({
    el: document.createElement('div'),
    data: opt
  })
  queue.push(toast.$el)
  return toast.$el
}

function Toast(opt: ToastOptions) {
  const toast = createInstance(opt)
  // queue.length > 1 && queue[0] != toast && document.body.removeChild(queue[0]) && queue.shift()
  document.body.appendChild(toast)
}
Toast.install = () => {
  Vue.prototype.$toast = Toast
}

export default Toast
