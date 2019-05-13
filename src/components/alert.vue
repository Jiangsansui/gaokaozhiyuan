<template>
    <div class="container">
      <div class="head">院校学科评估报告及往年专业录取参考</div>
      <h1>浙江大学-人文科学实验班（外国语言文学）</h1>
      <div class="content">
        <div class="conOne">
          计划数：53 备注：含英语，翻译，俄语，日语，德语，韩语，西班牙语专业。
        </div>
        <div class="conTwo">
         <p>对应历年招录专业参考</p>
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#F8F8F9'}"
            border
            style="width: 100%;margin-left: 5%">
            <el-table-column
              prop="date"
              label="招生年份"
              width="350">
            </el-table-column>
            <el-table-column
              prop="name"
              label="专业名称"
              width="600">
            </el-table-column>
            <el-table-column
              prop="zsdc"
              label="招生段次"
              width="350">
            </el-table-column>
            <el-table-column
              prop="zsjhs"
              label="招生计划数"
              width="350">
            </el-table-column>
            <el-table-column
              prop="lqfs"
              label="录取分数"
              width="350">
            </el-table-column>
            <el-table-column
              prop="lqmc"
              label="录取名次"
              width="300">
            </el-table-column>
          </el-table>
        </div>
        <div class="conThree">
          <span style="color: #2196f3">浙江大学</span>
          <span>去年同大类专业招录参考</span>
          <el-table
            :data="tableList"
            :header-cell-style="{background:'#F8F8F9'}"
            border
            style="width: 100%;margin-left: 5%">
            <el-table-column
              prop="name"
              label="专业名称"
              width="450">
            </el-table-column>
            <el-table-column
              prop="zsdc"
              label="招生段次"
              width="450">
            </el-table-column>
            <el-table-column
              prop="zsjhs"
              label="招生计划数"
              width="450">
            </el-table-column>
            <el-table-column
              prop="lqfs"
              label="录取分数"
              width="450">
            </el-table-column>
            <el-table-column
              prop="lqmc"
              label="录取名次"
              width="500">
            </el-table-column>
          </el-table>
        </div>
        <div class="conFour">
          <div class="left">
            <el-table
              :header-cell-style="{background:'#F8F8F9'}"
              :data="tableLeft"
              border
              style="width: 100%">
              <el-table-column
                prop="zydl"
                label="专业大类"
                >
              </el-table-column>
              <el-table-column
                prop="mc"
                label="名次"
               >
              </el-table-column>
              <el-table-column
                prop="dj"
                label="等级">
              </el-table-column>
            </el-table>
          </div>
          <div class="right">
            <el-table
              :header-cell-style="{background:'#F8F8F9'}"
              :data="tableRight"
              border
              style="width: 100%">
              <el-table-column
                prop="yjxk"
                label="一级学科"
               >
              </el-table-column>
              <el-table-column
              prop="pf"
              label="评分">
            </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "alert",
      data() {
        return {
          tableData: [{
            date: '2018',
            name: '人文科学实验班（外国语言文学）',
            address: '上海市普陀区金沙江路 1518 弄',
            zsdc:'第一段',
            zsjhs:'53',
            lqfs:'662',
            lqmc:'3287'
          }, {
            date: '2017',
            name: '人文科学实验班（外国语言文学）',
            address: '上海市普陀区金沙江路 1518 弄',
            zsdc:'第一段',
            zsjhs:'53',
            lqfs:'662',
            lqmc:'3287'
          }],
          tableList: [{
            date: '2018',
            name: '人文科学实验班（外国语言文学）',
            address: '上海市普陀区金沙江路 1518 弄',
            zsdc:'第一段',
            zsjhs:'53',
            lqfs:'662',
            lqmc:'3287'
          }, {
            date: '2017',
            name: '人文科学实验班（外国语言文学）',
            address: '上海市普陀区金沙江路 1518 弄',
            zsdc:'第一段',
            zsjhs:'53',
            lqfs:'662',
            lqmc:'3287'
          }],
          tableLeft: [
            {
            zydl: '艺术类',
            mc: '29/60',
            dj: 'A+'
          },
            {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            },
            {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            },
            {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            }, {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            }, {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            }, {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            }, {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            }, {
              zydl: '艺术类',
              mc: '29/60',
              dj: 'A+'
            }],
          tableRight: [
            {
             yjxk: '无',
             pf: ''
            }]
        }
      },
      created(){
          this.getList()
      },
      methods:{
        getList(){
          this.$http
            .get('api/college/3')
            .then(function (res) {
              this.tableData=res.data.item
                console.log(res.data.item)
              }.bind(this)
            ).catch(function (err) {
              console.log(err)
            }.bind(this)
          )
        },
      }
    }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    .head{
      width: 15%;
      font-size: 20px;
      padding-top: 10px;
      font-weight: bold;
    }
    h1{
      width: 100%;
      text-align: center;
       color: #2196f3;
    }
    .content{
      width: 90%;
      .conOne{
        width: 100%;
        text-align: left;
        line-height: 55px;
        margin-left: 4%;
        padding-left: 1%;
        height: 50px;
        border:1px solid black;
      }
      .conTwo{
        width: 100%;
        p{
          font-size: 20px;
          font-weight: bolder;
        }
      }
      .conThree{
       line-height: 45px;
        span{
          font-size: 20px;
          font-weight: bolder;
        }
        span:last-child{
          margin-left: 1px;
        }
      }
      .conFour{
        margin-left: 5%;
        width: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
        .left{
          margin-top: 100px;
          width: 60%;

        }
        .right{
          margin-top: 100px;
          width: 40%;

        }
      }
    }

}
</style>
