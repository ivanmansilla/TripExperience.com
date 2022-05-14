<template>
  <div class="title1">
    <NavBar />
    <h1>Ocio nocturno</h1>
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
        titl="Carpe Chepe"
        parrafo="El tour es muy agradable, conocí personas muy especiales, Amaral el guia es un parcero, 
        las bebidas muy buenas y los lugares excelentes. Definitivamente creo q lo volvería a hacer. 
        Recomendadas las hamburguesas de A dos manos"
        precio="30€"
      /><br />
      <ActivityOverview
        titl="Beach and Pool Crawl"
        parrafo="  Los chicos que organizan super buena onda y divertidos,
         todo el tiempo poniendo atencion a que todo salga bien y cuidando de todos.
         Muy recomendable, mucho sol, playa, piscinas y alcohol. No se que mas puede pedir uno! Aguante el Sunday Funday carajo!"
        precio="50€"
      /><br />
      <ActivityOverview
        titl="The Crazy Monkey Bar"
        parrafo="El Crazy Monkey es un bar restaurante con piscina que puede ser utilizada
         (siempre y cuando se este consumiendo) y es complemento del hotel Best Western. 
         Se encuentra en una colina por lo que la vista es excelente, ademas, posee parqueo seguro. 
         La piscina posee buen espacio y es propicia para nadar en la zona honda (3 metros de profundidad) 
         o para hacer clavados."
        precio="20€"
      /><br />
      <ActivityOverview
        titl="Casino Columbus Platinum"
        parrafo="Lugar ideal par pasar un rato agradable, 
        el lugar funciona como tipo sport bar donde puedes ver deportes 
        y a la vez bailar y disfrutar de bebidas."
        precio="0€"
      /><br />
      <ActivityOverview
        titl="Casino Fiesta"
        parrafo="Casinos Fiesta están ubicados en diferentes lugares para acercarse cómodamente,
         buenos y seguros parqueos, un lugar especial para disfrutar del juego con amigos, en pareja...
         y con un poco de suerte salir más que satisfecho."
        precio="0€"
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
