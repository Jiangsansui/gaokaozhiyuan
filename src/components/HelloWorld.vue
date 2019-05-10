<template>
  <div class="container">
    <div class="head">启航志愿帮正式填报版</div>
    <div class="title">
      <span style="color: #03c7f8">待选志愿+</span>
      <span style="color: #ff7f50"><img src="../assets/finish.png">已选志愿</span>
      <span style="color: #c2c2c2">使用说明</span>
      <span>会员</span>
    </div>
    <div class="content">
      <Tab-Component></Tab-Component>

    </div>
  </div>
</template>

<script>
  import  TabComponent from "./tabComponent"
  export default {
    name: 'HelloWorld',
    data () {
    },
    components:{TabComponent}
  }
</script>


<style scoped lang="scss">
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    .head{
      width: 15%;
      font-size: 20px;
      padding-bottom: 5px;
      font-weight: bold;
    }
    .title{
      width: 100%;
      display: flex;
      flex-direction: row;
      span{
        width: 10%;
        font-weight: bold;
        position: relative;
        img{
          width: 24px;
          margin-left: 70px;
          position: absolute;
        }
      }
      span:last-child{
        width: 60%;
      }
    }
    .content{
      width:100%;
      margin-top: 10px;
    }
  }

</style>
