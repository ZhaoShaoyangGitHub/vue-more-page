<template>
  <div>
    <el-alert
      class="info-text"
      title="Welcome to Your Vue.js + TypeScript App + Slot"
      type="info"
      center
      show-icon
      :closable=false>
    </el-alert>
    <el-row class="padding-top padding-bottom border-top border-bottom">
      <!-- slot默认插槽 -->
      <el-col :span="11">
        <div class="text font-size-2">
          <SlotComponent>
            <template>
              {{ slotMsg1 }}
            </template>
          </SlotComponent>
        </div>
      </el-col>
      <!-- slot具名插槽 -->
      <el-col :span="11" :offset="2">
        <div class="text font-size-2">
          <SlotComponent>
            <template v-slot:header>
              {{ slotMsg2 }}
            </template>
          </SlotComponent>
        </div>
      </el-col>
    </el-row>
    <!-- v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 # -->
    <el-row class="padding-top padding-bottom border-bottom">
      <!-- slot作用域插槽 -->
      <el-col :span="11">
        <div class="text font-size-2">
          <SlotComponent>
            <template #footer="slotProps">{{ slotProps.slotTitle }}</template>
          </SlotComponent>
        </div>
      </el-col>
      <el-col :span="11" :offset="2">
        <div class="text font-size-2">
          <SlotComponent v-slot:props="{ slotProp }">{{ slotProp.title }}</SlotComponent>
        </div>
      </el-col>
    </el-row>
    <el-row class="padding-top padding-bottom border-bottom">
      <!-- slot动态插槽名 -->
      <el-col :span="11">
        <div class="text font-size-2">
          <SlotComponent>
            <template #[slotDynamic.attr]> {{ slotDynamic.str }} </template>
          </SlotComponent>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import SlotComponent from '@/components/SlotComponent.vue'
@Component({
  components: {
    SlotComponent,
  },
})

export default class SlotPage extends Vue {
  title: string = 'This is an slot page'
  slotMsg1: string = '我是父组件slotPage默认插槽数据'
  slotMsg2: string = '我是父组件slotPage具名插槽数据'
  slotDynamic: object = {
    attr: 'dynamic',
    str: 'slot动态插槽名',
  }
  private created() {}
  private showToast() {
    (this as any).$toast(this.title, 2000);
  }
}
</script>>

<style lang="scss" scoped>
  .text {
    width: 100%;
    padding: 20px;
    margin: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #FFF;
    overflow: hidden;
    background-color: #f0f9eb;
    color: #67C23A;
    text-align: left;
  }
</style>