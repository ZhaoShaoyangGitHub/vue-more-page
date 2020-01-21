<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Component, Vue} from 'vue-property-decorator';
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
