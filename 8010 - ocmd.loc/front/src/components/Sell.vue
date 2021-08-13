<template>
  <div>

    <section class="top">
      <div class="container"><span>ONE-TIME OFFER AVAILABLE</span> - DO NOT CLOSE THIS PAGE - THIS <span>EXCLUSIVE DISCOUNT</span> IS ONLY AVAILABLE HERE.</div>
    </section>

    <section class="wait">
      <div class="container">
        <h2>{{ data.waitH2 }}</h2>
        <h3>{{ data.waitH3 }}</h3>
      </div>
    </section>

    <section class="product">
      <div class="container">
        <div class="product-wrap">
          <div class="row">
            <div class="col-left">
              <div class="product-title">{{ data.productTitle }}</div>
              <div class="product-slogan">{{ data.productSlogan }}</div>
              <ul class="product-list">
                <li>Don't Risk Running Out Of Supply</li>
                <li>You Get Our Lowest Price, Guaranteed!</li>
                <li>Free Shipping, Money-Back Guarantee</li>
              </ul>
              <div class="product-line">One-Time Savings <span>${{ data.productLine }}</span> - This Page Only</div>
              <div class="product-offer-title">Offer Expires In <span data-time="7">07:00</span></div>
              <div class="product-board">
                <div class="product-price">
                  <div class="product-price__retail">${{ data.productPriceRetail }}</div>
                  <div class="product-price__now">${{ data.productPrice }}</div>
                </div>
                <div class="product-save">You Save ${{ data.productSave }}</div>
              </div>
              <a v-if="this.$store.state.payment === 'pp'" :href="paypalUrl" class="payPalButton"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" data-v-fd53f700="" alt="" aria-label="PayPal" ></a>
              <button @click="upselling" class="btn btn-yes" v-else >Yes! add this one-time bundle to my order!</button>
              <button @click="downsell" class="btn btn-no">No thanks, I understand I may never see this low price again.</button>
            </div>
            <div class="col-right">
              <p><img src="@/assets/img/3_jars/3_jars.png" alt="" width="350px"></p>
              <p><img src="@/assets/img/3_jars/marks.png" alt="" width="360px"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bonus">
      <div class="container">
        <div class="row">
          <div class="col-left">
            <h2>Special Bonus <span>{{ data.bonusH2 }}</span></h2>
            <img :src="data.bonusImg" >
            <div class="bonus-board">
              <div class="bonus-price">
                <div class="bonus-price__retail">${{ data.productPriceRetail }}</div>
                <div class="bonus-price__now">${{ data.productPrice }}</div>
              </div>
              <div class="bonus-save">You Save $255</div>
            </div>
          </div>
          <div class="col-right">
            <h3>Congratulations on a great decision!</h3>
            <p>I’m so glad you were able to get your order in.<br><br>The premium ingredients in Rejuvenation Complex Cream will nourish and support your skin, help it to produce youthful levels of collagen and elastin, and de-age your skin from the inside out.<br><br>Many women tell us they see and feel positive effects after using it for the very first time.<br><br>Because we produce this in a boutique laboratory, once our initial batch sells out it could be up to 4 months before we can get this formula back in stock. And with all the chaos going on in the world, it might be even longer. That’s the bad news.<br><br>The good news is this: Because you’re now a member of the Orange County MD Family, I’d like to offer you the opportunity to stock up at this special introductory price BEFORE we run out.<br><br>This way, you can keep enjoying the incredible age-defying benefits of Dermal Rejuvenation Cream… at an incredible discount... even if it is unavailable to the public in the months to come.<br><br>We can only make that offer right now, here on this page — so if you leave, you won’t see it again.</p>
            <a v-if="this.$store.state.payment === 'pp'" :href="paypalUrl" class="payPalButton"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" data-v-fd53f700="" alt="" aria-label="PayPal" ></a>
            <button @click="upselling" class="btn btn-yes" v-else >Yes! add this one-time bundle to my order!</button>
            <button @click="downsell" class="btn btn-no">No thanks, I understand I may never see this low price again.</button>
          </div>
        </div>
      </div>
    </section>

    <section class="guarantee">
      <div class="container">
        <h2>Our Guarantee for You</h2>
        <p>We want you to help you feel completely comfortable accepting this offer by giving you an unconditional 90-day, no-questions asked money-back guarantee. <br><br>If Orange County MD's Rejuvenation Complex Cream doesn't do for you all we've promised... and more... simply return what's left within 90 days and we will promptly issue you a full refund. <br><br>You either agree OCMD's Rejuvenation Complex Cream produces a visibly lifted, plumper, and glowing complexion that you see in the mirror or you can return the empty jar and our customer care team will give you a full refund. <br><br>Questions or concerns about your the product or your order? Just contact our friendly team at:</p>
        <ul class="contacts">
          <li>
            <img src="@/assets/img/3_jars/icon-phone.png" alt="">
            <a href="tel:8663414691">(866) 341-4691</a>
          </li>
          <li>
            <img src="@/assets/img/3_jars/icon-msg.png" alt="">
            <a href="mailto:support@ocmd.co" style="color: #E5805A;">support@ocmd.co</a>
          </li>
        </ul>
        <img src="@/assets/img/3_jars/dr.png" alt="" class="dr">
      </div>
    </section>

    <section class="bot">
      <div class="container">
        <div class="row">
          <div class="col-left">
            <p><img src="@/assets/img/3_jars/3_jarsss.png"></p>
            <p><img src="@/assets/img/3_jars/marks.png"></p>
          </div>
          <div class="col-right">
            <h2 v-html="data.botH2"></h2>
            <h3>{{ data.botH3 }}</h3>
            <h4>{{ data.botH4 }}</h4>
            <h5>${{ data.productPrice }}</h5>
            <a v-if="this.$store.state.payment === 'pp'" :href="paypalUrl" class="payPalButton"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxcHgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxMDEgMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHhtbG5zPSJodHRwOiYjeDJGOyYjeDJGO3d3dy53My5vcmcmI3gyRjsyMDAwJiN4MkY7c3ZnIj48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDEyLjIzNyAyLjggTCA0LjQzNyAyLjggQyAzLjkzNyAyLjggMy40MzcgMy4yIDMuMzM3IDMuNyBMIDAuMjM3IDIzLjcgQyAwLjEzNyAyNC4xIDAuNDM3IDI0LjQgMC44MzcgMjQuNCBMIDQuNTM3IDI0LjQgQyA1LjAzNyAyNC40IDUuNTM3IDI0IDUuNjM3IDIzLjUgTCA2LjQzNyAxOC4xIEMgNi41MzcgMTcuNiA2LjkzNyAxNy4yIDcuNTM3IDE3LjIgTCAxMC4wMzcgMTcuMiBDIDE1LjEzNyAxNy4yIDE4LjEzNyAxNC43IDE4LjkzNyA5LjggQyAxOS4yMzcgNy43IDE4LjkzNyA2IDE3LjkzNyA0LjggQyAxNi44MzcgMy41IDE0LjgzNyAyLjggMTIuMjM3IDIuOCBaIE0gMTMuMTM3IDEwLjEgQyAxMi43MzcgMTIuOSAxMC41MzcgMTIuOSA4LjUzNyAxMi45IEwgNy4zMzcgMTIuOSBMIDguMTM3IDcuNyBDIDguMTM3IDcuNCA4LjQzNyA3LjIgOC43MzcgNy4yIEwgOS4yMzcgNy4yIEMgMTAuNjM3IDcuMiAxMS45MzcgNy4yIDEyLjYzNyA4IEMgMTMuMTM3IDguNCAxMy4zMzcgOS4xIDEzLjEzNyAxMC4xIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDAzMDg3IiBkPSJNIDM1LjQzNyAxMCBMIDMxLjczNyAxMCBDIDMxLjQzNyAxMCAzMS4xMzcgMTAuMiAzMS4xMzcgMTAuNSBMIDMwLjkzNyAxMS41IEwgMzAuNjM3IDExLjEgQyAyOS44MzcgOS45IDI4LjAzNyA5LjUgMjYuMjM3IDkuNSBDIDIyLjEzNyA5LjUgMTguNjM3IDEyLjYgMTcuOTM3IDE3IEMgMTcuNTM3IDE5LjIgMTguMDM3IDIxLjMgMTkuMzM3IDIyLjcgQyAyMC40MzcgMjQgMjIuMTM3IDI0LjYgMjQuMDM3IDI0LjYgQyAyNy4zMzcgMjQuNiAyOS4yMzcgMjIuNSAyOS4yMzcgMjIuNSBMIDI5LjAzNyAyMy41IEMgMjguOTM3IDIzLjkgMjkuMjM3IDI0LjMgMjkuNjM3IDI0LjMgTCAzMy4wMzcgMjQuMyBDIDMzLjUzNyAyNC4zIDM0LjAzNyAyMy45IDM0LjEzNyAyMy40IEwgMzYuMTM3IDEwLjYgQyAzNi4yMzcgMTAuNCAzNS44MzcgMTAgMzUuNDM3IDEwIFogTSAzMC4zMzcgMTcuMiBDIDI5LjkzNyAxOS4zIDI4LjMzNyAyMC44IDI2LjEzNyAyMC44IEMgMjUuMDM3IDIwLjggMjQuMjM3IDIwLjUgMjMuNjM3IDE5LjggQyAyMy4wMzcgMTkuMSAyMi44MzcgMTguMiAyMy4wMzcgMTcuMiBDIDIzLjMzNyAxNS4xIDI1LjEzNyAxMy42IDI3LjIzNyAxMy42IEMgMjguMzM3IDEzLjYgMjkuMTM3IDE0IDI5LjczNyAxNC42IEMgMzAuMjM3IDE1LjMgMzAuNDM3IDE2LjIgMzAuMzM3IDE3LjIgWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDMwODciIGQ9Ik0gNTUuMzM3IDEwIEwgNTEuNjM3IDEwIEMgNTEuMjM3IDEwIDUwLjkzNyAxMC4yIDUwLjczNyAxMC41IEwgNDUuNTM3IDE4LjEgTCA0My4zMzcgMTAuOCBDIDQzLjIzNyAxMC4zIDQyLjczNyAxMCA0Mi4zMzcgMTAgTCAzOC42MzcgMTAgQyAzOC4yMzcgMTAgMzcuODM3IDEwLjQgMzguMDM3IDEwLjkgTCA0Mi4xMzcgMjMgTCAzOC4yMzcgMjguNCBDIDM3LjkzNyAyOC44IDM4LjIzNyAyOS40IDM4LjczNyAyOS40IEwgNDIuNDM3IDI5LjQgQyA0Mi44MzcgMjkuNCA0My4xMzcgMjkuMiA0My4zMzcgMjguOSBMIDU1LjgzNyAxMC45IEMgNTYuMTM3IDEwLjYgNTUuODM3IDEwIDU1LjMzNyAxMCBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny43MzcgMi44IEwgNTkuOTM3IDIuOCBDIDU5LjQzNyAyLjggNTguOTM3IDMuMiA1OC44MzcgMy43IEwgNTUuNzM3IDIzLjYgQyA1NS42MzcgMjQgNTUuOTM3IDI0LjMgNTYuMzM3IDI0LjMgTCA2MC4zMzcgMjQuMyBDIDYwLjczNyAyNC4zIDYxLjAzNyAyNCA2MS4wMzcgMjMuNyBMIDYxLjkzNyAxOCBDIDYyLjAzNyAxNy41IDYyLjQzNyAxNy4xIDYzLjAzNyAxNy4xIEwgNjUuNTM3IDE3LjEgQyA3MC42MzcgMTcuMSA3My42MzcgMTQuNiA3NC40MzcgOS43IEMgNzQuNzM3IDcuNiA3NC40MzcgNS45IDczLjQzNyA0LjcgQyA3Mi4yMzcgMy41IDcwLjMzNyAyLjggNjcuNzM3IDIuOCBaIE0gNjguNjM3IDEwLjEgQyA2OC4yMzcgMTIuOSA2Ni4wMzcgMTIuOSA2NC4wMzcgMTIuOSBMIDYyLjgzNyAxMi45IEwgNjMuNjM3IDcuNyBDIDYzLjYzNyA3LjQgNjMuOTM3IDcuMiA2NC4yMzcgNy4yIEwgNjQuNzM3IDcuMiBDIDY2LjEzNyA3LjIgNjcuNDM3IDcuMiA2OC4xMzcgOCBDIDY4LjYzNyA4LjQgNjguNzM3IDkuMSA2OC42MzcgMTAuMSBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC45MzcgMTAgTCA4Ny4yMzcgMTAgQyA4Ni45MzcgMTAgODYuNjM3IDEwLjIgODYuNjM3IDEwLjUgTCA4Ni40MzcgMTEuNSBMIDg2LjEzNyAxMS4xIEMgODUuMzM3IDkuOSA4My41MzcgOS41IDgxLjczNyA5LjUgQyA3Ny42MzcgOS41IDc0LjEzNyAxMi42IDczLjQzNyAxNyBDIDczLjAzNyAxOS4yIDczLjUzNyAyMS4zIDc0LjgzNyAyMi43IEMgNzUuOTM3IDI0IDc3LjYzNyAyNC42IDc5LjUzNyAyNC42IEMgODIuODM3IDI0LjYgODQuNzM3IDIyLjUgODQuNzM3IDIyLjUgTCA4NC41MzcgMjMuNSBDIDg0LjQzNyAyMy45IDg0LjczNyAyNC4zIDg1LjEzNyAyNC4zIEwgODguNTM3IDI0LjMgQyA4OS4wMzcgMjQuMyA4OS41MzcgMjMuOSA4OS42MzcgMjMuNCBMIDkxLjYzNyAxMC42IEMgOTEuNjM3IDEwLjQgOTEuMzM3IDEwIDkwLjkzNyAxMCBaIE0gODUuNzM3IDE3LjIgQyA4NS4zMzcgMTkuMyA4My43MzcgMjAuOCA4MS41MzcgMjAuOCBDIDgwLjQzNyAyMC44IDc5LjYzNyAyMC41IDc5LjAzNyAxOS44IEMgNzguNDM3IDE5LjEgNzguMjM3IDE4LjIgNzguNDM3IDE3LjIgQyA3OC43MzcgMTUuMSA4MC41MzcgMTMuNiA4Mi42MzcgMTMuNiBDIDgzLjczNyAxMy42IDg0LjUzNyAxNCA4NS4xMzcgMTQuNiBDIDg1LjczNyAxNS4zIDg1LjkzNyAxNi4yIDg1LjczNyAxNy4yIFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA5Y2RlIiBkPSJNIDk1LjMzNyAzLjMgTCA5Mi4xMzcgMjMuNiBDIDkyLjAzNyAyNCA5Mi4zMzcgMjQuMyA5Mi43MzcgMjQuMyBMIDk1LjkzNyAyNC4zIEMgOTYuNDM3IDI0LjMgOTYuOTM3IDIzLjkgOTcuMDM3IDIzLjQgTCAxMDAuMjM3IDMuNSBDIDEwMC4zMzcgMy4xIDEwMC4wMzcgMi44IDk5LjYzNyAyLjggTCA5Ni4wMzcgMi44IEMgOTUuNjM3IDIuOCA5NS40MzcgMyA5NS4zMzcgMy4zIFoiPjwvcGF0aD48L3N2Zz4" data-v-fd53f700="" alt="" aria-label="PayPal" ></a>
            <button @click="upselling" class="btn btn-yes" v-else >Yes! add this one-time bundle to my order!</button>
            <button @click="downsell" class="btn btn-no">No thanks, I understand I may never see this low price again.</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'Sell',
  props: {
    data: Object,
  },
  data(){
    return {
      paypalUrl: null
    }
  },
  methods: {
    storage(){
      let data = {
        price: this.data.productPrice,
        name: this.data.productName
      }
      if(this.data.purchaseTitle == 'PurchaseUpSell'){
        localStorage.upsell = JSON.stringify(data);
      } else {
        localStorage.downsell = JSON.stringify(data);
      }
    },
    upselling(){
      this.$store.state.loader = true;
      let data = {
        orderId: this.$store.state.orderId,
        product1_id: this.data.productId,
        emailAddress: localStorage.emailAddress,
        amount: this.data.productPrice
      }
      console.log(data);
      Request.upselling(data)
        .then(res => {
          this.$store.state.loader = false;
          if(res.result === "SUCCESS"){
            this.success();
          } else if(res.result === "ERROR"){
            if( typeof res.message === 'object' ){
              for (const [key, value] of Object.entries(res.message)) {
                alert(`Something goes wrong. Error! ${key}: ${value}`);
              }
            } else {
              alert(`Something goes wrong. Error! ${res.message}`);
            }
          } else {
            alert('Something goes wrong! Please reload the page and try again!');
          }
        });
    },
    downsell(){
      this.$store.state.loader = true;
      setTimeout(()=>{
        this.$store.state.loader = false;
        this.$router.push(this.data.redirectUrl);
      }, 500);
    },
    success(){
      this.storage();
      let
        purchaseTitle = this.data.purchaseTitle,
        productPrice = this.data.productPrice,
        sellName = this.data.sellName

      fbq('track', `${purchaseTitle}`, {
        currency: "USD",
        value: productPrice,
        name: sellName,
        transaction_id: `${localStorage.orderId}`
      });
      dataLayer.push({
        'event': `${purchaseTitle}`,
        'currency': "USD",
        'value': productPrice,
        'name': sellName,
        transaction_id: `${localStorage.orderId}`
      });
      setTimeout(()=>{
        this.$store.state.loader = false;
        this.$router.push('/1-2-3-deep-perfecting-cerum-cross-sell');
      }, 500);
    },
    paypalUpsale(){
      let setPaypalUrl = url => {
        this.paypalUrl = url;
      }
      Request.konnektivePaypalUpsale({
        orderId: this.$store.state.orderId,
        product1_id: this.data.productId,
        url: this.$route.fullPath
      })
        .then(res => {
          this.$store.state.loader = false;
          setPaypalUrl(res.message.paypalUrl);
        });
    },
    confirmPP(){
      let success = () => this.success();

      this.$store.state.loader = true;
      Request.konnektivePaypalUpsaleConfirm({
        token: this.$route.query.token,
        payerId: this.$route.query.PayerID,
        sessionId: localStorage.sessionId,
        orderId: localStorage.orderId,
        product1_id: this.data.productId,
        campaignId: localStorage.campaignId,
        emailAddress: localStorage.emailAddress,
        amount: this.data.productPrice
      })
        .then(res => {
          console.log(res);
          if( res.result == 'SUCCESS' ){
            success();
          } else {
            alert('Error with payment confirmation!');
          }
        });
    }
  },
  mounted(){
    window.scrollTo(0, 0);
    if( localStorage.orderId && localStorage.payment ){
      this.$store.state.orderId = localStorage.orderId;
      this.$store.state.payment = localStorage.payment;
      if( this.$route.query.paypalAccept == '1'){
        this.confirmPP();
        // this.success()
      } else {
        if( this.$store.state.payment === 'pp' ){
          this.$store.state.loader = true;
          this.paypalUpsale();
        }
      }
    } else {
      if(this.$store.state.payment != 'cc'){
        this.$router.push('/');
      }
    }
  }
}
</script>
<style lang="scss" scoped >
.main-header{
  display: none;
}

.container{
  max-width: 1040px;
}

.top{
  min-height: 30px;
  background: #FF2500;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  @media(min-width:768px){
    padding: 0;
    font-size: 16px;
    line-height: 30px;
  }
  span{
    color: #FFF000;
  }
}

.page-header{
  padding: 15px 0;
  .container{
    display: flex;
  }
  .logo{
    width: 80px;
    display: block;
    @media(min-width:768px){
      width: 128px;
    }
    img{
      display: block;
      width: 100%;
    }
  }
  .info{
    text-align: center;
    margin-left: auto;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.2;
    color: #FE6F61;
    @media(min-width:768px){
      font-size: 22px;
      line-height: 27px;
    }
    a{
      display: block;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.2;
      color: #000000;
      text-decoration: none;
      @media(min-width:768px){
        font-size: 22px;
        line-height: 27px;
      }
    }
  }
}

@keyframes slideLeft {
  0%{
    transform: translate(0, -50%);
  }
  50%{
    transform: translate(-15px, -50%);
  }
  100%{
    transform: translate(0, -50%);
  }
}
@keyframes slideRight {
  0%{
    transform: translate(0, -50%);
  }
  50%{
    transform: translate(15px, -50%);
  }
  100%{
    transform: translate(0, -50%);
  }
}

.wait{
  background: #FFEFE9;
  padding-top: 20px;
  @media(min-width:768px){
    height: 220px;
  }
  h2{
    font-family: Montserrat;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    color: #FF0000;
    position: relative;
    padding: 0 40px;
    @media(min-width:768px){
      padding: 0;
      font-size: 30px;
      line-height: 37px;
    }
    &:before, &:after{
      content:'';
      display: block;
      width: 38.57px;
      height: 21.82px;
      position: absolute;
      top: 50%;
      transform-origin: 0 0;
      transform: translate(0, -50%);
    }
    &:before{
      background: url('../assets/img/3_jars/icon-union.png') no-repeat 0 0;
      left: 0;
      animation: 1s ease-in infinite slideLeft;
    }
    &:after{
      background: url('../assets/img/3_jars/icon-unionr.png') no-repeat 0 0;
      right: 0;
      animation: 1s ease-in infinite slideRight;
    }
  }
  h3{
    font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    color: #000000;
    padding-bottom: 15px;
    @media(min-width:768px){
      font-size: 22px;
      line-height: 27px;
      padding-bottom: 0;
    }
  }
}

.product{
  margin-bottom: 90px;
  margin-top: 30px;
  @media(min-width:768px){
    margin-top: -120px;
  }
  &-wrap{
    background: #FFFFFF;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  }
  &-title{
    font-family: Montserrat;
    font-weight: 600;
    color: #000000;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 1.2;
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      font-size: 20px;
      line-height: 24px;
    }
  }
  &-slogan{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 26px;
    line-height: 1.2;
    color: #E6805A;
    padding: 10px 0;
    border-top: 1px solid #BCBCBC;
    border-bottom: 1px solid #BCBCBC;
    margin-bottom: 10px;
    @media(min-width:768px){
      padding: 20px 0;
      font-size: 34px;
      line-height: 41px;
    }
  }
  &-list{
    padding: 15px 0 0;
    margin-bottom: 20px;
    li{
      font-family: Montserrat;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;
      display: block;
      color: #000000;
      padding-left: 25px;
      background: url('../assets/img/3_jars/icon-check.png') no-repeat left center;
      &:not(:first-child){
        margin-top: 5px;
      }
      @media(min-width:768px){
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  &-line{
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.3;
    color: #FFFFFF;
    background: url('../assets/img/3_jars/prod_line.png') no-repeat 0 0/100% 100%;
    display: inline-block;
    padding: 5px 10px;
    margin-bottom: 25px;
    text-align: center;
    @media(min-width:768px){
      width: calc(100% + 40px);
      padding: 7px 30px;
      font-size: 28px;
      line-height: 35px;
    }
    span{
      color: #FFF000;
    }
  }
  &-offer-title{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.2;
    color: #FF0000;
    margin-bottom: 10px;
    @media(min-width:768px){
      font-size: 20px;
      line-height: 24px;
    }
  }
  &-board{
    align-items: center;
    margin-bottom: 15px;
    @media(min-width:768px){
      display: flex;
    }
  }
  &-price{
    display: flex;
    font-family: Montserrat;
    font-size: 26px;
    line-height: 1.2;
    @media(min-width:768px){
      font-size: 36px;
      line-height: 44px;
    }
    & > div{
      padding-left: 15px;
      padding-right: 15px;
      text-align: center;
      &:before{
        font-size: 12px;
        line-height: 1;
        @media(min-width:768px){
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
    &__retail{
      color: #8E8E8E;
      border-right: 1px solid #C4C4C4;
      &:before{
        content:"RETAIL PRICE";
        display: block;
      }
    }
    &__now{
      color: #E5805A;
      font-weight: 600;
      &:before{
        content: "OFFER PRICE";
        display: block;
      }
    }
  }
  &-save{
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2;
    color: #FFFFFF;
    background: url('../assets/img/3_jars/save.png') no-repeat 0 0/100% auto;
    width: 190px;
    height: 41px;
    padding-left: 10px;
    line-height: 41px;
    margin-top: 10px;
    @media(min-width:768px){
      font-size: 22px;
      margin-top: 0;
    }
  }
  .row{
    margin-left: 0;
    margin-right: 0;
    @media(max-width:767px){
      display: block;
    }
  }
  .col{
    &-left{
      padding: 15px;
      @media(min-width:768px){
        width: 60%;
        z-index: 2;
      }
    }
    &-right{
      background: #E6BEAF;
      text-align: center;
      padding: 15px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media(min-width:768px){
        width: 40%;
      }
      img{
        max-width: 100%;
        height: auto;
      }
      p{
        &:first-child{
          border-bottom: 1px solid #000000;
          padding-bottom: 15px;
          margin-bottom: 15px;
        }
      }
    }
  }
}

.btn{
  display: block;
  width: 530px;
  height: auto;
  max-width: 100%;
  padding: 20px 15px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  &-yes{
    background: #00C855;
    border-radius: 3px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.3;
    text-align: center;
    color: #FFFFFF;
    @media(min-width:768px){
      font-size: 22px;
      line-height: 27px;
    }
  }
  &-no{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 11px;
    line-height: 1.2;
    text-align: center;
    color: #8E8E8E;
    background: none;
    @media(min-width:768px){
      font-size: 14px;
      line-height: 17px;
    }
    &:hover{
      background: none;
      opacity: .5;
    }
  }
}

.bonus{
  h2{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    text-align: center;
    color: #FFFFFF;
    background: #E5805A;
    padding: 10px 0;
    margin-bottom: 30px;
    @media(min-width:768px){
      margin-bottom: 90px;
      font-size: 28px;
      line-height: 34px;
      padding: 17px 0;
    }
    span{
      display: block;
      color: #FFF000;
    }
  }
  .row{
    @media(max-width:767px){
      display: block;
    }
  }
  .col{
    &-left{
      background: #E6BEAF;
      padding-bottom: 30px;
      @media(min-width:768px){
        width: 35%;
      }
      img{
        margin-bottom: 30px;
      }
    }
    &-right{
      padding: 15px;
      @media(min-width:768px){
        width: 65%;
        padding: 15px 15px 15px 30px;
      }
    }
  }
  &-board{
    background: #fff;
    width: calc(100% - 30px);
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
  }
  &-price{
    display: flex;
    font-family: Montserrat;
    font-size: 28px;
    line-height: 1.3;
    justify-content: center;
    margin-bottom: 10px;
    @media(min-width:768px){
      margin-bottom: 0;
      font-size: 36px;
      line-height: 44px;
    }
    & > div{
      padding-left: 15px;
      padding-right: 15px;
      text-align: center;
      &:before{
        font-size: 12px;
        @media(min-width:768px){
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
    &__retail{
      color: #8E8E8E;
      border-right: 1px solid #C4C4C4;
      &:before{
        content:"RETAIL PRICE";
        display: block;
      }
    }
    &__now{
      color: #E5805A;
      font-weight: 600;
      &:before{
        content: "OFFER PRICE";
        display: block;
      }
    }
  }
  &-save{
    font-family: Roboto;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: #FFFFFF;
    background: url('../assets/img/3_jars/savee.png') no-repeat 0 0/100% auto;
    width: 190px;
    height: 41px;
    text-align: center;
    line-height: 41px;
    margin-left: auto;
    margin-right: auto;
  }
  h3{
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    color: #E5805A;
    border-bottom: 1px solid #BCBCBC;
    padding-bottom: 10px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 30px;
      line-height: 35px;
    }
  }
  p{
    font-family: Roboto;
    font-size: 14px;
    color: #000000;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 18px;
      line-height: 21px;
    }
  }
  .btn-yes{
    margin-top: 30px;
  }
}

.guarantee{
  background: #FDE3D9;
  padding: 30px 0;
  margin-top: 30px;
  margin-bottom: 0;
  @media(min-width:768px){
    margin-top: 70px;
    margin-bottom: 60px;
  }
  .container{
    position: relative;
    @media(min-width:768px){
      padding-right: 330px;
    }
  }
  h2{
    font-family: Roboto;
    font-weight: bold;
    font-size: 21px;
    color: #E5805A;
    border-bottom: 1px solid #BCBCBC;
    padding-bottom: 15px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 30px;
      line-height: 35px;
    }
  }
  p{
    font-family: Roboto;
    font-size: 14px;
    color: #000000;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 18px;
      line-height: 21px;
    }
  }
  .dr{
    display: block;
    @media(min-width:768px){
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  a{
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    text-decoration: none;
  }
  ul{
    padding-top: 30px;
    padding-bottom: 30px;
    @media(min-width:768px){
      display: flex;
      padding-bottom: 0;
    }
    li{
      display: flex;
      align-items: center;
      @media(max-width:767px){
        margin-top: 10px;
      }
      img{
        margin-right: 10px;
      }
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 30px;
        }
      }
    }
  }
}

.bot{
  color: #fff;
  @media(min-width:768px){
    padding-bottom: 90px;
  }
  .container{
    background: #EBA083;
  }
  .row{
    margin-left: 0;
    margin-right: 0;
    @media(max-width:767px){
      display: block;
    }
  }
  .col{
    &-left{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
      padding: 15px;
      @media(min-width:768px){
        width: 40%;
      }
    }
    &-right{
      @media(min-width:768px){
        padding: 30px 30px 30px 0;
        width: 60%;
      }
    }
  }
  .btn-no{
    color: #DADADA;
  }
  h2{
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 30px;
      line-height: 35px;
    }
    span{
      color: #FFF000;
    }
  }
  h3{
    font-family: Roboto;
    font-size: 16px;
    color: #FFFFFF;
    border-bottom: 1px solid #FFCCB9;
    padding-bottom: 5px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 24px;
      line-height: 28px;
    }
  }
  h4{
    font-family: Roboto;
    font-size: 13px;
    color: #FFFFFF;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 16px;
      line-height: 19px;
    }
  }
  h5{
    font-family: Montserrat;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #FFF000;
    margin-bottom: 15px;
  }
}
#ppOne, #ppTwo, #ppThree {
  text-align: center;
}
.payPalButton{
  margin-left: auto;
  margin-right: auto;
}
</style>
<style>
.bot h2 span{color: #FFF000}
</style>