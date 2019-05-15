<template>
  <div class="headCo">
    <div class="head">启航志愿帮正式填报版</div>
    <div class="title">
      <div class="left">
        <div class="btn">
          <span @click="goto(0)">待选志愿</span>
          <span @click="goto(1)">已选志愿</span>
          <span @click="goto(2)">使用说明</span>
        </div>
      </div>
      <div class="right">
        <div class="rig"><div class="vip">会员</div></div>
        <div class="text">启航志愿帮—2018浙江省平行志愿筛选软件1.4（QQ群：1234567）</div>
        <div class="screenbtn">
          <span @click="change">筛选器</span>

        </div>
        <test-Component  v-if="a===true"></test-Component>
        <div class="search">志愿检索</div>

      </div>
    </div>
  </div>

</template>

<script>
  import testComponent from './test';
  export default {
    name: "head",
    data(){
      return{
       a:false
      }
    },
    components: { testComponent },
    methods:{
      goto(n){
        if(n===0){
          this.$router.push({path:'/'})
        }else if(n===1){
          this.$router.push({path:'/tabSelected'})
        }else{
          this.$router.push({path:'/tabExplain'})
        }
      },
      change(){
        this.a=!this.a
      },
    }
  }
</script>

<style lang="scss" scoped>
  .headCo {
    width: 100%;
    display: inline-block;

    .head {
      width: 15%;
      font-size: 20px;
      padding-bottom: 10px;
      font-weight: bold;
    }

    .title {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;

      .left {
        width: 20%;
        height: 100%;

        .btn {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;

          span {
            display: inline-block;
            width: 33%;
            height: 100%;
            color: black;
            line-height: 65px;
            text-align: center;
          }
        }
      }

      .right {
        width: 80%;
        height: 100%;
        background-color: #f5f5f5;
        display: flex;
        flex-direction: row;

        .rig {
          width: 60%;
          height: 100%;
          margin-left: 1%;

          .vip {
            width: 100px;
            height: 70%;
            margin-top: 10px;
            line-height: 45px;
            background-color: #e4e4e4;
            color: white;
          }
        }

        .text {
          width: 25%;
          line-height: 60px;
          color: #b9c8d3;
        }

        .screenbtn {

          margin-top: 10px;
          line-height: 50px;
          z-index: 999;
          height: 70%;
          background-color: #6c99ed;
        }

        .search {
          margin-top: 10px;
          width: 6%;
          height: 70%;
          line-height: 50px;
          background-color: yellow;
          margin-left: 1%;
        }

      }
    }
  }
</style>
