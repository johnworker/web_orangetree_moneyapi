<template>
  <div>
    <h1>結帳頁面</h1>
    <p>總金額：{{ totalPrice }} 元</p>
    <button @click="checkout">付款</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cartItems: [],
      totalPrice: 0
    };
  },
  methods: {
    calculateTotal() {
      this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
    async checkout() {
      const response = await axios.post('http://localhost:3000/api/checkout', {
        items: this.cartItems
      });
      alert('付款成功！');
      localStorage.removeItem('cart');
      this.$router.push('/');
    }
  },
  mounted() {
    this.cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    this.calculateTotal();
  }
};
</script>
