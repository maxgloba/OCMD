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
      ul{
        left: 0%;
        top: 30%;
      }
    }
    button{
      top: 3%;
      right: 3%;
      z-index: 999;
      position: fixed;
      border: 1px solid #f13221;
      border-radius: 4px;
      width: 40px;
      height: 35px;
      &:after{
          content:"+";
          display: block;
          position: absolute;
          color:#f13221;
          transform: scale(3.5) rotate(45deg);
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
    align-items: center;
    justify-content: space-between;
  }
  @media(max-width:767px){
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    background: #fe6f61;
    opacity: .9;
    z-index: 998;
    transition: opacity 1s linear, visibility 1s linear;
    li{
      flex: 1 100%;
      text-align: center;
    }
  }
  li{
    position: relative;
    &:not(:first-child){
      margin-left: 15px;
      @media(max-width:767px){
        margin-left: 0;
      }
    }
  }
  ul{
    background: #fff;
    position: absolute;
    left: -60%; top: 100%;
    display: block;
    text-align: left;
    margin: 0;
    padding: 15px;
    width: 250px;
    box-shadow: 0 10px 60px rgba(0, 0, 0, .1);
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    li{
      &:not(:first-child){
        margin-left: 0;
      }
    }
    a{
      font-size: 12px;
      padding: 0 0 5px;
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
    &:after{
      content:"";
      display: block;
      height: 1px;
      background: #000;
      position: absolute;
      left: 0;
      bottom: 10px;
      width: 0;
      transition: width .5s ease;
    }
    &.router-link-exact-active{
      font-weight: 700;
    }
    &:hover{
      &:after{
        display: none;
      }
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
      display: inline-block;
      content: "▼";
      font-size: 75%;
      margin-left: 7.5px;
      position: absolute;
      right: 0;
      left: auto;
      top: 50%;
      height: auto;
      bottom: auto;
      width: auto;
      background: none;
      transform: translate(0, -50%);
      @media(max-width:767px){
        right: 40%;
      }
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
  width: 60px;
  height: 50px;
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
