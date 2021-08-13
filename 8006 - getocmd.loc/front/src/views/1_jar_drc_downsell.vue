<template>
  <Sell v-if="upsellData" :data="upsellData" />
</template>
<script>
import Sell from '@/components/Sell'
export default {
  name: 'OneJarDrcDownsell',
  components: {
    Sell
  },
  data(){
    return {
      upsellData: false
    }
  },
  mounted(){
    const upsellData = {
      sellName: '1 Jar drc downsell',
      purchaseTitle: 'PurchaseDownSell',
      redirectUrl: '/1-2-3-deep-perfecting-cerum-cross-sell',
      productName: 'Rejuvenation Complex Cream 1 Jar',
      productPrice: 33,
      waitH2: '3 Jars Too Many? Just Add 1 Jar Today!',
      waitH3: 'Take Advantage Of Huge INSTANT Savings By Stocking Up Today',
      productTitle: `Get OCMD's Rejuvenation Complex Cream For Our Biggest Discount Ever!`,
      productSlogan: 'Add 1 Jar Of OCMD Dermal Rejuvenation Cream For Just $33',
      productLine: 87,
      productPriceRetail: 120,
      productSave: 87,
      bonusH2: 'Save 70% By Adding To Your Order Today',
      bonusImg: require('@/assets/img/3_jars/1_jar.png'),
      botH2: `Add 1 extra jar of Rejuvenation Complex Cream to your order and <span>save 70%</span>`,
      botH3: `(That’s an $87 savings off the normal price)`,
      botH4: `When you click the button below, we will add 1 jar of OCMD’s Rejuvenation Complex Cream to your order for only $33.`
    }
    if( localStorage.campaignId == 9 ){ // /test
      upsellData.productId = 116;
    } else {
      upsellData.productId = 155;
    }
    this.upsellData = upsellData;
  }
}
</script>
