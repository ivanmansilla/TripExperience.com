<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column">
        <h3 class="title">¿Qué Buscas?</h3>
        <body>
          Selecciona una categoría de actividad:
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
            <div class="col-card">
              <img class="rounded" id="imagen0" src="../assets/castle.png" />
              <b class="activityB">Arquitectura</b>
            </div>
          </router-link>
          <router-link to="/naturaleza">
            <div class="col-card">
              <img class="rounded" id="imagen2" src="../assets/flower.png" />
              <b class="activityB">Naturaleza</b>
            </div>
          </router-link>
          <router-link to="/arte_cultura">
            <div class="col-card">
              <img class="rounded" id="imagen5" src="../assets/art_icon2.png" />
              <b class="activityB">Arte y Cultura</b>
            </div>
          </router-link>
          <router-link to="/gastronomia">
            <div class="col-card">
              <img id="imagen3" src="../assets/paella.png" />
              <b class="activityB">Gastronomía</b>
            </div>
          </router-link>
          <router-link to="/ocio_nocturno">
            <div class="col-card">
              <img class="rounded" id="imagen4" src="../assets/feast.png" />
              <b class="activityB">Ocio nocturno</b>
            </div>
          </router-link>
          <router-link to="/familia">
            <div class="col-card">
              <img class="rounded" id="imagen1" src="../assets/family.png" />
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
  border-radius: 15px;
  padding-top: 20px;
  padding-bottom: 10px;
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
  overflow-x: scroll;
  overflow-y: hide;
  height: auto;
  display: flex;
  border-radius: 15px;
  padding-top: 15px;
  width: auto;
  margin: 2%;
  background-color: #fffcb7;
}

.col-card {
  color: rgb(255, 110, 0);
  display: inline-block;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 2%;
  border-radius: 15px;
  margin-top: 1%;
  width: auto;
  margin-bottom: 1%;
}

.col-card:hover {
  box-shadow: 2px 2px 8px 8px rgb(255, 50, 0);
  color: rgb(255, 50, 0);
}

#destinationSearchBtn {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
  cursor: pointer;
}

#destinationSearchBtn:hover {
  background-color: rgb(255, 50, 0);
}
img {
  width: 165px;
  height: 180px;
  margin-bottom: 15px;
  border-radius: 15px;
}
</style>
