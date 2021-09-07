<template>
  <nav class="nav">
    <button @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li class="submenu">
        <span>SHOP</span>
        <ul>
          <li><router-link to="/rejuvenation-complex-cream">Rejuvenation Complex Cream</router-link></li>
          <li><router-link to="/deep-perfecting-face-and-neck-serum">Deep Perfecting Serum</router-link></li>
        </ul>
      </li>
      <li><router-link to="/faq">F.A.Q</router-link></li>
      <li><router-link to="/shipping-and-delivery">SHIPPING & DELIVERY</router-link></li>
      <li><router-link to="/contact-us">CONTACT US</router-link></li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Navigation',
  methods: {
    toggleNav(e) {
      e.preventDefault()
      e.target.parentNode.classList.toggle('nav-active')
    }
  }
}
</script>
<style lang="scss" scoped>
.nav{
  width: 100%;
  display: block;
  &-active{
    ul{
      display: flex;
    }
    button{
      &:after{
          content:"+";
          display: block;
          position: absolute;
          color:#f13221;
          font-weight: 300;
          transform: scale(3.5) rotate(45deg);
          line-height: 1;
          font-family: Arial;
        }
      span{
        display: none;
      }
    }
  }
}
ul{
  display: none;
  @media(min-width:768px){
    display: flex;
    justify-content: space-between;
  }
  @media(max-width:767px){
    position: fixed;
    left: 0; right: 0;
    top: 100px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #fff;
    z-index: 998;
    transition: opacity 1s linear, visibility 1s linear;
    padding-bottom: 30px;
    li{
      flex: 1 100%;
      text-align: center;
      a, span{
        font-size: 18px;
        padding: 10px 0;
      }
      &:not(:first-child){
        margin-top: 20px;
      }
    }
  }
  li{
    position: relative;
    &:not(:first-child){
      margin-left: 8px;
      @media(max-width:767px){
        margin-left: 0;
      }
    }
  }
  ul{
    background: #fff;
    display: block;
    text-align: left;
    margin: 0;
    padding: 15px;
    width: 250px;
    box-shadow: 0 10px 60px rgba(0, 0, 0, .1);
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    @media(max-width:767px){
      position: relative;
      left: auto;
      top: auto;
      width: 100%;
      box-shadow: none;
      visibility: visible;
      opacity: 1;
    }
    @media(min-width:768px){
      position: absolute;
      left: -60%; top: 100%;
    }
    li{
      &:not(:first-child){
        margin-left: 0;
      }
    }
    a{
      font-size: 16px;
      padding: 0 0 5px;
      @media(min-width:768px){
        font-size: 12px;
      }
      &:after{
        bottom: 5px;
      }
    }
  }
  a, span{
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #3a3c48;
    position: relative;
    padding: 10px 0;
    &.router-link-exact-active{
      font-weight: 700;
    }
  }
}

.submenu{
  span{
    padding-right: 20px;
    position: relative;
    @media(max-width:767px){
      padding-right: 0;
    }
    &:after {
      display: inline;
      content: "▼";
      font-size: 75%;
      margin-left: 7.5px;
      background: none;
    }
  }
  &:hover{
    ul{
      opacity: 1;
      z-index: 2;
      visibility: visible;
    }
  }
}
button{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid #fe6f61;
  width: 50px;
  height: 40px;
  padding: 10px 10px;
  border-radius: 4px;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0, -50%);
  @media(min-width:768px){
    display: none;
  }
  span {
    display: block;
    background: #fe6f61;
    width: 100%;
    height: 2px;
    flex: 1 100%; 
    pointer-events: none;
  }
}
</style>
