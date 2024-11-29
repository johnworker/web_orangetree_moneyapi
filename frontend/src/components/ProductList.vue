<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
        <button @click="addToCart(product)">加入購物車</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/products');
      this.products = response.data;
    },
    addToCart(product) {
      this.$emit('addToCart', product);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>
