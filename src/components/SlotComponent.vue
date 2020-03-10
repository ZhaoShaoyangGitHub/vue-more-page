<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="props" :slotProp="slotProp"></slot>
    </div>
    <div>
      <slot name="dynamic"></slot>
    </div>
    <div>
      <slot name="footer" :slotTitle="slotTitle"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
@Component({})
export default class SlotComponent extends Vue {
  slotTitle: string = 'slot子组件数据传递到父组件'
  slotProp: object = {
    title: '解构插槽Prop',
  }
  private created() {}
  private showToast() {
    (this as any).$toast(this.slotTitle, 2000);
  }
}
</script>>

<style lang="scss" scoped>
</style>