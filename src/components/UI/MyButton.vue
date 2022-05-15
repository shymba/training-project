<template>
  <button class="btn">
    <slot></slot>
  </button>

</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  padding: .5rem;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
</style>