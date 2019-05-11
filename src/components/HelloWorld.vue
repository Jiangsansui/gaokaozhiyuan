<template>
  <div class="container">
    <div class="head">启航志愿帮正式填报版</div>
    <div class="title">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="待选志愿+500" name="first" ></el-tab-pane>
    <el-tab-pane label="已选志愿" name="second"></el-tab-pane>
    <el-tab-pane label="使用说明" name="third"></el-tab-pane>
  </el-tabs>
      <div class="search">
        <span class="lastspan">会员</span>
        <span >启航志愿帮—2018浙江省平行志愿筛选</span>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>

              </el-menu-item-group>


            </el-submenu>



          </el-menu>
        </el-radio-group>
      </div>
    </div>
    <div class="content">
      {{activeName}}
      <Tab-Component v-if="activeName=='first'"></Tab-Component>
    </div>
  </div>
</template>

<script>
import TabComponent from "./tabComponent";
export default {
  name: "HelloWorld",
  data() {
    return {

      activeName:"first",
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);

    }
  },

  components: { TabComponent }
};
</script>


<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .head {
    width: 15%;
    font-size: 20px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  .title {
    width: 100%;
    display: flex;
    flex-direction: row;
    .search{
      display: flex;
      flex: 1;
      margin-left: 20px;
      background-color: #f5f5f5;
      height: 50px;
      margin-top: -10px;
      line-height: 55px;
      .lastspan{
        width: 100px;
        height: 35px;
        background-color: #e4e4e4;
        color: white;
        margin-top: 8px;
        line-height: 40px;
        margin-left: 1%;
      }
      span:last-child{

        color: #2196f3 !important;
        float: right;
        margin-left: 70%;
      }

    }
  }
  .content {
    width: 100%;
    margin-top: 0;
  }
}
</style>
