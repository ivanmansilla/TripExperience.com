<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column" style="text-align: left">
        <h3 class="title">POST USUARIO</h3>
        <body>
          <div class="column">
            <img
              class="profile-picture"
              src="../assets/JuanCarlos.jpg"
              align="right"
            />
          </div>
        </body>
        <br />
        <div class="column" style="text-align: centre">
          <br /><br />
          JUAN CARLOS
          <br /><br />
          32 AÑOS, VALENCIA
          <br /><br />
          Viaje a las Islas Canarias
        </div>
        <div class="column" style="text-align: left">
          <br />
          <h3>Fotos de la experiencia realizada:</h3>
          <img class="photo-column" src="../assets/subm1.jpg" align="left" />
          <br />
          <br />
          <img class="photo-column" src="../assets/subm2.jpg" align="left" />
        </div>
        <br />
      </div>
    </div>
    <div class="text-blog">
      <h2>UN DIA HACIENDO SUBMARINISMO</h2>
      <p>
        Acabo de estar unos días en Lanzarote sacándome el Open Water y he de
        decir, si es que aún no te has lanzado, que bucear ha sido una de las
        experiencias más impresionantes de mi vida. Y lo malo del asunto es que
        no hay palabras, ni fotos, ni vídeos ni relatos de los mayores expertos
        que puedan ayudarte a hacer una idea de lo que se puede sentir mientras
        estas bajo el agua, hay que vivirlo. Y sobretodo si es posible hay que
        vivirlo en mar abierto, porque las prácticas/bautizos en aguas
        confinadas (que son imprescindibles para aprender a hacer todos los
        ejercicios con confianza y seguridad) no transmiten la sensación de
        buceo en mar, por mucha profundidad que tenga la piscina.<br /><br />He
        de reconocer que comencé el curso con algo de nervios y dudas de si me
        sentiría seguro respirando por el regulador a 18 metros de profundidad
        en el mar, porque no nos engañemos, es un deporte tremedamente técnico
        además de peligroso si no se realiza el entrenamiento y la formación
        teórica de manera rigurosa. Hay que estudiar un buen puñado de conceptos
        y técnicas, además de practicar las posibles situaciones en piscina y
        mar abierto antes de comenzar a explorar el fondo marino, siempre en
        compañía (el buceo nunca de realiza de manera individual).<br /><br />En
        nuestro caso ha sido un proceso de unos dos meses con la teoría (te vas
        leyendo capítulos del libro a ratos, también viene un DVD con vídeos), 2
        días de prácticas en piscina y 3 días en mar abierto a tope. Los dos
        primeros días en mar desde playa y practicando ejercicios, sobretodo
        temas como la ecualización de oídos y la flotabilidad neutra, la famosa
        "ingravidez" bajo el agua. Y el tercer día ya dos inmersiones desde
        barco haciendo una inmersión totalmente normal para disfrutar. Examen
        final de 50 preguntas que solo con haberte leído el libro has de poder
        aprobar.<br /><br />El precio no es caro para el servicio que dan los
        centros e instructores (yo he hecho certificación PADI), la atención es
        muy personalizada en este deporte, y el material que manejas es bastante
        caro. No vale la pena comprarse nada más que aletas, escarpines y
        gafas+snorkel hasta que te saques el curso y compruebes que va contigo.
        Nosotros ya tenemos claro que sí, por lo que ya estamos mirando las
        próximas inmersiones que vamos a hacer en la Costa Brava este verano.<br /><br />
        En resumen, una experiencia genial, recomiendo a todos los usuarios a
        realizar algo parecido si tienen la oportunidad!.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogView",
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
