
<style lang="scss" scoped>
@function px2rem($px)
{
  $rem:37.5px;
  @return ($px/$rem)+rem;
}

.tvbox{
    background-color: white;
    height: 100%;
    width: 100%;
    position: relative;
    .msgbox{
        position:absolute;
        top: 0;left: 0;right: 0;bottom: 0;
        margin: auto;
        text-align: center;
        font-size: px2rem(24px);
    }
}
</style>



<template>
    <div class="tvbox">
        <div class="msgbox">{{msg}}</div>
    </div>
</template>

<script>
export default {
  name: 'notebook',
  data(){
      return{
          msg:"笔记本页面正在加紧制作中！",
      }
    
  },
  computed:{
   
  },
  watch:{},
  components: {
  },
}
</script>
