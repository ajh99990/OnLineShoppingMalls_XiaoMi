
<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}
.twoColBox{
    height: 100%;
    overflow: hidden;
    background-color: white;
}
    .itemBox{
        box-sizing: border-box;
        float: left;
        width: 50%;
        height: px2rem(265px);
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: px2rem(5px);
        .topPanel{
            width: 100%;
            text-align: center;
            .showImg{
                width: 100%;
                display: inline-block;
                img{
                    width: px2rem(179.2px);
                    height: px2rem(145.9px);
                }
            }
        }
        .bottomPanel{
            box-sizing: border-box;
            width: 100%;
            padding: px2rem(5px);
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            flex-wrap: nowrap;
            overflow: hidden;
                .title{
                    text-align: center;
                    width: 80%; 
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    font-size: px2rem(14.59px);
                    
                }
                .desc{
                  
                    line-height: 1.9;
                    font-size: px2rem(11.4px);
                    color:#828282;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .price{
                    text-align: center;
                    height: px2rem(21.8px);
                    margin: 0;
                    padding: 0;
                    .current{
                        position: relative;
                        top: px2rem(-25.5px);
                        color: rgb(234, 98, 91);
                        display: inline-block;
                        margin-right: px2rem(5px);
                        font-size: px2rem(14.59px);
                        span:before{
                            content:"￥";
                            font-size: px2rem(11px);
                        }
                        span:after{
                            content:"起";
                            font-size: px2rem(11px);
                        }
                    }
                    .origi{
                        position: relative;
                        top: px2rem(-25px);
                        font-size: px2rem(11.46px);
                        display: inline-block;
                        color: #828282;
                        text-decoration:line-through;
                        span:before{
                            content:"￥";
                        }
                    }
                }
                .buyBtn{
                    margin-top:px2rem(2px);
                    display: flex;
                    flex-direction:column;
                    justify-content: center;
                    align-items:center;
                    div{
                        text-overflow: ellipsis;
                    white-space: nowrap;
                        padding: px2rem(8px) px2rem(17px) px2rem(8px) px2rem(17px);
                        border-radius: 2.6px;
                        background-color:rgb(234, 98, 91);
                        color: white;
                        font-size: px2rem(12.5px);
                        font-weight: 700;
                        line-height: px2rem(14.3px);
                        margin: 0px px2rem(23px) 0px px2rem(23px);
                    }
                }
            
            
            
        }
        
    }
</style>



<template>
<div class="twoColBox">
    <div class="itemBox" v-for="(item,key) in datas" v-bind:key="key">
        <div class="topPanel">
            <div class="showImg">
                <img  :src="item.imgsrc"/>
            </div>
        </div>
        <div class="bottomPanel">
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.describe}}</div>
            <div class="price">
                <div class="current"><span>{{item.price}}</span></div>
                <div class="origi" v-if="item.oriPrice!='0'"><span>{{item.oriPrice}}</span></div>
            </div>
            <div class="buyBtn" @click="addCar(item.cid)">
                <div>加入购物车</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//Vuex
import store from "../tool/VueX.js";

export default {
  name: 'normalPanelTwoCol',
  data(){
    return{
        
    }
  },
  store,
  methods:{
      addCar:function(cid){
          this.$store.commit('addItemCar',{cid:cid});
          this.$store.commit("calculatePro",{});
      }
  },
  components: {
  },
  computed:{
  },
  props:['datas']
}
</script>