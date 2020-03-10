<template>
  <div class="home">
    <el-alert class="info-text" title="Welcome to Your Vue.js + TypeScript App" type="info" center show-icon>
    </el-alert>
    <el-row align='middle' class="margin-top">
      <el-col :span="8">
        <h2 class="margin-bottom">方法</h2>
        <el-button type="primary" @click="showLoading">弹出loading层</el-button>
      </el-col>
      <el-col :span="16" class="border-left">
        <el-button type="primary" @click="changeTxt">1秒后改变上面的标题</el-button>
        <h1 class="margin-top">{{title | filterValue}}------{{computedTitleLength}}</h1>
        <p class="margin-top">计算属性set：{{computedSetFunction}}</p>
      </el-col>
    </el-row>
    <el-row class="margin-top border-top padding-bottom border-bottom hidden">
      <h2 class="margin-top margin-bottom">父子组件之间的传递数据，@emit @prop</h2>
      <el-col :span="16" class="padding-top">
        <HelloWorld msg="我是父组件数据" @emit-send-msg=getMsg></HelloWorld>
      </el-col>
      <el-col :span="8" class="padding-top padding-left padding-right">
        <h2 class="margin-bottom">父组件</h2>
        <el-alert :title=subComponents type="success" :closable=false center></el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import { Component, Vue, Watch } from 'vue-property-decorator';
  @Component({
    components: {
      HelloWorld,
    },

    filters: {
      filterValue(value: any) {
        return value += '字符串长度';
      },
    },
  })

  export default class Home extends Vue {
    title: string = 'This is an home page'
    computedSetFunction: number = 0
    subComponents: string = '待传组件数据'

    // 监听数据
    @Watch('title')
    getTitle(newVal: string, oldVal: string) {
      console.log(oldVal, newVal);
    }

    private created() {}

    private mounted() {}

    // 计算属性
    get computedTitleLength() {
      return this.title.length;
    }
    set computedTitleLength(newValue: any) {
      this.computedSetFunction += newValue
    }

    // 方法
    private changeTxt() {
      const timer = setTimeout(() => {
        this.title += '-'
        clearTimeout(timer)
        this.computedTitleLength = 1
      }, 10)
    }
    private showLoading() {
      (this as any).$loading.show();
      setTimeout(() => {
        (this as any).$loading.hide();
      }, 3000)
    }
    private getMsg(val: any) {
      this.subComponents = val.title + val.count
    }
  }
</script>

<style lang="scss">
  .info-text .el-alert__icon {
    font-size: 24px;
    width: 24px;
  }

  .info-text .el-alert__title {
    font-size: 30px;
    line-height: 2;
  }

  .info-text {
    margin-bottom: 50px !important;
  }

  .hidden {
    overflow: hidden;
  }
  
  $directions: 'left', 'right', 'top', 'bottom';

  @each $direction in $directions {
    .border-#{$direction} {
      border-#{$direction}: 1px solid #e6a23c;
    } 

    .margin-#{$direction}{
      margin-#{$direction}: 20px;
    }

    .padding-#{$direction}{
      padding-#{$direction}: 20px;
    }
  }

</style>