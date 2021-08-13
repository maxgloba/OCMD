<template>
  <nav class="nav">
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
}
</script>
<style lang="scss" scoped>
.nav{
  // margin-left: auto;
  width: 100%;
  display: block;
}
ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
  li{
    position: relative;
    &:not(:first-child){
      margin-left: 45px;
    }
  }
  ul{
    background: #fff;
    position: absolute;
    left: 0; top: 100%;
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
      width: 100%;
    }
  }
}
.submenu{
  span{
    padding-right: 20px;
    position: relative;
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
</style>
