<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}
//动态挂载的类，用来实现点击效果
.titleSelect{
  border-bottom: 2px solid rgb(237, 91, 0);
  color: rgb(237, 91, 0);
  }
  
.titleUnSelect{
  border-style: none;
  color:rgb(116, 116, 116);
  }

//页面最上方的工具栏
.ToolBarTop{
  background-color: #F2F2F2;
  width: 100%;
  height: px2rem(74px);
  //工具栏的第一行，分别是logo，搜索框和minePageButton
  .firstLine{
    width: 100%;
      height: px2rem(44px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
        width: px2rem(52px);
        height: 100%;
        position: relative;
        div{
          width: px2rem(25px);
          position: absolute;
          bottom: 0;
          top: 0; 
          left: 0;
          right: 0;
          margin: auto;
          display: flex;
          align-items: center;
          img{
              width: 100%;
            }
        }
       
      }
      .searchBox{
        width: px2rem(271px);
        height: px2rem(34px);
        div{
          width: 100%;
          color: #B2B2B2;
          font-size: px2rem(15px);
          border:1px solid #e5e5e5;
          height: 100%;
          background-color: white;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        i{
          padding: 0px px2rem(8px) 0px px2rem(8px);
        }
      }
      .minePageBtn{
        width: px2rem(52px);
        height: 100%;
        
        position: relative;
        div{
          width: px2rem(31px);
          height: px2rem(31px);
          
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          img{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 85%;
            height: 85%;
          }
        }
      }

  }
  //顶部工具栏的第二行，也就是子级导航条
  .second{
    width: 100%;
    position: relative;
    height: px2rem(30px);
    border-bottom:solid 2px rgba(197, 197, 197, 0.7);
    .hideScroll{
      position:absolute;
      top:px2rem(30px);
      left: 0;
      background-color: rgb(230, 230, 230);
      bottom: 0;
      right:0;
      height: px2rem(10px);
    }
    .mainRouteList{
      position:absolute;
      right:px2rem(40px);
      top:0;
      left: 0;
      bottom: 0;
      height: px2rem(40px);
      font-size: px2rem(13.5px);
      white-space: nowrap;
      overflow-y:hidden;
      overflow-x:auto; 
      text-align: center;
      line-height: px2rem(30px);
      //background-color: #F2F2F2;
      
      //box-shadow: 0 2px 0px 0px rgba(197, 197, 197, 0.768);

        .title{
          display: inline-block;
          .routeItem
          {
            margin: px2rem(15px) px2rem(15px) 0 px2rem(15px);
            padding-bottom:px2rem(5px); 
            text-decoration: none;
          }
        }
    }
    .dropdownBtn{
      position: absolute;
      right: 0;
      top:0;
      width: px2rem(40px);
      height:  px2rem(30px);
      line-height: px2rem(28px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i{
      font-size: px2rem(20px);
    }
  }

  .dropdownPanel{

  }
    
}
//内容部分
.middleContent{
  margin-top: 2px;
  width: 100%;
  position: absolute;
  top:px2rem(74px);
  bottom: 0px;
  left: 0px;
}
</style>

<template>
  <div class="box">
    <div class="ToolBarTop" @mousemove="RoutDrogMove" @mousedown="RoutDrogDown">
      <div class="firstLine">
        <div class="logo">
          <div>
            <img src="../../../assets/image/logo.png" alt="logo"/>
          </div>
          
        </div>
        <div class="searchBox">
          <div>
            <i class="el-icon-search"></i>搜索商品名称
          </div>
        </div>
        <div class="minePageBtn">
          <div>
            <img src="../../../assets/image/ybb_user.png"/>
          </div>
        </div>
      </div>
      
      <div class="second">
        <div class="mainRouteList" ref="mainRouteList"  >
          <div class="title"  v-for="(item,key) in mainRouteList" v-bind:key="key" v-on:click="titleAnima(key)">
            <router-link v-bind:class="[item.select ? titleSelect : titleUnSelect]"  :to="item.path" class="routeItem">{{item.title}}</router-link>     
          </div>
        </div>
        <div class="dropdownBtn">
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="hideScroll"></div>
      </div>
      

    </div>
   
    <div class="middleContent">
      <router-view></router-view>
    </div>
    
 
  </div>
</template>

<script>
import RouteList from "../../../assets/config/RouteList.js";
//模拟用的数据
import LocalDataForTest from "../../../assets/config/LocalDataForTest.js";
//双行列表模板
import NormalPanelTwoCol from "../../../components/ListPanel/NormalPanelTwoCol.vue";
//广播组件
import Broadcast from "../../../components/tool/broadcast.js"

export default {
  name: 'MainPageSelf',
  data(){
    return{
       mainRouteList: RouteList.main,
       currentSelctItem:0,
       titleSelect:'titleSelect',
       titleUnSelect:'titleUnSelect',
       routListBar:"#mainRouteList",
       routeStartX:0,
       allDatas:LocalDataForTest,
    }
  },
  methods:{
     titleAnima:function(key){
      this.mainRouteList[this.currentSelctItem].select=false;
      this.currentSelctItem=key;
      var current=this.mainRouteList[key].select;
      this.mainRouteList[key].select=!current;
    },
    RoutDrogDown:function(e){
      return;
      console.log(e);
      this.routeStartX=e.clientX;
    },
    RoutDrogMove:function(e){
      return;
      console.log(e);
      var distanceX = e.clientX-this.routeStartX;
      var currentLeft=this.$refs.mainRouteList.style.left;
      this.$refs.mainRouteList.style.left = (distanceX+currentLeft)+"px";
    }
  },
  watch:{
    
    
  },

  components: {
    NormalPanelTwoCol,
   
  },
  mounted:function(){
    
  },

}
</script>


