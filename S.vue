// The Cart component is responsible only for cart operations

<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }}
        <button @click="removeItem(item)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  }
})
function removeItem(item) {
  this.$emit('removeItemFromCart', item)
}
</script>
