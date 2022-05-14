<template>
  <div class="title1">
    <NavBar />
    <h1>Actividades de arquitectura</h1>
  </div>
  <label
    ><select id="Order" class="form-order">
      <option selected>Mejor valoradas</option>
      <option>Menor precio</option>
      <option>Mayor precio</option>
      <option>Mas visitadas</option>
      <span>Ordenar por</span>
    </select>
  </label>
  <div class="components">
    <div class="filter">
      <ActivityFilter />
    </div>
    <div class="list">
      <ActivityOverview
        titl="Teatro Nacional Costa Rica"
        parrafo="Tanto Tío Leo como su esposa Cinty y todo el 
        personal son excelentes anfitriones. La infraestructura 
        muy linda y completa. El recorrido por el establecimiento
         es súmamente agradable e instructivo. La degustación de
          calidad. Altamente recomendable..."
        precio="40€"
        filename="../assets/teatroCR.jpg"
      /><br />
      <ActivityOverview
        titl="Buceo en el arrecife"
        parrafo="  Te encantara bucear por el mar caribeño.
          Un espectáculo de colores bajo el mar donde podrás ver tiburones,
          peces de todo tipo, coral colorido, tortugas y mucho mas"
        precio="150€"
        filename="../assets/trek1.jpg"
      /><br />
      <ActivityOverview
        titl="Rafting en el río"
        parrafo="Si te gusta la adrenalina ven a hacer ráfting.
        Probaras el descenso por el rio tucaton y no te arrepentiras.
        Algo tan fascinante que se tiene que hacer una vez en la vida"
        precio="80€"
        filename="trek1.jpg"
      /><br />
      <ActivityOverview
        titl="Tour de flora y fauna"
        parrafo="Descubre las flores y los animales del país,
        acpmàñado de un guía experto en Biología, el doctor Miguelito
        Florecito"
        precio="300€"
        filename="trek1.jpg"
      /><br />
      <ActivityOverview
        titl="Acampada en la playa"
        parrafo="Disfruta de la noche bajo las estrellas y al sonido
        de las olas del mar por este módico precio. Podrás disfrutar de 
        una cena caribeña y de una noche inolvidable"
        precio="120€"
        filename="trek1.jpg"
      /><br />
    </div>
  </div>
</template>

<script>
import ActivityOverview from "@/components/ActivityOverview.vue";
import ActivityFilter from "@/components/ActivityFilter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ActivityList",
  components: {
    ActivityOverview,
    ActivityFilter,
    NavBar,
  },
};
</script>

<style>
.title1 {
  color: rgb(255, 110, 0);
  font-size: 9px;
}

.components {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}
#Order {
  margin: 1%;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  float: right;
}
.filter {
  float: left;
  padding-right: 50px;
}
</style>
