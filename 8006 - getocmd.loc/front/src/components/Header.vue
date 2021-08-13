<template>
  <header class="page-header">
    <div class="container">
      <div class="logo">
        <img src="@/assets/img/logo.svg">
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
.page-header{
  padding: 15px 0;
  .container{
    display: flex;
  }
  .logo{
    width: 160px;
    display: block;
    @media(max-width:767px){
      margin: 0 auto;
    }
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>