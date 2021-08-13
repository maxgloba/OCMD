<template>
  <section class="page-contact">
    <div class="container">
      <h1 class="section-title" style="text-align: center;">Contact Us</h1>
      <h3>Your Satisfaction Is Our Priority!</h3>
      <p class="text-center">We’d love to hear from you and answer any questions you might have about our products or services. <br>Feel free to contact us anytime!</p>
      <p>&nbsp;</p>
      <p>
        Give Us a Call: <br>
        America: <a href="tel:8663414691">(866) 341-4691</a>
      </p>
      <h4>Or Drop a message:</h4>
      <form class="contact row" @submit="submitContact">
        <div class="field col-sm-6">
          <label for="name">Name</label>
          <input type="text" v-model="name" id="name" required>
        </div>
        <div class="field col-sm-6">
          <label for="email">Email*</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div class="field col-12">
          <label for="phone">Phone</label>
          <input type="tel" v-model="phone" id="phone">
        </div>
        <div class="field col-12">
          <label for="message">Message</label>
          <textarea v-model="message" id="message"></textarea>
        </div>
        <div class="field col-12">
          <input type="submit" value="Send">
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import Request from '@/services/Request.js'
export default {
  name: 'contactus',
  data(){
    return{
      name: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    submitContact(e){
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }
      Request.sendContact(data)
        .then(result => {
          if(result.accepted.length > 0){
            alert('Thank you for submitting. We will contact you shortly!')
            this.name = null;
            this.email = null;
            this.phone = null;
            this.message = null;
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.page-contact{
  padding: 50px 0;
  h3{
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 30px;
    text-align: center;
  }
  h4{
    font-size: 24px;
    line-height: 125.9%;
    margin-bottom: 30px;
  }
  p{
    font-weight: 300;
    font-size: 18px;
    line-height: 125.9%;
    margin-bottom: 30px;
    &.text-center{
      text-align: center;
    }
    a{
      color: #000;
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>