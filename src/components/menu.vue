<template>
  <div class="conMenu">
    <ul id="menu">
      <li><a href="">邮箱<img src="sel.png"></a>
        <ul>
          <li><a href="">免费邮箱</a></li>
          <li><a href="">VIP邮箱</a></li>
          <li><a href="">企业邮箱</a></li>
        </ul>
      </li>
      <li><a href="">我的菜单
        <img src="sel.png"></a>
        <ul>
          <li><a href="">新闻</a></li>
          <li><a href="">电视视频</a></li>
          <li><a href="">电影</a></li>
          <li><a href="">明星</a></li>
          <li><a href="">国内</a></li>
        </ul>
      </li>
      <li><a href="">博客<img src="sel.png"></a>
        <ul>
          <li><a href="">博客评论</a></li>
          <li><a href="">未读提醒</a></li>
        </ul>
      </li>
      <li><a href="">移动客户端
        <img src="sel.png"></a>
        <ul>
          <li><a href="">新浪微博</a></li>
          <li><a href="">新浪新闻</a></li>
          <li><a href="">新浪体育</a></li>
          <li><a href="">新浪娱乐</a></li>
          <li><a href="">新浪财经</a></li>
          <li><a href="">天气通</a></li>
          <li><a href="">新浪游戏</a></li>
        </ul>
      </li>
      <li><a href="">微博<img src="sel.png"></a>
        <ul>
          <li><a href="">私信</a></li>
          <li><a href="">评论</a></li>
          <li><a href="">@我</a></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "menu",
      data() {
        return {
          tableData: [{
            id: '12987122',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987123',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987125',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }, {
            id: '12987126',
            name: '好滋好味鸡蛋仔',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333'
          }]
        }
      }
    }
</script>

<style lang="scss" scoped>
  .conMenu{
    width: 20%;
    *{margin:0;padding:0;list-style:none;text-decoration:none;}
    #menu{width:500px;height:40px;margin:0 auto;border:2px solid #FF8600;}
    ul>li{float: left;line-height: 40px;width: 100px;text-align: center;}
    ul li a{color:#bebcbc;}
    ul li ul{display:none;overflow:hidden;background:#FFF;border:1px solid #FF8600;border-top:1px solid #FFF;}
    ul li ul li{border-bottom:1px solid #FF8600;height:25px;line-height:25px;}
    ul li a:hover{color: #ff8600;display: block;background: #EFEFF7;}
  }
</style>
