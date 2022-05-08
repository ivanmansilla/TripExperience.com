<template>
  <div class="container-card">
    <h2 class="title">Excursión por el Amazonas</h2>
    <div class="first">
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
      <div class="rightcolumn">
        <body>
          <p>
            Desde <span class="price"> 618,39 €</span> <br />
            por persona
          </p>
          <hr />
          <p>Seleccionar fecha y viajeros</p>
          <input
            type="text"
            style="height: 25px"
            class="form-control"
            id="inputDestination"
            placeholder="Lunes 9 de mayo de 2022"
          />
          <br />
          <input
            type="text"
            style="height: 25px"
            class="form-control2"
            id="inputDestination"
            placeholder="2 adultos"
          />
          <router-link to="/desti">
            <button
              id="destinationSearchBtn"
              type="submit"
              class="btn btn-primary"
            >
              Comprobar disponibilidad
            </button>
          </router-link>
        </body>
      </div>
    </div>
    <div class="text-column">
      <body>
        <h2 class="title">Descripción general</h2>
        <p class="description">
          Sumérjase en el increíble paisaje de la selva de Perú en una<br />
          excursión ecológica de varios días por el Amazonas. Navegue por<br />
          el agua desde Puerto Maldonado hasta llegar a Posada Amazonas un<br />
          espacioso hotel ecológico ubicado <br />en el bosque tropical.
        </p>
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
.first {
  display: flex;
}
.btn-primary {
  margin-top: 5px;
  width: 200px;
}
.container-card {
  height: 700px;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius: 15px;
  width: 1000px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.form-control2 {
  margin-top: 10px;
}
.title {
  padding-left: 10px;
  text-align: left;
  font-size: 20px;
}
.description {
  padding-left: 10px;
  font-size: 15px;
}
.img_columna {
  order: 1;
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
  padding-right: 20px;
  padding-top: 20px;
  width: 550px;
  height: 425px;
  border-radius: 35px;
}
.text-column {
  padding-top: 10px;
  text-align: left;
  font-size: 10px;
}
.rightcolumn {
  order: 3;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
}
.price {
  color: orange;
}

#destinationSearchBtn {
  height: 36px;
  background-color: orange;
  color: white;
  font-weight: bold;
  border-color: white;
  border-width: 3px;
}
</style>
