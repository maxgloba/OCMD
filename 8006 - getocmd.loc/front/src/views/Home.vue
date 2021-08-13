<template>
  <Campaign :data="products" :camp="campaignId" />
</template>
<script>
import Campaign from '@/components/Campaign.vue'
export default {
  name: 'home',
  data(){
    return {
      campaignId: 12,
      products: [
        {
          id: 147,
          price: 49.00,
          shipping: 4.95,
          ea: 49,
          save: 71,
          name: 'Rejuvenation Complex Cream 1 Jar',
          sku: 'C1OFF49',
          product_type: 'onetime'
        },
        {
          id: 148,
          price: 129.00,
          shipping: 0,
          ea: 43,
          save: 231,
          name: 'Rejuvenation Complex Cream 3 Jars',
          sku: 'C3OFF43',
          product_type: 'onetime'
        },
        {
          id: 149,
          price: 240.00,
          shipping: 0,
          ea: 40,
          save: 480,
          name: 'Rejuvenation Complex Cream 6 Jars',
          sku: 'C6OFF40',
          product_type: 'onetime'
        },
        {
          id: 150,
          price: 44.00,
          shipping: 4.95,
          ea: 44,
          save: 76,
          name: 'Rejuvenation Complex Cream 1 Jar subscribe',
          sku: 'SUBC1OFF49',
          product_type: 'subscribe'
        },
        {
          id: 151,
          price: 117.00,
          shipping: 0,
          ea: 39,
          save: 243,
          name: 'Rejuvenation Complex Cream 3 Jars subscribe',
          sku: 'SUBC3OFF43',
          product_type: 'subscribe'
        },
        {
          id: 152,
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
  }
}
</script>
