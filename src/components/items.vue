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
          总计：{{length}}件
        </span>
        <div class="spacer"></div>
        <div class="elevation" >
          <a href="/items/all" class="v-btn  v-btn--active filter" value="all" style="position: relative;">
            <div class="v-btn__content">
              所有
            </div>
          </a>
          <a href="/items/active" class="v-btn filter" value="active" style="position: relative;">
            <div class="v-btn__content">
            还可用
            </div>
          </a>
          <a href="/items/completed" class="v-btn filter" value="completed" data-only-child="true" style="position: relative;">
            <div class="v-btn__content">
            过期的
            </div>
          </a>
        </div>
      </div>
    </div>
    <div v-show="isloading">Loading</div>
    <div class="v-card" v-for="item in items" :key="item._id">
      {{item.attributes.name}} {{item.attributes.expiryDate}} {{item.attributes.status}} 
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
function toMap(items, status) {
  let list = [];
  let filterStatus = status || 'all'
  items[0].forEach(i => {
    let attributes = i.attributes
    let id = i.id
    if ( filterStatus === 'all' || filterStatus === i.attributes.status ) {
      list.push({
        attributes,
        '_id': id
      })
    }
  });
  return list;
}


export default {
  name: 'Items',
  props: {
    msg: String
  },
  data(){
    return {
      items: [],
      isloading: false,
      length: 0
    }
  },
  watch: {
    $route(to, from) {
      console.log('watch route', to, from)
    }
  },
  mounted() {
    this.isloading = true
    getData().then((data) => {
      this.isloading = false
      this.items = toMap(data, this.$route.params.status)
      this.length = data[0].length
      console.log('mounted()',data,toMap(data), data[0].length, this.$route.params.status)
    });
  },
  methods: {
    refresh() {
      this.isloading = true
      getData().then(data => {
        this.isloading = false
        this.items = toMap(data, this.$route.params.status)
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
  box-shadow: 0 1px 1px -1px rgba(0,0,0,.05), 0 1px 1px 0 rgba(0,0,0,.05), 0 1px 3px 0 rgba(0,0,0,.05);
  display: block;
  min-width: 0;
  position: relative;
  text-decoration: none;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  background-color: #fff;
  margin-top: 10px;
  min-height: 36px;
  line-height: 1.5;
}
.text {
  padding: 0 10px;
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
.spacer {
  -ms-flex-positive: 1!important;
  -webkit-box-flex: 1!important;
  flex-grow: 1!important;
}
.v-btn {
  -webkit-box-pack: center;
  border-radius: 0;
  justify-content: center;
  margin: 0;
  min-width: auto;
  opacity: .4;
  padding: 0 8px;
  width: auto;
  text-decoration: none;
}
.v-btn.v-btn--active {
    opacity: 1;
}
.v-btn__content {
  -webkit-box-align: center;
  -webkit-box-flex: 1;
  -webkit-box-pack: center;
  -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
  align-items: center;
  border-radius: inherit;
  color: inherit;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  white-space: nowrap;
  width: inherit;
  color: #4dba87 !important;
  caret-color: #4dba87 !important;
}
</style>