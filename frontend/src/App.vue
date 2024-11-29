<template>
  <div>
    <h1>購物網站</h1>
    <ProductList @addToCart="addToCart" />
    <Cart :cart="cart" />
    <Checkout :cart="cart" />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';

export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
  },
};
</script>
