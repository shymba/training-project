<template>
  <div v-if="posts.length > 0">
    <h3>Posts List</h3>
    <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: tomato">List is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped>

</style>