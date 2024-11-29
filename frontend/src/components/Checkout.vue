<template>
  <div>
    <h2>結帳</h2>
    <button @click="checkout">提交訂單</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['cart'],
  methods: {
    async checkout() {
      const response = await axios.post('http://localhost:3000/checkout', {
        cart: this.cart,
      });
      alert(response.data.message);
    },
  },
};
</script>
