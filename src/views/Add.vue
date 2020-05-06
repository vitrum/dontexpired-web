<template>
  <div class='form-element'>
    <h2> {{ state.title }} </h2>
      <div><input type='text' :value='state.name' placeholder='产品名称' @input="format($event,'name')"/></div>
      <div><input type='text' :value='state.brand' @input="format($event,'brand')" placeholder='品牌' /></div>
      <div><input type="date" :value='state.manufacturingDate' @input="format($event,'manufacturingDate')"  placeholder='生产日期' /></div>
      <div><input type='text' :value='state.keepDate' @input="format($event,'keepDate')" placeholder='保值期/天' /></div>
      <div><input type="date" :value='state.expiryDate' @input="format($event,'expiryDate')" placeholder='过期日期' /></div>
      <div><input type='text' :value='state.wegth' @input="format($event,'wegth')" placeholder='计量/克/公斤' /></div>
      <div><input type='text' :value='state.sub' @input="format($event,'sub')" placeholder='大类' /></div>
      <!-- <div><input type='text' v-model='state.tub' placeholder='小类' /></div> -->
      <div><input type='text' :value='state.tag' @input="format($event,'tag')" placeholder='tag' /></div>
      <div><button class='button-primary' @click='add'> Submit </button></div>
    <div>  Values: {{ state }} </div>
    <div>  input: {{ input }} </div>
  </div>
</template>
<script>
  import { ref, reactive } from 'vue'
  import api from '@/api/index.js'
  


  export default {
    setup () {
      const count = ref(0)
      // let input = true
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
      const format = ($event, name) => {
        console.log('format', $event, name)
        // input = $event.composed
        if ($event.composed) {
          return
        }
        state[name] = $event.target.value
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
        state,
        format,
        // input
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