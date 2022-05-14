<template>
  <div class="container-card" style="display: inline-block; margin-top: 60px">
    <div class="row">
      <div class="col-3" style="text-align: left; margin-left: 15px">
        <b>OTROS POSTS</b>
        <p>
          Otros posts que te pueden interesar sobre diferentes experiencias de
          usuarios!.
        </p>
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
                  <p id="TitleText">Escrito por Ferran Ferrero</p>
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
                <p id="TitleText">Escrito por Alexia Putellas</p>
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
                <p id="TitleText">Escrito por Juan Carlos</p>
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
#TitleText {
  color: rgb(255, 110, 0);
}
.container-card2 {
  height: auto;
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
  border-radius: 15px;
  margin-top: 1%;
  height: 13%;
  width: 30%;
  min-width: 180px;
  margin-bottom: 1%;
}
.activityB {
  color: rgb(255, 110, 0);
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
}

#activityB:hover {
  background-color: rgb(255, 50, 0);
}
.imgCard2 {
  width: 100%;
  height: 250px;
}
</style>
