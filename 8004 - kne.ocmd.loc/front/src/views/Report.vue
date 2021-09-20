<template>
  <section class="report-content">
    <div class="container">
      <form @submit="submit" class="filter-form">
        <h2>Step 1. Choose date range:</h2>
        <div class="filter-wrap">
          <div class="filter filter-short">
            <label for="startDate">Start date</label>
            <input type="date" v-model="startDate" id="startDate">
          </div>
          <div class="filter filter-short">
            <label for="endDate">End date</label>
            <input type="date" v-model="endDate" id="endDate">
          </div>
          <div class="filter">
            <label class="hide">1</label>
            <input type="submit" value="GO">
          </div>
        </div>
      </form>
      <form @submit="sortCampaign" class="filter-form" v-if="utm_campaign_arr">
        <h2>Step 2. Choose Campaigns:</h2>
        <div class="filter-wrap">
          <div class="filter">
            <a class="utm-btn" @click="openUTM('utm_campaign')">utm_campaign</a>
            <ul id="utm_campaign_list" class="utm-list">
              <li v-for="(item, i) in utm_campaign_arr">
                <input type="checkbox" :id="`utm_campaign_${i}`" :value="item" v-model="campaign_checkboxes">
                <label :for="`utm_campaign_${i}`">{{ item }}</label>
              </li>
            </ul>
          </div>
          <div class="filter">
            <input type="submit" value="GO">
          </div>
          <div class="filter filter-half">
            <ul class="checked-list">
              <li v-for="campaign in campaign_checkboxes">{{ campaign }}</li>
            </ul>
          </div>
        </div>
      </form>
      <form @submit="sortTerm" class="filter-form" v-if="campaign_checkboxes.length > 0 && utm_term_arr.length > 0">
        <h2>Step 3. Choose Terms:</h2>
        <div class="filter-wrap">
          <div class="filter">
            <a class="utm-btn" @click="openUTM('utm_term')">utm_term</a>
            <ul id="utm_term_list" class="utm-list">
              <li v-for="(item, i) in utm_term_arr">
                <input type="checkbox" :id="`utm_term_${i}`" :value="item" v-model="term_checkboxes">
                <label :for="`utm_term_${i}`">{{ item }}</label>
              </li>
            </ul>
          </div>
          <div class="filter">
            <input type="submit" value="GO">
          </div>
          <div class="filter filter-half">
            <ul class="checked-list">
              <li v-for="term in term_checkboxes">{{ term }}</li>
            </ul>
          </div>
        </div>
      </form>
      <form @submit="sortContent" class="filter-form" v-if="term_checkboxes.length > 0 && utm_content_arr.length > 0" >
        <h2>Step 4. Choose Content:</h2>
        <div class="filter-wrap">
          <div class="filter" >
            <a class="utm-btn" @click="openUTM('utm_content')">utm_content</a>
            <ul id="utm_content_list" class="utm-list">
              <li v-for="(item, i) in utm_content_arr">
                <input type="checkbox" :id="`utm_content_${i}`" :value="item" v-model="content_checkboxes">
                <label :for="`utm_content_${i}`">{{ item }}</label>
              </li>
            </ul>
          </div>
          <div class="filter">
            <input type="submit" value="GO">
          </div>
          <div class="filter filter-half">
            <ul class="checked-list">
              <li v-for="content in content_checkboxes">{{ content }}</li>
            </ul>
          </div>
        </div>
      </form>
      <div class="orders" v-if="orders && ordersSort">
        <h2>Orders revenue: {{ revenue }}</h2>
        <h2>Orders count: {{ ordersSort.length }}</h2>
        <h2>Orders list:</h2>
        <div class="order" v-for="order in ordersSort">
          <div class="order-trigger" @click="openOrder">
            <div class="left">Order #<b>{{ order.orderId }}</b> <span>({{ order.dateCreated }})</span></div>
            <div class="right">{{ order.currencySymbol }}{{ order.totalAmount }}</div>
          </div>
          <div class="order-info">
            <ul>
              <li>First name:<b> {{ order.firstName }}</b></li>
              <li>Last name:<b> {{ order.lastName }}</b></li>
              <li>Status: <b>{{ order.orderStatus }}</b></li>
              <li>Amount: <b>{{ order.currencySymbol }}{{ order.totalAmount }}</b></li>
              <li>Discount: <b>{{ order.currencySymbol }}{{ order.totalDiscount }}</b></li>
            </ul>
            <ul>
              <li>Campaign:<b> {{ order.custom3 }}</b></li>
              <li>Term:<b> {{ order.custom5 }}</b></li>
              <li>Content:<b> {{ order.custom4 }}</b></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="orders" v-else-if="orders && !ordersSort">
        <h2>Orders revenue: {{ revenue }}</h2>
        <h2>Orders count: {{ orders.length }}</h2>
        <h2>Orders list:</h2>
        <div class="order" v-for="order in orders">
          <div class="order-trigger" @click="openOrder">
            <div class="left">Order #<b>{{ order.orderId }}</b> <span>({{ order.dateCreated }})</span></div>
            <div class="right">{{ order.currencySymbol }}{{ order.totalAmount }}</div>
          </div>
          <div class="order-info">
            <ul>
              <li>First name:<b> {{ order.firstName }}</b></li>
              <li>Last name:<b> {{ order.lastName }}</b></li>
              <li>Status: <b>{{ order.orderStatus }}</b></li>
              <li>Amount: <b>{{ order.currencySymbol }}{{ order.totalAmount }}</b></li>
              <li>Discount: <b>{{ order.currencySymbol }}{{ order.totalDiscount }}</b></li>
            </ul>
            <ul>
              <li>Campaign:<b> {{ order.custom3 }}</b></li>
              <li>Term:<b> {{ order.custom5 }}</b></li>
              <li>Content:<b> {{ order.custom4 }}</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'Report',
  data(){
    return {
      orders: false,
      ordersSort: false,
      startDate: '09/13/2021',
      endDate: '09/14/2021',
      utm_campaign: null,
      utm_term: null,
      utm_content: null,
      utm_campaign_arr: false,
      utm_term_arr: false,
      utm_content_arr: false,
      campaign_checkboxes: [],
      term_checkboxes: [],
      content_checkboxes: [],
      revenue: 0
    }
  },
  methods: {
    submit(e){
      e.preventDefault()
      this.ordersSort = false;
      this.utm_campaign = null;
      this.utm_term = null;
      this.utm_content = null;
      this.utm_campaign_arr = false;
      this.utm_term_arr = false;
      this.utm_content_arr = false;
      this.campaign_checkboxes = [];
      this.term_checkboxes = [];
      this.content_checkboxes = [];
      this.revenue = 0;
      Request.orders({
        startDate: this.startDate,
        endDate: this.endDate,
        campaignId: 5
      })
        .then(orders => {
          console.log(orders);
          this.orders = orders;
          let utm_campaign_arr = []
          let revenue = 0;
          this.orders.forEach(order => {
            revenue = revenue + Number(order.totalAmount);
            if(!utm_campaign_arr.includes(order.custom3) && typeof order.custom3 == 'string'){
              utm_campaign_arr.push(order.custom3);
            }
          })
          this.revenue = revenue;
          this.utm_campaign_arr = utm_campaign_arr;
        })
    },
    closeList(){
      const lists = document.querySelectorAll('.utm-list');
      lists.forEach(list => list.classList.remove('utm-list--active'));
    },
    sortCampaign(e){
      e.preventDefault()
      let utm_term_arr = []
      let ordersSort = []
      let revenue = 0;
      this.orders.forEach(order => {
        if(this.campaign_checkboxes.includes(order.custom3)){
          ordersSort.push(order);
          revenue = revenue + Number(order.totalAmount);
          if(!utm_term_arr.includes(order.custom5) && typeof order.custom5 == 'string'){
            utm_term_arr.push(order.custom5);
          }
        }
      })
      this.revenue = revenue;
      this.utm_term_arr = utm_term_arr;
      this.ordersSort = ordersSort;
      this.closeList();
    },
    sortTerm(e){
      e.preventDefault()
      let utm_content_arr = []
      let ordersSort = []
      let revenue = 0;
      this.ordersSort.forEach(order => {
        if(this.term_checkboxes.includes(order.custom5)){
          ordersSort.push(order);
          revenue = revenue + Number(order.totalAmount);
          if(!utm_content_arr.includes(order.custom4) && typeof order.custom4 == 'string'){
            utm_content_arr.push(order.custom4);
          }
        }
      })
      this.revenue = revenue;
      this.utm_content_arr = utm_content_arr;
      this.ordersSort = ordersSort;
      this.closeList();
    },
    sortContent(e){
      e.preventDefault()
      e.preventDefault()
      let ordersSort = []
      let revenue = 0;
      this.ordersSort.forEach(order => {
        if(this.content_checkboxes.includes(order.custom4)){
          ordersSort.push(order);
          revenue = revenue + Number(order.totalAmount);
        }
      })
      this.revenue = revenue;
      this.ordersSort = ordersSort;
      this.closeList();
    },
    openUTM(id){
      document.getElementById(`${id}_list`).classList.toggle('utm-list--active');
    },
    openOrder(e){
      e.preventDefault()
      e.target.parentNode.classList.toggle('order-active');
    }
  },
  beforeCreate(){
    if( !this.$route.query.pass && this.$route.query.pass !== '@qwerty123456@' ){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="scss">
.report-content{
  padding-bottom: 100px;
}
h2{
  font-size: 25px;
  color: #000;
  margin-bottom: 15px;
  span{
    font-size: 50%;
  }
}
.filter{
  flex: 1 25%;
  max-width: 25%;
  padding-left: 15px;
  padding-right: 15px;
  &-short{
    flex: 1 200px;
    max-width: 200px;
  }
  &-half{
    flex: 1 50%;
    max-width: 50%;
  }
  &-form{
    border-bottom: 1px solid #000;
    margin-top: 30px;
    padding-bottom: 30px;
  }
  &-wrap{
    margin-left: -15px;
    margin-right: -15px;
    display: flex;
    flex-wrap: wrap;
    &:not(:last-child){
      margin-bottom: 15px;
    }
  }
}
label{
  font-size: 16px;
  display: block;
  margin-bottom: 0px;
  &.hide{
    opacity: 0;
  }
}
select{
  height: 45px;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
}
input{
  height: 45px;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  &[type="submit"]{
    background: #fc8060;
    font-size: 14px;
    font-weight: 700;
    border: none;
    padding: 0 15px;
    color: #fff;
    width: auto;
    transition: .5s ease;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, .8);
    &:active{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }
  &[type="checkbox"]{
    width: 20px;
    height: 20px;
  }
}
.orders{
  margin-top: 30px;
}
.order{
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  &:not(:last-child){
    margin-bottom: 10px;
  }
  &-trigger{
    background: #ccc;
    padding: 10px 30px;
    color: #000;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    span{
      font-size: 80%;
    }
    &:hover{
      opacity: 0.9;
      cursor: pointer;
    }
    *{
      pointer-events: none;
    }
  }
  &-info{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-height: 0px;
    opacity: 0;
    transition: .5s ease;
    padding: 0 30px;
    ul{
      flex: 1 50%;
      display: block;
      li{
        font-size: 14px;
        padding: 4px 0;
        b{
          font-size: 16px;
        }
      }
    }
  }
  &-active{
    .order-info{
      max-height: 2000px;
      opacity: 1;
      padding: 15px 30px;
    }
  }
}
.utm{
  &-btn{
    display: block;
    width: 100%;
    background: none;
    border: 1px solid #000;
    border-radius: 4px;
    height: 45px;
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after{
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      top: 17px;
      right: 10px;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      transform: rotate(-45deg);
    }
  }
  &-list{
    padding: 20px 10px 15px 10px;
    border: 1px solid #000;
    margin-top: -2px;
    max-height: 0px;
    opacity: 0;
    transition: max-height .5s ease, opacity .5s ease;
    &--active{
      max-height: 1000px;
      opacity: 1;
    }
    li{
      display: flex;
      align-items: flex-start;
      &:not(:first-child){
        margin-top: 15px;
      }
      label{
        font-size: 14px;
        line-height: 20px;
      }
      input{
        margin: 0 10px 0 0;
        min-width: 20px;
      }
    }
  }
}
.checked-list{
  list-style: disc outside;
  li{
    line-height: 20px;
  }
}
</style>