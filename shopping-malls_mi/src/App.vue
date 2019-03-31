<style lang="scss">
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}
//去除默认style，为了实现单页面，将body，html，app宽高都设置为100%
html,body{
    overflow-x:hidden;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    background-color: #e8e8e8;
    }
#app{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

      .contentView{
        width: 100%;
        position: absolute;
        bottom:px2rem(52px);
        top:0;
        left:0;
        background-color:#e2e2e2;
      }
      //app的css
      .rootRouter{
        position: absolute;
        left:0;
        bottom: 0;
        width: 100%;
        height: px2rem(52px);
        background-color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        .rootRouterBox{
          width: 100%;
          display: inline-block;
          .rootRouterItem{
          
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 25%;
            float: left;
            text-decoration: none;
              img{
              width: px2rem(20.84px);
              height: px2rem(20.84px);
              }
              span{
                color: #999;
              font-size: px2rem(11px);
              margin-top:2px;
              
            }
            

          }
        }
      }

  }

  



</style>

<template>
  <div id="app">

    <div class="contentView">
      <router-view></router-view>
    </div>

    <div class="rootRouter">
      <div class="rootRouterBox">
        <router-link v-for="(item,key) in rootRouters" v-bind:key="key" :to="item.path" class="rootRouterItem">
          <img src="./assets/image/首页gray.png"/>
          <span >{{item.title}}</span>
        </router-link>
      </div>
    </div>
 
  </div>
</template>

<script>
//路由组件
import RouteList from "./assets/config/RouteList.js";
//模拟用的数据
import LocalDataForTest from "./assets/config/LocalDataForTest.js";
//广播组件
//import Broadcast from "./components/tool/broadcast.js"

export default {
  name: 'app',
  data(){
    return{
       htmlFontSize:"37.5px",
       timer:false,
       htmlDom:document.getElementsByTagName('html')[0],
       rootRouters:RouteList.rootRouter,
    }
  },
  methods:{},
  watch:{
    htmlFontSize(val){
      this.htmlDom.style.fontSize=val;
      /*
      //如果要频繁更改宽度的话，做一点优化。
      this.timer = true
        if (!this.timer) {
              this.htmlDom.style.fontSize=val;
              this.timer = true
              setTimeout(()=>{
                this.timer = false
                }, 36)
        }
        */
    }
    
  },

  components: {
  
  },
  mounted:function(){
    //渲染完成后更改一下html的fontsize，目的是根据屏幕宽度缩放各个元素的大小。
    var ft=document.documentElement.clientWidth||document.body.clientWidth;
    this.htmlFontSize=ft/10+"px";
    this.htmlDom.style.fontSize=this.htmlFontSize;
    //将fontsize广播出去
    //Broadcast.$emit("fontSize",this);
    //在组件渲染完成之后，将onresize挂载一下，为了实现自适应必须掌握页面大小的变化。
      window.onresize=()=>{
        var ft=document.documentElement.clientWidth||document.body.clientWidth;
        this.htmlFontSize=ft/10+"px";
      };

      
  },

}
</script>


