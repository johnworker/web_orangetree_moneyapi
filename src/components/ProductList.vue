<template>
  <div>
    <h1>商品列表</h1>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }} 元</p>
      <button @click="addToCart(product)">加入購物車</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/api/products');
      this.products = response.data;
    },
    addToCart(product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('已加入購物車');
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
