<template>
  <BlogPage />
  <br />
  <UserBlogs />
</template>

<script>
import BlogPage from "@/components/BlogPage.vue";
import UserBlogs from "@/components/UserVlogs.vue";

export default {
  name: "BlogView",
  components: {
    BlogPage,
    UserBlogs,
  },
};
</script>

<style></style>
