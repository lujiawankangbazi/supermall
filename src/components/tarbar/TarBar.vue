<template>
  <div class="tarbar">
    <slot></slot>
  </div>
</template>

<style scoped>
  .tarbar{
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    position: fixed;
    left:0;
    right:0;
    bottom:0;
    height: 56px;
  }
  
</style>
<script>

export default {
  name: 'TarBar',
  components:{
  }
}
</script>