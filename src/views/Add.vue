<template>
  <div class='form-element'>
    <h2> {{ state.title }} </h2>
      <p><input type='text' v-model='state.name' placeholder='产品名称'/></p>
      <p><input type='text' v-model='state.brand' placeholder='品牌' /></p>
      <p><input type='text' v-model='state.manufacturingDate' placeholder='生产日期' /></p>
      <p><input type='text' v-model='state.expiryDate' placeholder='过期日期' /></p>
      <p><input type='text' v-model='state.keepDate' placeholder='保值期' /></p>
      <p><input type='text' v-model='state.wegth' placeholder='计量' /></p>
      <p><input type='text' v-model='state.sub' placeholder='大类' /></p>
      <!-- <p><input type='text' v-model='state.tub' placeholder='小类' /></p> -->
      <p><input type='text' v-model='state.tag' placeholder='tag' /></p>
      <p><button @click='add'> Submit </button></p>
    <p>  Values: {{ state.name + ' ' + state.manufacturingDate }} </p>
  </div>
</template>
<script>
  import { ref, reactive } from 'vue'
  import api from '@/api/index.js'
  


  export default {
    setup () {
      const count = ref(0)
      const add = () => {
        count.value++
        let data = {
          name: state.name,
          brand: state.brand,
          manufacturingDate: state.manufacturingDate,
          expiryDate: state.expiryDate,
          keepDate: state.keepDate,
          wegth: state.wegth,
          sub: state.sub,
          tub: state.tub,
          tag: state.tag,
        }
        console.log('add ', state)
        // 为属性赋值
        let res = api.itemApi.addItem(data)
        console.log('add', data, res)

      }
      const state = reactive({
        title: '赶紧加上，别过期了',
        name: '',
        brand: '',
        manufacturingDate: '',
        expiryDate: '',
        keepDate: '',
        wegth: '',
        sub: '',
        tub: '',
        tag: '',
      })
      return {
        count,
        add,
        state
      }
    }
  }
</script>
