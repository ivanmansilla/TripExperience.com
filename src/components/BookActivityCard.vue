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
            Reservar actividad
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
          <section class="contenedor">
            <button type="" class="btn_reaccion">
              <span>Valora la actividad</span>
              <div class="reacciones">
                <div class="reaccion">
                  <i>❤️</i>
                  <span>Favorito</span>
                </div>
                <div class="reaccion">
                  <i>👍</i>
                  <span>Me gusta</span>
                </div>
                <div class="reaccion">
                  <i>👎</i>
                  <span>No me gusta</span>
                </div>
              </div>
            </button>
          </section>
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
.contenedor {
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
}

.btn_reaccion {
  display: inline-flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -o-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 10px;
  border: none;
  background: rgb(255, 110, 0);
  border-radius: 8px;
  cursor: pointer;
}
.btn_reaccion > span {
  color: #fff;
}

.btn_reaccion .reacciones {
  display: flex;
  position: absolute;
  bottom: calc(100% + 10px);
  background-color: #d4e4ff;
  padding: 5px;
  border-radius: 5rem;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  -webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  -o-transform: translateY(15px);
  transform: translateY(15px);
}
.btn_reaccion:hover .reacciones {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.btn_reaccion .reacciones::before {
  content: "";
  display: block;
  border-style: solid;
  border-color: transparent;
  border-width: 12px 12px 12px 12px;
  border-top-color: #d4e4ff;
  position: absolute;
  bottom: -24px;
  left: calc(50% - 12px);
}

.btn_reaccion .reaccion {
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: #fff;
  border-radius: 5rem;
  -webkit-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
}
.btn_reaccion .reaccion + .reaccion {
  margin-left: 5px;
}
.btn_reaccion .reaccion i {
  font-size: 1.3rem;
}
.btn_reaccion .reaccion > span {
  display: block;
  width: auto;
  font-size: 0.9em;
  position: absolute;
  top: -1.5rem;
  font-weight: bold;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  color: #333;
  -webkit-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  -webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  -o-transform: translateY(15px);
  transform: translateY(15px);
}
.btn_reaccion .reaccion:nth-child(1):hover > span,
.btn_reaccion .reaccion:nth-child(2):hover > span,
.btn_reaccion .reaccion:nth-child(3):hover > span,
.btn_reaccion .reaccion:nth-child(4):hover > span,
.btn_reaccion .reaccion:nth-child(5):hover > span {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.btn_reaccion .reaccion:nth-child(1):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(2):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(3):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(4):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(5):hover {
  background-color: orangered;
  color: black;
}

/* animacion salto */
.btn_reaccion .reaccion:hover {
  -webkit-animation-duration: 500ms;
  -o-animation-duration: 500ms;
  animation-duration: 500ms;
  -webkit-animation-timing-function: ease-out;
  -o-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-name: saltar;
  -o-animation-name: saltar;
  animation-name: saltar;
}
@keyframes saltar {
  from {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  to {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
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
