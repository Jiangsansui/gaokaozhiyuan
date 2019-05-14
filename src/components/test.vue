<template>
  <div class="conMenu">
    <div class="menuOne">
      <div class="title">
        <span style="float: left">^</span>
        <span style="float: right">省份筛选（多选）</span>
      </div>
      <el-checkbox  border v-for="data in oneList"
                    :label="data.id"
                    :key="data.id">
        {{data.namePro}}
      </el-checkbox>

    </div>
    <div class="menuTwo">
      <div class="title">
        <span style="float: left">^</span>
        <span>
          <el-checkbox
            style="float: right;font-weight: bolder;margin-right:2%">
            招生计划
          </el-checkbox>
        </span>
      </div>
      <div class="conT">
        <el-input-number
          v-model="num1"
          controls-position="right"
          @change="handleChange"
            :min="num1" :max="500">

        </el-input-number>
        <el-input-number
          v-model="num2"
          controls-position="right"

          @change="handleChange"
          :min="num1" :max="500"></el-input-number>
      </div>
    </div>
    <div class="menuThree">
      <div class="title">
        <span style="float: left">^</span>
        <span style="float: right">办学性质（多选）</span>
      </div>
      <div class="conThree">
        <el-checkbox  border v-for="data in threeList"
                      :label="data.id"
                      :key="data.id">
          {{data.namePro}}
        </el-checkbox>
<!--        <el-checkbox v-model="checked" border v-for="data in threeList"-->
<!--                     :label="data.id"-->
<!--                     :key="data.id">-->
<!--          {{data.namePro}}-->
<!--        </el-checkbox>-->

      </div>
    </div>
    <div class="menuFour">
      <div class="title">
        <span style="float: left">^</span>
        <span style="float: right">院校评级（多选）</span>
      </div>
      <div class="conThree">
        <el-checkbox  border v-for="data in fourList"
                      :label="data.id"
                      :key="data.id">
          {{data.namePro}}
        </el-checkbox>
<!--        <el-checkbox v-model="checked" border v-for="data in fourList"-->
<!--                     :label="data.id"-->
<!--                     :key="data.id">-->
<!--          {{data.namePro}}-->
<!--        </el-checkbox>-->

      </div>
    </div>
    <div class="menuFive">
      <div class="title">
        <span style="float: left">^</span>
        <span style="float: right">本科专科（单选）</span>
      </div>

      <div class="conFive">
        <el-checkbox  border v-for="data in fiveList"
                      :label="data.id"
                      :key="data.id">
          {{data.namePro}}
        </el-checkbox>

      </div>
    </div>
    <div class="menuSix">
      <div class="title">
        <span style="float: left">^</span>
        <span style="float: right">科目筛选（多选）</span>
      </div>
      <div class="conThree">
        <el-checkbox  border v-for="data in fivesixList"
                      :label="data.id"
                      :key="data.id">
          {{data.namePro}}
        </el-checkbox>

      </div>
    </div>
    <div class="menuSeven">
      <div class="title">
        <span style="float: left">^</span>
        <span>
           <el-checkbox
                        style="float: right;font-weight: bolder;margin-right:1%">
            大类筛选（多选）
          </el-checkbox>
        </span>
      </div>
      <div class="conThree">
        <el-checkbox   border v-for="data in sevenList"
                      :label="data.id"
                      :key="data.id">
          {{data.namePro}}
        </el-checkbox>


      </div>
    </div>
    <div class="menuEight">
      <div class="title">
        <span style="float: left">^</span>
        <span>
          <el-checkbox v-model="checked"
                       style="float: right;font-weight: bolder;margin-right:1%">
            学制筛选（多选）
          </el-checkbox>
        </span>
      </div>
      <div class="conThree">
        <el-checkbox  border v-for="data in eightList"
                     :label="data.id"
                     :key=
                       "data.id">
          {{data.namePro}}
        </el-checkbox>

      </div>
    </div>
    <div class="menuNine">
      <div class="title">
        <span style="float: left">^</span>
        <span>
          <el-checkbox
                       style="float: right;font-weight: bolder;margin-right:1%">
            名次筛选（vip功能）
          </el-checkbox>
        </span>
      </div>
      <div class="conThree">

        <el-input-number v-model="num3" controls-position="right"
                         @change="handleChange" :min="num1" :max="500"></el-input-number>
        <el-input-number v-model="num4" controls-position="right"
                         @change="handleChange" :min="num1" :max="500"></el-input-number>
        <p>新设专业及2018年无人报考专业（忽略位次）</p>
      </div>
    </div>
    <div class="menuTen">
      <div class="title">
        <span style="float: left">^</span>
        <span>
          <el-checkbox
                       style="float: right;font-weight: bolder;margin-right:1%">
            高级筛选（vip功能）
          </el-checkbox>
        </span>
      </div>
      <div class="conThree">
        <P>匹配规则：以空格区分，多选</P>
        <input placeholder="  城市:（如杭州 上海 北京)"></input>
        <input placeholder="  院校名称：（如：师范 工业 农业）"></input>
        <input placeholder="  专业名称：（如法学 中外 硕博 类 实验)"></input>
      </div>



    </div>
  </div>


</template>

<script>
  export default {
    name: "test",

    data(){
      return{
        checked:"1",
        num1:1,
        num2:1,
        num3:1,
        num4:1,
        oneList:[
          {id:0, namePro:'浙江'},
          {id:1, namePro:'浙江'},
          {id:2, namePro:'浙江'},
          {id:3, namePro:'浙江'},
          {id:4, namePro:'浙江'},
          {id:5, namePro:'浙江'},
          {id:6, namePro:'浙江'},
          {id:7, namePro:'浙江'},
          {id:8, namePro:'浙江'},
          {id:9, namePro:'浙江'},
          {id:10, namePro:'浙江'},
          {id:11, namePro:'浙江'},
          {id:12, namePro:'浙江'},
          {id:13, namePro:'浙江'},
          {id:14, namePro:'浙江'},
          {id:15, namePro:'浙江'},
          {id:16, namePro:'浙江'},
          {id:17, namePro:'浙江'},
          {id:18, namePro:'浙江'},
          {id:19, namePro:'浙江'},
          {id:20, namePro:'浙江'},
          {id:21, namePro:'浙江'},
          {id:22, namePro:'浙江'},
          {id:23, namePro:'浙江'},
          {id:24, namePro:'浙江'},
          {id:25, namePro:'浙江'},
          {id:26, namePro:'浙江'},
          {id:27, namePro:'浙江'},
          {id:28, namePro:'浙江'},
          {id:29, namePro:'浙江'},
          {id:30, namePro:'浙江'},
          {id:31, namePro:'浙江'},
        ],
        threeList:[
          {id:32, namePro:'公办'},
          {id:33, namePro:'民办'},
          {id:34, namePro:'独立'},
          {id:35, namePro:'公收'},
        ],
        fourList:[
          {id:36, namePro:'985'},
          {id:37, namePro:'211'},
          {id:38, namePro:'双一流'},
          {id:39, namePro:'其他'},
        ],
        fiveList:[
          {id:40, namePro:'本科'},
          {id:41, namePro:'专科'},

        ],
        sixList:[
          {id:42, namePro:'思政'},
          {id:43, namePro:'化学'},
          {id:44, namePro:'技术'},
          {id:45, namePro:'不限'},
        ],
        sevenList:[
          {id:46, namePro:'思政'},
          {id:47, namePro:'化学'},
          {id:48, namePro:'技术'},
          {id:49, namePro:'不限'},
          {id:50, namePro:'思政'},
          {id:51, namePro:'化学'},
          {id:52, namePro:'技术'},
          {id:53, namePro:'不限'},
          {id:54, namePro:'思政'},
          {id:55, namePro:'化学'},
          {id:56, namePro:'技术'},
          {id:57, namePro:'不限'},
          {id:58, namePro:'不限'},
        ],
        eightList:[
          {id:59, namePro:'2年'},
          {id:60, namePro:'3年'},
          {id:61, namePro:'4年'},
          {id:62, namePro:'5年'},
          {id:63, namePro:'6年'},
          {id:64, namePro:'7年'},
          {id:65, namePro:'8年'},
          {id:66, namePro:'9年'}

        ]
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .conMenu{
   z-index:999;
    float: right;
    width: 40%;
    height: 800px;
    margin-top: 5%;
    .menuOne{
      border: 1px solid black;
      width: 100%;
      height: 45%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 10%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
    }
    .menuTwo{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 15%;
      padding-bottom: 2%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 35%;
        background-color: white;
        line-height: 35px;
      }
      .conT{
        width: 100%;
        height:70%;
        background-color: #f5f5f5;
      }
    }
    .menuThree{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 15%;
      padding-bottom: 2%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 35%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree{
        width: 100%;
        height:70%;
        background-color: #f5f5f5;
        .el-checkbox.is-bordered{
          width:20%;
          float:left;
          margin-right:2.5%;
          margin-left: 2%;
          margin-top: 5%;
          height: 35px;

        }
      }
    }
    .menuFour{
      margin-top: 5px;
      border: 1px solid black;
      width: 100%;
      height: 15%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 35%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree{
        width: 100%;
        height:70%;
        background-color: #f5f5f5;
        border-bottom: 1px solid black;
        .el-checkbox.is-bordered{
          width:20%;
          float:left;
          margin-right:2.5%;
          margin-left: 2%;
          margin-top: 5%;
          height: 35px;

        }
      }
    }
    .menuFive{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 15%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 35%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conFive{
        width: 100%;
        height:65%;

        background-color: #f5f5f5;

        .el-checkbox.is-bordered{
          width:40%;
          float:left;
          margin-left: 6%;
          margin-top: 5%;
          height: 35px;

        }
      }
    }
    .menuSix{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 15%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 35%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree{
        width: 100%;
        height:70%;
        background-color: #f5f5f5;
        border-bottom: 1px solid black;
        .el-checkbox.is-bordered{
          width:20%;
          float:left;
          margin-right:2.5%;
          margin-left: 2%;
          margin-top: 5%;
          height: 35px;

        }
      }
    }
    .menuSeven{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 38%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 15%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree{
        width: 100%;
        height:85%;
        background-color: #f5f5f5;
        .el-checkbox.is-bordered{
          width:20%;
          float:left;
          margin-right:2.5%;
          margin-left: 2%;
          margin-top: 5%;
          height: 35px;
          border: none;

        }
      }
    }
    .menuEight{
      margin-top: 8px;
      border: 1px solid black;
      width: 100%;
      height: 15%;
      padding-bottom: 2%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 35%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree{
        width: 100%;
        height:70%;
        background-color: #f5f5f5;
        .el-checkbox.is-bordered{
          width:20%;
          margin-right:2.5%;
          margin-left: 2%;
          border: none;

        }
      }
    }
    .menuNine{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 20%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 25%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree{
        width: 100%;
        height:75%;
        background-color: #f5f5f5;
        .el-checkbox.is-bordered{
          width:20%;
          float:left;
          margin-right:2.5%;
          margin-left: 2%;
          margin-top: 5%;
          height: 35px;
        }
        p{
          width: 75%;
          display: flex;
          flex-direction: row;
          margin-left: 15%;
          padding-top: 4%;
          color: #aeaeae;
        }
      }

    }
    .menuTen{
      margin-top: 7px;
      border: 1px solid black;
      width: 100%;
      height: 30%;
      padding-bottom: 1%;
      background-color: #f4f4f4;
      .title{
        width: 100%;
        height: 15%;
        background-color: white;
        font-weight: bolder;
        line-height: 35px;
      }
      .conThree {
        width: 100%;
        height: 85%;
        margin-bottom: 10%;
        background-color: #f5f5f5;
        p{
          float: left;
          margin-left: 5%;
        }
        input{
          border:1px solid white;
          width: 90%;
          height: 15%;
          margin-left: 5%;
          display: flex;
          background-color: #f5f5f5;
          flex-direction: column;
          outline: none;
        }
      }



    }
  }


</style>
