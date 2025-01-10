<template>
  <div class="watu-wrapper">
    <template  v-for="(table, index) in tabOptions" :key="table.label">
      <table class="table">
        <tr>
          <td><el-input v-model="zbValue[index][0]"></el-input>{{index}}</td>
          <td><el-input v-model="zbValue[index][1]"></el-input></td>
          <td><el-input v-model="zbValue[index][2]"></el-input></td>
          <td><el-input v-model="zbValue[index][3]"></el-input></td>
          <td><el-input v-model="zbValue[index][4]"></el-input></td>
        </tr>
        <tr>
          <td><el-input v-model="zbValue[index][5]"></el-input></td>
          <td><el-input v-model="zbValue[index][6]"></el-input></td>
          <td><el-input v-model="zbValue[index][7]"></el-input></td>
          <td><el-input v-model="zbValue[index][8]"></el-input></td>
          <td><el-input v-model="zbValue[index][9]"></el-input></td>
        </tr>
        <tr>
          <td><el-input v-model="zbValue[index][10]"></el-input></td>
          <td><el-input v-model="zbValue[index][11]"></el-input></td>
          <td><el-input v-model="zbValue[index][12]"></el-input></td>
          <td><el-input v-model="zbValue[index][13]"></el-input></td>
          <td><el-input v-model="zbValue[index][14]"></el-input></td>
        </tr>
        <tr>
          <td> <el-input v-model="zbValue[index][15]"></el-input></td>
          <td> <el-input v-model="zbValue[index][16]"></el-input></td>
          <td> <el-input v-model="zbValue[index][17]"></el-input></td>
          <td> <el-input v-model="zbValue[index][18]"></el-input></td>
          <td> <el-input v-model="zbValue[index][19]"></el-input></td>
        </tr>
      </table>
    </template>


    <div class="tabs">
      <div class="tab" @click="tabClick(index)" :class="{ active: current === index }" v-for="(tab, index) in tabOptions" :key="index">{{tab.label}}</div>
    </div>

    <div class="map">

    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'

defineOptions({
  name: 'Watu'
})

const current = ref(0)
const tabOptions = ref([
  { label: 'AAA', value: 0 },
  { label: 'BBB', value: 1 },
  { label: 'CCC', value: 2 },
  { label: 'DDD', value: 3 },
  { label: 'EEE', value: 4 },
  { label: 'FFF', value: 5 },
  { label: 'GGG', value: 6 },
  { label: 'HHH', value: 7 },
  { label: 'III', value: 8 },
  { label: 'JJJ', value: 9 },
  { label: 'KKK', value: 10 },
  { label: 'LLL', value: 11 },
  { label: 'MMM', value: 12 },
  { label: 'NNN', value: 13 },
  { label: 'OOO', value: 14 },
  { label: 'PPP', value: 15 },
])

// const tabOptions = ref([
//   { label: '朱紫国', value: 0 },
//   { label: '傲来国', value: 1 },
//   { label: '女儿村', value: 2 },
//   { label: '建邺城', value: 3 },
//   { label: '花果山', value: 4 },
//   { label: '东海湾', value: 5 },
//   { label: '大唐国境', value: 6 },
//   { label: '普陀山', value: 7 },
//   { label: '麒麟山', value: 8 },
//   { label: '狮驼岭', value: 9 },
//   { label: '墨家村', value: 10 },
//   { label: '北俱芦洲', value: 11 },
//   { label: '长寿郊外', value: 12 },
//   { label: '江南野外', value: 13 },
//   { label: '五庄观', value: 14 },
//   { label: '大唐境外', value: 15 },
// ])

const zbValue = ref([
    ...Array.from({length: 16}).fill(Array.from({length: 20}, () => '').slice())
])

const tabClick = (idx) => {
  current.value = idx
  console.log(zbValue.value[idx])
}


// onMounted(() => {
//   zbValue.value = Array.from({length: 16}).fill(Array.from({length: 20}, () => ''))
//   console.log(zbValue.value)
// })

</script>

<style lang="stylus" scoped>
.watu-wrapper
  display: flex
  align-items: center
  flex-wrap: wrap
  .table
    width: 500px
    border-collapse: collapse
    border-left: 1px solid #000
    border-top: 1px solid #000
    margin: 20px
    tr
      height: 50px
      //line-height: 40px
      td
        //width: 100px
        //padding: 0 5px
        border-bottom: 1px solid #000
        border-right: 1px solid #000
  .tabs
    width: 250px
    height: 300px
    display: flex
    flex-wrap: wrap
    .tab
      margin: 5px
      flex: 0 0 100px
      height: 50px
      border: 2px solid coral
      color: #000
      text-align: center
      line-height: 50px
      cursor: pointer
      &.active
        background-color: coral
        color: #fff
</style>
