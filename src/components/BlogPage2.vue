<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column" style="text-align: left">
        <h3 class="title">POST USUARIO</h3>
        <body>
          <div class="column">
            <img
              class="profile-picture"
              src="../assets/AlexiaPutellas.jpg"
              align="right"
            />
          </div>
        </body>
        <br />
        <div class="column" style="text-align: centre">
          <br /><br />
          ALEXIA PUTELLAS
          <br /><br />
          27 AÑOS, SANTIAGO
          <br /><br />
          Primer trekking a "El Morado"
        </div>
        <div class="column" style="text-align: left">
          <br />
          <h3>Fotos de la experiencia realizada:</h3>
          <img class="photo-column" src="../assets/trek1.jpg" align="left" />
          <br />
          <br />
          <img class="photo-column" src="../assets/trek2.jpg" align="left" />
          <br />
          <br />
          <img class="photo-column" src="../assets/trek3.jpg" align="left" />
        </div>
        <br />
      </div>
    </div>
    <div class="text-blog">
      <h2>MI PRIMER TREKKING "EL MORADO"</h2>
      <p>
        Un día en una típica reunión de amigas....decidimos probar suerte
        haciendo trekking por primera vez. Me pareció una gran idea estar al
        aire libre y embarcarme en esta aventura. Nos informamos en
        TripExperience viendo y leyendo otras experiencias sobre gente que ha
        hecho trekking anteriormente y tomamos la decisión de recorrer El
        Morado, una de las mejoras rutas para practicar cerca de Santiago.<br /><br />No
        hicimos más preparativos que tener los bastones y ropa adecuada según
        nosotras y la reserva en la web, más lo necesario para alimentarnos por
        el dia, pero como siempre, una de las características que tenemos las
        mujeres es llevar cosas "por si las necesitamos"... Una vez llegando a
        destino nos dimos cuenta lo que llevamos demás y lo que nos hizo falta.
        <br /><br />Bien, salimos de Santiago en auto a las 7 AM hacia Baños
        Morales. Desde allí dejamos el vehículo y comenzamos a subir. Primero se
        debe registrar en la caseta de la Conaf todo aquél que subirá, y pagar
        la suma de $2.500 CPL. Luego de la caseta, comienza la excursión con una
        caminata de subida relativamente pesada de 1.5 kms. Después el camino se
        siente más plano y es más fácil proseguir. Nuestro grupo hizo dos
        descansos en esa subida. Obviamente los experimentados que veíamos pasar
        por nuestro lado recorrían en forma liviana y graciosa el camino porque
        ya habían subido otras veces. Durante el recorrido hay vistas preciosas
        y tres lugares que son los destinos obligados: El primero es Aguas de
        Panimávida, luego la laguna Morales y por último el Glaciar San
        Francisco. <br /><br />Seguimos subiendo y paramos varias veces a tomar
        fotografías de los lugares, que tiene vistas muy lindas. Cuando habíamos
        pasado una dos horas recorriendo hicimos un aro para comer una barra
        cereal....pues nuestras energías habían bajado considerablemente.
        Decidimos en ese momento que pararíamos para almorzar cuando llegáramos
        a la primera parada: Aguas de Panimávida. A los pocos minutos,
        continuamos el ascenso, siempre fotografiando lugares, vegetación y en
        algún momento parte de la fauna, principalmente aves que nos acompañaron
        en el camino. Finalmente y luego de unas 3,5 horas de caminata, llegamos
        a Aguas de Panimávida.<br /><br />
        Estábamos a más de 3.000 metros de altura y no podíamos creerlo. ¡Era
        nuestra primera aventura y lo habíamos logrado! Comenzamos a revisar el
        lugar hasta que dimos con el origen del nombre del lugar, no sin antes,
        quedar todas mojadas porque accidentalmente y fruto de nuestra
        curiosidad fuimos a dar justo encima del terreno lodoso que hay en ese
        lugar. Un sector de tierra rojiza, que es el preciso lugar donde bulle
        el agua mineral desde lo profundo de la tierra. Como llevamos una
        cocinilla, preparamos café para calentar el cuerpo y decidimos almorzar,
        por lo que salimos del camino y buscamos un lugar donde sentarnos.<br /><br />Cuando
        estábamos por terminar nuestro almuerzo y descanso, ya pensando en
        proseguir...¡¡comenzó a nevar !! Recordé que tengo ganas de hacer
        trekking en Torres del Paine. Pero en ese preciso momento debimos
        suspender nuestra aventura. No íbamos preparadas para la nieve y nos
        faltaban al menos unas 3 a 4 horas más de ascenso. Decidimos comenzar la
        huida (léase descenso) no sin antes agradecer por haber llegado hasta
        ese lugar. Nos prometimos que subiríamos una vez más y esta vez iríamos
        mejor preparadas para este tipo de sorpresas.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogView2",
};
</script>
<style scoped>
.container-card {
  height: auto;
  justify-content: first baseline;
  display: flex;
  border-radius: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.text-column {
  padding-left: 30px;
  float: centre;
  text-align: centre;
}
.text-top {
  padding-top: 100px;
  padding-right: 05px;
  text-align: left;
}
.text-blog {
  width: 50%;
  margin: 20px auto;
  padding: 15px;
}
.column {
  float: left;
  padding-left: 20px;
}
.photo-column {
  float: left;
  padding-left: 20px;
  width: 300px;
  height: 200px;
}
.profile-picture {
  padding-top: 20px;
  border-radius: 10px;
  float: left;
  margin-left: 10px;
  width: 200px;
  height: 200px;
}
#inputDestination {
  width: 300px;
  height: 30px;
}

#destinationSearchBtn {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
}

#destinationSearchBtn:hover {
  background-color: rgb(255, 50, 0);
}
</style>
