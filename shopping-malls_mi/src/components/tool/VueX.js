import vue from "vue"
import vuex from "vuex"
//模拟用的数据
import DB from "../../assets/config/LocalDataForTest.js";

vue.use(vuex)

var state={
    shoppingCarList:[],
    itemIndex:0,
    selectedCounter:0,
    totalPrice:0,
}

var mutations={
    
    calculatePro(state,payload){//用于计算总价和总件数
        //后续可以通过传递cid来对这个函数进行优化。
        var shcar=state.shoppingCarList;
        var tempCounter=0;
        var tempPrice=0;
        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].selected==true)
            {
               
                tempCounter+=shcar[i].counter;
                tempPrice+=shcar[i].counter*shcar[i].price;
                console.log(shcar[i].counter);
                console.log(shcar[i].price); 
            }
        }
        state.selectedCounter=tempCounter;
        state.totalPrice=tempPrice.toFixed(2);
    },
    //{cid,index,counter,title,describe,price,imgsrc};
    addItemCar(state,payload){//点击加入购物车按钮时候的函数
        state.itemIndex+=1;
        var n=0;
        var sign=false;
        var datafromDB;
        var shcar=state.shoppingCarList;
        var cid=payload.cid;
        var mydb=DB.DBforSearch;
        //var isIndex=state.itemIndex;

        //先看看购物车里面有没有，有的话就数量+1
        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].cid===cid)
            {
                shcar[i].counter+=1;
                sign=true;
                break;
            }
        }

        //有的话就可以在这里结束了。
        if(sign==true)
        {return;}

        //没有的话去数据库根据cid取数据
        if(cid>=1 && cid<=100)
        {n=0;}
        else if(cid>=101 && cid<=200)
        {n=1;}
        else if(cid>=201 && cid<=300)
        {n=2;}
        else if(cid>=301 && cid<=400)
        {n=3;}
        else if(cid>=401 && cid<=500)
        {n=4;}
        else
        {return;}
   
        for(var i =0;i<mydb[n].length;i++)
        {
            
            if(mydb[n][i].cid==cid)
            {
                
                sign=true;
                datafromDB=mydb[n][i];
                break;
            }
        }
        
        //没拿到数据说明cid不存在，直接退出。
        if(sign==false)
        {return;}
        
        //拿到数据了处理一下，添加进购物车
        //{cid,index,title,describe,price,oriPrice,imgsrc}

        var newitem={selected:false,counter:1,cid:datafromDB.cid,index:datafromDB.index,title:datafromDB.title,price:datafromDB.price,imgsrc:datafromDB.imgsrc};
        state.shoppingCarList.push(newitem);
       
        //var newList=Object.assign([],state.shoppingCarList);
        //state.shoppingCarList=newList;
        
    },
    removeItemCar(state,payload){//从购物车删除时候的函数
        var shcar=state.shoppingCarList;

        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].cid===payload.cid)
            {
                shcar.splice(i,1);
                break;
            }
        }
        
    },
    reduceNumer(state,payload){
        //val 指要删除的数量，一般是1，也就是点击减号时候的情况
        var shcar=state.shoppingCarList;
        
        
   //var newList=Object.assign([],state.shoppingCarList);
        //state.shoppingCarList=newList;
        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].cid===payload.cid)
            {
                var tempn=shcar[i].counter;
                tempn-=payload.val;
                if(tempn<=0)
                {tempn=1;}
                shcar[i].counter=tempn;
                
                return tempn;
            }
        }
        return 0;

    },
    addNumber(state,payload){
        var shcar=state.shoppingCarList;

        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].cid===payload.cid)
            {
                shcar[i].counter+=payload.val;
                
                return shcar[i].counter;
                
            }
        }
        return 0;

    },
    Select(state,payload){
        var shcar=state.shoppingCarList;
        var cid=payload.cid;

        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].cid===cid)
            {
                shcar[i].selected=!shcar[i].selected;
                break;
                
            }
        }
        return 0;

    },
    GetNum(state,cid){
        var shcar=state.shoppingCarList;
        for(var i=0;i<shcar.length;i++)
        {
            if(shcar[i].cid===cid)
            {
                return shcar[i].counter;
            }
        }
        return 0;

    }
}

const store =new vuex.Store({
    state,
    mutations,
})

export default store;