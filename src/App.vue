<template>
  <div id="app">
    <h2> 别过期了 </h2>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link>
    </div>

    <router-view/>
  </div>
</template>

<style>
body {
  color: #42b983;
  text-align: center;
  background-color: rgb(245, 245, 245);;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c3c3c;
  -webkit-box-flex: 1;
    flex: 1 1 100%;
}

#nav {
  padding: 10px 30px;
}

#nav a {
  font-weight: bold;
  color: #54b881;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
