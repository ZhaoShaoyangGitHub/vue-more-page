<template>
  <transition name="alert-fade">
    <div id="toast" v-show="show" class="dialog-body">
        <div>{{text}}</div>
    </div>
  </transition>
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    text: String,
  },
})
export default class ToastComponent extends Vue {
  private show: boolean = false
}
</script>
<style lang="scss" scoped>
.alert-fade-enter-active, .alert-fade-leave-active {
  transition: opacity 0.3s;
}
.alert-fade-enter, .alert-fade-leave-to {
  opacity: 0;
}
.dialog-body {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>