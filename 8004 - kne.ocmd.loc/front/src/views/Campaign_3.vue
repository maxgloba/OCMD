<template>
  <Campaign :data="products" />
</template>
<script>
import Campaign from '@/components/Campaign.vue'
export default {
  name: 'campaign-3',
  data(){
    return {
      campaignId: 4,
      products: [
        {
          id: 39,
          price: 69.00,
          shipping: 4.95
        },
        {
          id: 40,
          price: 189.00,
          shipping: 0.00
        },
        {
          id: 41,
          price: 360.00,
          shipping: 0.00
        },
        {
          id: 42,
          price: 62.00,
          shipping: 4.95
        },
        {
          id: 43,
          price: 171.00,
          shipping: 0.00
        },
        {
          id: 44,
          price: 324.00,
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