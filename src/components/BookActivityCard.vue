<template>
  <div class="container-card">
    <div class="columnpicture">
      <img class="img_columna" src="../assets/puente_amz.jpg" />
      <br />
      <img class="img_columna" src="../assets/jardin_amz.jpg" />
      <br />
      <img class="img_columna" src="../assets/tucan_amz.jpg" />
    </div>
    <div class="main_photo">
      <img class="img_centro" src="../assets/cabaña_inicio.jpg" />
    </div>
    <div class="text-column">
      <h2 class="title">Excursión por el Amazonas</h2>
      <body>
        <p class="description">
          Sumérjase en el increíble paisaje de la selva de Perú en una <br />
          excursión ecológica de varios días por el Amazonas. <br />Navegue por
          el agua desde Puerto Maldonado hasta <br />llegar a Posada Amazonas un
          espacioso hotel ecológico ubicado <br />en el bosque tropical.
        </p>
      </body>
    </div>
    <div class="rightcolumn">
      <body>
        <p>
          Desde <br /><span class="price"> 618,39 €</span> <br />
          por persona
        </p>
        <hr />
        <p>Seleccionar fecha y viajeros</p>
        <input
          type="text"
          style="height: 25px"
          class="form-control"
          id="inputDestination"
          placeholder="Lunes de mayo de 2022"
        />
        <br />
        <input
          type="text"
          style="height: 25px"
          class="form-control2"
          id="inputDestination"
          placeholder="2 adultos"
        />
      </body>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookActivityCard",
};
</script>
<style scoped>
.container-card {
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.form-control2 {
  margin-top: 10px;
}
.title {
  font-size: 18px;
}
.description {
  font-size: 15px;
}
.img_columna {
  float: left;
  padding-left: 15px;
  padding-top: 20px;
  border-radius: 35px;
  width: 130px;
  height: 130px;
}
.img_centro {
  order: 2;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  width: 500px;
  height: 400px;
  border-radius: 35px;
}
.text-column {
  text-align: left;
  font-size: 10px;
}
.rightcolumn {
  order: 3;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
.price {
  color: rgb(255, 89, 0);
}

#destinationSearchBtn {
  height: 36px;
  background-color: rgb(255, 89, 0);
  color: white;
  font-weight: bold;
  border-color: white;
  border-width: 3px;
}
</style>
