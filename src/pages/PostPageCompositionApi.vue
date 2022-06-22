<template>
  <div>
    <h1>Posts</h1>
    <MyInput
        v-focus
        v-model="searchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <MyButton
      >
        Create Post
      </MyButton>
      <MySelect
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm />
    </MyDialog>
    <PostList
        :posts="sortedAndSearchedPosts"
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
import {ref} from "vue";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import {usePost} from "@/hooks/usePost";


export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'For names'},
        {value: 'body', name: 'For bodies'}
      ]
    }
  },
  setup(props) {
    const {posts, isPostLoading, totalPage} = usePost(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPage,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
}

</script>

<style>

.app__btns {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 1rem;
}
.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 2rem;
  background: green;
}

</style>























