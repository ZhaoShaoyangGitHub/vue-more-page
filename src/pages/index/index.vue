<template>
  <div id="app">
    <el-container class="app-container">
      <el-aside width="200px" class="app-aside">
        <el-row>
          <el-col :span="24">
            <img alt="Vue logo" src="@/assets/logo.png" width="100%">
          </el-col>
        </el-row>
        <el-col :span="24" class="nav-link">
          <router-link to="/home"><el-button type="primary" plain>当前页面HOME</el-button></router-link>
        </el-col>
        <el-col :span="24" class="nav-link">
          <router-link to="/about"><el-button type="primary" plain>当前页面ABOUT</el-button></router-link>
        </el-col>
        <el-col :span="24" class="nav-link">
          <a href="/admin.html"><el-button type="warning" plain>{{selfKey1 | filterValue}}{{computedKay}}</el-button></a>
        </el-col>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
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

  selfKey1: string = 'admin page'

  // 生命周期
  created() {
    console.log('我是create生命周期')
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
    console.log(oldVal, newVal);
  }

  // 导航守卫函数
  public beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter', to, from, next);
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
      this.selfKey1 += '--';
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
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active .el-button--primary.is-plain {
  color: #f56c6c;
}

.app-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.app-aside {
  padding: 40px 20px;
  border-right: 1px solid rgb(230, 162, 60);
}

.nav-link {
  margin-top: 40px;
}
</style>
