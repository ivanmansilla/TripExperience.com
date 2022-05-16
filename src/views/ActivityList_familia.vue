<template>
  <div class="title1">
    <nav-bar-lluis
      style="margin-left: 10%; margin-right: 10%; border-radius: 15px"
    ></nav-bar-lluis>
    <br />
    <br />
    <h1>Actividades en familia</h1>
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
        titl="Royal Butterflies"
        parrafo="No se lo pueden perder! Sobre todo si vienen con niños. 
        Dan es un anfitrión increíble y explica todo con sumo detalle. 
        Es un apasionado de lo que hace. Súper recomendable!"
        precio="50€"
      /><br />
      <ActivityOverview
        titl="Ponderosa Adventure Park"
        parrafo="Una experiencia inolvidable, los animales son impresionantes,
         el poder interactuar con ellos es mágico más sabiendo que son animales 
         que no son comunes ver en este continente."
        precio="30€"
      /><br />
      <ActivityOverview
        titl="Refugio Animal de Costa Rica"
        parrafo="El lugar es súper completo. El biólogo, dueño y fundador del Refugio
         don Rodolfo es un excelente guía, profesor y sobre todo se nota que es una
          persona honesta y servicial; no solo por su carisma y personalidad, sino que
           también irradia pasión y amor por los animales y su trabajo. De verdad que hace una muy 
           buena labor. En este Refugio son muy responsables y los animales que tienen están bien cuidados, es de admirar."
        precio="0€"
      /><br />
      <ActivityOverview
        titl="Tour de flora y fauna"
        parrafo="Descubre las flores y los animales del país,
        acpmàñado de un guía experto en Biología, el doctor Miguelito
        Florecito"
        precio="50€"
      /><br />
      <ActivityOverview
        titl="The Bat Jungle"
        parrafo="Es un lugar que te enseña prácticamente todo sobre los murciélagos y tienen muchos tipos de murciélagos. la hospitalidad excelente.
        También hay un restaurante."
        precio="20€"
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
