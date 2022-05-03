<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column">
        <h3 class="title">¿Qué Buscas?</h3>
        <body>
          selecciona una categoría de actividad:
        </body>
        <br />
        <br />
        <input class="form-check-input" type="checkbox" id="gridCheck" />
        <label class="form-check-label" for="gridCheck">
          No tengo Preferencia
        </label>
        <br />
        <br />
        <button id="destinationSearchBtn" type="submit" class="btn btn-primary">
          Recomiéndame
        </button>
      </div>
      <div class="column">
        <div class="container-card2">
          <router-link to="/arquitectura">
            <div class="col card">
              <img
                class="rounded"
                id="imagen0"
                src="../assets/arquitectura_icon.jpg"
              />
              <b class="activityB">Arquitectura</b>
            </div>
          </router-link>
          <router-link to="/naturaleza">
            <div class="col card">
              <img
                class="rounded"
                id="imagen2"
                src="../assets/naturaleza_icon.png"
              />
              <b class="activityB">Naturaleza</b>
            </div>
          </router-link>
          <router-link to="/arte_cultura">
            <div class="col card">
              <img class="rounded" id="imagen5" src="../assets/arte_icon.jpg" />
              <b class="activityB">Arte y Cultura</b>
            </div>
          </router-link>
          <router-link to="/gastronomia">
            <div class="col card">
              <img id="imagen3" src="../assets/gastronomia_icon.jpg" />
              <b class="activityB">Gastronomía</b>
            </div>
          </router-link>
          <router-link to="/ocio_nocturno">
            <div class="col card">
              <img
                class="rounded"
                id="imagen4"
                src="../assets/ocioNocturno_icon.png"
              />
              <b class="activityB">Ocio nocturno</b>
            </div>
          </router-link>
          <router-link to="/familia">
            <div class="col card">
              <img
                class="rounded"
                id="imagen4"
                src="../assets/familia_icon.jpg"
              />
              <b class="activityB">En familia</b>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-card {
  height: auto;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  padding-top: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.text-column {
  padding-left: 30px;
  float: left;
  text-align: left;
  padding-right: 10px;
}
.container-card2 {
  overflow: scroll;
  height: auto;
  display: flex;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  padding-top: 15px;
  width: auto;
  margin: 2%;
  background-color: #ffff;
}
.card {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  margin-top: 1%;
  height: 250px;
  min-width: 185px;
  margin-top: 1%;
  margin-bottom: 1%;
  min-height: 250px;
  width: 14%;
}
.card2 {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 2%;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  margin-top: 1%;
  height: 13%;
  width: 22%;
  min-width: 180px;
  margin-bottom: 1%;
}
.card3 {
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 2%;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  margin-top: 1%;
  height: 13%;
  width: 30%;
  min-width: 180px;
  margin-bottom: 1%;
}
#destinationSearchBtn {
  height: 36px;
  background-color: orange;
  color: white;
  font-weight: bold;
  border-color: white;
  border-width: 3px;
}
img {
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
}
</style>
