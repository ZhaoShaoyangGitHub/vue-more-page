import toastcom from './toast.vue'
var toast = {}
toast.install = vue => {
    let ToastCon = vue.extend(toastcom)
    let ins = new ToastCon()
    ins.$mount(document.createElement('div'))  // 挂载到一个元素上
    document.body.appendChild(ins.$el)
    vue.prototype.$toast = ({text, duration=3000}) => {
        ins.text = text
        ins.show = true
        let tiemr = setTimeout(() => {
            ins.show = false;
            clearTimeout(timer);
        }, duration)
    }
}
export default toast;