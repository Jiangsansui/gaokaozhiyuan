<template>
  <div class="container">
    <head-Component :num="2"></head-Component>
    <div class="content">
      <div class="left">
        <div class="leftTop">
          <p>扫下方的二维码 获取更多招考信息</p>
          <img src="../assets/erwema.jpg">
          <p>您的硬件码如下，如有问题可以凭此联系</p>
          <p>硬件码：3C56AA3986778</p>
        </div>
        <div class="leftFooter">
          <p>软件版本2019模拟填报版</p>
          <p>理念录取信息来自各大高校</p>
          <p>理念录取信息来自各大高校</p>
          <p>理念录取信息来自各大高校</p>
          <p>理念录取信息来自各大高校</p>
          <p>理念录取信息来自各大高校</p>
          <p>理念录取信息来自各大高校</p>
          <p>理念录取信息来自各大高校</p>
        </div>
      </div>
      <div class="right">
        <div class="rightTitle">
          <p>本软件使用者需知：</p>
        </div>
        <div class="rightText">
          <p>1、本软件不推荐任何志愿，VIP功能，仅为软件提供的<span style="color:red;">便利性</span>收费;</p>
          <p>2、本软件的使用，需要有-走的逻辑思维能力， 请家长扫码关注<span style="color:red;">【左边】</span>的微信公众号，<span style="color:red;">认真学习</span>历史资料和说明文档;3.本软件不适合人群:</p>
          <p>2、本软件不适合人群：</p>
          <p class="text">A.牛爸牛妈们，你们方向明确，学校和专业了然于胸，选牛的挑就行了; </p>
          <p class="text">B.所有提前批的、自主的， 三的，艺术的，体育的;</p>
          <p class="text">C.期望你输入一个分数，就由电脑帮你选好80个志愿的;</p>
          <p>4.某些<span style="color:red;">新专业</span>没有历史数据，自动与专业名称相似的专业匹配，分数与排名仅供参考;</p>
          <p>5、本软件每次检索结果限为<span style="color:red;">500</span>个，免费版和收费版均为如此，超出<span style="color:red;">500</span>个以为的结果不予显示，就是希望家长要耐心仔细的设置条件，缩小检索范围有利于您自己的选择，通过多次检索组合出您要的志愿。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import headComponent from './head';
    export default {
        name: "tabExplain",
      components: { headComponent }
  }

</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    .content{

     width: 100%;
     display: flex;
      height: 100%;
     flex-direction: row;
     background-color: #e4e4e4;
  .left {
 
    margin-left: 1%;
    margin-top: 1%;
    width: 18%;
    .leftTop {
      width: 100%;
      background-color: white;
      padding-top: 1%;
      padding-bottom: 7%;
      p {
        text-align: center;
        color: #acb6bd;
      }
      p:last-child {
        margin-top:1%;
        padding-bottom: 2%;
      }
      img {
        width: 40%;
        padding-top: 5%;
        padding-bottom: 5%;
      }
    }
    .leftFooter {
      margin-top: 5%;
      background-color: white;
      padding-top: 30%;
      margin-bottom: 4%;
      p {
        color: #acb6bd;
     }
      p:last-child{
        padding-bottom: 30%;
      }
    }
  }
  .right{
    margin-top: 1%;
    width: 79%;
    margin-left: 1%;
    background-color: white;
    margin-bottom: 0.7%;
    .rightTitle{
      p{
        text-align: left;
        margin-left: 1%;
      }
    }
    .rightText{
      p{
        text-align: left;
        margin-left: 1%;
      }
      .text{
        color:red;
        margin-left:4%;
      }
    }
  }
}
  }
</style>


