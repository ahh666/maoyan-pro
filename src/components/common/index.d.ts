interface TabBarList {
  /** nav图标 */
  name: string,
  text: string,
  /** 要跳转的url */
  to: string
}
interface ToastOptions {
  text?: string,
  duration?: number,
  icon?: string,
  image?: string,
  countdown?: number
}
interface DialogOptions {
  text?: string,
  duration?: number,
  showBtn?: boolean,
  autoClose?: boolean,
  showCancelBtn?: boolean,
  confirmText?: string,
  cancelText?: string
}