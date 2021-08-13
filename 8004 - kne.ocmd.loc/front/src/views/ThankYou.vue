<template>
  <div class="thankyou">
    <div class="thankyou-wrap">
      <h1>Thank you</h1>
      <h2>Your order was completed successfully!</h2>
      <!-- <h3>An email receipt with the details of your order has been sent to your email address.</h3> -->
      <table class="cart">
        <thead>
          <th>Product name</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ this.cart.name }}</td>
            <td>$<b>{{ this.cart.price }}</b></td>
          </tr>
          <tr v-if="this.upsell">
            <td>{{ this.upsell.name }}</td>
            <td>$<b>{{ this.upsell.price }}</b></td>
          </tr>
          <tr v-if="this.downsell">
            <td>{{ this.downsell.name }}</td>
            <td>$<b>{{ this.downsell.price }}</b></td>
          </tr>
          <tr v-if="this.crosssell">
            <td>{{ this.crosssell.name }}</td>
            <td>$<b>{{ this.crosssell.price }}</b></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${{ total }}</td>
          </tr>
        </tfoot>
      </table>
      <img src="@/assets/img/logo.svg" alt="" width="200">
    </div>
  </div>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'thankyou',
  data(){
    return{
      total: 0,
      cart: false,
      upsell: false,
      downsell: false,
      crosssell: false
    }
  },
  methods: {
    orderConfirmation(){
      Request.orderConfirm({
        orderId: localStorage.orderId
      }).then(result => {
        setTimeout(() => {
          localStorage.clear();
          this.$router.push('/');
        }, 5000);
      })
    }
  },
  mounted(){
    if(!localStorage.orderId){
      this.$router.push('/');
    } else {

      this.orderConfirmation()

      if(localStorage.cart){
        this.cart = JSON.parse(localStorage.cart);
        this.total = this.total + Number(this.cart.price);
      }
      if(localStorage.upsell){
        this.upsell = JSON.parse(localStorage.upsell);
        this.total = this.total + Number(this.upsell.price);
      }
      if(localStorage.downsell){
        this.downsell = JSON.parse(localStorage.downsell);
        this.total = this.total + Number(this.downsell.price);
      }
      if(localStorage.crosssell){
        this.crosssell = JSON.parse(localStorage.crosssell);
        this.total = this.total + Number(this.crosssell.price);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.thankyou{
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  @media(min-width:768px){
    padding: 60px 0;
  }
}
h1{
  font-size: 40px;
  margin-bottom: 30px;
  @media(min-width:768px){
    font-size: 50px;
  }
}
h2{
  font-size: 25px;
  margin-bottom: 30px;
  @media(min-width:768px){
    font-size: 30px;
  }
}
h3{
  font-size: 16px;
  margin-bottom: 30px;
  @media(min-width:768px){
    font-size: 20px;
  }
}
table{
  border-collapse: none;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  td, th{
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px;
    font-size: 16px;
    &:last-child{
      border-right: none;
    }
  }
  th{
    background: #fe6f61;
    color: #fff;
    font-weight: 700;
  }
  tfoot{
    td{
      font-weight: 700;
      border-bottom: none;
    }
  }
}
</style>