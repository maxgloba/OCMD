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
          <input type="text" v-model="name" minlength="2"  id="name" @change="validation" @input="validation" required>
        </div>
        <div class="field col-sm-6">
          <label for="email">Email*</label>
          <input type="email" v-model="email" id="email" @change="emailAddressChange" @input="validation" required>
        </div>
        <div class="field col-12">
          <label for="phone">Phone</label>
          <input type="tel" v-model="phone" id="phone" maxlength="11" @input="phoneNumberInput " @change="validation">
        </div>
        <div class="field col-12">
          <label for="message">Message</label>
          <textarea v-model="message" id="message"></textarea>
        </div>
        <div class="field col-12">
          <input type="submit" value="Send" :disabled="(validationForm) ? false:true">
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
      message: null,
      validationForm: false
    }
  },
  methods: {
    validation(){
      let contains = () => {
        let result = true;
        document.querySelectorAll('input').forEach(input => {
          if( input.classList.contains('no-valid') ) result = false;
      });
      return result
    }
      if(this.name !== null &&  this.email !== null  && contains()){
        this.validationForm = true;
      } else {
        this.validationForm = false;
      }
    },
    emailAddressChange(e){
      const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( !emailReg.test(e.target.value) ){
        e.target.classList.add('no-valid');
        alert('Email is wrong!');
      } else {
        e.target.classList.remove('no-valid');
      }
      this.validation();
    },
    phoneNumberInput(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      this.phoneNumber = arr.toString().replace(/[,]/g, '');
    },
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

  input[type="submit"]{
    background: #fe6f61;
    color: #fff;
    &:disabled{
      background: gray;
      cursor: default;
      pointer-events: none;
    }
  }
}
</style>