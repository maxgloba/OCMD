<template>
  <CampaignV2 :data="products" :camp="campaignId" />
</template>
<script>
import CampaignV2 from '@/components/CampaignV2.vue'
export default {
  name: 'campaign-5',
  data(){
    return {
      campaignId: 10,
      products: [
        {
          id: 121,
          price: 49.00,
          shipping: 4.95,
          ea: 49,
          save: 71,
          name: 'Rejuvenation Complex Cream 1 Jar',
          title: '1 Jar',
          sku: 'C1OFF49',
          product_type: 'onetime'
        },
        {
          id: 122,
          price: 129.00,
          shipping: 0,
          ea: 43,
          save: 231,
          name: 'Rejuvenation Complex Cream 3 Jars',
          title: '3 Jars',
          sku: 'C3OFF43',
          product_type: 'onetime'
        },
        {
          id: 123,
          price: 240.00,
          shipping: 0,
          ea: 40,
          save: 480,
          name: 'Rejuvenation Complex Cream 6 Jars',
          title: '6 Jars',
          sku: 'C6OFF40',
          product_type: 'onetime'
        },
        {
          id: 124,
          price: 44.00,
          shipping: 4.95,
          ea: 44,
          save: 76,
          name: 'Rejuvenation Complex Cream 1 Jar subscribe',
          title: '1 Jar',
          sku: 'SUBC1OFF49',
          product_type: 'subscribe'
        },
        {
          id: 125,
          price: 117.00,
          shipping: 0,
          ea: 39,
          save: 243,
          name: 'Rejuvenation Complex Cream 3 Jars subscribe',
          title: '3 Jars',
          sku: 'SUBC3OFF43',
          product_type: 'subscribe'
        },
        {
          id: 126,
          price: 216.00,
          shipping: 0,
          ea: 36,
          save: 504,
          name: 'Rejuvenation Complex Cream 6 Jars subscribe',
          title: '6 Jars',
          sku: 'SUBC6OFF40',
          product_type: 'subscribe'
        }
      ]
    }
  },
  components: {
    CampaignV2
  },
  mounted(){
    this.$store.state.mode = 'live';
    localStorage.mode = 'live';
  }
}
</script>
