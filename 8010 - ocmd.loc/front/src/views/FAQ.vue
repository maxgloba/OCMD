<template>
  <section class="page-faq">
    <div class="container">
      <h1 class="section-title">OCMD FAQ’s</h1>
      <h2 class="section-title">Tracking, Shipping, Delivery and More</h2>
      <div class="box">
        <h2>Shipping & Delivery FAQ</h2>
        <ul>
          <li>OCMD accepts all major credit cards as well as PayPal. All payments are processed upon ordering, COD deliveries are not accepted.</li>
          <li>Processing and shipping for orders generally takes 1-3 business days, but federal holidays may cause this time to be extended.</li>
          <li>Orders are shipped locally from our warehouses in Tampa and Salt Lake City. </li>
          <li>All billing information must match the credit card information for security purposes. If shipping and billing details differ, the order will not be processed. Please avoid using any abbreviations unless that is exactly how it appears on your statement.</li>
          <li>Packages do not ship from our distribution centers on weekends. All orders process and ship Monday – Friday, including federal holidays</li>
        </ul>
      </div>

      <div class="box">
        <h2>Tracking Information</h2>
        <ul>
          <li>Once your order ships, you will receive a confirmation email containing shipment details as well as tracking number. For additional shipping & tracking information you can contact us at <a href="mailto:support@ocmd.co">support@ocmd.co</a></li>
        </ul>
      </div>

      <div class="box">
        <h2>Product FAQs</h2>
        <div class="faqs">
          <div class="faq">
            <div class="question" @click="faqItem">How long does it take to see results?</div>
            <div class="answer">For most people, visible results will be seen within 2-4 weeks in most cases. Note that results may vary by individual.</div>
          </div>
          <div class="faq">
            <div class="question" @click="faqItem">Was Rejuvenation tested on animals?</div>
            <div class="answer">Absolutely not! OCMD respects and honors all living things, none of our products are ever tested on animals.</div>
          </div>
          <div class="faq">
            <div class="question" @click="faqItem">Is Rejuvenation suitable for all skin types?</div>
            <div class="answer">Yes, it is suitable for dry, oily, normal and even skin with a combination of issues. It is primarily formulated with ingredients found within the human body or nature and is highly unlikely to cause any reaction or breakout-causing symptoms.</div>
          </div>
          <div class="faq">
            <div class="question" @click="faqItem">How does Rejuvenation reduce wrinkles, lift the skin and brighten complexion?</div>
            <div class="answer">It uses a combination of 3 different sizes of Hyaluronic Acid molecules and 17 carefully selected active ingredients, including apple stem cell extracts, vitamin liposomes, and natural compounds like lactic acid. Our unique formula gently exfoliates the epidermis (outer layer of skin) and penetrates into the lower skin levels to optimize product efficiency. The Shrunken Hyaluronic Acid molecules trap moisture. The Swiss Apple Stem Cells increase skin stem cell regeneration by up to 80% and reduce the damage of UV sun light on skin stem cells by as much as 46%. The vitamin liposomes nourish the skin. Other active ingredients trigger and enhance Elastin & Collagen production. The result of all this is a tighter, smoother skin and a brighter complexion.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'faq',
  methods: {
    faqItem(e){
      e.target.parentNode.classList.toggle('active')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-faq{
  padding: 50px 0;
  ul{
    list-style: outside;
    padding-left: 30px;
    margin-bottom: 30px;
    li{
      margin: 15px 0;
      font-size: 14px;
      @media(min-width:768px){
        font-size: 18px;
      }
    }
  }
  h2{
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 25px;
    @media(min-width:768px){
      font-size: 36px;
      line-height: 48px;
    }
  }
  .box{
    margin-bottom: 30px;
  }
}
.faqs{
  .faq{
    border-bottom: 1px solid #505050;
    @media(min-width:768px){
      margin-left: 30px;
    }
    &:not(:first-child){
      margin-top: 30px;
    }
    &.active{
      .question{
        color: #808080;
        &:before {
          transform: rotate(225deg);
        }
      }
      .answer{
        padding-top: 5px;
        padding-bottom: 5px;
        max-height: 1000px;
        @media(min-width:768px){
          padding-top: 30px;
          padding-bottom: 15px;
        }
      }
    }
  }
  .question{
    font-size: 18px;
    line-height: 1.2;
    color: #505050;
    padding: 15px 0;
    padding-right: 60px;
    cursor: pointer;
    position: relative;
    @media(min-width:768px){
      font-size: 26px;
    }
    &:before{
      color: #505050;
      content: "+";
      position: absolute;
      right: 0;
      top: 0px;
      display: block;
      font-size: 50px;
      height: 100%;
      width: 60px;
      font-weight: 500;
      transition: .5s ease;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  }
  .answer{
    font-weight: 300;
    font-size: 13px;
    line-height: 125.9%;
    color: #000000;
    transition: max-height .5s ease, padding .5s ease;
    max-height: 0px;
    overflow: hidden;
    @media(min-width:768px){
      font-size: 18px;
    }
  }
}
</style>