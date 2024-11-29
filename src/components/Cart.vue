<template>
  <div>
    <h1>購物車</h1>
    <div v-for="item in cartItems" :key="item.id">
      <h2>{{ item.name }}</h2>
      <p>{{ item.price }} 元</p>
      <button @click="removeFromCart(item)">移除</button>
    </div>
    <button @click="goToCheckout">前往結帳</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    },
    goToCheckout() {
      this.$router.push('/checkout');
    }
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  }
};
</script>
