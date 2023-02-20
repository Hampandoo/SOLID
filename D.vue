<!-- Dependency Inversion -->
<!-- This principle aims to reduce the coupling between components -->


<script setup>
import MongoUserRepository from '*';
import UserService from '*';

const userRepository = new MongoUserRepository();
const userService = ref(null);

onBeforeMount(() => {
  userService.value = new UserService(userRepository);
});
</script>

<template>
  <div>
    <child-component :userRepository="userRepository" />
  </div>
</template>

<style></style>
