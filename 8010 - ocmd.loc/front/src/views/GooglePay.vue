<template>
  <div id="GPay"></div>
</template>
<script>
export default {
  name: 'GooglePay',
  data(){
    return {
      paymentsClient: null,
    }
  },
  methods: {
    getGoogleIsReadyToPayRequest() {
      return Object.assign(
          {},
          {
            apiVersion: 2,
            apiVersionMinor: 0
          },
          {
            allowedPaymentMethods: [{
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
              }
            }]
          }
      );
    },
    getGooglePaymentDataRequest() {
      const paymentDataRequest = Object.assign({}, {
        apiVersion: 2,
        apiVersionMinor: 0
      });
      paymentDataRequest.allowedPaymentMethods = [Object.assign(
        {},
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
          }
        },
        {
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              'gateway': 'example',
              'gatewayMerchantId': 'exampleGatewayMerchantId'
            }
          }
        }
      )];
      paymentDataRequest.transactionInfo = this.getGoogleTransactionInfo();
      paymentDataRequest.merchantInfo = {
        // @todo a merchant ID is available for a production environment after approval by Google
        // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
        merchantId: 'BCR2DN6TV7JYFXAJ',
        merchantName: 'Max Globa'
      };
      return paymentDataRequest;
    },
    getGooglePaymentsClient() {
      if ( this.paymentsClient === null ) {
        this.paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});
      }
      return this.paymentsClient;
    },
    addGooglePayButton() {
      const onGooglePaymentButtonClicked = this.onGooglePaymentButtonClicked;
      const paymentsClient = this.getGooglePaymentsClient();
      const button = paymentsClient.createButton({onClick: onGooglePaymentButtonClicked});
      document.getElementById('GPay').appendChild(button);
    },
    onGooglePayLoaded() {
      let addGooglePayButton = () => this.addGooglePayButton();
      let getGoogleIsReadyToPayRequest = () => this.getGoogleIsReadyToPayRequest();
      const paymentsClient = this.getGooglePaymentsClient();
      paymentsClient.isReadyToPay(getGoogleIsReadyToPayRequest())
        .then(function(response) {
          // console.log(response.result);
          if(response.result) {
            addGooglePayButton();
            // @todo prefetch payment data to improve performance after confirming site functionality
            // prefetchGooglePaymentData();
          }
        })
        .catch(function(err) {
          // show error in developer console for debugging
          console.error(err);
        });
    },
    getGoogleTransactionInfo() {
      return {
        countryCode: 'US',
        currencyCode: 'USD',
        totalPriceStatus: 'FINAL',
        totalPrice: '1.00'
      };
    },
    prefetchGooglePaymentData() {
      const paymentDataRequest = this.getGooglePaymentDataRequest();
      // transactionInfo must be set but does not affect cache
      paymentDataRequest.transactionInfo = {
        totalPriceStatus: 'NOT_CURRENTLY_KNOWN',
        currencyCode: 'USD'
      };
      const paymentsClient = this.getGooglePaymentsClient();
      paymentsClient.prefetchPaymentData(paymentDataRequest);
    },
    onGooglePaymentButtonClicked() {
      let processPayment = data => this.processPayment(data);
      const paymentDataRequest = this.getGooglePaymentDataRequest();
      paymentDataRequest.transactionInfo = this.getGoogleTransactionInfo();

      const paymentsClient = this.getGooglePaymentsClient();
      paymentsClient.loadPaymentData(paymentDataRequest)
          .then(function(paymentData) {
            // handle the response
            processPayment(paymentData);
          })
          .catch(function(err) {
            // show error in developer console for debugging
            console.error(err);
          });
    },
    processPayment(paymentData) {
      // show returned data in developer console for debugging
        // console.log(paymentData);
      // @todo pass payment token to your gateway to process payment
      paymentToken = paymentData.paymentMethodData.tokenizationData.token;
    }
  },
  mounted(){
    const runGoogle = () => {
      setTimeout(()=>{
        this.onGooglePayLoaded();
      }, 500);
    }
    const gpay = document.createElement('script');
    gpay.src = 'https://pay.google.com/gp/p/js/pay.js';
    gpay.async = true;
    gpay.onload = runGoogle();
    document.getElementsByTagName('head')[0].appendChild(gpay);

  }
}
</script>
