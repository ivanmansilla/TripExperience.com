<template>
  <div class="container-card" style="display: inline-block; margin-top: 60px">
    <div class="row">
      <div class="col-3" style="text-align: left; margin-left: 15px">
        <b>BLOG DE USUARIOS</b>
        <p>
          Aqui encontraras las mejores experiencias narradas por los propios
          usuarios. Puedes usarlos como guia de viaje a tu destino.
        </p>
        <p>
          Si has viajado recientemente y tu destino te gusto tanto que lo
          compartir puedes contarnos por aqui tu experiencia
        </p>
        <br />
        <p>Busca los posts del pais que te interesa:</p>
        <input
          type="text"
          class="form-control"
          id="inputDestination"
          placeholder="Destino"
        />
        <router-link to="/destiBlogs">
          <button
            id="destPostBtn"
            type="submit"
            class="btn btn-primary"
            color="black"
          >
            Buscar
          </button>
        </router-link>
      </div>
      <div class="col-8">
        <div class="container-card2">
          <div class="col-3 card3" style="text-align: left">
            <div>
              <router-link to="/blog">
                <div class="col card">
                  <img
                    class="imgCard2 rounded"
                    id="imagen11"
                    src="../assets/para3.jpg"
                  />
                  <h3 class="activityB">
                    PARACAIDAS, UNA EXPERIENCIA INOLVIDABLE
                  </h3>
                  <p>Escrito por Ferran Ferrero</p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col-3 card3" style="text-align: left">
            <router-link to="/blog2">
              <div class="col card">
                <img
                  class="imgCard2 rounded"
                  id="imagen11"
                  src="../assets/trek2.jpg"
                />
                <h3 class="activityB">MI PRIMER TREKKING "EL MORADO"</h3>
                <p>Escrito por Alexia Putellas</p>
              </div>
            </router-link>
          </div>
          <div class="col-3 card3" style="text-align: left">
            <router-link to="/blog3">
              <div class="col card">
                <img
                  class="imgCard2 rounded"
                  id="imagen11"
                  src="../assets/subm3.jpg"
                />
                <h3 class="activityB">UN DIA HACIENDO SUBMARINISMO</h3>
                <p>Escrito por Juan Carlos</p>
              </div>
            </router-link>
          </div>
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
.container-card2 {
  height: auto;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  padding-top: 15px;
  width: auto;
  margin: 2%;
  background-color: #ffff;
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
.activityB {
  color: #ef6e32;
}
.imgCard2 {
  width: 100%;
  height: 250px;
}
#destPostBtn {
  height: 36px;
  background-color: orange;
  color: black;
  font-weight: bold;
  border-color: white;
  border-width: 3px;
}
</style>
