<template>
  <div class="title1">
    <h1>Los posts con mas likes de Madagascar</h1>
  </div>
  <div class="components">
    <div class="list">
      <DestinationBlogs /><br />
      <DestinationBlogs /><br />
      <DestinationBlogs /><br />
      <DestinationBlogs /><br />
      <DestinationBlogs /><br />
    </div>
  </div>
</template>

<script>
import DestinationBlogs from "@/components/DestinationBlogs.vue";

export default {
  name: "destinationBlogs",
  components: {
    DestinationBlogs,
  },
};
</script>

<style>
.title1 {
  color: rgb(255, 89, 0);
  font-size: 9px;
}
.components {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  float: right;
}
.filter {
  float: left;
  padding-right: 50px;
}
</style>
