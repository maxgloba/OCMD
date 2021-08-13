<template>
  <div :id="`paypal_btn_${id}`"></div>
</template>
<script>
import paypal from 'paypal-checkout';
// import Request from '@/services/Request.js'
export default {
  name: 'payPal',
  props: ['price', 'id'],
  data(){
    return {
      paypal: null
    }
  },
  methods: {
    submitOrderPP(ppData){
      // console.log(ppData);
    }
  },
  mounted(){
    let amount = this.price;
    let submit = obj => {
      this.submitOrderPP(obj);
    }
    let transactions_arr = {
      transactions: [{
        amount: {
          total: `${amount}`,
          currency: 'USD'
        },
        item_list: {
          items: [{
            name: 'ocmdcream',
            quantity: '1',
            price: `${amount}`,
            currency: 'USD'
          }],
        }
      }]
    }

    paypal.Button.render({
      env: 'sandbox',
      client: {
        sandbox: 'ARRi4Nnr4YPFnuPvLdTXgmVjPVDWsW5yyDha_46cQSWTjFfGeDKtxgw9I0Xb-MAec8WGwtWDjKhFBVvR',
        production: 'ARhfPjKvYhY02oF8KVDcpBJUyjNCt57lt4tw1nlspEZ1MSJqC_K1yVPLB5qFwigBygEjIq5Zq-ljMurO'
      },
      commit: true,
      locale: 'en_US',
      style: {
        color: 'gold',
        shape: 'pill',
        size: 'responsive',
        height: 55,
        width: '100%',
        tagline: false,
        responsive: true,
        label: 'paypal',
        layout: 'horizontal',
        // layout: 'vertical',
        // funding: {
        //   allowed: [ paypal.FUNDING.CARD ]
        // },
      },
      payment: function(data, actions) {
        return actions.payment.create(transactions_arr);
      },
      onAuthorize: function(data, actions) {
        return actions.payment.execute().then(function() {
          submit(data);
        });
      },
      onError: function(err) {
        console.log(err);
        alert('ERROR! Please use "Credit Card payment".');
      }
    }, `#paypal_btn_${this.id}`);
  }
}
</script>
