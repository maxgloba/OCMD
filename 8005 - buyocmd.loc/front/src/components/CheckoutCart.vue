<template>
  <div class="cart">
    <table>
      <tbody>
        <tr>
          <td colspan="2">
            <div class="product">
              <img src="@/assets/img/rcc1j.jpg" alt="" width="150px">
              <div class="product-info">
                <h4>{{ this.$store.state.cart.name }}</h4>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Subtotal</td>
          <td>${{ this.$store.state.cart.price }}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>${{ this.$store.state.cart.shipping }}</td>
        </tr>
        <tr>
          <td><b>TOTAL</b></td>
          <td>${{ Number(this.$store.state.cart.price) + Number(this.$store.state.cart.shipping) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CheckoutCart'
}
</script>
<style lang="scss" scoped>
.cart{
  margin-bottom: 30px;
}
h3{
  margin: 0 0 15px;
  color: #000;
  font-size: 28px;
  font-weight: 500;
}
h4{
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
}
table{
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
  tbody{
    td{
      padding-bottom: 10px;
    }
  }
  tfoot{
    td{
      padding: 10px;
      border-bottom: none;
      font-weight: 400;
      font-size: 14px;
      border-top: 1px solid #ccc;
      &:not(:first-child){
        text-align: right;
        border-left: 1px solid #ccc;
        width: 70px;
      }
    }
    tr{
      &:last-child{
        td{
          font-size: 20px;
        }
      }
    }
  }
}

.product{
  display: flex;
  &-info{
    padding-top: 10px;
    padding-left: 5px;
    img{
      display: block;
      position: absolute;
      left: 0; top: 0;
    }
    h4{
      font-size: 18px;
      font-weight: 700;
      padding: 6px 0 0;
      margin-bottom: 5px;
      @media(min-width:768px){
        font-size: 22px;
      }
    }
    strong:before {
      content: "Quantity: ";
      font-size: 18px;
      font-weight: 400;
    }
  }
}
</style>