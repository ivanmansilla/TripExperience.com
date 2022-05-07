<template>
  <BlogPage2 />
  <br />
  <UserBlogs />
</template>

<script>
import BlogPage2 from "@/components/BlogPage2.vue";
import UserBlogs from "@/components/OtherPosts.vue";

export default {
  name: "BlogView2",
  components: {
    BlogPage2,
    UserBlogs,
  },
};
</script>

<style></style>
