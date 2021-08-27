<template>
  <div class="tarbaritem" @click="btnclick">
    <div class="itemimg" v-if="!isactive">
      <slot name='itemimg'></slot> 
    </div>
    <div v-else><slot name='acitemimg'></slot></div>
    <div class="itemtext" :style="acstyle">
      <slot name='itemtext'></slot> 
    </div>
  </div>
</template>

<script>
export default {
  name:'tarbaritem',
  data(){
    return {
      active: true
    }
  },
  props: {
    path:String,
    accolor:{
      type: String,
      default: 'blue'
    }
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    acstyle(){
      return this.isactive ? {color: this.accolor} : {}
    }
  },
  methods:{
    btnclick() {
      this.$router.replace(this.path)
    }
  }
}
</script>
<style scoped>
.tarbaritem{
    margin-top: 5px;
  }
  .tarbaritem img{
    width: 28px;
    height: 28px;
  }
</style>