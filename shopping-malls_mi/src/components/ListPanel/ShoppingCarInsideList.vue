
<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}
.carBox{
    width: 100%;
    overflow: hidden;
    background-color: white;
    display: flex;
    flex-direction:column;
    .LiItem{
      width: 100%;
      height: px2rem(119px);
      display: flex;
      flex-direction:row;
      justify-content: start;
      align-items: center;
      .checkBox{
        width: px2rem(31px);
        height: 100%;
        line-height: px2rem(119px);
        text-align: center;
        i{
          font-size: px2rem(25px);
        }

      }
      .showImg{
        width: px2rem(94px);
        height: 100%;
        position: relative;
        margin-right: px2rem(15px);
        border: solid 1px transparent;
        img{
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: px2rem(91.8px);
          height: px2rem(91.8px);
          border: solid 1px rgb(238, 238, 238);
        }
      }
      .descBox{
        height: px2rem(91.8px);
        width: px2rem(187.6px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title{
          width: 100%;
          color: rgb(102, 102, 102);
          font-size: px2rem(14.59px);
        }
        .price{
           width: 100%;
          color:rgb(153, 153, 153);
          font-size: px2rem(12.5px);
        }
        .btnBox{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: px2rem(33.2px);
          line-height: px2rem(42.49px);
          .numSlect{
            display: inline-block;      
          }
          .delect{
            display: inline-block;
            i{
              font-size: px2rem(22.46px);
              font-weight: 700;
              line-height: px2rem(42.49px);
            }
          }
        }
      }
    }
}

.tagSeleted{
  color:rgb(255, 87, 34);
}
</style>



<template>
<div class="carBox">
    <div class="LiItem" v-for="(item,key) in datas" v-bind:key="key">
      <div class="checkBox" >
        <i :class="item.selected?tagSeleted:''" @click="select(item.cid)" class="el-icon-circle-check"></i>
      </div>
      <div class="showImg">
        <img :src="item.imgsrc"/>
      </div>
      <div class="descBox">
        <div class="title">
          {{item.title}}
        </div>
        <div class="price">
          {{item.price}}
        </div>
        <div class="btnBox">
          <div class="numSlect">
            <CounterPanel :nums="item.counter" :cid="item.cid" :boxHeight="counterHeight" :boxWidth="counterWidth" ></CounterPanel>
          </div>
          <div class="delect">
            <i @click="delectItem(item.cid)" class="el-icon-delete"></i>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
//购物车计数器组件
import CounterPanel from "./CounterPanel.vue" 
//Vuex
import store from "../tool/VueX.js";

export default {
  name: 'normalPanelTwoCol',
  data(){
    return{
      tagSeleted:"tagSeleted",
    }
  },
  store,
  methods:{
     select:function(val){
          this.$store.commit('Select',{cid:val});
          this.$store.commit("calculatePro",{});
      },
      delectItem:function(val){
          this.$store.commit('removeItemCar',{cid:val});
          this.$store.commit("calculatePro",{});
      }
      
  },
  components: {
    CounterPanel,
  },
  computed:{
    counterHeight(){return (33.26/37.5).toFixed(2)+"rem"},
    counterWidth(){return (95.79/37.5).toFixed(2)+"rem"}
  },
  props:['datas'],
  mounted(){
   
  },
}
</script>