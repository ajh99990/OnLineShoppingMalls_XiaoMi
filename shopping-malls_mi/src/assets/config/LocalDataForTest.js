var TestData=(function(){
    
    var phoneDatas=[
        {cid:1,index:0,title:"小米8 青春版",describe:"2400旗舰自拍",price:1399,oriPrice:1699,imgsrc:"//i8.mifile.cn/v1/a1/1c3e0097-73a6-1788-96f7-2cdb58d82ba1!360x360.webp"},
        {cid:2,index:1,title:"小米8 屏幕指纹版",describe:"压感屏幕指纹，手持超级夜景",price:2499,oriPrice:2999,imgsrc:"//i8.mifile.cn/v1/a1/2dc1fd08-ee77-65dd-c52a-82ba382ae864!360x360.webp"},
        {cid:3,index:2,title:"黑鲨游戏手机 Helo",describe:"双液冷，更能打",price:3199,oriPrice:3499,imgsrc:"//i8.mifile.cn/v1/a1/def98121-4b54-54a6-debb-e5c8a51dd4f7!360x360.webp"},
        {cid:4,index:3,title:"红米6",describe:"小屏高性能的双摄手机",price:729,oriPrice:799,imgsrc:"//i8.mifile.cn/v1/a1/a081da10-3758-e051-7a20-0de017f37476!360x360.webp"},
        {cid:5,index:4,title:"红米6A",describe:"好看耐用/轻巧省心",price:549,oriPrice:599,imgsrc:"//i8.mifile.cn/v1/a1/2c506517-9477-c928-8e77-bee18b6818a1!360x360.webp"},
        {cid:6,index:5,title:"小米6X",describe:"轻薄美观的拍照手机",price:1249,oriPrice:1799,imgsrc:"//i8.mifile.cn/v1/a1/bd9b6895-5b51-a0d6-fb79-e430ca40dca6!360x360.webp"},
        {cid:7,index:6,title:"小米Play",describe:"一年流量放心用",price:1099,oriPrice:0,imgsrc:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a183eae8ce729005a1e1bf2907f6d51d.png?thumb=1&w=360&h=360"},
        {cid:8,index:7,title:"小米9 透明尊享版",describe:"骁龙855，索尼4800万三摄	",price:3999,oriPrice:0,imgsrc:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/85cf0651fddeca0b21a803e0bd80c4e5.jpg"}
    ];
    var phonePoster=[
        {index:0,imgsrc:"//i8.mifile.cn/v1/a1/d7981516-3551-b7fe-e16a-f99828cc2a01!720x360.webp"},
        {index:1,imgsrc:"//i8.mifile.cn/v1/a1/46f6e095-63d1-32ce-d4ba-e65ef7f3e327!720x360.webp"},
        {index:2,imgsrc:"//i8.mifile.cn/v1/a1/0d509328-b045-0486-bcd2-3280007e5c5d!720x360.webp"},
    ]

    var smartDatas=[
        {cid:101,index:0,title:"小米净水器（厨下式）",describe:"400加仑大流量，隐藏安装",price:1999,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/635de9e4-3e44-012b-864e-933c5a259089!344x280.webp"},
        {cid:102,index:1,title:"小米AI音箱",describe:"听音乐、语音遥控家电",price:269,oriPrice:299,imgsrc:"//i8.mifile.cn/v1/a1/450956c5-4acb-14dc-bc36-ba640bfee836!344x280.webp"},
        {cid:103,index:2,title:"米家扫地机器人",describe:"智商高，扫得干净扫得快",price:1699,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/cf989eb5-d64d-be53-3740-e14953779ee0!344x280.webp"},
        {cid:104,index:3,title:"小米米家照片打印机",describe:"手机即拍即印",price:499,oriPrice:0,imgsrc:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b438cb649e48ba71db02e52f6108b07.jpg?thumb=1&w=344&h=280"},
        {cid:105,index:4,title:"米家新风机",describe:"全效解决全屋空气问题",price:2699,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/36ffd362-cf98-716c-6759-3988613860d0!344x280.webp"},
        {cid:106,index:5,title:"小米米家智能摄像机云台版",describe:"高清画质，守护家的每一面",price:199,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/8bda3599-0ad3-6c31-cd92-b6e24427fb06!344x280.webp"},
        {cid:107,index:6,title:"小米手环3 NFC版",describe:"能刷公交卡的手环",price:199,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/333df7d8-a210-f6cf-bbde-1b6165b30d08!344x280.webp"},
        {cid:108,index:7,title:"米家声波电动牙刷",describe:"高效动力，刷的干净",price:199,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/63a06eb8-7873-6791-4940-40007162e299!344x280.webp"},
    ];

    var tvDatas=[
        {cid:201,index:0,title:"小米电视4A 65英寸",describe:"4K HDR，人工智能语音系统",price:3199,oriPrice:3699,imgsrc:"//i8.mifile.cn/v1/a1/f7e8338e-f550-7d06-9b5d-ae17490a4f5d!344x280.webp"},
        {cid:202,index:1,title:"小米电视4C 43英寸",describe:"FHD全高清屏，钢琴烤漆",price:1399,oriPrice:1499,imgsrc:"//i8.mifile.cn/v1/a1/43543f60-15be-5296-4c93-8eebed31037d!344x280.webp"},
        {cid:203,index:2,title:"小米电视4A 32英寸",describe:"人工智能系统，高清液晶屏",price:799,oriPrice:899,imgsrc:"//i8.mifile.cn/v1/a1/8c9403fc-97df-c9a0-2f37-2acbe01617ef!344x280.webp"},
        {cid:204,index:3,title:"小米电视4A 55英寸",describe:"4K HDR，人工智能语音系统",price:2099,oriPrice:2399,imgsrc:"//i8.mifile.cn/v1/a1/681cae9a-b639-30fe-8d2f-808d28d7f6b1!344x280.webp"},
        {cid:205,index:4,title:"米家新风机",describe:"全效解决全屋空气问题",price:2699,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/e8c9a1b1-0777-e983-97e8-8d5862345487!344x280.webp"},
        {cid:206,index:5,title:"小米电视4A 50英寸",describe:"4K HDR，人工智能语音系统",price:1899,oriPrice:2099,imgsrc:"//i8.mifile.cn/v1/a1/f9811fdb-fe81-d344-8eb6-de165ec1fae9!344x280.webp"},
        {cid:207,index:6,title:"小米电视4A 49英寸",describe:"人工智能语音，FHD全高清屏",price:1699,oriPrice:1799,imgsrc:"//i8.mifile.cn/v1/a1/8550243b-79b4-476b-d87e-2d0688aa55d1!344x280.webp"},
        {cid:208,index:7,title:"小米电视4C 40英寸",describe:"FHD全高清屏，钢琴烤漆",price:1099,oriPrice:1299,imgsrc:"//i8.mifile.cn/v1/a1/f49b88a2-37bc-22ef-9caf-59b80a5479aa!344x280.webp"},
    ];

    var notebookDatas=[
        {cid:301,index:0,title:"15.6\" i3 4G 集显",describe:"全面均衡的国民轻薄本",price:2999,oriPrice:3399,imgsrc:"//i8.mifile.cn/v1/a1/2656972d-f6c2-13d1-cd61-74095f0e22c1!344x280.webp"},
        {cid:302,index:1,title:"15.6\" i3 4G 256G 集显",describe:"全面均衡的国民轻薄本",price:1399,oriPrice:1499,imgsrc:"//i8.mifile.cn/v1/a1/8d7c3b4b-2ca3-8c9c-1eba-46cda596bf95!344x280.webp"},
        {cid:303,index:2,title:"13.3\" i7 MX150 灰色",describe:"四核i7处理器 高性能独显",price:799,oriPrice:899,imgsrc:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d6c17bba7f527702fd10abf56c85c54e.jpg?thumb=1&w=344&h=280"},
        {cid:304,index:3,title:"15.6\" i7 16G MX150",describe:"高性能独显 第八代处理器",price:2099,oriPrice:2399,imgsrc:"//i8.mifile.cn/v1/a1/3dae31ca-e622-702b-fb4d-92149ed484e6!344x280.webp"},
        {cid:305,index:4,title:"15.6\" i5 4G MX110	",describe:"全面均衡的国民轻薄本",price:2699,oriPrice:0,imgsrc:"//i8.mifile.cn/v1/a1/e63c19a3-3d56-4c3d-a807-6bf9e0885390!344x280.webp"},
        {cid:306,index:5,title:"15.6\" i5 8G MX110",describe:"全面均衡的国民轻薄本",price:1899,oriPrice:2099,imgsrc:"//i8.mifile.cn/v1/a1/cbcb9f2e-f898-a3b8-2704-1cf5eff7b54f!344x280.webp"},
        {cid:307,index:6,title:"游戏本i7 GTX1060",describe:"性能怪兽 信仰级游戏体验",price:1699,oriPrice:1799,imgsrc:"//i8.mifile.cn/v1/a1/7bd077f6-f570-1d31-595e-6feafed770b9!344x280.webp"},
        {cid:308,index:7,title:"小米笔记本15.6",describe:"全面均衡的国民轻薄本",price:1099,oriPrice:1299,imgsrc:"//i8.mifile.cn/v1/a1/3a24826b-72cc-7043-2b51-7c63631e27ec!344x280.webp"},
    ];

    var recommendItemTitle=[
        {index:0,title:"小米手机",dataList:phoneDatas,imgsrc:"//i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12!720x440.webp"},
        {index:1,title:"小米电视",dataList:tvDatas,imgsrc:"//i8.mifile.cn/v1/a1/428220e8-aced-df9e-62ae-3fe3f4883bb3!720x440.webp"},
        {index:2,title:"精选家电",dataList:smartDatas,imgsrc:"//i8.mifile.cn/v1/a1/8bfcdf5b-e667-f950-643f-7571bdd4c526!720x440.webp"},
        {index:3,title:"小米笔记本",dataList:notebookDatas,imgsrc:"//i8.mifile.cn/v1/a1/2627319b-cb4c-6c13-2c96-c18286c1f34e!720x440.webp"},
    ]

    var tipDatas=[
        {index:0,content:"赠米粉卡，最高含100元话费"},
        {index:1,content:"温馨提示：产品是否购买成功，以最终下单为准，请尽快结算"},
    ]

    var recLike=[
        {cid:401,index:0,title:"8H凉感眼罩",describe:"FHD全高清屏，钢琴烤漆",price:23.9,oriPrice:0,imgsrc:"//i8.mifile.cn/b2c-mimall-media/2a41ba1205bcd7e08828dade176f8d66!360x360.jpg"},
        {cid:402,index:1,title:"小米米家智能后视镜",describe:"FHD全高清屏，钢琴烤漆",price:999,oriPrice:0,imgsrc:"//i8.mifile.cn/b2c-mimall-media/51a3db53009c0ac1dd731b4847573e20!360x360.jpg"},
        {cid:403,index:2,title:"小米8 青春版 移动版 4GB内存",describe:"FHD全高清屏，钢琴烤漆",price:23.9,oriPrice:1799,imgsrc:"//i8.mifile.cn/b2c-mimall-media/9be53b1fb13f926251e284f7e8fcbb6c.jpg"},
        {cid:404,index:3,title:"净水器滤芯两年套装",describe:"FHD全高清屏，钢琴烤漆",price:768,oriPrice:814,imgsrc:"//i8.mifile.cn/b2c-mimall-media/713039af6eb170be60ff500b2f538c65!360x360.jpg"},
        {cid:405,index:4,title:"米家空调",describe:"FHD全高清屏，钢琴烤漆",price:1699,oriPrice:1799,imgsrc:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e1e5eda022f8f9cccd862337381d5c04.jpg?thumb=1&w=360&h=360"},
        {cid:406,index:5,title:"三曲线护颈记忆绵枕",describe:"FHD全高清屏，钢琴烤漆",price:99,oriPrice:0,imgsrc:"//i8.mifile.cn/b2c-mimall-media/c7ae0ba8cac1bf10efa83b47f6dc809c!360x360.jpg"},
        {cid:407,index:6,title:"小米电视4C 40英寸",describe:"FHD全高清屏，钢琴烤漆",price:1099,oriPrice:1299,imgsrc:"//i8.mifile.cn/v1/a1/f49b88a2-37bc-22ef-9caf-59b80a5479aa!344x280.webp"},
    ]
    
    var otherImg=[
        {index:0,title:'猜你喜欢',imgsrc:"//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"},
    ]

    var DBforSearch=[phoneDatas,smartDatas,tvDatas,notebookDatas,recLike]
    return {
        phone:phoneDatas,
        phonePoster:phonePoster,
        smart:smartDatas,
        tv:tvDatas,
        notebook:notebookDatas,
        recommendItem:recommendItemTitle,
        recLike:recLike,
        tipDatas:tipDatas,
        otherImg:otherImg,
        DBforSearch:DBforSearch,
    }
    
})()
export default TestData;