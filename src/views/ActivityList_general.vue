<template>
  <div class="title1">
    <nav-bar-lluis
      style="margin-left: 10%; margin-right: 10%; border-radius: 15px"
    ></nav-bar-lluis>
    <br />
    <br />
    <h1>Actividades en Costa Rica</h1>
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
        titl="Rafting en el río"
        parrafo="Si te gusta la adrenalina ven a hacer ráfting.
        Probaras el descenso por el rio tucaton y no te arrepentiras.
        Algo tan fascinante que se tiene que hacer una vez en la vida"
        precio="80€"
      /><br />
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
        titl="Tour de flora y fauna"
        parrafo="Descubre las flores y los animales del país,
        acpmàñado de un guía experto en Biología, el doctor Miguelito
        Florecito"
        precio="50€"
      /><br />
      <ActivityOverview
        titl="North Fields Cafe Tour"
        parrafo="El café aromático, la caña de azúcar dulce y el chocolate que se
         derrite en la boca son tres de las principales exportaciones agrícolas de 
         Costa Rica, y sus productos favoritos entre locales y visitantes. Conozca
          estos tres cultivos de primera mano en este tour de una granja familiar cerca 
          de La Fortuna. Vea cómo se crea el café del frijol a la taza, y luego pruebe 
          otros deliciosos cultivos junto con una guía."
        precio="40€"
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
