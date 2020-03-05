<template>
  <div class="about">
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
import { Component, Vue} from 'vue-property-decorator';
@Component({})
export default class About extends Vue {
  title: string = 'This is an about page'
  private created() {
   this.showToast();
  }
  private showToast() {
    (this as any).$toast(this.title, 2000);
  }
}
</script>>

<style lang="scss" scoped>
</style>