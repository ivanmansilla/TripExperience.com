<template>
  <div class="container-card" style="display: inline-block; margin-top: 60px">
    <div class="row">
      <div class="col-3" style="text-align: left; margin-left: 15px">
        <b>BLOG DE USUARIOS</b>
        <p>
          Aqui enontraras las mejores experiencias narradas por los propios
          usuarios. Puedes usarlos como guia de viaje a tu destino.
        </p>
        <p>
          Si has viajado recientemente y tu destino te gusto tanto que lo
          compartir puedes contarnos por aqui tu experiencia
        </p>
      </div>
      <div class="col-8">
        <div class="container-card2">
          <div class="col-3 card3" style="text-align: left">
            <img
              class="imgCard2 rounded"
              id="imagen11"
              src="../assets/arte_icon.jpg"
            />
            <b class="activityB">ACTIVITATS AQUATIQUES</b>
            <div>
              <b>ESCRITO POR JOSE MANUEL</b>
            </div>
            <div>
              <b>133</b>
              <i class="bi bi-heart-fill"></i>
            </div>
          </div>
          <div class="col-3 card3" style="text-align: left">
            <img
              class="imgCard2 rounded"
              id="imagen12"
              src="../assets/arte_icon.jpg"
            />
            <b class="activityB">ACTIVITATS AQUATIQUES</b>
            <div>
              <b>ESCRITO POR JOSE MANUEL</b>
            </div>
            <div>
              <b>133</b>
              <i class="bi bi-heart-fill"></i>
            </div>
          </div>
          <div class="col-3 card3" style="text-align: left">
            <img
              class="imgCard2 rounded"
              id="imagen13"
              src="../assets/arte_icon.jpg"
            />
            <b class="activityB">ACTIVITATS AQUATIQUES</b>
            <div>
              <b>ESCRITO POR JOSE MANUEL</b>
            </div>
            <div>
              <b>133</b>
              <i class="bi bi-heart-fill"></i>
            </div>
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
</style>
