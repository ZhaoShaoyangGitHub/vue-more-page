import LoadingComponent from './index.vue';

class Loading {
    install(Vue: any) {
        const loadingCom = Vue.extend(LoadingComponent);
        const ins = new loadingCom();
        ins.$mount(document.createElement('div'));  // 挂载到一个元素上
        document.body.appendChild(ins.$el);
        Vue.prototype.$loading = {
            show() {
                ins.show = true;
            },
            hide() {
                ins.show = false;
            },
        };
    }
}
const loading = new Loading();

export default loading;
