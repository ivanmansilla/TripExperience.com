<template>
  <BlogPage />
  <br />
  <UserBlogs />
</template>

<script>
import BlogPage from "@/components/BlogPage.vue";
import UserBlogs from "@/components/OtherPosts.vue";

export default {
  name: "BlogView3",
  components: {
    BlogPage,
    UserBlogs,
  },
};
</script>

<style></style>
