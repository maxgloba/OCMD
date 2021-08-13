<template>
  <div id="app" class="tech">
    <Header />
    <main class="main" ref="main">
      <router-view/>
    </main>
    <Footer />
    <Loader v-if="this.$store.state.loader" />
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loader from './components/Loader.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Loader
  },
  mounted(){
    if(this.$route.query.affId){
      localStorage.affId = this.$route.query.affId;
    }
  }
}
</script>
<style lang="scss">
@import './assets/scss/reset';
@import './assets/scss/bootstrap';
@import './assets/scss/popup';

#app{
  font-family: 'Work Sans', sans-serif;
  color: #3a3c48;
}
// .container{
//   max-width: 1200px;
//   padding-left: 15px;
//   padding-right: 15px;
//   margin-left: auto;
//   margin-right: auto;
// }

.sell,
.sellingOne,
.sellingTwo,
.sellingThree,
.sellingFor,
.sellingFive,
.thankyou{
  .page-header, .footer-main{
    display: none;
  }
}

.payPalButton{
  cursor: pointer;
  background: #ffc439;
  border: none;
  height: 55px;
  line-height: 55px;
  display: block;
  width: 300px;
  max-width: 100%;
  border-radius: 30px;
  text-align: center;
  &:hover{
    background-color: #ffb300;
  }
  img{
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    height: 30px;
    pointer-events: none;
  }
}
</style>