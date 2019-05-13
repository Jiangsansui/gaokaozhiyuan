<template>
  <div class="container">
    <head-Component :num="0"></head-Component>
    <div class="content">
      <el-table
        border
        :data="tableData"
        :header-cell-style="{background:'#F8F8F9'}"
        style="width: 100%">
        <el-table-column
          label="省市">
          <template slot-scope="scope">
            <span >{{ scope.row.省 }}{{ scope.row.城市 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="办学性质">
          <template slot-scope="scope">
            <span >{{ scope.row.bxxz }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="院校代码"
          width="60">
          <template slot-scope="scope">
            <span >{{ scope.row.院校代码 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="院校名称"
          width="250">
          <el-popover slot-scope="scope"
                      placement="top-start"
                      trigger="hover"
                      content="一流学科：化学，生物学，生态学，机械工程，光学工程，
材料科学与工程，电器工程，控制科学与工程，计算机科学与技术，农业工程，环境科学与
工程，软件工程，园艺学，植物保护，基础医学，药学，管理科学与工程，农林经济管理">
            <span style="color: red;" slot="reference">{{ scope.row.院校名称 }}</span>
          </el-popover>
        </el-table-column>
        <el-table-column
          label="院校评级">
          <template slot-scope="scope">
            <span >{{ scope.row.重点类型 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="专业代码"   width="60">
          <template slot-scope="scope">
            <span >{{ scope.row.专业代码 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="专业名称"
          width="300">
          <template slot-scope="scope">
            <span >{{ scope.row.专业名称 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="本专科">
          <template slot-scope="scope">
            <span >{{ scope.row.本专科 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="选考科目要求">
          <template slot-scope="scope">
            <span >{{ scope.row.选考科目要求 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="收费标准" width="60">
          <template slot-scope="scope">
            <span >{{ scope.row.收费标准 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="学制">
          <template slot-scope="scope">
            <span >{{ scope.row.学制 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="往年段次"   width="60">
          <template slot-scope="scope">
            <span >{{ scope.row.往年段次 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="2018计划数">
          <template slot-scope="scope">
            <span >{{ scope.row.计划数 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="2018分数">
          <template slot-scope="scope">
            <span >{{ scope.row.参考分数}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="2018位次">
          <template slot-scope="scope">
            <span >{{ scope.row.参考名次}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="历年参考" width="60">
          <template slot-scope="scope">
            <span @click="goFirst">{{ scope.row.lnck }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import headComponent from './head';
export default {
  name: "index",
  data() {
    return {
      isCollapse: true,
        tableData: [{
          address: '浙江.杭州',
          bxxz: '公办学校',
          yxdm: '0001',
          yxmc:'浙江大学',
          yxpj:'211 985 一流大学（A）',
          zydm:'001',
          zymc:'人文科学实验班',
          bzk:'本科',
          xkkm:'不限',
          sfbz:'5300',
          xz:'4',
          wndc:'1',
          jhs:'105',
          fs:'659',
          weic:'3976',
          lnck:'查看'
        }, {
          address: '浙江.杭州',
          bxxz: '公办学校',
          yxdm: '0001',
          yxmc:'浙江大学',
          yxpj:'211 985 一流大学（A）',
          zydm:'001',
          zymc:'人文科学实验班',
          bzk:'本科',
          xkkm:'不限',
          sfbz:'5300',
          xz:'4',
          wndc:'1',
          jhs:'105',
          fs:'659',
          weic:'3976',
          lnck:'查看'
        },{
          address: '浙江.杭州',
          bxxz: '公办学校',
          yxdm: '0001',
          yxmc:'浙江大学',
          yxpj:'211 985 一流大学（A）',
          zydm:'001',
          zymc:'人文科学实验班',
          bzk:'本科',
          xkkm:'不限',
          sfbz:'5300',
          xz:'4',
          wndc:'1',
          jhs:'105',
          fs:'659',
          weic:'3976',
          lnck:'查看'
        }, {
          address: '浙江.杭州',
          bxxz: '公办学校',
          yxdm: '0001',
          yxmc:'浙江大学',
          yxpj:'211 985 一流大学（A）',
          zydm:'001',
          zymc:'人文科学实验班',
          bzk:'本科',
          xkkm:'不限',
          sfbz:'5300',
          xz:'4',
          wndc:'1',
          jhs:'105',
          fs:'659',
          weic:'3976',
          lnck:'查看'
        },]

    };
  },
  created(){
   this.getList()
  },
  components: { headComponent },
  methods:{
     getList(){
       this.$http
         .post('/api/subject/search')
         .then(function (res) {
           this.tableData=res.data.items
           console.log(this.tableData)
         }.bind(this)
         ).catch(function (err) {
          console.log(err)
       }.bind(this)
       )
     },
    goFirst:function () {
      this.$router.push({path: '/alert'})
    },
     postData(){

    }
  }
};

</script>


<style scoped lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .content {
    width: 100%;
    margin-top: 0;
  }
}
</style>
