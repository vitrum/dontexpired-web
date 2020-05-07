<template>
  <div class="container">
    <div class="v-card">
      <div class="v-progress-linear my-0" style="height: 7px;">
        <div class="v-progress-linear__background primary" style="height: 7px; opacity: 0.3; width: 100%;">
        </div>
        <div class="v-progress-linear__bar"><!---->
          <div class="v-progress-linear__bar__determinate primary" style="width: 0%;"></div>
        </div>
      </div>
      <div class="v-card-action">
        <span class="text">
          {{length}} 件
        </span>
        <div class="spacer"></div>
        <div class="elevation" >
          <a href="#/all" class="filter" value="all" style="position: relative;">
            <div class="v-btn__content">
              所有
            </div>
          </a>
          <a href="#/active" class="filter" value="active" style="position: relative;">
            <div class="v-btn__content">
            还可用
            </div>
          </a>
          <a href="#/completed" class="filter" value="completed" data-only-child="true" style="position: relative;">
            <div class="v-btn__content">
            过期的
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="v-card" v-for="item in items" :key="item._id">
      {{item}}
    </div>
  </div>
</template>


<script>
import api from '@/api/index.js'
console.log('api', api)


// 获取数据
function getData() {
  return Promise.all([
    api.itemApi.getItemList()
  ]).then(results => {
    console.log('getData, results', results);
    window.results = results;
    return results
  });
}
// u转化为map形式
function toMap(items) {
  let item = {};
  items[0].forEach(i => {
    item[i.id] = i.attributes;
  });
  return item;
}


export default {
  name: 'Items',
  props: {
    msg: String
  },
  setup () {
    let items = []
    let isloading = false
    let length = 0
    return {
      items,
      isloading,
      length
    }
  },
  mounted() {
    this.isloading = true
    getData().then((data) => {
      this.isloading = false
      this.items = toMap(data)
      this.length = data[0].length
      console.log('mounted()',data,toMap(data), data[0].length)
    });
  },
  methods: {
    refresh() {
      this.isloading = true
      getData().then(data => {
        this.isloading = false
        this.items = toMap(data)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container {
  max-width: 550px;
  padding: 8px;
  -webkit-box-flex: 1;
  flex: 1 1 100%;
  margin: auto;
  width: 100%;
}
.v-card {
  border-radius: 2px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  display: block;
  min-width: 0;
  position: relative;
  text-decoration: none;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  background-color: #fff;
  margin-top: 10px;

}
.text {
  padding: 4px 10px;
  display: block;
}
.v-card-action {
  display: flex;
  flex-direction: row;
}
.elevation {
  display: flex;
  flex-direction: row;
}
.filter {
  padding: 4px 10px;
}
</style>