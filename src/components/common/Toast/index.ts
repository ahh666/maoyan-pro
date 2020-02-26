import Vue, { VueConstructor } from 'vue'
import Toast from './Toast.vue'

const ToastCtor = Vue.extend(Toast)

const InitToast = (opt: any) => {
  const duration = opt.duration || 9000
  let i = new ToastCtor({
    data: opt
  }).$mount()
  
  document.body.appendChild(i.$el)

  setTimeout(() => {
    document.body.removeChild(i.$el)
  }, duration)
}

export default InitToast
