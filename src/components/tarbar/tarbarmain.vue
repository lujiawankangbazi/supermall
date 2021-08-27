<template>
   <TarBar>
       
      <tarbaritem path="/home" accolor="black">
        <div slot="itemimg">
          <img src="../../assets/img/shouye.png" alt=""> 
        </div>
        <div slot="acitemimg">
          <img src="../../assets/img/shouye1.png" alt=""> 
        </div>
        <div slot="itemtext">首页</div>
      </tarbaritem>
      <tarbaritem path="/categroy">
        <div slot="itemimg">
          <img src="../../assets/img/fenlei.png" alt=""> 
        </div>
        <div slot="acitemimg">
          <img src="../../assets/img/fenlei1.png" alt=""> 
        </div>
        <div slot="itemtext">分类</div>
      </tarbaritem>
      <tarbaritem path="/cart">
        <div slot="itemimg">
          <img src="../../assets/img/gouwuche.png" alt=""> 
        </div>
        <div slot="acitemimg">
          <img src="../../assets/img/gouwuche1.png" alt=""> 
        </div>
        <div slot="itemtext">购物车</div>
      </tarbaritem>
      <tarbaritem path="/profile">
        <div slot="itemimg">
          <img src="../../assets/img/wode.png" alt=""> 
        </div>
        <div slot="acitemimg">
          <img src="../../assets/img/wode1.png" alt=""> 
        </div>
        <div slot="itemtext">我的</div>
      </tarbaritem>
    </TarBar>
    
</template>

<script>

import TarBar from './TarBar.vue'
import tarbaritem from './tarbaritem.vue'
export default {
  name: 'tarbarmain',
  components:{
    TarBar,
    tarbaritem
  }
}
</script>