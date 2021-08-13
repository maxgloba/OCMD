<template>
  <CampaignDPS :data="products" :camp="campaignId" />
</template>
<script>
import CampaignDPS from '@/components/CampaignDPS.vue'
export default {
  name: 'home',
  data(){
    return {
      campaignId: 16,
      products: [
        {
          id: 212,
          price: 79.00,
          shipping: 4.95,
          ea: 79,
          save: 51,
          name: 'Deep Perfecting Serum 1 Jar',
          sku: 'S1W79',
          product_type: 'onetime'
        },
        {
          id: 213,
          price: 129.00,
          shipping: 0,
          ea: 73,
          save: 171,
          name: 'Deep Perfecting Serum 3 Jars',
          sku: 'S3W73',
          product_type: 'onetime'
        },
        {
          id: 214,
          price: 420.00,
          shipping: 0,
          ea: 70,
          save: 360,
          name: 'Deep Perfecting Serum 6 Jars',
          sku: 'S6W70',
          product_type: 'onetime'
        },
        {
          id: 215,
          price: 71.00,
          shipping: 4.95,
          ea: 71,
          save: 59,
          name: 'Deep Perfecting Serum 1 Jar subscribe',
          sku: 'SUBS1W79',
          product_type: 'subscribe'
        },
        {
          id: 216,
          price: 198.00,
          shipping: 0,
          ea: 66,
          save: 192,
          name: 'Deep Perfecting Serum 3 Jars subscribe',
          sku: 'SUBS3W73',
          product_type: 'subscribe'
        },
        {
          id: 217,
          price: 378.00,
          shipping: 0,
          ea: 63,
          save: 402,
          name: 'Deep Perfecting Serum 6 Jars subscribe',
          sku: 'SUBS6W70',
          product_type: 'subscribe'
        }
      ]
    }
  },
  components: {
    CampaignDPS
  },
  mounted(){
    this.$store.state.mode = 'live';
    localStorage.mode = 'live';
    window.scrollTo(0, 0);
  }
}
</script>
