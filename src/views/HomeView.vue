<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">
        <div class="item">当前环数：{{steps.length + 1}}</div>
        <div class="item">积分：{{points}}</div>
        <div class="item">花费：{{money}}</div>
      </div>
      <div class="body">
        <div class="btn-wrap" v-for="(btn, index) in data" :key="index" >
          <el-button class="btn"@click="buttonClick(btn)">{{btn.label}}<span v-if="btn.count > 0">({{btn.count}})</span></el-button>
        </div>
      </div>
      <div class="footer">
        <el-button @click="back">回退</el-button>
        <el-button type="primary" @click="clear">清空</el-button>
        <el-button type="success" @click="save">保存</el-button>
      </div>
    </div>
    <div class="steps">
      <div class="step" v-for="(step, index) in steps" :key="index">第{{index+1}}环:{{step.label}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const data = [
  {
    label: '找人',
    points: 1,
    money: 0,
    count: 0
  },
  {
    label: '3药',
    points: 2,
    money: 12999,
    count: 0
  },
  {
    label: '60武器',
    points: 2,
    money: 220000,
    count: 0
  },
  {
    label: '60装备',
    points: 2,
    money: 200000,
    count: 0
  },
  {
    label: '70武器',
    points: 3,
    money: 95000,
    count: 0
  },
  {
    label: '70装备',
    points: 3,
    money: 80000,
    count: 0
  },
  {
    label: '80武器',
    points: 5,
    money: 520000,
    count: 0
  },
  {
    label: '80装备',
    points: 5,
    money: 450000,
    count: 0
  },
  {
    label: '1J家具',
    points: 2,
    money: 19999,
    count: 0
  },
  {
    label: '2J家具',
    points: 5,
    money: 25555,
    count: 0
  },
  {
    label: '花',
    points: 4,
    money: 29999,
    count: 0
  },
  {
    label: '乐器',
    points: 4,
    money: 55555,
    count: 0
  },
  {
    label: '烹饪',
    points: 2,
    money: 10000,
    count: 0
  },
  {
    label: '指定变异',
    points: 10,
    money: 6000000,
    count: 0
  },
  {
    label: '非指定变异',
    points: 5,
    money: 1600000,
    count: 0
  },
  {
    label: '上交普通',
    points: -15,
    money: 5000,
    count: 0
  }
]

const steps = ref([])

const points = computed(() => {
  return steps.value.reduce((result, current) => {
    result += current.points * current.count
    return result
  }, 0)
})

const money = computed(() => {
  return steps.value.reduce((result, current) => {
    result += current.money * current.count
    return result
  }, 0)
})

const buttonClick = btn => {
  btn.count++
  steps.value.push(btn)
}

const back = () => {
  if (steps.value.length === 0) {
    return
  }
  let item = steps.value.pop()
  let index = data.findIndex(d => d.label === item.label)
  data[index].count--
}

const clear = () => {
  ElMessageBox.confirm(`是否清空？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    steps.value = []
    window.localStorage.setItem('stepData', JSON.stringify([]))
  })
}

const save = () => {
  window.localStorage.setItem('stepData', JSON.stringify(steps.value))
  ElMessage({
    type: 'success',
    message: '保存成功!'
  })
}

onMounted(() => {
  steps.value = JSON.parse(window.localStorage.getItem('stepData') || '[]')
})

</script>

<style lang="stylus" scoped>
.wrapper
  display: flex
  .content
    width: 500px
    border: 1px solid #000
    padding: 20px
    .header
      display: flex
      .item
        font-size: 18px
        flex: 1
    .body
      display: flex
      flex-wrap: wrap
      margin: 30px 0
      .btn
        width: 200px
        margin-bottom: 20px
        margin-right: 20px
    .footer
      display: flex
      justify-content: space-around
      .el-button
        width: 100px
  .steps
    margin-left: 20px
</style>
