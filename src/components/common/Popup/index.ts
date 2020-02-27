import Vue, { VueConstructor } from 'vue'
import Popup from './Popup.vue'

const PopupCtor = Vue.extend(Popup)

const InitPopup = (opt: PopupOptions): void => {
  const duration = opt.autoClose !== false && (opt.duration || 2000)
  let i = new PopupCtor({
    data: opt
  }).$mount()

  document.body.appendChild(i.$el)

  duration && setTimeout(() => {
    document.body.removeChild(i.$el)
  }, duration)
}

const toast = (opt: PopupOptions) => {
  return InitPopup(opt)
}
const alert = (opt: PopupOptions) => {
  return InitPopup({
    autoClose: false,
    ...opt
  })
}

const install = () => {
  Vue.prototype.$popup = { toast, alert }
}

export default install
