<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column">
        <h2>Acerca de nosotros</h2>
        <p>Contactanos</p>
        <p>¿Quieres trabajar con TripExperience?</p>
      </div>
      <div class="text-column">
        <h2>Actividades</h2>
        <p>Añade una actividad</p>
        <p>Deja tu Valoración</p>
        <p>Patrocina tu negocio turístico</p>
        <p>Verifica lugares</p>
      </div>
      <div class="text-column">
        <h2>Políticas</h2>
        <p>Política de cookies</p>
        <p>Uso de la información</p>
        <p>Aviso legal</p>
      </div>
      <div class="text-column">
        <h2>Redes sociales</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>YouTube</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scoped>
.container-card {
  margin-top: 1%;
  height: auto;
  justify-content: space-evenly;
  display: flex;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(148, 148, 148, 0.461);
}
p:hover {
  color: orangered;
}
.text-column {
  padding-left: 30px;
  float: left;
  justify-content: space-evenly;
}
</style>
