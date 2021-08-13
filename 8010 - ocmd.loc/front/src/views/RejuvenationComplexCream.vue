<template>
  <Campaign :data="products" :camp="campaignId" />
</template>
<script>
import Campaign from '@/components/Campaign.vue'
export default {
  name: 'home',
  data(){
    return {
      campaignId: 16,
      products: [
        {
          id: 199,
          price: 49.00,
          shipping: 4.95,
          ea: 49,
          save: 71,
          name: 'Rejuvenation Complex Cream 1 Jar',
          sku: 'C1OFF49',
          product_type: 'onetime'
        },
        {
          id: 200,
          price: 129.00,
          shipping: 0,
          ea: 43,
          save: 231,
          name: 'Rejuvenation Complex Cream 3 Jars',
          sku: 'C3OFF43',
          product_type: 'onetime'
        },
        {
          id: 201,
          price: 240.00,
          shipping: 0,
          ea: 40,
          save: 480,
          name: 'Rejuvenation Complex Cream 6 Jars',
          sku: 'C6OFF40',
          product_type: 'onetime'
        },
        {
          id: 202,
          price: 44.00,
          shipping: 4.95,
          ea: 44,
          save: 76,
          name: 'Rejuvenation Complex Cream 1 Jar subscribe',
          sku: 'SUBC1OFF49',
          product_type: 'subscribe'
        },
        {
          id: 203,
          price: 117.00,
          shipping: 0,
          ea: 39,
          save: 243,
          name: 'Rejuvenation Complex Cream 3 Jars subscribe',
          sku: 'SUBC3OFF43',
          product_type: 'subscribe'
        },
        {
          id: 204,
          price: 216.00,
          shipping: 0,
          ea: 36,
          save: 504,
          name: 'Rejuvenation Complex Cream 6 Jars subscribe',
          sku: 'SUBC6OFF40',
          product_type: 'subscribe'
        }
      ]
    }
  },
  components: {
    Campaign
  },
  mounted(){
    this.$store.state.mode = 'live';
    localStorage.mode = 'live';
    window.scrollTo(0, 0);
  }
}
</script>
