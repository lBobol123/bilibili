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
    background-color: #f4f4f4;
    color: #323233
  }
</style>
