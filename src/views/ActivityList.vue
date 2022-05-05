<template>
  <div class="title1">
    <h1>Actividades de arquitectura</h1>
  </div>
  <label
    ><select id="Order" class="form-order">
      <option selected>Mejor valoradas</option>
      <option>Menor precio</option>
      <option>Mayor precio</option>
      <option>Mas visitadas</option>
      <span>Ordenar por</span>
    </select>
  </label>
  <div class="components">
    <div class="filter">
      <ActivityFilter />
    </div>
    <div class="list">
      <ActivityOverview /><br />
      <ActivityOverview /><br />
      <ActivityOverview /><br />
      <ActivityOverview /><br />
      <ActivityOverview /><br />
    </div>
  </div>
</template>

<script>
import ActivityOverview from "@/components/ActivityOverview.vue";
import ActivityFilter from "@/components/ActivityFilter.vue";

export default {
  name: "ActivityList",
  components: {
    ActivityOverview,
    ActivityFilter,
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
