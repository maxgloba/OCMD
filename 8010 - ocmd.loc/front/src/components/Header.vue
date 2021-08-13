<template>
  <header class="page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6">
          <div class="logo">
            <img src="@/assets/img/logo.svg">
          </div>
        </div>
        <div class="offset-md-1 col-md-8 col-6">
          <Navigation />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'Header',
  components: {
    Navigation
  }
}
</script>
<style lang="scss" scoped>
.page-header{
  padding: 15px 0;
  // .container{
  //   display: flex;
  // }
  .logo{
    width: 160px;
    max-width: 100%;
    display: block;
    img{
      display: block;
      width: 100%;
    }
  }
}
.col-md-8{
  display: flex;
  align-items: center;
}
</style>