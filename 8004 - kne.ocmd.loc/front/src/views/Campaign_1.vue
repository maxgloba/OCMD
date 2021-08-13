<template>
  <Campaign :data="products" />
</template>
<script>
import Campaign from '@/components/Campaign.vue'
export default {
  name: 'campaign-1',
  data(){
    return {
      campaignId: 1,
      products: [
        {
          id: 1,
          price: 49.00,
          shipping: 4.95
        },
        {
          id: 2,
          price: 129.00,
          shipping: 0.00
        },
        {
          id: 3,
          price: 240.00,
          shipping: 0.00
        },
        {
          id: 4,
          price: 44.00,
          shipping: 4.95
        },
        {
          id: 5,
          price: 117.00,
          shipping: 0.00
        },
        {
          id: 6,
          price: 216.00,
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