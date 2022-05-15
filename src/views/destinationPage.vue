<template>
  <nav-bar-lluis
    style="margin-left: 10%; margin-right: 10%; border-radius: 15px"
  ></nav-bar-lluis>
  <br />
  <div class="container-card" style="margin-top: 60px; margin-bottom: 60px">
    <div style="width: 100%; text-align: left; margin-left: 2%">
      <b style="position: relative">ACTIVIDADES MAS POPULARES</b>
    </div>
    <div class="container-card2">
      <div class="card2">
        <img
          class="imgCard2 rounded"
          id="imagen7"
          src="../assets/actividadPlaya.jpg"
        />
        <b class="activityB">ACTIVITATS AQUATIQUES</b>
        <div>
          <b>133</b>
          <i class="bi bi-heart-fill"></i>
        </div>
      </div>
      <div class="card2">
        <img
          class="imgCard2 rounded"
          id="imagen8"
          src="../assets/actividadPlaya.jpg"
        />
        <b class="activityB">ACTIVITATS AQUATIQUES</b>
        <div>
          <b>133</b>
          <i class="bi bi-heart-fill"></i>
        </div>
      </div>
      <div class="card2">
        <img
          class="imgCard2 rounded"
          id="imagen9"
          src="../assets/actividadPlaya.jpg"
        />
        <b class="activityB">ACTIVITATS AQUATIQUES</b>
        <div>
          <b>133</b>
          <i class="bi bi-heart-fill"></i>
        </div>
      </div>
      <div class="card2">
        <img
          class="imgCard2 rounded"
          id="imagen10"
          src="../assets/actividadPlaya.jpg"
        />
        <b class="activityB">ACTIVITATS AQUATIQUES</b>
        <div>
          <b>133</b>
          <i class="bi bi-heart-fill"></i>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/naturaleza">
    <div class="container-card">
      <div style="width: 100%; text-align: left; margin-left: 2%">
        <b style="position: relative, color: black">Naturaleza y gastronomia</b>
      </div>
      <div class="container-card2">
        <div class="col card">
          <img
            class="rounded"
            id="imagen1"
            src="../assets/actividadPlaya.jpg"
          />
          <b class="activityB">ACTIVITATS AQUATIQUES</b>
        </div>
        <div class="col card">
          <img
            class="rounded"
            id="imagen0"
            src="../assets/actividadPlaya.jpg"
          />
          <b class="activityB">ACTIVITATS AQUATIQUES</b>
        </div>
        <div class="col card">
          <img
            class="rounded"
            id="imagen2"
            src="../assets/actividadPlaya.jpg"
          />
          <b class="activityB">ACTIVITATS AQUATIQUES</b>
        </div>
        <div class="col card">
          <img
            class="rounded"
            id="imagen5"
            src="../assets/actividadPlaya.jpg"
          />
          <b class="activityB">ACTIVITATS AQUATIQUES</b>
        </div>
        <div class="col card">
          <img id="imagen3" src="../assets/excursiones.jpg" />
          <b class="activityB">EXCURSIONES DESTINO</b>
        </div>
        <div class="col card">
          <img
            class="rounded"
            id="imagen4"
            src="../assets/actividadPlaya.jpg"
          />
          <b class="activityB">ACTIVITATS AQUATIQUES</b>
        </div>
      </div>
    </div>
  </router-link>
  <UserBlogs />
</template>
<script>
import navBarLluis from "@/components/navBarLluis";
import UserBlogs from "@/components/UserVlogs.vue";
export default {
  name: "destinationPage",
  components: {
    UserBlogs,
    navBarLluis,
  },
};
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
  display: flex;
  overflow-x: scroll;
  height: auto;
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
  height: 275px;
  min-width: 180px;
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
.activityB {
  color: orangered;
}
img {
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
}

.imgCard2 {
  width: 100%;
  height: 250px;
}
</style>
