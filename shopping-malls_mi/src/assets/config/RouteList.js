var RouteList=(function(){
    var mainRoute=[
    {path:'/',title:"推荐",select:true},
    {path:'/phone',title:"手机",select:false},
    {path:'/smart',title:"智能",select:false},
    {path:'/tv',title:"电视",select:false},
    {path:'/houEleapp',title:"家电",select:false},
    {path:'/notebook',title:"笔记本",select:false},
    {path:'/life',title:"生活周边",select:false},
];

var firstPageChildRoutList=[
    {path:'/',title:"新品发布",imgsrc:'//i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp'},
    {path:'/',title:"以旧换新",imgsrc:'//i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp'},
    {path:'/',title:"电视热卖",imgsrc:'//i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp'},
    {path:'/',title:"每日甄选",imgsrc:'//i8.mifile.cn/v1/a1/b338546a-bba6-eff5-0b4e-6bcb90c6230e!144x152.webp'},
    {path:'/',title:"米粉卡",imgsrc:'//i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp'},
];
    var rootRouter=[
        {path:'/',title:"首页",imgsrc:'//i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp'},
        {path:'/classify',title:"分类",imgsrc:'//i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp'},
        {path:'/shoppingCart',title:"购物车",imgsrc:'//i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp'},
        {path:'/mine',title:"我的",imgsrc:'//i8.mifile.cn/v1/a1/b338546a-bba6-eff5-0b4e-6bcb90c6230e!144x152.webp'}
    ]
    return {
        main:mainRoute,
        firstList:firstPageChildRoutList,
        rootRouter:rootRouter,
    };
})()

export default RouteList;