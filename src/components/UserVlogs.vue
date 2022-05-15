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
        <p>Blogs de lugares recomendados:</p>
        <router-link to="/destiBlogs">
          <button
            id="destPostBtn"
            type="submit"
            class="btn btn-primary"
            color="black"
          >
            MADAGASCAR
          </button>
        </router-link>
        &nbsp;&nbsp;
        <router-link to="/destiBlogs2">
          <button
            id="destPostBtn"
            type="submit"
            class="btn btn-primary"
            color="black"
          >
            COSTA RICA
          </button>
        </router-link>
      </div>
      <div class="col-8">
        <div class="container-card2">
          <div class="card3" style="text-align: left">
            <div>
              <router-link to="/blog">
                <div class="col_card">
                  <img
                    class="imgCard2 rounded"
                    id="imagen11"
                    src="../assets/para3.jpg"
                  />
                  <h3 class="activityB">
                    PARACAIDAS, UNA EXPERIENCIA INOLVIDABLE
                  </h3>
                  <p id="authorText">Escrito por Ferran Ferrero</p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="card3" style="text-align: left">
            <router-link to="/blog2">
              <div class="col_card">
                <img
                  class="imgCard2 rounded"
                  id="imagen11"
                  src="../assets/trek2.jpg"
                />
                <h3 class="activityB">MI PRIMER TREKKING "EL MORADO"</h3>
                <p id="authorText">Escrito por Alexia Putellas</p>
              </div>
            </router-link>
          </div>
          <div class="card3" style="text-align: left">
            <router-link to="/blog3">
              <div class="col_card">
                <img
                  class="imgCard2 rounded"
                  id="imagen11"
                  src="../assets/subm3.jpg"
                />
                <h3 class="activityB">UN DIA HACIENDO SUBMARINISMO</h3>
                <p id="authorText">Escrito por Juan Carlos</p>
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
  border-radius: 15px;
  padding-top: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.col-3 {
  padding-left: 30px;
  padding-top: 20px;
}
.container-card2 {
  display: flex;
  height: auto;
  border-radius: 15px;
  width: auto;
  margin: 3%;
  background-color: white;
}
.card3 {
  margin-left: 23px;
  margin-right: 23px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 15px;
  margin-top: 1%;
  height: 13%;
  width: 30%;
  min-width: 180px;
  margin-bottom: 1%;
}

.activityB {
  color: rgb(255, 110, 0);
}
#authorText {
  color: rgb(255, 110, 0);
}
#destPostBtn {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
  cursor: pointer;
}

#destPostBtn:hover {
  background-color: rgb(255, 50, 0);
}
img {
  width: 100%;
  height: 250px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
}
img:hover {
  box-shadow: 2px 2px 8px 8px rgb(255, 50, 0);
  color: rgb(255, 50, 0);
  border-width: 0px;
}
</style>
