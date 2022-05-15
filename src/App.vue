<template>
  <div class="app">
    <h1>Posts</h1>
    <div class="app__btns">
      <MyButton
          @click="showDialog"
      >
        Create Post
      </MyButton>
      <MySelect
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="addPost"/>
    </MyDialog>
    <PostList
        :posts="posts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>
      <h3 style="color: forestgreen">Loading...</h3>
    </div>
  </div>

</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      posts:[],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'For names'},
        {value: 'body', name: 'For bodies'}
      ]
    }
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = response.data;
      } catch (e) {
        console.warn('Error!')
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}

</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
.app__btns {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}

</style>