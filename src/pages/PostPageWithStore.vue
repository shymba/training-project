<template>
  <div>
<!--    <h1>{{ $store.state.likes }}</h1>-->
<!--    <h1>{{ $store.state.isAuth ? "User is Login" : "Logg in to use service"}}</h1>-->
<!--    <h1>{{ $store.getters.doubleLikes }}</h1>-->
<!--    <div>-->
<!--      <MyButton @click="$store.commit('incrementLikes')">Like</MyButton>-->
<!--      <MyButton @click="$store.commit('decrementLikes')">Dislike</MyButton>-->
<!--    </div>-->
    <h1>Posts</h1>
    <MyInput
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
    />
    <div class="app__btns">
      <MyButton
          @click="showDialog"
      >
        Create Post
      </MyButton>
      <MySelect
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="addPost"/>
    </MyDialog>
    <PostList
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>
      <h3 style="color: forestgreen">Loading...</h3>
    </div>
        <div ref="observer" class="observer"></div>
    <div v-intersection="loadMorePosts" class="observer"></div>
        <div class="page__wrapper">
          <div
              v-for="pageNumber in totalPage"
              :key="pageNumber"
              class="page"
              :class="{
                  'current-page': page === pageNumber
              }"
              @click="changePage(pageNumber)"
          >
            {{ pageNumber }}
          </div>
        </div>
  </div>
</template>

<script>

import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
// import axios from 'axios';
import MyButton from "@/components/UI/MyButton";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  components: {
    MyButton,
    PostList,
    PostForm
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    // async fetchPosts() {
    //   try {
    //     this.isPostLoading = true;
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     });
    //     this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
    //     this.posts = response.data;
    //   } catch (e) {
    //     console.warn('Error!')
    //   } finally {
    //     this.isPostLoading = false;
    //   }
    // },
    // async loadMorePosts() {
    //   try {
    //     this.page ++;
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     });
    //     this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
    //     this.posts = [...this.posts, ...response.data];
    //   } catch (e) {
    //     console.warn('Error!')
    //   }
    // }
  },
  mounted() {
    // this.fetchPosts();
    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries) => {
    //   if(entries[0].isIntersecting && this.page < this.totalPage) {
    //     this.loadMorePosts()
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer)
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPage: state => state.post.totalPage,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),


    // sortedPosts() {
    //   return [...this.posts].sort((post1,post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    // },
    // sortedAndSearchedPosts() {
    //   return this.sortedPosts.filter(post =>
    //       post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    // }
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // },
    // page() {
    //   this.fetchPosts();
    // }
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























