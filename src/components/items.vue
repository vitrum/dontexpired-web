<template>
  <div class="hello">
    <p v-for="item in items" :key="item._id" class="text-center">
      {{item}}
    </p>
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
    return {
      items,
      isloading
    }
  },
  mounted() {
    this.isloading = true
    getData().then((data) => {
      this.isloading = false
      this.items = toMap(data)
      console.log('mounted()',data,toMap(data))
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
<style scoped>
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