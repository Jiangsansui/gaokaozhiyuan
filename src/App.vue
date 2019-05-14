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
  .el-input-number{
    margin-top: 5% !important;
  }
  .el-input-number:last-child{
    margin-top: -9% !important;
  }
  /*表格样式*/
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
  /*省份筛选框*/
  .el-checkbox.is-bordered{
    width:20%;
    float:left;
    margin-right:2.5%;
    margin-left: 2%;
    margin-top: 1%;
    height: 35px;
  }
  /*招生计划数计数器*/
  .el-input-number{
    width: 210px;
    border: 1px solid white;
    float: left;
    margin-left:3%;
    margin-top: 5%;
  }
  .el-input-number:last-child{
    float: right;
    margin-right: 3%;

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
