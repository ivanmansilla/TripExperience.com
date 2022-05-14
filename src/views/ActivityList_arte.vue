<template>
  <div class="title1">
    <NavBar />
    <h1>Actividades de arte</h1>
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
        titl="Museo del Oro Precolombino"
        parrafo="Este museo se encuentra bajo una de las plazas principales 
        de la ciudad al lado del teatro nacional, en el centro de la ciudad. 
        Tiene una buena colección de objetos, que permite conocer la historia
        del país y de la importancia del oro en las culturas de la región. 
        El montaje del museo es bueno y vale la pena visitarlo, aún cuando la entrada sea algo elevada."
        precio="40€"
      /><br />
      <ActivityOverview
        titl="Museo del Jade"
        parrafo="  El Museo de jade es un extraordinario museo dedicado a dar a conocer la cultura, 
        costumbres y actividades precolombinas, resaltan las diferentes tribus que poblaban Costa Rica.
         Muy bien montado, con muchas posibilidades de interactuar y una extraordinaria colección de piezas 
         de jade y de elaboraciones en barro y piedra. Es una muy recomendable visita en San José."
        precio="50€"
      /><br />
      <ActivityOverview
        titl="Chorotega Arts and Crafts"
        parrafo="Excelentes piezas las que Marcelo realiza día a día para mantener la tradición. 
        Se toma su tiempo para explicar el proceso de manera super cálida y con mucha pasión. 
        Su atención es destacable, como sus piezas de arte! "
        precio="0€"
      /><br />
      <ActivityOverview
        titl="Museo de Arte Costarricense"
        parrafo="El Museo se encuentra en La Sabana, en el antiguo Aeropuerto
         La Sabana. Exhibe diferentes exposiciones de arte, donde se muestra la 
         calidad de artistas que trabajan en el país. El museo tiene un Salón Dorado,
          antiguo salón diplomático del aeropuerto y ¡ëspectacular! El lugar es pequeño, 
          pero vale la pena su visita. La entrada es gratuita."
        precio="0€"
      /><br />
      <ActivityOverview
        titl="Galeria Namu"
        parrafo="Tienda que reúne y muestra una gran cantidad de
         trabajos provenientes de diferentes culturas de la region, formada por 
         un par de emprendedores de máscaras de la region Huetar beneficiados 
         por la tienda y se acerca a un comercio justo con un gran sentido de pertenencia. "
        precio="10€"
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
