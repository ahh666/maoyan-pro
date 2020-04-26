import Vue, { VueConstructor } from 'vue'
import Toast from './Dialog.vue'

const ToastCtor = Vue.extend(Toast)

const InitToast = (opt: DialogOptions): void => {
  const duration = opt.autoClose !== false && (opt.duration || 2000)
  let i = new ToastCtor({
    data: opt
  }).$mount()

  document.body.appendChild(i.$el)

  duration && setTimeout(() => {
    document.body.removeChild(i.$el)
  }, duration)
}

const toast = (opt: DialogOptions) => {
  return InitToast(opt)
}
const alert = (opt: DialogOptions) => {
  return InitToast({
    autoClose: false,
    ...opt
  })
}

const install = () => {
  Vue.prototype.$popup = { toast, alert }
}

export default install
