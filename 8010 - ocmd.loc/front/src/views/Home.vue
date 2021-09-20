<template>
  <div>
    <section class="banner">
      <div class="container">
        <div class="row row-center">
          <div class="col-md-7 order-md-2">
            <h2 class="section-title">Dr. Tess Mauricio</h2>
            <h4 class="section-subtitle">“You can now bring some of the results of procedures that thousands of my patients use in my clinic to erase years of wrinkles to your home.”</h4>
            <p><span class="link link-def" style="text-decoration: none!important;">Stanford educated Board Certified Dermatologist</span></p>
          </div>
          <div class="col-md-5 text-right"><img src="@/assets/img/home/tessmauricio.jpg" alt="" width="400"></div>
        </div>
      </div>
    </section>

    <section class="s1">
      <div class="container">
        <div class="row row-center">
          <div class="col-lg-5">
            <h2 class="section-title-sm">Just Arrived <br> Rejuvenation <br> Complex Cream</h2>
            <p>Our #1 rated "age-defying" formula that's fast-acting with premium grade ingredients.</p>
          </div>
          <div class="col-lg-7">
            <img src="@/assets/img/home/arrived.jpg" alt="" width="770">
          </div>
        </div>
      </div>
    </section>

    <section class="s2">
      <div class="container">
        <div class="row row-center">
          <div class="col-sm-6 col-lg-5 order-md-2">
            <h2 class="section-title">Just Arrived – Deep Perfecting Face & Neck Serum</h2>
            <p>Reignite your skin's youth with the revolutionary Deep Perfecting Face & Neck Serum.</p>
          </div>
          <div class="col-sm-5 text-right">
            <img src="@/assets/img/home/arrived2.jpg" alt="" width="600">
          </div>
        </div>
      </div>
    </section>

    <section class="products-section" id="productsSection">
      <div class="container">
        <h2 class="section-title">Our Products</h2>
        <div class="product-wrap">
          <div class="product">
            <img src="@/assets/img/product/dps.jpg" class="product-img">
            <h3 class="product-title">Deep Perfecting Face & Neck Serum</h3>
            <p class="product-desc">Organic, natural ingredients eliminate wrinkles, crow’s feet and help your eyes glow.</p>
            <ul class="star-rating"><li class="star-f"></li><li class="star-f"></li><li class="star-f"></li><li class="star-f"></li><li class="star-h"><i></i></li></ul>
            <div class="product-price">$49.00 – $85.00</div>
            <router-link :to="{ path: '/deep-perfecting-face-and-neck-serum' }">SHOP NOW</router-link>
          </div>
          <div class="product">
            <img src="@/assets/img/product/rcc.jpg" class="product-img">
            <h3 class="product-title">Rejuvenation Complex Cream</h3>
            <p class="product-desc">Organic, nature-based ingredients that actively restore your skin’s radiance.</p>
            <ul class="star-rating"><li class="star-f"></li><li class="star-f"></li><li class="star-f"></li><li class="star-f"></li><li class="star-h"><i></i></li></ul>
            <div class="product-price">$59.00 – $132.00</div>
            <router-link :to="{ path: '/rejuvenation-complex-cream' }">SHOP NOW</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="s3">
      <div class="container">
        <div class="row row-center">
          <div class="col-sm-6 order-md-2">
            <h2 class="section-title">The OCMD Story</h2>
            <p>Our founders saw women buying "high-end" cosmetics that were no better than a store brand knock off. We envisioned making high-quality, ethical, rejuvenating products available to every man and woman.</p>
            <p>After investing years into researching and developing our state-of-the-art products, we focused on formulas that combined the earth's goodness with premium ingredients.</p>
            <p>We decided to sell direct-to-consumer to save you money by cutting out the middleman.</p>
            <p>High-quality, effective products are just a click away.</p>
          </div>
          <div class="col-sm-6 col-md-5">
            <img src="@/assets/img/home/arrived3.jpg" alt="" width="680">
          </div>
        </div>
      </div>
    </section>

    <section class="why">
      <div class="container-fluid">
        <h2 class="section-title">Why OCMD?</h2>
        <p>Why purchase OCMD products instead of some supposedly "high-end" product with a brand-name? Here are 8 reasons:</p>
        <div class="row">
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_06.png" ><span>100% Satisfaction Guarantee</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_02.png" ><span>Recommended by Top Dermatologists</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_04.png" ><span>Safe, Healthy Ingredients</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_05.png" ><span>100% Tested</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_03.png" ><span>Cruelty Free</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_01.png" ><span>Eco Friendly</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_08.png" ><span>Fits all Skin Types</span></div>
          <div class="col-xl-3 col-lg-4 col-sm-6"><img src="@/assets/img/home/why_07.png" ><span>Organic-Based</span></div>
        </div>
        <!-- <p>
          [router_link]
          <a href="/contact-us" class="btn">Need Help? Click Here</a>
        </p> -->
      </div>
    </section>

    <section class="who">
      <div class="container">
        <h2 class="section-title">Who is Dr. Tess Mauricio</h2>
        <p>Dr. Tess Mauricio is a Board Certified Dermatologist, fellow of the American Academy of Dermatology, graduate of Stanford University School of Medicine, and a Summa Cum Laude graduate of The University of California San Diego. </p>
        <p>She is the founder of M Beauty Clinic by Dr Tess in San Diego and Beverly Hills. A Past President of The San Diego Society for Dermatologic Surgery, she is the recipient of the UCSD Warren College Distinguished Alumni Award and Hollywood Daytime Beauty Award for Outstanding Achievement in Medicine.</p>
        <p>Dr. Tess is a favorite medical expert on TV with regular network appearances on NBC’s California Live, The Dr Oz Show, The Talk, The Real, Dr Phil, The Rachael Ray Show, Fox News, and The Doctors. Dr Tess produced 6 seasons of “The Dr Tess Show” and her family’s reality show, “All in Family with Dr Tess,” premieres its 3rd season in 2020.Dr Tess believes that we should all do and be our very best, and always be a blessing to others by sharing your stories and unique gifts.</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang="scss" scoped>
$text-color: #3A3C48;
$main-color: #ffffff;
$active-color: #FE6F61;
$btn-bg: #E6BEAF;
$secondary-color: #EFE4E2;
body{
  background: #fff;
  font-size: 14px;
  line-height: 1.2;
}

.container-fluid{
  @media(min-width:1600px){
    padding-left: 90px;
    padding-right: 90px;
  }
}

.section-title{
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 125.9%;
  letter-spacing: 0.06em;
  color: $text-color;
  margin-bottom: 30px;
  @media(min-width:768px){
    font-size: 54px;
    margin-bottom: 45px;
  }
  @media(min-width:1600px){
    font-size: 64px;
    margin-bottom: 60px;
  }
}

.section-title-sm{
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 125.9%;
  letter-spacing: 0.06em;
  color: $text-color;
  margin-bottom: 10px;
  @media(min-width:768px){
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media(min-width:1600px){
    font-size: 48px;
    margin-bottom: 30px;
  }
}

p{
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 125.9%;
  color: #9B9B9B;
  @media(min-width:1600px){
    font-size: 21px;
  }
}

.order-md-2{
  @media(min-width:768px){
    order:2;
  }
}

.btn{
  padding: 18px 0;
  background: $btn-bg;
  border: none;
  color: $main-color;
  width: 250px;
  font-weight: bold;
  font-size: 18px;
  line-height: 125.9%;
  transition: .3s ease;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  &-white{
    background: $text-color;
    color: $main-color;
    border-color: $main-color;
    width: 300px;
    &:hover{
      background: $main-color;
      color: $text-color;
    }
  }
  &-border{
    background-color: transparent;
    border: 1px solid $text-color;
    color: $text-color;
    &:hover{
      border-color: $active-color;
      color: $main-color;
    }
  }
  &:hover{
    background: $active-color;
  }
}

.section-subtitle{
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 124.4%;
  color: #9B9B9B;
  margin-bottom: 15px;
  @media(min-width:768px){
    font-size: 26px;
  }
  @media(min-width:1600px){
    font-size: 36px;
  }
}

.link{
  color: $active-color;
  text-decoration: none;
  font-size: 15px;
  line-height: 22px;
  @media(min-width:768px){
    font-size: 16px;
  }
  @media(min-width:1600px){
    font-size: 17px;
  }
  &:hover{
    text-decoration: underline;
  }
  &-def{
    &:before{
      content:"";
      width: 22px;
      height: 1px;
      margin-right: 10px;
      display: inline-block;
      vertical-align: middle;
      background: $active-color;
    }
  }
}

.text{
  &-right{
    text-align: center;
  }
  &-left{
    text-align: left;
  }
  &-center{
    text-align: center;
  }
  &-right, &-left, &-center{
    img{
      display: inline-block;
    }
  }
}

.banner{
  padding-top: 30px;
  @media(min-width:768px){
    padding-top: 60px;
  }
  @media(min-width:1200px){
    padding-top: 90px;
  }
  .link{
    @media(max-width:768px){
      padding-bottom: 15px;
      display: block;
    }
  }
}

.products-section{
  display: flex;
  align-items: center;
  padding-top: 60px;
  @media(min-width:1200px){
    padding-top: 100px;
    padding-bottom: 30px;
  }
  .section-title{
    text-align: center;
  }
}

.s1{
  padding-top: 60px;
  padding-bottom: 60px;
  @media(min-width:1200px){
    padding-top: 90px;
    padding-bottom: 60px;
  }
  @media(min-width:1600px){
    padding-top: 150px;
    padding-bottom: 150px;
  }
  p{
    padding-top: 10px;
    margin-bottom: 30px;
    color: #9B9B9B;
    @media(min-width:768px){
      padding-top: 20px;
      font-size: 24px;
    }
  }
  .btn{
    margin-bottom: 30px;
    @media(min-width:768px){
      margin-bottom: 0;
    }
  }
}

.s2{
  background: #FCF1EF;
  @media(min-width:768px){
    background: none;
  }
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
  &:before{
    content:"";
    display: block;
    position: absolute;
    left: 0; right: 0;
    top: 50%;
    transform: translate(0, -50%);
    background: #FCF1EF;
    height: 500px;
    z-index: 1;
    @media(min-width:768px){
      display: none;
    }
  }
  .container{
    position: relative;
    z-index: 2;
  }
  p{
    margin-bottom: 30px;
    color: #9B9B9B;
    @media(min-width:768px){
      font-size: 20px;
    }
    @media(min-width:1600px){
      font-size: 24px;
    }
  }
  .section-title{
    font-size: 30px;
    @media(min-width:768px){
      font-size: 40px;
    }
    @media(min-width:1600px){
      font-size: 54px;
    }
  }
}

.s3{
  padding-top: 60px;
  padding-bottom: 60px;
  @media(min-width:1200px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
  p{
    margin-bottom: 15px;
    font-size: 16px;
    @media(min-width:1600px){
      font-size: 18px;
    }
  }
  .btn{
    margin-bottom: 30px;
    @media(min-width:768px){
      margin-bottom: 0;
    }
  }
  .section-title{
    margin-bottom: 30px;
  }
}

.why{
  background: #EFE4E2;
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  @media(min-width:1200px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
  h2.section-title{
    text-align: center;
    &+p{
      margin-bottom: 30px;
      @media(min-width:768px){
        margin-bottom: 60px;
      }
      @media(max-width:1199px){
        br{
          display: none;
        }
      }
    }
  }
  p{
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #9B9B9B;
    @media(min-width:768px){
      font-size: 20px;
    }
    @media(min-width:1600px){
      font-size: 24px;
    }
  }
  .row{
    margin-left: 60px;
    .col-sm-6{
      display: flex;
      margin: 15px 0;
      align-items: center;
      @media(min-width:768px){
        margin: 30px 0;
      }
      img{
        margin-right: 15px;
      }
      span{
        color: #3A3C48;
        font-size: 16px;
        font-weight: 300;
        @media(min-width:768px){
          font-size: 24px;
        }
      }
    }
  }
}

.who{
  text-align: center;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 45px 0;
  }
  @media(min-width:1200px){
    padding: 90px 0 30px;
  }
  @media(min-width:1600px){
    padding: 90px 0 60px;
  }
  p{
    margin-bottom: 15px;
    font-size: 16px;
    color: #9B9B9B;
    font-weight: 500;
    @media(min-width:768px){
      margin-bottom: 15px;
      font-size: 20px;
    }
    @media(min-width:1600px){
      margin-bottom: 30px;
      font-size: 24px;
    }
  }
}

.star{
  &-rating{
    display: flex;
    li{
      font-size: 18px;
      letter-spacing: -2px;
      font-family: Arial !important;
      position: relative;
      color: #fe6f61;
      @media(min-width:992px){
        font-size: 20px;
      }
      @media(min-width:1200px){
        font-size: 24px;
      }
    }
  }
  &-f{
    &:before{
      content:"★";
    }
  }
  &-h{
    &:before{
      content:"★";
    }
    i{
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      &:before{
        content:"☆"
      }
      &:after{
        content: "";
        background: #fff;
        width: 50%; right: 0; top: 0; bottom: 0;
        position: absolute;
        z-index: -1;
      }
    }
  }
  &-e{
    &:before{
      content:"☆"
    }
  }
}
.product{
  max-width: calc(50% - 30px);
  flex: 1 calc(50% - 30px);
  background: #fff;
  padding: 15px;
  border: 2px solid #e6beaf;
  box-shadow: 0 0 16px rgba(230, 190, 175, 25%);
  margin-left: 15px;
  margin-right: 15px;
  @media(max-width:767px){
    &:not(:first-child){
      margin-top: 30px;
    }
  }
  @media(min-width:768px){
    padding: 30px;
  }
  @media(max-width:575px){
    max-width: calc(100% - 50px);
  }
  &-wrap{
    display: flex;
    width: 760px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    @media(max-width:575px){
      flex-direction: column;
      align-items: center;
    } 
  }
  &-img{
    display: block;
    width: 100%;
    height: auto;
  }
  &-title{
    font-weight: 700;
    font-size: 22px;
    line-height: 125.9%;
    color: #3a3c48;
    margin-bottom: 10px;
    @media (min-width: 992px){
      font-size: 24px;
    }
  }
  &-desc{
    font-size: 16px;
    @media(min-width:768px){
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 15px;
    }
  }
  &-rating{}
  &-price{
    font-size: 24px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 28px;
    }
    @media(min-width:1200px){
      font-size: 34px;
    }
  }
  a{
    background: #e6beaf;
    color: #fff;
    border: none;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    height: 55px;
    line-height: 55px;
    letter-spacing: .04em;
    transition: .3s ease-in-out;
    &:hover{
      background: #fe6f61;
    }
  }
}
</style>