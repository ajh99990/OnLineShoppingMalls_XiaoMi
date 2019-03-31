
<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}

.counterBox{
    overflow: hidden;
    background-color: white;
    border: solid 1px rgb(238, 238, 238);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
}

.minus{
    height: 100%;
    width: 30%;
    background-color: rgb(244, 244, 244);
    position: relative;
    text-align: center;
    .el-icon-minus{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        line-height: px2rem(33.25px);
        font-size: px2rem(13.46px);
        font-weight: 900;
        color: rgb(60, 60, 60);
    }
}
.num{
    height: 100%;
    font-size: px2rem(16.67px);
    line-height: px2rem(33.25px);
}
.add{
    height: 100%;
    width: 30%;
    background-color: rgb(244, 244, 244);
    position: relative;
    text-align: center;
    i{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        line-height: px2rem(33.25px);
        font-size: px2rem(13.46px);
        font-weight: 900;
        color: rgb(60, 60, 60);
    }
}

</style>



<template>
<div class="counterBox" :style="{width:boxWidth,height:boxHeight}">
    <div class="minus" @click="minus">
        <i class="el-icon-minus"></i>
    </div>
    <div class="num">{{nums}}</div>
    <div class="add" @click="add">
        <i class="el-icon-plus"></i>
    </div>
</div>
</template>

<script>
//Vuex
import store from "../tool/VueX.js";

export default {
  name: 'CounterPanel',
  data(){
    return{
        isNumbers:1,
    }
  },
  store,
  methods:{
      minus:function(){
          this.$store.commit('reduceNumer',{cid:this.cid,val:1});
          this.$store.commit("calculatePro",{});
          //this.$emit('counterChanged',[this.cid, this.isNumbers]);
      },
      add:function(){
          this.$store.commit('addNumber',{cid:this.cid,val:1});
          this.$store.commit("calculatePro",{});
          //this.$emit('counterChanged',[this.cid,this.isNumbers]);
      },
     

  },
  components: {
  },
  computed:{
     
  },
  props:['boxWidth','boxHeight','cid','nums']
}
</script>