<template>
  <BlogPage3 />
  <br />
  <UserBlogs />
</template>

<script>
import BlogPage3 from "@/components/BlogPage3.vue";
import UserBlogs from "@/components/UserVlogs.vue";

export default {
  name: "BlogView",
  components: {
    BlogPage3,
    UserBlogs,
  },
};
</script>

<style></style>
