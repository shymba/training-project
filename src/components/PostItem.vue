<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Name: </strong>{{post.title}}</div>
      <div><strong>Text: </strong>{{post.body}}</div>
    </div>
    <div class="post__btns">
      <MyButton
          @click="$router.push(`/posts/${post.id}`)"
      >
        Open
      </MyButton>
      <MyButton
          @click="$emit('remove', post)"
          style="margin-left: 5px"
      >
        Delete
      </MyButton>
    </div>

  </div>
</template>

<script>

export default {
  name: "PostItem",

  props: {
    post: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.post {
  padding: 1rem;
  border: 2px solid teal;
  margin-top: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}

</style>