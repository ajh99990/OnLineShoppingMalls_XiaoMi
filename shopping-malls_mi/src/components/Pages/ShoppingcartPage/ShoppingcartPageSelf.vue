
<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}

.carbox{
    background-color: white;
    width: 100%;
    height: 100%;
    position: relative;
    .titleBar{
        width: 100%;
        height: px2rem(50px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: rgb(102, 102, 102);
        background-color: rgb(242, 242, 242);
        .returnBefore{
            box-sizing: border-box;
            width: px2rem(52px);
            text-align: center;
            height: 100%;
            position: relative;
            i{
                position: absolute;
                top: 0;
                left:0;
                right: 0;
                bottom: 0;
                line-height: px2rem(50px);
                font-size: px2rem(26px);
            }
            
        }
        
        .titlemsg{
            
            font-size: px2rem(16px);

        }
        .searchBtn{
            width: px2rem(52px);
             height: 100%;
            text-align: center;
            position: relative;
            i{
                position: absolute;
                top: 0;
                left:0;
                right: 0;
                bottom: 0;
                line-height: px2rem(50px);
                font-size: px2rem(26px);
            }
        }
    }

    .contents{
        width: 100%;
        overflow: auto;
        position: absolute;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        .tips{
        background-color: white;
        width: 100%;
        font-size: px2rem(11.46px);
        color: rgb(153, 153, 153);
        .tipsItem{
            border-top: solid 1px rgb(246, 246, 246);
            box-sizing: border-box;
            width: 100%;
            padding: px2rem(10px) px2rem(15px) px2rem(10px) px2rem(15px);
            
            }

        }
        .recShowList{
            width: 100%;
            img{
                width: 100%;
                height: px2rem(62.5px);
            }
        }
            
        }

    .footer{
        background-color: black;
        position: fixed;
        width: 100%;
        height: px2rem(50px);
        bottom: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: white;
            flex:1;
            height: 100%;
            .c1{
                font-size: px2rem(12px);
                color: rgb(153, 153, 153);
            }
            .c2{
                font-size: px2rem(20.8px);
                color:rgb(255, 87, 34);
            }
            .c2:after{
                content: "元";
                font-size: px2rem(13.5px);
                color: rgb(153, 153, 153);
            }
        }
        .goon{
            height: 100%;
            width: 33%;
            background-color: rgb(244, 244, 244);
            color: black;
            text-align: center;
            line-height: px2rem(50px);
            font-size: px2rem(14.59px);
        }
        .settlement{
            height: 100%;
            font-size: px2rem(14.59px);
            width: 33%;
            background-color: rgb(255, 103, 0);
            color: white;
            text-align: center;
            line-height: px2rem(50px);
        }
    }
    
}

.footerView{visibility: hidden;}
.routerBox{text-decoration: none;color: black;display: block;width: 100%;height: 100%;}
</style>



<template>
    <div class="carbox">
        <div class="titleBar"><!--标题栏-->
            <div class="returnBefore">
                <router-link to="/">
                    <i class="el-icon-arrow-left"></i>
                </router-link>
            </div>
            <div class="titlemsg">{{titleMsg}}</div>
            <div class="searchBtn">
                <i class="el-icon-search"></i>
            </div>
        </div>
        <div class="contents">
            <div class="commodityList"><!--物品列表-->
                <SCarInsideLi :datas="carList" ></SCarInsideLi>
            </div>
            <div class="tips">
                <div class="tipsItem" v-for="item in datasForTest.tipDatas" v-bind:key="item.index">
                    {{item.content}}
                </div>
            </div><!--提示信息-->
            <div class="recShowList"><!--猜你喜欢列表-->
                <img :src="datasForTest.otherImg[0].imgsrc"/>
                <NormalPanelTwoCol :datas=datasForTest.recLike></NormalPanelTwoCol>
            </div>
        </div>
        <div class="footer" :class="this.$store.state.shoppingCarList.length==0?footerView:''">
            <div class="info">
                <div class="c1">共{{this.$store.state.selectedCounter}}件 金额:</div>
                <div class="c2">{{this.$store.state.totalPrice}}</div>
            </div>
            <div class="goon">
                <router-link to="/" class="routerBox">
                    {{footerMid}}
                </router-link>
            </div>
            <div class="settlement">{{footerLast}}</div>
        </div>
    </div>
</template>

<script>
//路由组件
import RouteList from "../../../assets/config/RouteList.js";
//模拟用的数据
import LocalDataForTest from "../../../assets/config/LocalDataForTest.js";
//双列组件
import NormalPanelTwoCol from "../../ListPanel/NormalPanelTwoCol.vue";
//购物车物品展示组件
import SCarInsideLi from "../../ListPanel/ShoppingCarInsideList.vue" 
//Vuex
import store from "../../tool/VueX.js";


export default {
  name: 'ShoppingcartPageSelf',
  data(){
    return{
        titleMsg:"购物车",
        htmlFontSize:"37.5px",
        datasForTest:LocalDataForTest,
        carlist:[],
        footerMid:"继续购物",
        footerLast:"去结算",
        footerView:"footerView",
        
    }
  },
  store,
  methods:{
      
  },
  computed:{
      carList:function(){
          return this.$store.state.shoppingCarList;
      },
   
  },
  watch:{},
  components: {
      NormalPanelTwoCol,
      SCarInsideLi,
  },
  mounted:function(){},

}
</script>
