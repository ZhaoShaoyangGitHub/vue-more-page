import toastcom from './toast.vue'
var toast = {}
toast.install = Vue => {
    let ToastCon = Vue.extend(toastcom)
    let ins = new ToastCon()
    ins.$mount(document.createElement('div'))  // 挂载到一个元素上
    document.body.appendChild(ins.$el)
    Vue.prototype.$toast = ({text, duration=3000}) => {
        ins.text = text
        ins.show = true
        let tiemr = setTimeout(() => {
            ins.show = false;
            clearTimeout(timer);
        }, duration)
    }
}
export default toast;