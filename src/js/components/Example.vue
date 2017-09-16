<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-radio class="radio" v-model="radio" label="1">備選項1</el-radio>
    <el-radio class="radio" v-model="radio" label="2">備選項2</el-radio>
    <el-radio class="radio" v-model="radio" label="3">備選項3</el-radio>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'This is a Example',
        radio: '2'
      }
    }
  }
</script>