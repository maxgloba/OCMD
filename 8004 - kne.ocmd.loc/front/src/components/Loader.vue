<template>
  <div class="loader">
    <div class="loader-msg" v-if="this.$store.state.loaderMsg">{{ this.$store.state.loaderMsg }}</div>
  </div>
</template>
<script>
export default {
  name: 'Loader'
}
</script>
<style lang="scss" scoped>
.loader{
  position: fixed;
  z-index: 99999;
  background: rgba(0,0,0, .5);
  left: 0; right: 0;
  top: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  @media(min-width:768px){
    padding: 0;
  }
  &:before, &:after{
    content:"";
    border-right: 2px solid;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 50%; top: 50%;
  }
  &:before{
    width: 30px;
    height: 30px;
    border-color: #fff;
    animation: rotating 1s linear infinite;
  }
  &:after{
    width: 50px;
    height: 50px;
    border-color: #e6beaf;
    animation: rotating .5s linear infinite;
  }
  &-hide{
    display: none;
  }
  &-msg {
    position: fixed;
    top: 30px;
    font-size: 25px;
    max-width: 600px;
    text-align: center;
    color: #000;
    font-weight: 700;
    background: #fff;
    padding: 30px;
    width: calc(100% - 30px);
    @media(min-width:768px){
      font-size: 30px;
      width: auto;
    }
  }
}

@keyframes rotating {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>