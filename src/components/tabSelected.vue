<template>
    <div class="container">
      <head-Component :num="1"></head-Component>
<div class="head">
  <button type="button">保存</button>
  <button type="button">清空所有</button>
  <button type="button">导出已选</button>
<span>所有【新增】或【删除】操作在【保存】后才回同步到在线服务器，若有误操作，请勿保存并重新打开程序（为保存操作会被忽略）</span>
</div>
      <div class="content">

          <template>

            <el-table
              :data="tableData"
              :header-cell-style="{background:'#F8F8F9'}"
              style="width: 100%">
              <el-table-column
                label="省市">
                <template slot-scope="scope">
                  <span >{{ scope.row.address }}</span>
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
                  <span >{{ scope.row.yxdm }}</span>
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
                  <span style="color: red;" slot="reference">{{ scope.row.yxmc }}</span>
                </el-popover>
              </el-table-column>
              <el-table-column
                label="院校评级">
                <template slot-scope="scope">
                  <span >{{ scope.row.yxpj }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="专业代码"   width="60">
                <template slot-scope="scope">
                  <span >{{ scope.row.zydm }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="专业名称"
                width="300">
                <template slot-scope="scope">
                  <span >{{ scope.row.zymc }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="本专科">
                <template slot-scope="scope">
                  <span >{{ scope.row.bzk }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="选考科目要求">
                <template slot-scope="scope">
                  <span >{{ scope.row.xkkm }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="收费标准" width="60">
                <template slot-scope="scope">
                  <span >{{ scope.row.sfbz }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="学制">
                <template slot-scope="scope">
                  <span >{{ scope.row.xz }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="往年段次"   width="60">
                <template slot-scope="scope">
                  <span >{{ scope.row.wndc }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="2018计划数">
                <template slot-scope="scope">
                  <span >{{ scope.row.jhs }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="2018分数">
                <template slot-scope="scope">
                  <span >{{ scope.row.fs }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="2018位次">
                <template slot-scope="scope">
                  <span >{{ scope.row.weic }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="历年参考" width="60">
                <template slot-scope="scope">
                  <span @click="goFirst">{{ scope.row.lnck }}</span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>

    </div>
</template>

<script>
  import headComponent from './head';
    export default {
        name: "tabExplain",
      components: { headComponent },
      data() {
        return {
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
        }
      },
      methods: {
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      },
      methods:{
        goFirst:function () {
          this.$router.push({path: '/alert'})
        }
      }

    }
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  .head{
    width: 100%;
    height: 50px;
    background-color: #e4e4e4;
  button{
    width: 7%;
    height: 35px;
    float: left;
    margin-left: 1%;
    margin-top: 0.55%;
    background: white;
    border-color: red !important;
    color: red;
    border: none;
    border:1.5px solid red;
   font-weight: bolder;
  }
    span{
      color: #6c99ed;
      font-weight: bolder;
      float: left;
      margin-left: 1%;
      line-height: 50px;
    }
  }
  .content{
    width: 100%;
  }
}
</style>
