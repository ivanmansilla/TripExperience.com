<template>
  <div class="container-card">
    <div class="columnpicture">
      <img class="activitypicture" src="../assets/excursiones.jpg" />
    </div>
    <div class="text-column">
      <h2 class="title">Excursión por el Amazonas</h2>
      <body>
        <p>
          Conozca de cerca y en persona la exuberante jungla y la <br />
          increíble vida silvestre del Amazonas durante esta aventura <br />
          de 3 días y 2 noches en Refugio Amazonas Lodge.
        </p>
      </body>
    </div>
    <div class="rightcolumn">
      <body>
        <p>
          Desde <br /><span class="price"> 618,39 €</span> <br />
          por persona
        </p>
      </body>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookActivityCard",
};
</script>
<style scoped>
.container-card {
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
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
  color: rgb(255, 89, 0);
}

#destinationSearchBtn {
  height: 36px;
  background-color: rgb(255, 89, 0);
  color: white;
  font-weight: bold;
  border-color: white;
  border-width: 3px;
}
</style>
