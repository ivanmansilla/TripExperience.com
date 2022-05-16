<template>
  <div class="title1">
    <nav-bar-lluis
      style="margin-left: 10%; margin-right: 10%; border-radius: 15px"
    ></nav-bar-lluis>
    <br />
    <br />
    <h1>Actividades en la naturaleza</h1>
    <br />
  </div>
  <label
    ><select id="Order" class="form-order">
      <option selected>Ordenar por</option>
      <option>Menor precio</option>
      <option>Mayor precio</option>
      <option>Mas visitadas</option>
      <option>Mejor valoradas</option>
    </select>
  </label>
  <div class="components">
    <div class="filter">
      <ActivityFilter />
    </div>
    <div class="list">
      <ActivityOverview
        titl="Excursión por la Selva"
        parrafo="Disfruta de la selva al puro estilo Amazónico.
          Un sitio del cual sin duda te enamorarás y te quedaras fascinado con lo que puedes 
          encontrar. Te encantará conocer la flora y la fauna del lugar"
        precio="40€"
      /><br />
      <ActivityOverview
        titl="Buceo en el arrecife"
        parrafo="  Te encantara bucear por el mar caribeño.
          Un espectáculo de colores bajo el mar donde podrás ver tiburones,
          peces de todo tipo, coral colorido, tortugas y mucho mas"
        precio="150€"
      /><br />
      <ActivityOverview
        titl="Rafting en el río"
        parrafo="Si te gusta la adrenalina ven a hacer ráfting.
        Probaras el descenso por el rio tucaton y no te arrepentiras.
        Algo tan fascinante que se tiene que hacer una vez en la vida"
        precio="80€"
      /><br />
      <ActivityOverview
        titl="Tour de flora y fauna"
        parrafo="Descubre las flores y los animales del país,
        acpmàñado de un guía experto en Biología, el doctor Miguelito
        Florecito"
        precio="300€"
      /><br />
      <ActivityOverview
        titl="Acampada en la playa"
        parrafo="Disfruta de la noche bajo las estrellas y al sonido
        de las olas del mar por este módico precio. Podrás disfrutar de 
        una cena caribeña y de una noche inolvidable"
        precio="120€"
      /><br />
    </div>
  </div>
</template>

<script>
import ActivityOverview from "@/components/ActivityOverview.vue";
import ActivityFilter from "@/components/ActivityFilter.vue";
import navBarLluis from "@/components/navBarLluis";

export default {
  name: "ActivityList",
  components: {
    ActivityOverview,
    ActivityFilter,
    navBarLluis,
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
  margin-top: 2%;
}
.form-order {
  border-width: 3px;
  border-radius: 5px;
}
.form-order:hover {
  border-color: rgb(255, 110, 0);
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
