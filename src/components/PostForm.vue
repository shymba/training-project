<template>
  <form @submit.prevent>
    <h4>Create Post</h4>
    <MyInput
        v-focus
        v-model="post.title"
        type="text"
        placeholder="name"
    />
    <MyInput
        v-model="post.body"
        type="text"
        placeholder="text"
    />
    <MyButton
        style="align-self: flex-end; margin-top: 1rem"
        @click="createPost"
    >
      Add Post
    </MyButton>
  </form>

</template>

<script>

import MyInput from "@/components/UI/MyInput";
export default {
  name: "PostForm",
  components: {MyInput},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

</style>