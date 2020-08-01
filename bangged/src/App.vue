<template>
  <div>
    <div id="content">
      <a href="https://www.linkedin.com/in/shivam-kmr" target="_blank"><Icon type="logo-linkedin" color="black" size=30 class="linkedIn" /></a>
    </div>
    <div id="app">
      <div id="nav"></div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#content {
  position: relative;
}
.linkedIn {
  position: absolute;
  top: 5px;
  right: 15px;
}
</style>
