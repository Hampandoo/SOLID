<!-- The Liskov Substitution Principle 
 If a program is using a base class, it should be able to use any of its extended classes without knowing it.
 Extended classes should be interchanging with parent class -->

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <!-- This way all slots should extend base slot or should have the same construction   -->
      <slot
        name="product"
        v-for="product in products"
        :product="product"
      ></slot>
    </ul>
  </div>
</template>

<style></style>
