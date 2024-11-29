<template>
  <div>
    <h2>購物車</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} - ${{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cart'],
};
</script>
