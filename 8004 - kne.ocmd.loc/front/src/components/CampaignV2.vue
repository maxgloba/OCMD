<template>
  <section class="page page-campaign page-campaign--mobile">

    <section class="sold">
      <div class="container">
        <h2 class="sold-title">Hurry! Order now and save 50% off</h2>
      </div>
    </section>
    <section class="products">
      <div class="container">
        <div class="row">
          <div class="col-md-8 order-md-2">
            <h1 class="products-title">Rejuvenation Complex Cream</h1>
            <div class="products-sub">
              Formulated by Top MD’s for Neck &amp; Face
            </div>
            <div class="products-stars">
              <div class="stars">
                <ul class="stars-rating">
                  <li class="stars-f"></li>
                  <li class="stars-f"></li>
                  <li class="stars-f"></li>
                  <li class="stars-f"></li>
                  <li class="stars-f"></li>
                </ul>
              </div>
              4.9 out of 5
            </div>
            <div class="products-desc products-desc__desc">Unique cream creates dramatically younger skin, restores the firmness, volume &amp; elasticity you’ve been looking for.</div>
            <div class="products-tabs">
              <ul class="products-tabs__nav">
                <li @click="tabs" data-tab="tab1" class="active">One Time Purchase</li>
                <li @click="tabs" data-tab="tab2">Subscribe and Save</li>
              </ul>
              <div class="products-tabs__tab tab1 active">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <!-- START Product 0 -->
                    <div class="product">
                      <div class="product-quantity">1<br>Jar</div>
                      <div class="product-inner">
                        <div class="product-price">${{ data[0].ea }}<span>/ea</span></div>
                        <div class="product-save">You Save ${{ data[0].save }}</div>
                      </div>
                      <footer>
                        <button
                          class="buy-now button"
                          @click="goToCheckout"
                          :data-id="data[0].id"
                          :data-price="data[0].price"
                          :data-shipping="data[0].shipping"
                          :data-name="data[0].name"
                          :data-sku="data[0].sku"
                          :data-product_type="data[0].product_type"
                        >Add To Cart</button>
                        <span>+ SHIPPING ${{ data[0].shipping }}</span>
                      </footer>
                    </div>
                    <!-- END Product 0 -->
                  </div>
                  <div class="col-12 col-lg-4">
                    <!-- START Product 2 -->
                    <div class="product product-best">
                      <div class="product-quantity">6<br>Jars</div>
                      <div class="product-inner">
                        <div class="product-price">${{ data[2].ea }}<span>/ea</span></div>
                        <div class="product-save">You Save ${{ data[2].save }}</div>
                      </div>
                      <footer>
                        <button
                          class="buy-now button"
                          @click="goToCheckout"
                          :data-id="data[2].id"
                          :data-price="data[2].price"
                          :data-shipping="data[2].shipping"
                          :data-name="data[2].name"
                          :data-sku="data[2].sku"
                          :data-product_type="data[2].product_type"
                        >Add To Cart</button>
                        <span v-if="data[2].shipping !== 0">+ SHIPPING ${{ data[2].shipping }}</span>
                        <span v-else >+ Free Shipping</span>
                      </footer>
                    </div>
                    <!-- END Product 2 -->
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="product">
                      <div class="product-quantity">3<br>Jars</div>
                      <div class="product-inner">
                        <div class="product-price">${{ data[1].ea }}<span>/ea</span></div>
                        <div class="product-save">You Save ${{ data[1].save }}</div>
                      </div>
                      <footer>
                        <button
                          class="buy-now button"
                          @click="goToCheckout"
                          :data-id="data[1].id"
                          :data-price="data[1].price"
                          :data-shipping="data[1].shipping"
                          :data-name="data[1].name"
                          :data-sku="data[1].sku"
                          :data-product_type="data[1].product_type"
                        >Add To Cart</button>
                        <span v-if="data[1].shipping !== 0">+ SHIPPING ${{ data[1].shipping }}</span>
                        <span v-else >+ Free Shipping</span>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-tabs__tab tab2">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <div class="product">
                      <div class="product-quantity">1<br>Jar</div>
                      <div class="product-inner">
                        <div class="product-price">${{ data[3].ea }}<span>/ea (monthly)</span></div>
                        <div class="product-save">You Save ${{ data[3].save }}</div>
                      </div>
                      <footer>
                        <button
                          class="buy-now button"
                          @click="goToCheckout"
                          :data-id="data[3].id"
                          :data-price="data[3].price"
                          :data-shipping="data[3].shipping"
                          :data-name="data[3].name"
                          :data-sku="data[3].sku"
                          :data-product_type="data[3].product_type"
                        >Add To Cart</button>
                        <span v-if="data[3].shipping !== 0">+ SHIPPING ${{ data[3].shipping }}</span>
                        <span v-else >+ Free Shipping</span>
                      </footer>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="product product-best">
                      <div class="product-quantity">6<br>Jars</div>
                      <div class="product-inner">
                        <div class="product-price">${{ data[5].ea }}<span>/ea (monthly)</span></div>
                        <div class="product-save">You Save ${{ data[5].save }}</div>
                      </div>
                      <footer>
                        <button
                          class="buy-now button"
                          @click="goToCheckout"
                          :data-id="data[5].id"
                          :data-price="data[5].price"
                          :data-shipping="data[5].shipping"
                          :data-name="data[5].name"
                          :data-sku="data[5].sku"
                          :data-product_type="data[5].product_type"
                        >Add To Cart</button>
                        <span v-if="data[5].shipping !== 0">+ SHIPPING ${{ data[5].shipping }}</span>
                        <span v-else >+ Free Shipping</span>
                      </footer>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="product">
                      <div class="product-quantity">3<br>Jars</div>
                      <div class="product-inner">
                        <div class="product-price">${{ data[4].ea }}<span>/ea (monthly)</span></div>
                        <div class="product-save">You Save ${{ data[4].save }}</div>
                      </div>
                      <footer>
                        <button
                          class="buy-now button"
                          @click="goToCheckout"
                          :data-id="data[4].id"
                          :data-price="data[4].price"
                          :data-shipping="data[4].shipping"
                          :data-name="data[4].name"
                          :data-sku="data[4].sku"
                          :data-product_type="data[4].product_type"
                        >Add To Cart</button>
                        <span v-if="data[4].shipping !== 0">+ SHIPPING ${{ data[4].shipping }}</span>
                        <span v-else >+ Free Shipping</span>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 order-md-1">
            <div class="products-sidebar">
              <div class="gallery">
                <ul class="gallery-nav">
                  <li @click="galNav" :data-src="require('@/assets/img/campaign2/prd-slide-1-cream-new.png')" class="active"><img src="@/assets/img/campaign/prd-slide-1-cream-new.png" alt=""></li>
                  <li @click="galNav" :data-src="require('@/assets/img/campaign2/prd-slide-2-cream-new.png')"><img src="@/assets/img/campaign/prd-slide-2-cream-new.png" alt=""></li>
                  <li @click="galNav" :data-src="require('@/assets/img/campaign2/prd-slide-3-cream-new.png')"><img src="@/assets/img/campaign/prd-slide-3-cream-new.png" alt=""></li>
                </ul>
                <div class="gallery-box"><img class="gallery-img" src="@/assets/img/campaign2/prd-slide-1-cream-new.png" width="100%"></div>
              </div>
              <div class="products-desc products-desc__mob">Unique cream creates dramatically younger skin, restores the firmness, volume &amp; elasticity you’ve been looking for.</div>
            </div>
          </div>
          <div class="col-md-8 order-md-3">
            <div class="products-tabos">
              <div class="products-tabos__tab" v-if="tabos === 1">
                <ul>
                  <li @click="chooseJars(2)" :class="(position === 2) ? 'active' : ''">
                    6 Jars
                    <span>${{ data[2].ea }}/ea</span>
                  </li>
                  <li @click="chooseJars(1)" :class="(position === 1) ? 'active' : ''">
                    3 Jars
                    <span>${{ data[1].ea }}/ea</span>
                  </li>
                  <li @click="chooseJars(0)" :class="(position === 0) ? 'active' : ''">
                    1 Jar
                    <span>${{ data[0].ea }}/ea</span>
                  </li>
                </ul>
              </div>
              <div class="products-tabos__tab" v-if="tabos === 2">
                <ul>
                  <li @click="chooseJars(5)" :class="(position === 5) ? 'active' : ''">
                    6 Jars
                    <span>${{ data[5].ea }}/ea</span>
                  </li>
                  <li @click="chooseJars(4)" :class="(position === 4) ? 'active' : ''">
                    3 Jars
                    <span>${{ data[4].ea }}/ea</span>
                  </li>
                  <li @click="chooseJars(3)" :class="(position === 3) ? 'active' : ''">
                    1 Jar
                    <span>${{ data[3].ea }}/ea</span>
                  </li>
                </ul>
              </div>
              <ul class="products-tabos__nav">
                <li @click="tabosClick(1)" :class="(tabos === 1) ? 'active' : ''">One Time Purchase</li>
                <li @click="tabosClick(2)" :class="(tabos === 2) ? 'active' : ''">Subscribe and Save</li>
              </ul>
              <div class="products-tabos__foot" v-if="typeof position == 'number'">
                <div class="products-tabos__foot-title">
                  <span>You chose:</span> <b>{{ data[position].title }}</b> ({{ data[position].product_type }})
                </div>
                <div class="products-tabos__foot-ea">
                  <b>{{ data[position].ea }}</b>/ea
                  <span v-if="data[position].shipping == 0">Free Shipping</span>
                  <span v-else >Shipping ${{ data[position].shipping }}</span>
                </div>
                <div class="products-tabos__foot-save">You Save ${{ data[position].save }}!</div>
                <button @click="goToJarCheckout">Buy It Now</button>
              </div>
            </div>

          </div>
        </div>
        <div class="solutions">
          <h4 class="solutions-title">The Perfect Solution For</h4>
          <ul class="solutions-list">
            <li>
              <img src="@/assets/img/campaign2/chk-s1-lft-lis-img1.png">
              Anti-Aging
            </li>
            <li>
              <img src="@/assets/img/campaign2/chk-s1-lft-lis-img2.png">
              Clarifying
            </li>
            <li>
              <img src="@/assets/img/campaign2/chk-s1-lft-lis-img3.png">
              Lifting
            </li>
            <li>
              <img src="@/assets/img/campaign2/chk-s1-lft-lis-img4.png">
              Firming
            </li>
            <li>
              <img src="@/assets/img/campaign2/chk-s1-lft-lis-img5.png">
              Contouring
            </li>
            <li>
              <img src="@/assets/img/campaign2/chk-s1-lft-lis-img6.png">
              Tightening
            </li>
          </ul>
        </div>
        <div class="promise">
          <h2 class="promise-title"><span>OCMD Principles</span></h2>
          <div class="row">
            <div class="col-4 col-md-2">
              <img src="@/assets/img/campaign/chk-bar-list-icn3.png">
              Cruelty <br> Free
            </div>
            <div class="col-4 col-md-2">
              <img src="@/assets/img/campaign/chk-bar-list-icn6.png">
              Safe <br> to Use
            </div>
            <div class="col-4 col-md-2">
              <img src="@/assets/img/campaign/chk-bar-list-icn4.png">
              BHA <br> Free
            </div>
            <div class="col-4 col-md-2">
              <img src="@/assets/img/campaign/chk-bar-list-icn1.png">
              Paraben <br> Free
            </div>
            <div class="col-4 col-md-2">
              <img src="@/assets/img/campaign/chk-bar-list-icn5.png">
              Chemical <br> Free
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="details">
      <div class="container">
        <div class="resp">
          <div class="resp-sidebar  useLi">
            <h3 class="resp-title">See How OCMD<br><span>Can Change <br> Your Life</span></h3>
            <ul class="resp-nav">
              <li @click="resps" data-resp="resp1" class="active">Product Details</li>
              <li @click="resps" data-resp="resp2">Benefits</li>
              <li @click="resps" data-resp="resp4">How It Works</li>
              <li @click="resps" data-resp="resp7">Ingredients</li>
              <li @click="resps" data-resp="resp5">Our Guarantee</li>
              <li @click="resps" data-resp="resp6">About OCMD</li>
            </ul>
          </div>
          <div class="resp-tab resp1 active">
            <div class="row">
              <div class="col-lg-8">
                <h2>Product Details</h2>
                <p>The #1 age-defying “must have” cosmetic of 2020. Contains numerous age-defying secrets all in one bottle that rolls back the clock on crepey, aging skin to create a more youthful look. Restore your skin and restore your confidence.</p>
              </div>
              <div class="col-lg-4">
                <img src="@/assets/img/campaign/prd-det-prod-new.png" alt="">
              </div>
            </div>
            <h4>The 4 Steps to Revitalization</h4>
            <div class="row list-resp">
              <div class="col-6 col-lg-3">
                <img src="@/assets/img/campaign/trans-list-icn3.png" alt="">
                <h5>Renew</h5>
                <p>Experience youthful, radiant skin that lasts.</p>
              </div>
              <div class="col-6 col-lg-3">
                <img src="@/assets/img/campaign/trans-list-icn2.png" alt="">
                <h5>Revive</h5>
                <p>See your "inner glow" in just days.</p>
              </div>
              <div class="col-6 col-lg-3">
                <img src="@/assets/img/campaign/trans-list-icn4.png" alt="">
                <h5>Regain</h5>
                <p>Get back your inner spark.</p>
              </div>
              <div class="col-6 col-lg-3">
                <img src="@/assets/img/campaign/trans-list-icn1.png" alt="">
                <h5>Refresh</h5>
                <p>Quickly energize your skin.</p>
              </div>
            </div>
            <h4>Great For All Skin Types</h4>
            <ul class="list-types">
              <li>
                <img src="@/assets/img/campaign/skn-typ-lst-icn1.png">
                Normal
              </li>
              <li>
                <img src="@/assets/img/campaign/skn-typ-lst-icn3.png">
                Dry
              </li>
              <li>
                <img src="@/assets/img/campaign/skn-typ-lst-icn4.png">
                Combination
              </li>
              <li>
                <img src="@/assets/img/campaign/skn-typ-lst-icn5.png">
                Sensitive
              </li>
              <li>
                <img src="@/assets/img/campaign/skn-typ-lst-icn2.png">
                Oily
              </li>
            </ul>
            <h4>“Finally, Any Woman Can Enjoy Youthful Skin And Reclaim Their Spark”</h4>
            <div class="row author">
              <div class="col-md-3">
                <img src="@/assets/img/campaign/fc-1.png" alt="" width="100%">
              </div>
              <div class="col-md-9">
                <p>
                  Dr. Tess Mauricio is a Board Certified Dermatologist, fellow of the American Academy of Dermatology, graduate of Stanford University School of Medicine, and a Summa Cum Laude graduate of The University of California San Diego. She is the founder of M Beauty Clinic by Dr Tess in San Diego and Beverly Hills
                </p>
                <div class="author-text"><span>Dr. Tess Mauricio</span><br>Board Certified Dermatologist<br>Graduate of Stanford University School of Medicine</div>
              </div>
            </div>
          </div>
          <div class="resp-tab resp2">
            <h2>Benefits</h2>
            <div class="row row-benef">
              <div class="col-lg-7">
                <ul class="list-benef">
                  <li>
                    <h5>Instantly Tightens Saggy &amp; Crepey Skin</h5>
                    <p>Age-defying peptides begin to rejuvenate the skin to smooth and tighten your skin to look young again.</p>
                  </li>
                  <li>
                    <h5>Erases &amp; Eliminates Wrinkles</h5>
                    <p>Change the muscle movements that lead to wrinkle formation. You’ll feel your wrinkles being erased.</p>
                  </li>
                  <li>
                    <h5>Restores Dreamy, Glowing, Radiant Skin</h5>
                    <p>Watch as your youthful skin reawakens and your radiant spark returns once again to make even women half your age look at you with envy.</p>
                  </li>
                  <li>
                    <h5>Supercharge Your Anti-Aging Routine</h5>
                    <p>OCMD harnesses the natural power of the skin’s biological clock to reverse as much as 20 years of aging in as little as 3 minutes a day.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resp-tab resp4">
            <h2>How It Works</h2>
            <p>Gently massage a quarter-size amount of the Rejuvenation cream into your skin using an “upward motion” until it is completely absorbed. Make this the last step in your skincare routine twice daily.</p>
            <div class="works">
              <div class="works-box">
                <img src="@/assets/img/campaign/work-img1.jpg" alt="">
                <div class="works-info">
                  <span>Step 1</span>
                  <h3>Apply Rejuvenation Complex Cream</h3>
                  <p>The luxurious cream helps hydrate, nourish &amp; deep-condition the skin, preparing the skin to smoothen and tighten.</p>
                </div>
              </div>
              <div class="works-box">
                <img src="@/assets/img/campaign/work-img2.jpg" alt="">
                <div class="works-info">
                  <span>Step 2</span>
                  <h3>Experience Lifting &amp; Firming</h3>
                  <p>Your skin quickly plumps from deep within the dermis, filling in sagging, hollow areas. The increased moisture, collagen, and elatstin reduce the look of fine lines, wrinkles, and old-looking skin.</p>
                </div>
              </div>
              <div class="works-box">
                <img src="@/assets/img/campaign/work-img3.jpg" alt="">
                <div class="works-info">
                  <span>Step 3</span>
                  <h3>Use Regularly To Improve Results</h3>
                  <p>The more consistently you use the cream, the better the results. Recapture that youthful spark by keeping your skin plump, smooth, and glowing.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="resp-tab resp7">
            <h2>Ingredients</h2>
            <p>WATER; ISOPROPYL MYRISTATE; RICINUS COMMUNIS (CASTOR) SEED OIL; SQUALANE; CYCLOPENTASILOXANE; DIMETHICONE; CAPRYLIC/CAPRIC TRIGLYCERIDE; GLYCERIN; TOCOPHERYL ACETATE; SODIUM ACRYLATE / SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER; PHENOXYETHANOL; PANTHENOL; RETINYL PALMITATE; ISOHEXADECANE; POLYSORBATE 20; TITANIUM DIOXIDE; MATRICARIA CHAMOMILLA (GERMAN CHAMOMILE) FLOWER WATER; SODIUM BENZOATE; CALENDULA OFFICINALIS (CALENDULA) FLOWER WATER; POLYSORBATE 80; PERSEA GRATISSIMA (AVOCADO) OIL; TRITICUM VULGARE (WHEAT) GERM OIL; FRAGRANCE; SORBITAN OLEATE; MALUS DOMESTICA (APPLE) FRUIT CELL CULTURE EXTRACT; ALCOHOL; PRUNUS DULCIS (SWEET ALMOND) OIL; ETHYLHEXYLGLYCERIN; BORAGO OFFICINALIS (BORAGE) SEED OIL; SODIUM HYALURONATE; LECITHIN; XANTHAN GUM; BENZYL ALCOHOL; CITRIC ACID; ASCORBYL PALMITATE; POTASSIUM SORBATE; LINALOOK, CITRONELLOL; GERANIOL, LIMONENE.</p>
          </div>
          <div class="resp-tab resp5">
            <h2>Our Guarantee</h2>
            <h4><span>More Youthful Looking Skin Or Your Money Back.</span></h4>
            <p>Experience the impact of OCMD Rejuvenation Complex Cream for yourself. You have a generous 90 days to try it in the comfort of your own home. If you don't agree your skin is noticably tighter, firmer, and more youthful looking, just let us know with a quick email or phone call and we will gladly refund your money. No questions asked.</p>
          </div>
          <div class="resp-tab resp6">
            <h2>About OCMD</h2>
            <p>Orange County MD is not a typical beauty company. Our science-based products are formulated to deliver nearly-instant visible benefits when you apply them, and to deliver deep and meaningful transformation by rejuvenating your skin from the inside out over time.</p>
            <p>We source the most pure ingredients available for our formulations, and test extensively for purity and potency.</p>
            <p>We are also proud to be a cruelty-free company, so you can benefit from products that make you look great and feel good about it, too.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="testi">
      <div class="container">
        <h2>OCMD <br> Customer Testimonials</h2>
        <p>*Results may vary by individual</p>
        <div class="testi-sec">
          <div class="testi-bx">
            <span>E</span>
            <h3>Does Just What It Says</h3>
            <ul class="stars-rating">
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
            </ul>
            <p>“This cream is lovely to use. Its rich and creamy texture is just what I needed to lift my skin and to lift my spirits. Using this cream is a luxury as it does just what it says on the pot, and leaves my skin moisturised, supple and firmer.”</p>
            <p class="testi-txt3">Eileen B.</p>
          </div>
          <div class="testi-bx">
            <span>J</span>
            <h3>Crows Feet And Brow Lines Have Faded, [Skin] Texture Is Improved…</h3>
            <ul class="stars-rating">
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
            </ul>
            <p>“I am entering my 70th year this month. I have been using [the cream] for about 6 weeks. Crow’s feet have faded, horizontal brow lines have faded. Skin texture has significantly improved.”</p>
            <p class="testi-txt3">Joy M.</p>
          </div>
          <div class="testi-bx">
            <span>M</span>
            <h3>Reduced Fine Lines In Only 4 Days… </h3>
            <ul class="stars-rating">
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
            </ul>
            <p>“I really love this product. I have only been using for 4 days, but it has cleared up blemishes, and reduced some fine lines around my mouth and eyes. I ordered the booster serum to go with it. Cannot wait to see the difference in a month from now!”</p>
            <p class="testi-txt3">Mikaela N.</p>
          </div>
          <div class="testi-bx">
            <span>S</span>
            <h3>At First I Was Skeptical, But Then…</h3>
            <ul class="stars-rating">
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
            </ul>
            <p>“At first I was skeptical reading reviews online. But my skepticism was short lived. I am now on to my 3rd jar, my skin feels softer, smoother and looks rejuvenated. I have had compliments passed about my skin.”</p>
            <p class="testi-txt3">Susan B.</p>
          </div>
          <div class="testi-bx">
            <span>K</span>
            <h3>Greatly Improved Areas About My Eyes, Forehead, and Mouth</h3>
            <ul class="stars-rating">
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
              <li class="stars-f"></li>
            </ul>
            <p>“This is an amazing product this is my third jar of the age defying cream. I am 59 years old and have noticed a much improved difference in my skin. It looks brighter and has greatly improved areas around my eyes, forehead and mouth. I will definitely continue with this cream it's worth every penny!!!”</p>
            <p class="testi-txt3">Kathryn S.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="faq-section">
      <div class="container">
        <h2>OCMD <br> Frequently Asked Questions</h2>
        <div class="faq-box">
          <div class="faq active">
            <div class="question" @click="question">How Long Until I see Results?</div>
            <div class="answer">Some ladies notice smoother and tighter skin after the first use, but the best and most lasting results always come from making it part of your daily skin care routine. <br><br> That's why we offer convenient and cost-saving 3 and 6-month supplies, to make it easy and affordable for ladies who want to get back their spark and keep it forever.</div>
          </div>
          <div class="faq">
            <div class="question" @click="question">Will It Work For Me?</div>
            <div class="answer">
              Dr. Tess and the entire Orange County MD team worked to develop a science-backed product to work for women of any age, any skin tone, and no matter what your skincare routine is right now.
            </div>
          </div>
          <div class="faq">
            <div class="question" @click="question">What If It Doesn’t Work For Me?</div>
            <div class="answer">Our team insisted on an industry-best 90 day money-back guarantee. You can try OCMD Rejuvantion Complex Cream with confidence. You either agree it delivers the results we talk about or we will gladly refund your money and part as friends. <br><br> We understand you are need to try it and see the results for yourself, so we want you to feel completely at ease that you aren't risking a penny. <br><br> Quite simply, if you aren't totally thrilled by your transformation then a quick email or phone call is all it takes to get every penny you spent returned. <br><br> You don't even have to give us a reason or send back the empty jars. You'll just get a no-questions-asked refund for what you spend today.</div>
          </div>
          <div class="faq">
            <div class="question" @click="question">How Long Does 1 Bottle Last?</div>
            <div class="answer">
              One bottle will last at least 30 days when used as recommended (twice daily as part of your normal skincare routine).
            </div>
          </div>
          <div class="faq">
            <div class="question" @click="question">Can I Use Rejuvenation Complex Cream With Other Products?</div>
            <div class="answer">
              Absolutely! Our formulations is designed with work with any skincare routine, and will compliment whatever you are already doing. It is so effective, many ladies end up not needing other products. <br><br>
              We do recommend that you allow at least 15 minutes before applying makeup after apply Rejuvenation Complex Cream. The times allows your skin to fully absorb the skin-replenishing nutrients and moisturizers. <br><br>
              When you apply your makeup it will look and feel just like normal.
            </div>
          </div>
          <div class="faq">
            <div class="question" @click="question">How Can I Order OCMD’s Rejuvenation Complex Cream?</div>
            <div class="answer">
              It’s SO SIMPLE. Just select your discount and supply (1-month, 3-month and 6-month) and choose whether you want to subscribe &amp; save (have that same amount delivered every month) or one-time purchase (you will ONLY be billed for this order). <br><br> Complete the safe &amp; secure checkout process and your order will be in your hands in 1-5 days.
            </div>
          </div>
          <div class="faq">
            <div class="question" @click="question">Is Ordering Safe &amp; Secure?</div>
            <div class="answer">
              YES. Your privacy and security are very imporant to use. We use industry-standard security measures to make sure your personal information is safe &amp; secure.
            </div>
          </div>
          <div class="faq">
            <div class="question" @click="question">When Will My Order Arrive?</div>
            <div class="answer">
              We take pride in fast, hassle-free deliveries anywhere in the US. With two strategically-located fulfillment centers, your order will be with in your hands in 1-5 days.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hurry">
      <div class="container">
        <h3 class="hurry-text">Hurry! Order Now &amp; Save Up To 50% Off</h3>
        <a href="#">Order Now &gt;</a>
      </div>
    </section>

  </section>
</template>
<script>
export default {
  name: 'Campaign',
  data(){
    return {
      tabos: 1,
      position: 2,
      product_id: false
    }
  },
  props: {
    data: Array,
    camp: Number,
  },
  methods: {
    tabosClick(tab){
      this.tabos = tab;
    },
    chooseJars(position){
      this.position = position;
      this.product_id = this.data[position].id;
    },
    goToJarCheckout(){
      if(this.product_id){
        document.querySelector(`[data-id="${this.product_id}"]`).click();
      } else {
        document.querySelector(`[data-id="123"]`).click();
      }
    }, 
    goToCheckout(e){
      fbq('track', 'AddToCart', {
        currency: "USD",
        value: e.target.dataset.price,
        name: `${e.target.dataset.name}`
      });
      dataLayer.push({
        'event': 'AddToCart',
        'currency': "USD",
        'value': `${e.target.dataset.price}`,
        'name': `${e.target.dataset.name}`
      });

      this.$store.state.cart = {
        id: e.target.dataset.id,
        price: e.target.dataset.price,
        shipping: e.target.dataset.shipping,
        name: e.target.dataset.name,
        sku: e.target.dataset.sku
      }
      localStorage.cart = JSON.stringify(this.$store.state.cart);

      this.$store.state.product_type = e.target.dataset.product_type;
      localStorage.product_type = this.$store.state.product_type;

      this.$router.push('/checkout');
    },
    tabs(e){
      const tab = '.'+e.target.dataset.tab;
      document.querySelector('.products-tabs__tab.active').classList.remove('active');
      document.querySelector('.products-tabs__nav li.active').classList.remove('active');
      document.querySelector(tab).classList.add('active');
      e.target.classList.add('active');
    },
    resps(e){
      const res = '.'+e.target.dataset.resp;
      if ( document.querySelector('.resp-tab.active')!=null){
      document.querySelector('.resp-tab.active').classList.remove('active');
      }
      if ( document.querySelector('.resp-nav li.active')!=null){
      document.querySelector('.resp-nav li.active').classList.remove('active');
      }
      document.querySelector(res).classList.add('active');
      e.target.classList.add('active');
    },
    galNav(e){
      const imgUrl = e.target.dataset.src;
      document.querySelector('.gallery-img').src = imgUrl;
    },
    question(e){
      e.target.parentNode.classList.toggle('active');
    }
  },
  mounted(){
    if(this.data.length < 1) this.$router.push('/');
    this.$store.state.campaignId = this.camp;
    localStorage.campaignId = this.$store.state.campaignId;
    localStorage.httpReferer = window.location.href;
  }
}
</script>
<style lang="scss" scoped >
@import './../assets/scss/_font-graphik';
.page-campaign {
  color: #2d2d2d;
  line-height: 1.2;
  font-size: 14px;
  background: #fff;
  font-family: Graphik, sans-serif;
}

.sold {
  background: #E6BEAF;
  z-index: 1;
  position: relative;
  @media(min-width:768px){
    height: 315px;
  }
  &-title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6C5D57;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    padding: 13px 0;
    text-align: center;
    @media(min-width:768px){
      font-size: 26px;
      padding-top: 30px;
    }
  }
}

.products {
  z-index: 2;
  position: relative;
  .container {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    @media(min-width:768px){
      background: #fff;
      border-radius: 10px;
      margin-top: -240px;
    }
    @media(min-width:1200px){
      padding: 45px;
    }
    & > .row{
      @media(min-width:768px){
        align-items: flex-start;
      }
    }
  }
  &-title {
    font-size: 24px;
    font-weight: 400;
    @media(min-width:768px){
      font-size: 30px;
      font-weight: 500;
    }
    @media(min-width:1200px){
      font-size: 40px;
    }
  }
  &-sub {
    font-size: 12px;
    color: #7f7f7f;
    margin-bottom: 4px;
    @media(min-width:768px){
      font-size: 18px;
    }
  }
  &-stars {
    font-size: 12px;
    color: #7f7f7f;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 16px;
    }
  }
  &-desc {
    font-size: 12px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 16px;
    }
    &__mob{
      @media(min-width:768px){
        display: none;
      }
    }
    &__desc{
      display: none;
      @media(min-width:768px){
        display: block;
      }
    }
  }
}
@media(max-width:767px){
  .products-tabs{
    max-height: 0px;
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
  }
}

.products-tabs__nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.products-tabs__nav li {
  width: 50%;
  background: #F9F5F4;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
  font-weight: 600;
  color: #6C5D57;
  padding: 10px;
  cursor: pointer;
  -webkit-transition: -webkit-box-shadow .5s ease;
  transition: -webkit-box-shadow .5s ease;
  transition: box-shadow .5s ease;
  transition: box-shadow .5s ease, -webkit-box-shadow .5s ease;
}

.products-tabs__nav li:hover {
  box-shadow: 0 0 8px rgba(108, 93, 87, 0.4) inset;
}

.products-tabs__nav li.active {
  background: #E6BEAF;
  color: #fff;
  cursor: default;
}

.products-tabs__nav li.active:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
  pointer-events: none;
}

.products-tabs__tab {
  display: none;
}

.products-tabs__tab.active {
  display: block;
}

.products-tabs__tab .row > div {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

// .products-tabs__tab .row > div:nth-child(2) {
//   -webkit-box-ordinal-group: 2;
//   -ms-flex-order: 1;
//   order: 1;
// }

.gallery {
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  @media(max-width:767px){
    align-items: flex-start;
    justify-content: space-between;
  }
  &-box {
    flex: 1 260px;
    width: 260px;
    max-width: 260px;
    @media(min-width:768px){
      width: 100%;
      max-width: 100%;
      flex: 1 100%;
    }
  }
  &-img{
    width: 100%;
  }
  &-nav {
    flex: 1 70px;
    max-width: 70px;
    @media(min-width:768px){
      order: 2;
      width: 100%;
      max-width: 100%;
      flex: 1 100%;
      display: flex;
      justify-content: center;
      padding-top: 15px;
    }
    li {
      background: #fff;
      padding: 2px;
      cursor: pointer;
      transition: box-shadow .3s ease;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
      &:hover {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 8px 0 rgba(0, 0, 0, 0.4) inset;
      }
      @media(max-width:767px){
        &:not(:first-child){
          margin-top: 10px;
        }
      }
      @media(min-width:768px){
        margin-left: 4px;
        margin-right: 4px;
      }
    }
    img {
      width: 100%;
      pointer-events: none;
      @media(min-width:768px){
        width: 69px;
        height: 69px;
      }
    }
  }
}

.solutions{
  &-title {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #6C5D57;
    position: relative;
    margin: 10px 0;
    @media(min-width:768px){
      font-size: 24px;
      padding-top: 30px;
    }
  }
  &-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    @media(min-width:768px){
      max-width: 768px;
    }
    li {
      padding: 0 10px;
      margin: 10px 0;
      font-size: 10px;
      text-align: center;
      font-weight: 400;
      max-width: 33.333%;
      flex: 1 33.333%;
      @media(min-width:768px){
        max-width: calc(100% / 6);
        flex: 1 calc(100% / 6);
        font-size: 16px;
      }
      @media(max-width:767px){
        &:not(:nth-child(3n)){
          border-right: 1px solid #000000;
        }
      }
      @media(min-width:768px){
        &:not(:first-child){
          border-left: 1px solid #000000;
        }
      }
      img {
        display: block;
        margin: 0 auto 5px;
        width: auto;
        height: 30px;
      }
    }
  }
}

.stars {
  max-width: 90px;
  display: inline-block;
  &-rating {
    display: flex;
    li {
      display: block;
      font-size: 20px;
      font-family: Arial !important;
      position: relative;
      color: #FE6F61;
    }
  }
  &-f:before {
    content: "★";
  }
}


.list-keys {
  margin-bottom: 15px;
}

.list-keys li {
  font-size: 16px;
  line-height: 20px;
  color: #E6BEAF;
  font-weight: 500;
  margin-bottom: 5px;
}

.list-keys li span {
  display: block;
  position: relative;
  padding-left: 40px;
}

.list-keys li img {
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.list-values {
  margin-bottom: 45px;
}

.list-values li {
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  position: relative;
  margin: 3px 0;
}

.list-values li:before {
  content: "✓";
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #02b402;
  font-weight: 700;
  margin-right: 10px;
}

.list-resp {
  text-align: center;
  margin-bottom: 30px;
}

.list-resp img {
  display: inline-block;
  margin-bottom: 5px;
  width: 28px;
}

.list-resp h5 {
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 5px;
}

.list-resp p {
  font-size: 14px;
  line-height: 16px;
}

.list-types {
  margin-bottom: 60px;
}

@media (min-width: 768px) {
  .list-types {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

@media (max-width: 991px) {
  .list-types {
    margin-bottom: 30px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}

@media (min-width: 992px) {
  .list-types {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}

.list-types li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}

@media (max-width: 991px) {
  .list-types li {
    width: 50%;
    max-width: 50%;
    -webkit-box-flex: 1;
    -ms-flex: 1 50%;
    flex: 1 50%;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-bottom: 15px;
  }
}

@media (min-width: 992px) {
  .list-types li {
    font-size: 24px;
    line-height: 28px;
  }
}

.list-types li img {
  margin-right: 5px;
  width: 50px;
}

.list-benef:before {
  content: "";
  background: url("../assets/img/campaign/ben-img_new.png") no-repeat right center/auto 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 100%;
  top: 0;
  z-index: 1;
  display: none;
}

.list-benef h5 {
  color: #6C5D57;
  font-size: 22px;
  line-height: 26px;
  font-weight: 500;
  position: relative;
  margin-bottom: 10px;
}

.list-benef h5:after {
  content: '';
  width: 70px;
  height: 4px;
  border-radius: 10px;
  background: #E6BEAF;
  display: block;
  margin-top: 10px;
}

.list-benef li {
  position: relative;
}

.list-benef li:after {
  content: '';
  background: url("../assets/img/campaign/ben-sepr.png") no-repeat;
  position: absolute;
  right: 0;
  top: 60px;
  width: 70px;
  height: 13px;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  z-index: 10;
  display: none;
}

.product {
  border-radius: 0 0 5px 5px;
  background: #F9F5F4;
  text-align: center;
  position: relative;
  max-width: 250px;
  margin: 30px auto;
  &-quantity {
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
    color: #fff;
    background: #E6BEAF;
    border: 3px solid #E6BEAF;
    width: 81px;
    height: 81px;
    border-radius: 50%;
    text-align: center;
    margin: -40px auto 10px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
  }
  &-inner {
    position: relative;
    padding-top: 60px;
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      background: #EEEEEE;
      height: 8px;
      width: 100%;
      border-radius: 5px 5px 0 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &-price {
    font-size: 40px;
    font-weight: 500;
    line-height: 42px;
    font-weight: 500;
    color: #6C5D57;
    margin: 5px 0;
    span{
      font-size: 15px;
      font-weight: 400;
    }
  }
  &-save {
    font-size: 18px;
    line-height: 22px;
    color: #6C5D57;
    margin-bottom: 15px;
  }
  footer {
    background: #E6BEAF;
    padding: 15px 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    span {
      font-size: 16px;
      line-height: 20px;
      color: #fff;
    }
  }
  .buy-now{
    font-size: 15px;
    line-height: 18px;
    background: #FE6F61;
    color: #fff;
    display: block;
    width: calc(100% - 30px);
    margin: 0 auto 5px;
    padding: 10px 30px;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
    transition: .3s ease;
    border: none;
    &:hover {
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.75);
      transform: scale(1.05);
    }
  }
  &-best {
    margin-top: -15px;
    .product-inner {
      padding-top: 75px;
      &:after {
        content: "Best Value";
        position: absolute;
        background: red;
        color: #fff;
        font-style: italic;
        z-index: 99;
        font-size: 12px;
        font-weight: 700;
        padding: 1px 15px;
        -webkit-transform: rotate(-45deg) translate(-29%, 0);
        transform: rotate(-45deg) translate(-29%, 0);
        left: 0;
        top: 0;
      }
    }
    .product-quantity {
      margin-top: -25px;
    }
    footer {
      padding-bottom: 30px;
    }
  }
}

.promise{
  &-title {
    font-size: 30px;
    line-height: 34px;
    font-weight: 600;
    color: #6C5D57;
    text-align: center;
    position: relative;
    margin: 60px 0 30px;
    &:before {
      content: "";
      height: 1px;
      width: 100%;
      display: block;
      background: #6C5D57;
      position: absolute;
      left: 0;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
    span {
      background: #fff;
      padding: 0 10px;
      display: inline-block;
      position: relative;
      z-index: 2;
    }
  }
  .row {
    text-align: center;
    font-size: 19px;
    line-height: 23px;
    justify-content: center;
    padding-bottom: 30px;
    img {
      display: block;
      width: 27px;
      height: auto;
      margin: 0 auto 10px;
    }
    @media (max-width: 767px) {
      & > div {
        margin-bottom: 30px;
      }
    }
  }
}

.details {
  background: #EEEEEE;
  overflow: hidden;
}

@media (min-width: 768px) {
  .resp {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

.resp-sidebar {
  background: #F9F5F4;
  padding-top: 15px;
  position: relative;
}

@media (min-width: 768px) {
  .resp-sidebar {
    padding-top: 40px;
    max-width: 200px;
  }
}

@media (min-width: 992px) {
  .resp-sidebar {
    max-width: 234px;
  }
}

.resp-sidebar:before {
  content: "";
  display: block;
  background: #F9F5F4;
  left: 0;
  top: 0;
  width: 5000px;
  height: 100%;
  position: absolute;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.resp-sidebar h3 {
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  margin-bottom: 15px;
  position: relative;
}

@media (min-width: 768px) {
  .resp-sidebar h3 {
    font-size: 16px;
    line-height: 18px;
  }
}

@media (min-width: 992px) {
  .resp-sidebar h3 {
    font-size: 22px;
    line-height: 26px;
  }
}

.resp-sidebar h3 span {
  font-weight: 700;
}

.resp-nav {
  width: 185px;
}

@media (min-width: 992px) {
  .resp-nav {
    width: 234px;
  }
}

.resp-nav li {
  color: #6C5D57;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  padding: 5px 0 5px 20px;
  position: relative;
  border-top: 1px solid #dde7eb;
}

@media (min-width: 768px) {
  .resp-nav li {
    font-size: 16px;
    padding: 15px 0 15px 25px;
  }
}

@media (min-width: 992px) {
  .resp-nav li {
    font-size: 20px;
  }
}

.resp-nav li.active {
  background: #6C5D57;
  color: #fff;
}

.resp-tab {
  display: none;
  padding: 15px 0;
}

@media (min-width: 768px) {
  .resp-tab {
    padding: 30px;
    width: calc(100% - 234px);
  }
}

.resp-tab.active {
  display: block;
}

.resp-tab h2 {
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
  margin-bottom: 15px;
}

@media (min-width: 992px) {
  .resp-tab h2 {
    font-size: 40px;
    line-height: 44px;
  }
}

.resp-tab p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 15px;
}

@media (min-width: 992px) {
  .resp-tab p {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 25px;
  }
}

.resp-tab h4 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  border-bottom: 1px solid #ebebeb;
  display: block;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

@media (min-width: 992px) {
  .resp-tab h4 {
    font-size: 24px;
    line-height: 28px;
  }
}

.resp-tab h4 span {
  color: #f5a385;
}

.author {
  padding-top: 15px;
}

@media (min-width: 992px) {
  .author {
    padding-top: 30px;
  }
}

.author-text {
  position: relative;
  font-size: 18px;
  line-height: 26px;
  text-align: left;
  margin: 15px 0;
}

.author-text span {
  font-weight: 600;
  color: #6C5D57;
}

.ingr-box {
  position: relative;
  margin-top: 30px;
  min-height: 140px;
}

@media (min-width: 768px) {
  .ingr-box {
    padding-left: 165px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

.ingr img {
  width: 140px;
  display: block;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .ingr img {
    margin-bottom: 0;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
}

.ingr h3 {
  color: #6C5D57;
  font-size: 26px;
  line-height: 30px;
  font-weight: 500;
  margin-bottom: 10px;
}

.ingr p {
  margin-bottom: 0;
}

.works-box {
  margin-top: 30px;
}

@media (min-width: 992px) {
  .works-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
}

.works-box img {
  width: 205px;
  height: auto;
  margin-bottom: 15px;
}

@media (min-width: 992px) {
  .works-box img {
    margin-bottom: 0;
  }
}

.works-info {
  padding-left: 15px;
}

.works-info span {
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #fff;
  background: #E6BEAF;
  padding: 5px 20px;
  border-radius: 30px;
  display: inline-block;
  margin-bottom: 10px;
}

.works-info h3 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: #6C5D57;
  float: left;
  width: 100%;
  margin-bottom: 10px;
}

@media (min-width: 992px) {
  .works-info h3 {
    font-size: 26px;
    line-height: 30px;
  }
}

.testi {
  padding: 30px 0 20px;
}

@media (min-width: 992px) {
  .testi {
    padding: 60px 0 40px;
  }
}

.testi h2 {
  font-size: 30px;
  line-height: 34px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
}

@media (min-width: 992px) {
  .testi h2 {
    font-size: 40px;
    line-height: 44px;
  }
}

.testi h2 + p {
  text-align: center;
  font-size: 14px;
}

.testi-bx {
  position: relative;
  margin-top: 15px;
  padding: 15px 15px;
}

@media (min-width: 768px) {
  .testi-bx {
    margin-top: 30px;
    padding: 30px 15px 15px 115px;
  }
}

.testi-bx:nth-child(odd) {
  background: #F9F5F4;
}

.testi-bx span {
  width: 74px;
  height: 74px;
  line-height: 74px;
  border-radius: 50%;
  background: #E6BEAF;
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  display: block;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .testi-bx span {
    position: absolute;
    left: 15px;
    top: 30px;
    margin-bottom: 0;
  }
}

.testi h3 {
  font-size: 22px;
  line-height: 26px;
  color: #6C5D57;
  font-weight: 600;
}

.testi p {
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 10px;
}

@media (min-width: 768px) {
  .testi p {
    font-size: 20px;
    line-height: 28px;
  }
}

.testi-txt3 {
  font-size: 20px;
  line-height: 24px;
  color: #6C5D57;
  font-weight: 500;
}

.faq {
  position: relative;
}

.faq:before {
  content: "Q";
  display: block;
  position: absolute;
  z-index: 9;
  color: #dee2e7;
  font-size: 20px;
  left: 15px;
  top: 11px;
  -webkit-transition: color 1s ease;
  transition: color 1s ease;
}

@media (min-width: 992px) {
  .faq:before {
    font-size: 24px;
    left: 15px;
    top: 12px;
  }
}

.faq.active:before {
  color: #6C5D57;
}

.faq.active .question:before {
  display: none;
}

.faq.active .question:after {
  display: block;
}

.faq.active .answer {
  max-height: 5000px;
  padding: 30px 15px;
}

@media (min-width: 768px) {
  .faq.active .answer {
    padding: 30px 45px;
  }
}

.faq-section {
  padding: 60px 0;
  background: #F9F5F4;
}

.faq-section h2 {
  font-size: 30px;
  line-height: 34px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 15px;
}

@media (min-width: 992px) {
  .faq-section h2 {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 30px;
  }
}

.faq .question {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  color: #6C5D57;
  cursor: pointer;
  text-align: left;
  font-weight: 500;
  margin: 11px 0 -2px 0;
  padding: 12px 30px 13px 50px;
  width: 100%;
  position: relative;
  border-radius: 3px;
  background: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 18px;
  line-height: 22px;
  &:hover{
    color: #dee2e7;
  }
}

@media (min-width: 992px) {
  .faq .question {
    font-size: 22px;
    line-height: 28px;
  }
}

.faq .question:before, .faq .question:after {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: block;
  text-align: center;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
}

@media (min-width: 768px) {
  .faq .question:before, .faq .question:after {
    right: 30px;
  }
}

.faq .question:before {
  content: "+";
  background: #E6BEAF;
}

.faq .question:after {
  content: "-";
  background: #6C5D57;
  display: none;
}

.faq .answer {
  color: #333;
  font-size: 15px;
  line-height: 1.2;
  text-align: left;
  padding: 0 15px;
  width: 100%;
  border-top: none;
  border-radius: 0px 0px 3px 3px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  max-height: 0px;
  overflow: hidden;
  transition: 1s ease;
}

@media (min-width: 768px) {
  .faq .answer {
    padding: 0 45px;
  }
}

@media (min-width: 992px) {
  .faq .answer {
    font-size: 20px;
    line-height: 26px;
  }
}

.hurry {
  background: #E6BEAF;
  padding: 20px 0;
}

@media (max-width: 991px) {
  .hurry {
    text-align: center;
  }
}

@media (min-width: 992px) {
  .hurry .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}

.hurry-text {
  font-size: 26px;
  line-height: 30px;
  color: #6C5D57;
  font-weight: 600;
}

@media (min-width: 992px) {
  .hurry-text {
    font-size: 32px;
    line-height: 36px;
  }
}

.hurry a {
  display: block;
  width: 240px;
  height: 58px;
  background: #FE6F61;
  border-radius: 40px;
  font-size: 26px;
  line-height: 58px;
  font-weight: 600;
  color: #fff;
  margin: 0 50px;
  text-align: center;
  text-decoration: none;
  -webkit-transition: .25s ease;
  transition: .25s ease;
}

@media (max-width: 991px) {
  .hurry a {
    margin: 15px auto 0;
  }
}

.hurry a:hover {
  background-color: #fff713;
  color: #222;
}



.products{
  &-sidebar{
    @media(min-width:768px){
      border: 2px solid #e6beaf;
      box-shadow: 0 0 16px rgba(230, 190, 175, .25);
      padding: 15px;
      margin-bottom: 30px;
    }
  }
  &-tabos{
    @media(min-width:768px){
      opacity: 0;
      max-height: 0px;
      visibility: hidden;
      overflow: hidden;
    }
    &__foot{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 30px;
      button{
        margin-top: 15px;
        flex: 1 100%;
        width: 344px;
        height: 50px;
        background: #FE6F61;
        border: none;
        border-radius: 9px;
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
        &:hover{
          opacity: .9;
        }
      }
      &-ea{
        font-weight: 300;
        font-size: 16px;
        line-height: 21px;
        color: #000000;
        b{
          font-weight: 300;
          font-size: 36px;
          line-height: 42px;
          color: #000000;
        }
      }
      &-title{
        font-size: 15px;
        padding-bottom: 5px;
        b{
          font-weight: 500;
        }
        span{
          font-size: 13px;
        }
      }
      &-save{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #FE6F61;
        padding-bottom: 5px;
      }
    }
    &__nav{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 0.5px solid #8D8D8D;
      margin-bottom: 20px;
      li{
        flex: 1 calc(50% - 15px);
        max-width: calc(50% - 15px);
        height: 50px;
        border: 1px solid #888888;
        border-radius: 9px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        font-weight: 300;
        &.active{
          color: #FE6F61;
          border-color: #FE6F61;
        }
      }
    }
    &__tab{
      margin-bottom: 10px;
      padding: 10px 0 30px;
      border-top: 0.5px solid #8D8D8D;
      border-bottom: 0.5px solid #8D8D8D;
      ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      li{
        position: relative;
        height: 50px;
        line-height: 48px;
        text-align: center;
        border: 1px solid #8F8F8F;
        border-radius: 9px;
        flex: 1 calc(33.333% - 10px);
        max-width: calc(33.333% - 10px);
        font-size: 24px;
        font-weight: 300;
        span{
          font-size: 12px;
          line-height: 14px;
          font-weight: 300;
          color: #8F8F8F;
          display: block;
          position: absolute;
          left: 50%; top: 100%;
          transform: translate(-50%, 8px);
        }
        &.active{
          color: #FE6F61;
          border-color: #FE6F61;
        }
      }
    }
  }
}

.order{
  @media(min-width:768px){
    &-md{
      &-1{order: 1}
      &-2{order: 2}
      &-3{order: 3}
    }
  }
}

</style>
<style lang="scss">
@media(max-width:767px){
  .page-header .logo{
    max-width: 70px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>