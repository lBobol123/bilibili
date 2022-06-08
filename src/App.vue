<template>
  <div id="app">
    <keep-alive exclude="Article">
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  /* background-color: #f4f4f4; */
  background-color: #ffffff;
  color: #323233;
  box-sizing: border-box;
}
#app {
  height: 100vh;
}
</style>
