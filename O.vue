<!-- Open closed Principle -->
<!-- Components are open for extension with Props and Slots, and closed for modification of base code inside -->

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true,
  }
})
</script>

<template>
<div>
    <h2>{{ title }}</h2>
    <ul>
      <slot name="product" v-for="product in products" :product="product"></slot>
    </ul>
  </div>
</template>

<style>
</style>