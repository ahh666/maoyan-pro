import Vue from 'vue'
import Toast from './Toast/index'

const context = require.context('./', true, /\.tsx$/)
// context.keys() 会返回一个数组，包含所有匹配到的文件的路径
context.keys().forEach((key) => {
  const component = context(key).default
  Vue.component(component.name, component)
})

Vue.use(Toast)