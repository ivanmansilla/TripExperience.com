<template>
  <DestinationSearch />
  <br />
  <CategorySearch />
  <br />
  <UserBlogs />
</template>

<script>
import DestinationSearch from "@/components/DestinationSearch.vue";
import CategorySearch from "@/components/CategorySearch.vue";
import UserBlogs from "@/components/UserVlogs.vue";

export default {
  name: "LandingView",
  components: {
    DestinationSearch,
    CategorySearch,
    UserBlogs,
  },
};
</script>

<style></style>
