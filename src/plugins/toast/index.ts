import toastComponent from './index.vue'

class Toast {
    install(Vue: any) {
        const ToastCon = Vue.extend(toastComponent)
        const ins = new ToastCon()
        ins.$mount(document.createElement('div'))  // 挂载到一个元素上
        document.body.appendChild(ins.$el)
        Vue.prototype.$toast = (text: string, duration: number = 3000) => {
            ins.text = text
            ins.show = true
            const timer = setTimeout(() => {
                ins.show = false;
                clearTimeout(timer);
            }, duration)
        }
    }
}
const toast = new Toast()
export default toast;
