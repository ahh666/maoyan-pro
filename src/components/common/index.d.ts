interface TabBarList {
  /** nav图标 */
  name: string,
  text: string,
  /** 要跳转的url */
  to: string
}
interface PopupOptions {
  text?: string,
  duration?: number,
  showBtn?: boolean,
  autoClose?: boolean,
  showCancelBtn?: boolean,
  confirmText?: string,
  cancelText?: string
}