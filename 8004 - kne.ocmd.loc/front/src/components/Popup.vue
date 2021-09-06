<template>
  <section class="popup" :class="{ 'popup-active': anim }">
    <span @click="close" class="popup-back"></span>
    <div class="popup-wrap">
      <button class="popup-close" @click="close">+</button>
      <div class="popup-content" v-html="html"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    html: String,
  },
  data(){
    return {
      anim: false
    }
  },
  methods: {
    close(){
      this.$parent._data.popup = false;
      document.body.parentNode.style.overflowY = 'auto';
    }
  },
  created(){
    setTimeout(()=>{
      this.anim = true;
    }, 250);
  },
  destroyed(){
    this.anim = false;
  }
}
</script>
<style lang="scss" scoped>
.popup{
  position: fixed;
  left: 0; top: 0;
  width: 100%; height: 100vh;
  z-index: 999;
  background: rgba(0,0,0, .8);
  padding: 30px 10px;
  opacity: 0;
  transition: opacity .5s ease;
  overflow: hidden;
  word-wrap: break-word;
  &-active{
    opacity: 1;
    overflow-y: auto;
    .popup-wrap{
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  &-wrap{
    background: #FFF;
    min-width: 300px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 15px;
    position: relative;
    opacity: 0;
    transform: translate(0, 200px);
    transition: .5s ease .2s;
  }
  &-close{
    position: absolute;
    right: 10px;
    top: 10px;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font-size: 40px;
    transform: rotate(45deg);
    height: 50px;
    width: 50px;
    line-height: 1;
    text-align: center;
    &:hover{
      opacity: .8;
    }
  }
  &-back{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    cursor: pointer;
    &:hover{
      background: rgba(255,255,255, .05);
    }
  }
}
</style>