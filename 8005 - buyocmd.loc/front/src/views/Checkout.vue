<template>
  <section class="page page-checkout">
    <div class="container">
      <img src="@/assets/img/chkl-stp-img.png" alt="" class="steps-icon">
      <div class="row">
        <div class="col-md-8">
          <CheckoutForm />
        </div>
        <div class="col-md-4">
          <CheckoutCart />
          <CheckoutTxt />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CheckoutForm from '@/components/CheckoutForm.vue'
import CheckoutCart from '@/components/CheckoutCart.vue'
import CheckoutTxt from '@/components/CheckoutTxt.vue'
export default {
  name: 'checkout',
  components: {
    CheckoutForm, CheckoutCart, CheckoutTxt
  },
  beforeCreate(){
    if(localStorage.cart && localStorage.product_type && localStorage.campaignId){
      this.$store.state.cart = JSON.parse(localStorage.cart);
      this.$store.state.product_type = localStorage.product_type;
      this.$store.state.campaignId = localStorage.campaignId;
    }
  },
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>
<style lang="scss" scoped>
.page-checkout{
  border-top: 1px solid #e6beaf;
  padding-top: 30px;
}
.steps-icon{
  display: block;
  margin: 0 auto 30px;
}
.container{
  border-bottom: 1px solid #ccc;
  padding-bottom: 60px;
}
</style>