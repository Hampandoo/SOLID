<!-- Interface Segregation Principle -->
<!-- Separating the components in this way, we can easily swap out different implementations 
of the dependencies without affecting the other components -->

<script setup>
const productId = ref(41);
const cart = ref([]);
const customerId = ref(12);

const productRepository = computed(() => {
  /* implementation */
});
const customerRepository = computed(() => {
  /* implementation */
});
const orderProcessor = computed(() => {
  /* implementation */
});
</script>

<template>
  <div>
    <product-detail
      :product-id="productId"
      :product-repository="productRepository"
    />
    <checkout
      :cart="cart"
      :customer-repository="customerRepository"
      :order-processor="orderProcessor"
      :customer-id="customerId"
    />
  </div>
</template>

<style></style>
