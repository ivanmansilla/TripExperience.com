<template>
  <div class="container-card">
    <h2 class="title">
      Aventura de 3 días en la selva amazónica en Posada Amazonas
    </h2>
    <div class="first">
      <div class="columnpicture">
        <img
          class="img_columna"
          src="@/assets/puente_amz.jpg"
          alt=""
          id="l_img1"
          @click="enlarge('l_img1')"
        />
        <br />
        <img
          class="img_columna"
          src="@/assets/jardin_amz.jpg"
          alt=""
          id="l_img2"
          @click="enlarge('l_img2')"
        />
        <br />
        <img
          class="img_columna"
          src="@/assets/tucan_amz.jpg"
          alt=""
          id="l_img3"
          @click="enlarge('l_img3')"
        />
      </div>
      <div class="popup-img">
        <span @click="close">&times;</span>
        <img src="../assets/puente_amz.jpg" alt="" />
      </div>
      <div class="main_photo">
        <img
          class="img_centro"
          src="../assets/cabaña_inicio.jpg"
          id="big_img"
          @click="enlarge('big_img')"
        />
      </div>
      <div class="rightcolumn">
        <body>
          <p>
            Desde <span class="price"> 618,39 €</span> <br />
            por persona
          </p>
          <hr />
          <p>Seleccionar fecha y viajeros</p>
          <form action="https://example.com">
            <label>
              Introduce la fecha:<input
                class="fecha"
                type="date"
                name="fecha"
                minDate="2018-02-01"
                style="height: 18px"
              />
            </label>
          </form>
          <br />
          <label for="Número de viajeros">Número de viajeros:</label>
          <select name="viajeros" class="viajerosc">
            <option value="1 persona">1 persona</option>
            <option value="2 personas">2 personas</option>
            <option value="3 personas">3 personas</option>
            <option value="4 personas">4 personas</option>
            <option value="5 personas">5 personas</option>
            <option value="6 personas">6 personas</option>
            <option value="7 personas">7 personas</option>
            <option value="8 personas">8 personas</option>
          </select>
          <br />
          <button
            id="check_dispobility_button"
            type="submit"
            class="btn btn-primary"
          >
            Comprobar disponibilidad
          </button>
          <hr />
          <img class="img_emote1" src="../assets/medidas_seguridad.png" />
          <p class="details1">Medidas de seguridad</p>
          <img class="img_emote" src="../assets/reloj.png" />
          <p class="details">3 días (aprox.)</p>
          <img class="img_emote" src="../assets/coche.png" />
          <p class="details">Se ofrece recogida</p>
          <img class="img_emote" src="../assets/telefono.png" />
          <p class="details">Entrada para dispositivos móviles</p>
        </body>
      </div>
    </div>
    <div class="text-column">
      <body>
        <h2 class="title2">Descripción general</h2>
        <p class="description">
          Sumérjase en el increíble paisaje de la selva de Perú en una<br />
          excursión ecológica de varios días por el Amazonas. Navegue por<br />
          el agua desde Puerto Maldonado hasta llegar a Posada Amazonas <br />un
          espacioso hotel ecológico ubicado en el bosque tropical.
        </p>
      </body>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookActivityCard",
  methods: {
    enlarge(id_num) {
      document.querySelector(".popup-img img").src =
        document.getElementById(id_num).src;
      document.querySelector(".popup-img").style.display = "block";
    },
    close() {
      document.querySelector(".popup-img").style.display = "none";
    },
  },
};
</script>
<style scoped>
.first {
  display: flex;
}
.btn-primary {
  margin-top: 13px;
  margin-bottom: 8px;
  width: 200px;
}
.container-card {
  height: 740px;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  border-radius: 15px;
  width: 1050px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
  padding-top: 20px;
}
.img_emote1 {
  width: 22px;
  height: 22px;
  float: left;
  padding-top: 2.5px;
}
.img_emote {
  width: 22px;
  height: 22px;
  float: left;
}
.details {
  padding-top: 5px;
}
.fecha {
  margin-left: 10px;
  width: 110px;
}
.viajerosc {
  margin-left: 12px;
}
.title {
  padding-left: 30px;
  text-align: left;
  font-size: 20px;
}
.title2 {
  font-size: 20px;
}
.description {
  font-size: 15px;
  color: black;
}
.text-column {
  padding-left: 30px;
  padding-top: 15px;
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
  color: orangered;
}
.img_columna {
  order: 1;
  float: left;
  padding-left: 15px;
  padding-top: 20px;
  border-radius: 35px;
  width: 130px;
  height: 130px;
  object-fit: cover;
  transition: 0.2s linear;
  overflow: hidden;
  cursor: pointer;
}
.img_columna:hover {
  transform: scale(1.1);
}
.popup-img {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100%;
  z-index: 100;
  display: none;
}
.popup-img span {
  position: absolute;
  top: 0;
  right: 10;
  font-size: 40px;
  font-weight: bolder;
  color: #fff;
  cursor: pointer;
  z-index: 100;
}
.popup-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #fff;
  border-radius: 5px;
  width: 750px;
  object-fit: cover;
}
@media (max-width: 768px) {
  .popup-img img {
    width: 95%;
  }
}

.img_centro {
  order: 2;
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 20px;
  width: 550px;
  height: 425px;
  border-radius: 35px;
  object-fit: cover;
  transition: 0.2s linear;
  overflow: hidden;
  cursor: pointer;
}
.img_centro:hover {
  transform: scale(1.05);
}
#check_dispobility_button {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
}

#check_disponibility_button:hover {
  background-color: rgb(255, 50, 0);
}
</style>
