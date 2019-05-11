<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}

</script>

<style>
  .el-popover{
    background: #6a6a6a !important;
    color: white;
    border-radius: 10px;
    width: 50%;
    opacity: 0.9;
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td{
    background-color: #a0d4fa !important;
  }
  .el-button{
    border:none;
  }
  .el-table td, .el-table th.is-leaf{
    text-align: center;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 400px;
    min-height: 400px;
    z-index: 999;
  }
  body{
    margin: 0;
    padding: 0;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
