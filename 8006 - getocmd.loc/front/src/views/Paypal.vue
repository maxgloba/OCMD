<template>
  <div>
    <div id="paypal-button-container"></div>
    <button @click="getPP">Get PP</button>
  </div>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'paypal',
  data(){
    return {
      amount: '120',
      id: null,
    }
  },
  methods: {
    confirmPP(obj){

    },
    getPP(){
      let createOrderData = {
        value: this.amount
      }
      let getId;
      paypal.Buttons({
        locale: 'en_US',
        style: {
          color: 'gold',
          shape: 'pill',
          size: 'responsice',
          height: 55,
          width: '100%',
          tagline: false,
          responsive: true,
          label: 'paypal',
          layout: 'horizontal',
          size: 'responsive'
        },
        commit: true,

        createOrder: (data, actions) => {
          return Request.paypalOrderCreate(createOrderData).then(res => {
              getId = res.id;
              return res.id;
            });
        },

        onApprove: (data, actions) => {
          // console.log(getId);
          return Request.paypalOrderCapture({value: getId})
            .then(orderData => {
              var errorDetail = Array.isArray(orderData.details) && orderData.details[0];

              if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                return actions.restart();
              }

              if (errorDetail) {
                var msg = 'Sorry, your transaction could not be processed.';
                if (errorDetail.description) msg += '\n\n' + errorDetail.description;
                if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')';
                return alert(msg); // Show a failure message
              }

              let confirmRequest = {
                token: orderData.id,
                payerId: orderData.payer.payer_id
              }
              // console.log(confirmRequest);
            });
        }

      }).render('#paypal-button-container');
    }
  },
  mounted(){
    let paypal_script = document.createElement('script');
    paypal_script.src = 'https://www.paypal.com/sdk/js?client-id=AYd_16x16MHsOzA-QMHu9anXGOoRcxCXYDTYbJpFA3xIrLhIVo2PG4U5c7rVWdfSbOkpPAr3NDmvky1r';
    document.getElementsByTagName('head')[0].appendChild(paypal_script);
    setTimeout(()=>{
      console.log(paypal);
    }, 1000);
  }
}
</script>
