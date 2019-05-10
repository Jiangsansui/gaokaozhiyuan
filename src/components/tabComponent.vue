<template>
    <div class="con">
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
          <el-table-colum
            label="院校名称"
          width="300">
            <template slot-scope="scope">
              <span >{{ scope.row.yxmc }}</span>
            </template>
          </el-table-colum>
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
              <span >{{ scope.row.lnck }}</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>

<script>
    export default {
        name: "tabComponent",
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
      }
    }
</script>

<style lang="scss" scoped>
.con{
  width:100%;
}
</style>
