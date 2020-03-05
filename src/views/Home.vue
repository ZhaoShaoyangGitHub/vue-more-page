<template>
  <div class="home">
    <el-alert
      class="info-text"
      title="Welcome to Your Vue.js + TypeScript App"
      type="info"
      center
      show-icon>
    </el-alert>
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import { Component, Vue } from 'vue-property-decorator';
  @Component({
    components: {
      HelloWorld,
    },
  })

  export default class Home extends Vue {
    title: string = 'This is an home page'
    private created() {
      this.showLoading();
    }
    private showLoading() {
      (this as any).$loading.show();
      setTimeout(() => {
        (this as any).$loading.hide();
      }, 3000)
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
    margin-bottom: 50px!important;
  }
</style>