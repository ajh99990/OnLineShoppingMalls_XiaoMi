<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}

.page{
    overflow-x: hidden;
    overflow-y:auto;
    height: 100%;
}
.top{
    background-color: white;
    .titleAdv{
        width: px2rem(375px);
        height: px2rem(187.5px);
        .imgPoster{
            height:100%;
            width: 100%;
        }
    }
    .childRouteList{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        .routeItem{
            width: px2rem(75px);
            height: px2rem(79px);
            img{
                width: 100%;
            }
        }
    }
}
.content{
    overflow-x:hidden;
    overflow-y:auto;
    padding: 0;
    margin:0;
    //height: 100%;
    .contentItem{
        margin-bottom: 5px;
        background-color: white;
        overflow: hidden;
        .titleImg{
            width: 100%;
            height: px2rem(229.29px);
            img{
                width:100%;
                height: px2rem(229.29px);
            }
        }
    }
}

</style>


<template>
    <div class="page">
        <div class="top">
            <div class="titleAdv">
                <el-carousel ref="isAdv" :height="AdvHeight">
                    <el-carousel-item  v-for="item in toRenderDatas.phonePoster" :key="item.index">
                         <img class="imgPoster" :src="item.imgsrc">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="childRouteList">
                <div class="routeItem" v-for="item in firstRouteList" v-bind:key="item.index">
                    <img :src="item.imgsrc">
                </div>
            </div>
        </div>
        <div class="content"><!--内容部分使用模板渲染，很方便-->
            <div class="contentItem" v-for="item in toRenderDatas.recommendItem" v-bind:key="item.index"><!--按照一块一块的渲染,如有必要以后可以做成模块-->
                <div class="titleImg" >
                    <img :src="item.imgsrc"/>
                </div>
                <NormalPanelTwoCol :datas="item.dataList"></NormalPanelTwoCol>
            </div>
            
        </div>
    </div>
</template>

<script>
import RouteList from "../../../assets/config/RouteList.js";
//模拟用的数据
import LocalDataForTest from "../../../assets/config/LocalDataForTest.js";
//双行列表模板
import NormalPanelTwoCol from "../../ListPanel/NormalPanelTwoCol.vue";
//广播组件
import Broadcast from "../../tool/broadcast.js"

export default {
  name: 'Recommend',
  data(){
    return{
       firstRouteList: RouteList.firstList,
       toRenderDatas:LocalDataForTest,
    }
  },
  watch:{
  },
  methods:{
  },
  components: {
   NormalPanelTwoCol,
  },
  computed:{
        AdvHeight:function()
        {
            return "5rem";// (187.5/37.5)
        },
    },
    mounted:function(){},
}

</script>