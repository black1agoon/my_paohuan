<template>
  <div class="watu-wrapper">
      <div v-show="leftShow"  v-for="(table, index) in tabOptions" :key="table.label">
        <table class="table" v-if="current === index">
          <tbody>
          <tr>
            <td><el-input v-model="zbValue[index][0]"></el-input></td>
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
          </tbody>

        </table>
      </div>

    <div class="center-wrap">
      <div class="button-wrap">
        <el-button class="button" type="primary" @click="save">保存</el-button>
        <el-button class="button" @click="clear">清空</el-button>
      </div>
      <div class="tabs">
        <div class="tab" @click="tabClick(index)" :class="{ active: current === index }" v-for="(tab, index) in tabOptions" :key="index">{{tab.label}}</div>
      </div>
      <div class="">
        <el-button class="button_toggle-show" type="primary" @click="toggleLeft">{{leftShow ? '收缩' : '展开'}}</el-button>
      </div>
    </div>


    <div class="map-wrap">
      <div class="map" :style="{
        width: tabOptions[current].width + 'px',
        height: tabOptions[current].height + 'px',
        background: `url(${tabOptions[current].pic})`
      }">
        <template v-for="(point, idx) in mapPoints" :key="idx">
          <div class="point"  v-if="point.x !== '' && point.x >= 0 && zbIsShow[current][idx]"  :style="{ left: point.left, bottom: point.bottom }" >
            <div class="zb-wrap">
              <div class="index">{{idx + 1}}</div>
<!--              <div class="zb">({{point.x}},{{point.y}})</div>-->
            </div>
          </div>
        </template>

      </div>
      <div class="zb-index">
        <div class="zb" @click="zbClick(current, idx)" :class="{hidden: !zbIsShow[current][idx]}"  v-for="(point, idx) in mapPoints" :key="idx">
          <span class="idx">{{idx + 1}}</span><span v-if="point.x && zbIsShow[current][idx]">({{point.x}},{{point.y}})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {computed, onMounted, ref} from 'vue'
import {ElMessage, ElMessageBox} from "element-plus"
import pic1 from '@/assets/img/朱紫国.jpg'
import pic2 from '@/assets/img/傲来国.jpg'
import pic3 from '@/assets/img/女儿村.jpg'
import pic4 from '@/assets/img/建邺城.jpg'
import pic5 from '@/assets/img/花果山.jpg'
import pic6 from '@/assets/img/东海湾.jpg'
import pic7 from '@/assets/img/大唐国境.jpg'
import pic8 from '@/assets/img/普陀山.jpg'
import pic9 from '@/assets/img/麒麟山.jpg'
import pic10 from '@/assets/img/狮驼岭.jpg'
import pic11 from '@/assets/img/墨家村.jpg'
import pic12 from '@/assets/img/北俱芦洲.jpg'
import pic13 from '@/assets/img/长寿郊外.jpg'
import pic14 from '@/assets/img/江南野外.jpg'
import pic15 from '@/assets/img/五庄观.jpg'
import pic16 from '@/assets/img/大唐境外.jpg'

defineOptions({
  name: 'Watu'
})

const mapPoints = computed(() => {
  return zbValue.value[current.value].map(item => {
    let array = item.split(' ')
    let x = tabOptions.value[current.value].x
    let y = tabOptions.value[current.value].y
    return {
      left: (array[0]-3)/x*100 + '%',
      bottom: (array[1]-3)/y*100 + '%',
      x: array[0],
      y: array[1]
    }
  })
})


const current = ref(0)


const tabOptions = ref([
  { label: '朱紫国', value: 0, width: 836, height: 546, pic: pic1, x: 192, y: 119},
  { label: '傲来国', value: 1, width: 767, height: 537, pic: pic2, x: 223, y: 150},
  { label: '女儿村', value: 2, width: 468, height: 547, pic: pic3, x: 127, y: 143},
  { label: '建邺城', value: 3, width: 828, height: 431, pic: pic4, x: 287, y: 143},
  { label: '花果山', value: 4, width: 678, height: 527, pic: pic5, x: 159, y: 119},
  { label: '东海湾', value: 5, width: 520, height: 542, pic: pic6, x: 119, y: 119},
  { label: '大唐国境', value: 6, width: 544, height: 544, pic: pic7, x: 351, y: 334},
  { label: '普陀山', value: 7, width: 690, height: 536, pic: pic8, x: 95, y: 71},
  { label: '麒麟山', value: 8, width: 685, height: 536, pic: pic9, x: 190, y: 142},
  { label: '狮驼岭', value: 9, width: 696, height: 540, pic: pic10, x: 131, y: 98},
  { label: '墨家村', value: 10, width: 290, height: 556, pic: pic11, x: 95, y: 167},
  { label: '北俱芦洲', value: 11, width: 690, height: 531, pic: pic12, x: 227, y: 169},
  { label: '长寿郊外', value: 12, width: 587, height: 534, pic: pic13, x: 191, y: 166},
  { label: '江南野外', value: 13, width: 683, height: 532, pic: pic14, x: 159, y: 119},
  { label: '五庄观', value: 14, width: 707, height: 551, pic: pic15, x: 99, y: 74},
  { label: '大唐境外', value: 15, width: 857, height: 154, pic: pic16, x: 637, y: 118},
])

const zbValue = ref([
    ...Array.from({length: 16}).map(() => Array.from({length: 20}, () => ''))
])

const zbIsShow = ref([
  ...Array.from({length: 16}).map(() => Array.from({length: 20}, () => true))
])


const tabClick = (idx) => {
  current.value = idx
}

const save = () => {
  window.localStorage.setItem('zbValue', JSON.stringify(zbValue.value))
  ElMessage({
    type: 'success',
    message: '保存成功!'
  })
}

const clear = () => {
  ElMessageBox.confirm(`是否清空？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    zbValue.value = [
      ...Array.from({length: 16}).map(() => Array.from({length: 20}, () => ''))
    ]
    window.localStorage.setItem('zbValue', JSON.stringify(zbValue.value))
  })
}

const zbClick = (current, idx) => {
  zbIsShow.value[current][idx] = !zbIsShow.value[current][idx]
}


const leftShow = ref(true)
const toggleLeft = () => {
  leftShow.value = !leftShow.value
}

onMounted(() => {
  zbValue.value = JSON.parse(window.localStorage.getItem('zbValue') || JSON.stringify([
    ...Array.from({length: 16}).map(() => Array.from({length: 20}, () => ''))
  ]))
})

</script>

<style lang="stylus" scoped>
.watu-wrapper
  display: flex
  //align-items: center
  flex-wrap: nowrap
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
  .center-wrap
    display: flex
    flex-direction: column
  .button-wrap
    margin: 0 5px 50px
    display: flex
    .button
      width: 100px
      height: 40px
  .button_toggle-show
    width: 200px
    height: 200px
    margin: 10px 5px
    font-size: 20px
    font-weight: bold
  .tabs
    width: 250px
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
  .map-wrap
    flex: 0 0 1000px
    position: relative
    .map
      position: relative
      .point
        position: absolute
        width: 20px
        height: 20px
        background: red
        border-radius: 50%
        .zb-wrap
          position: absolute
          left: 30px
          top: -5px
          color: red
          font-weight: bold
          display: flex
          align-items: center
          .index
            font-size: 28px
            margin-right: 10px
          .zb
            font-size: 18px
            color: #f7ba2a
    .zb-index
      display: flex
      flex-wrap: wrap
      width: 800px
      border-left: 1px solid #999
      .zb
        padding: 10px 0
        flex: 0 0 150px
        display: flex
        border-bottom: 1px solid #999
        border-right: 1px solid #999
        &.hidden
          background: rgba(0, 0, 0, .5)
      .idx
        color: #fff
        background: red
        display: block
        border-radius: 100%
        width: 20px
        height: 20px
        text-align: center
        line-height: 20px
        margin: 0 10px
</style>
