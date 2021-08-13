<template>
  <Campaign :data="products" />
</template>
<script>
import Campaign from '@/components/Campaign.vue'
export default {
  name: 'campaign-2',
  data(){
    return {
      campaignId: 3,
      products: [
        {
          id: 27,
          price: 59.00,
          shipping: 4.95
        },
        {
          id: 28,
          price: 159.00,
          shipping: 0.00
        },
        {
          id: 29,
          price: 300.00,
          shipping: 0.00
        },
        {
          id: 30,
          price: 53.00,
          shipping: 4.95
        },
        {
          id: 31,
          price: 144.00,
          shipping: 0.00
        },
        {
          id: 32,
          price: 270.00,
          shipping: 0.00
        }
      ]
    }
  },
  components: {
    Campaign
  }
}
</script>
<style lang="scss" scoped>

</style>