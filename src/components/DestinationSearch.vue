<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column">
        <h3 class="title">¿Adónde vas?</h3>
        <body>
          selecciona tu destino en el mapa
        </body>
        <br />
        <body>
          o escribe aqui:
        </body>
        <br />
        <br />
        <input
          type="text"
          class="form-control"
          id="inputDestination"
          placeholder="Destino"
        />
        <br />
        <br />
        <button id="destinationSearchBtn" type="submit" class="btn btn-primary">
          Buscar
        </button>
        <br />
        <br />
        <body>
          no sabes a donde ir?
        </body>
        <br />
        <br />
        <button id="destinationSearchBtn" type="submit" class="btn btn-primary">
          Recomiéndame
        </button>
      </div>
      <div class="column">
        <img class="world-Map" src="../assets/world_map.jpeg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "destinationPage",
};
</script>
<style scoped>
.container-card {
  height: auto;
  justify-content: first baseline;
  display: flex;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.text-column {
  padding-left: 30px;
  float: left;
  text-align: left;
}
.column {
  float: left;
  padding-left: 20px;
}
.world-Map {
  padding-top: 10px;
  border-radius: 15px;
  padding-left: 270px;
  width: 800px;
  height: 550px;
}
#inputDestination {
  width: 300px;
  height: 30px;
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
