<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div class="other-page">
      <a href="/admin.html">{{selfKey1 | filterValue}}{{computedKay}}</a>
    </div>
    <router-link to="/home">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';

@Component({
  components: {},
  filters: {
    filterValue(value: any) {
      return value += '改变';
    },
  },
})
export default class App extends Vue {

  selfKey1: string = '用户登录'

  // 生命周期
  created() {
    console.log('我说create生命周期')
  }

  mounted() {
    this.changeTxt()
  }

  // 计算属性
  get computedKay() {
    return this.selfKey1.length;
  }

  @Watch('selfKey1')
  getSelfKey1(newVal: string, oldVal: string) {
    console.log(oldVal);
    console.log(newVal);
  }

  // 导航守卫函数
  public beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter', to, from, next);
    this.changeTxt();
  }
  public beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteUpdate'); // 暂时不生效，版本问题
  }
  public beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteLeave');
  }

  // 方法
  private changeTxt() {
    const timer = setTimeout(() => {
      this.selfKey1 += '我改变了';
      clearTimeout(timer);
    }, 1000)
  }

  @Watch('$route', { immediate: true })
  private changeRouter(route: Route): void {
    console.log(route)
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  font-size: 20px;
  margin: 0 10px;
  text-decoration: none
}
.other-page {
  margin: 20px 0;
  a {
    font-size: 20px;
    color: red;
    text-decoration: none
  }
}
</style>
