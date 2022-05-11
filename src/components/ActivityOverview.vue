<template>
  <div class="container-card">
    <div class="columnpicture">
      <img class="activitypicture" src="../assets/excursiones.jpg" />
    </div>
    <div class="text-column">
      <h3 class="title">{{ titl }}</h3>
      <body>
        <p class="paragraph">{{ parrafo }}</p>
      </body>
      <br />
    </div>
    <div class="rightcolumn">
      <body>
        <p>
          desde <br /><span class="price">{{ precio }}</span> <br />
          por persona
        </p>
      </body>
      <br />
      <router-link to="/book_activity">
        <button id="destinationSearchBtn" type="submit" class="btn btn-primary">
          Información y reserva
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityOverview",
  props: {
    titl: String,
    parrafo: String,
    precio: String,
  },
};
</script>
<style scoped>
.container-card {
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.columnpicture {
  order: 1;
}
.text-column {
  order: 2;
  text-align: left;
  font-size: 10px;
  width: 500px;
  padding-left: 20px;
}
.activitypicture {
  float: left;
  padding-top: 10px;
  border-radius: 15px;
  width: 100px;
  height: 100px;
}
.rightcolumn {
  order: 3;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
.price {
  color: orange;
}

#destinationSearchBtn {
  height: 36px;
  background-color: orange;
  color: white;
  font-weight: bold;
  border-color: white;
  border-width: 3px;
}
</style>
