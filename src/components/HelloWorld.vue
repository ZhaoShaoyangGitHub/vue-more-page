<template>
  <el-row class="hello border-right">
    <h2 class="margin-bottom">子组件</h2>
    <el-row>
      <el-col :span=12 class="border-right">
        <h1>{{ msg }}</h1>
        <div>{{ propNumber }}</div>
      </el-col>
      <el-col :span=12>
        <el-button type="primary" @click="emitSendMsg">向父组件传递参数</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  subObj: object = {
    title: '我是子组件数据',
    count: 0,
  }
  @Prop(Number) readonly propNumber!: number;
  @Prop({default: 'HelloWorld'}) readonly msg!: string;
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  // 组件传递参数
  // @Emit(name: string),里面传递一个字符串,该字符串为要触发的事件名.
  @Emit()
  emitSendMsg() {
    this.reset();
    (this as any).subObj.count ++;
    return this.subObj
  }

  private reset() {
    console.log('reset');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
