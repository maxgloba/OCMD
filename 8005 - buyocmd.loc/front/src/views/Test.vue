<template>
  <Campaign :data="products" :camp="campaignId" />
</template>
<script>
import Campaign from '@/components/Campaign.vue'
export default {
  name: 'test',
  data(){
    return {
      campaignId: 9,
      products: [
        {
          id: 108,
          price: 1.00,
          shipping: 0,
          ea: 1.00,
          save: 0,
          name: 'Rejuvenation Complex Cream 1 Jar',
          sku: 'C1OFF49',
          product_type: 'onetime'
        },
        {
          id: 109,
          price: 0.01,
          shipping: 0,
          ea: 0.01,
          save: 0,
          name: 'Rejuvenation Complex Cream 3 Jars',
          sku: 'C3OFF43',
          product_type: 'onetime'
        },
        {
          id: 110,
          price: 0.01,
          shipping: 0,
          ea: 0.01,
          save: 0,
          name: 'Rejuvenation Complex Cream 6 Jars',
          sku: 'C6OFF40',
          product_type: 'onetime'
        },
        {
          id: 111,
          price: 0.01,
          shipping: 0,
          ea: 0.01,
          save: 0,
          name: 'Rejuvenation Complex Cream 1 Jar subscribe',
          sku: 'SUBC1OFF49',
          product_type: 'subscribe'
        },
        {
          id: 112,
          price: 0.01,
          shipping: 0,
          ea: 0.01,
          save: 0,
          name: 'Rejuvenation Complex Cream 3 Jars subscribe',
          sku: 'SUBC3OFF43',
          product_type: 'subscribe'
        },
        {
          id: 113,
          price: 0.01,
          shipping: 0,
          ea: 0.01,
          save: 0,
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
    this.$store.state.mode = 'test';
    localStorage.mode = 'test';
  }
}
</script>
