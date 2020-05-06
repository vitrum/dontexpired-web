<template>
  <div class='form-element'>
    <h2> {{ state.title }} </h2>
      <div><input type='text' v-model='state.name' placeholder='产品名称'/></div>
      <div><input type='text' v-model='state.brand' placeholder='品牌' /></div>
      <div><input type="date" v-model='state.manufacturingDate' placeholder='生产日期' /></div>
      <div><input type='text' v-model='state.keepDate' placeholder='保值期/天' /></div>
      <div><input type="date" v-model='state.expiryDate' placeholder='过期日期' /></div>
      <div><input type='text' v-model='state.wegth' placeholder='计量/克/公斤' /></div>
      <div><input type='text' v-model='state.sub' placeholder='大类' /></div>
      <!-- <div><input type='text' v-model='state.tub' placeholder='小类' /></div> -->
      <div><input type='text' v-model='state.tag' placeholder='tag' /></div>
      <div><button class='button-primary' @click='add'> Submit </button></div>
    <div>  Values: {{ state }} </div>
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
<style>
  .form-element {
    max-width: 550px;
    -webkit-box-flex: 1;
    flex: 1 1 100%;
    margin: auto;
  }
  .form-element div {
    -ms-flex-align: center;
    -webkit-box-align: center;
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
    align-items: center;
    color: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    font-weight: 400;
    height: 48px;
    margin: 0;
    padding: 0 16px;
    position: relative;
    text-decoration: none;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    margin-top: 8px;

  }

  .form-element input {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    line-height: 20px;
    max-width: 100%;
    min-width: 0;
    padding: 8px 10px;
    width: 100%;
    font-size: 16px;
    border: none;
  }
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 28px;
    width: 100%
  }
  .button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
</style>