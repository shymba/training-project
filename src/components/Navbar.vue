<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/posts')">Posts Page</MyButton>
      <MyButton style="margin-left: 20px;" @click="$router.push('/about')">About Page</MyButton>
    </div>
  </div>

</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 1rem ;
}
.navbar__btns {
  margin-left: auto;
}

</style>