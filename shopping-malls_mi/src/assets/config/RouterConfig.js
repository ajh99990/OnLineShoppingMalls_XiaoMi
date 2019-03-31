import Vue from 'vue'
import VueRouter from "vue-router";

//引入各个模块
//主页
import MainPageSelf from "../../components/Pages/MainPage/MainPageSelf.vue"
import HouEleApp from "../../components/Pages/MainPage/HouEleApp.vue";
import Life from "../../components/Pages/MainPage/Life.vue";
import Notebook from "../../components/Pages/MainPage/Notebook.vue";
import Phone from "../../components/Pages/MainPage/Phone.vue";
import Recommend from "../../components/Pages/MainPage/Recommend.vue";
import Smart from "../../components/Pages/MainPage/smart.vue";
import TV from "../../components/Pages/MainPage/TV.vue";
//分类
import ClassifyPage from "../../components/Pages/ClassifyPage/ClassifyPageSelf.vue";
//购物车
import ShoppingcartPage from "../../components/Pages/ShoppingcartPage/ShoppingcartPageSelf.vue";
//个人主页
import MinePage from "../../components/Pages/MinePage/MinePageSelf.vue";


Vue.use(VueRouter);//挂载VueRouter

const routes=[ //配置路由
    {path:'/',component:MainPageSelf,
      children:[
        {path:'/',component:Recommend},
        {path:'/houEleapp',component:HouEleApp},
        {path:'/life',component:Life},
        {path:'/notebook',component:Notebook},
        {path:'/phone',component:Phone},
        {path:'/smart',component:Smart},
        {path:'/tv',component:TV},
      ]},
    {path:'/classify',component:ClassifyPage},
    {path:'/shoppingCart',component:ShoppingcartPage},
    {path:'/mine',component:MinePage},

  ]
  
  //创建vue Router实例
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

  export default router;