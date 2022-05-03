<template>
  <div class="container-card">
    <h3>Naturaleza y gastronomia</h3>
    <div class="container-card2">
      <div class="card">
        <img id="imagen" />
      </div>
      <div class="card">
        <img id="imagen" />
      </div>
      <div class="card">
        <img id="imagen" />
      </div>
      <div class="card">
        <img id="imagen" />
      </div>
      <div class="card">
        <h2>ACTIVITATS AQUATIQUES</h2>
        <img class="rounded" id="imagen" src="../assets/bosque-pixabay.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "destinationPage",
};
</script>
<style>
.container-card {
  height: auto;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  padding-top: 3%;
  width: auto;
  background-color: #fffcb7;
}
.container-card2 {
  height: auto;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  padding-top: 3%;
  width: auto;
  margin: 5%;
  background-color: #ffff;
}
.card {
  display: inline-block;
  flex-direction: row;
  width: 15%;
  margin-left: 15px;
  margin-right: 15px;
  height: auto;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  margin-top: 2%;
  margin-bottom: 2%;
}
img {
  max-width: 80%;
  max-height: 80%;
}
</style>
