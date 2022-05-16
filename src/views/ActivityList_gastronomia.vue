<template>
  <div class="title1">
    <nav-bar-lluis
      style="margin-left: 10%; margin-right: 10%; border-radius: 15px"
    ></nav-bar-lluis>
    <br />
    <br />
    <h1>Restaurantes y gastronomia</h1>
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
        titl="North Fields Cafe Tour"
        parrafo="El café aromático, la caña de azúcar dulce y el chocolate que se
         derrite en la boca son tres de las principales exportaciones agrícolas de 
         Costa Rica, y sus productos favoritos entre locales y visitantes. Conozca
          estos tres cultivos de primera mano en este tour de una granja familiar cerca 
          de La Fortuna. Vea cómo se crea el café del frijol a la taza, y luego pruebe 
          otros deliciosos cultivos junto con una guía."
        precio="40€"
      /><br />
      <ActivityOverview
        titl="San José de Noche"
        parrafo=" Elimine el estrés de comer y beber por la noche en una nueva ciudad 
        con esta divertida experiencia de cena y vida nocturna. Explore los mercados, 
        eche un vistazo a los barrios que de otro modo se perdería y disfrute de una 
        deliciosa cena gourmet de tres platos con maridaje de vinos. Aprenda sobre la
         comida y la cultura local con su guía durante toda la noche."
        precio="30€"
      /><br />
      <ActivityOverview
        titl="Bites and Sights: recorrido gastronómico"
        parrafo="Pruebe una amplia variedad de sabores costarricenses mientras aprende 
        sobre el patrimonio cultural del país con este recorrido a pie por San José. 
        Comprará frutas y verduras en el Mercado Central y el Mercado Borbón, visitará
         el Teatro Nacional y La Laguna Plaza, y probará todo tipo de delicias locales en el camino."
        precio="35€"
      /><br />
      <ActivityOverview
        titl="Chocolate Tour Manuel Antonio"
        parrafo="Las exuberantes selvas de Costa Rica han sido durante mucho tiempo un área
         notable para cultivar cultivos comerciales como café, chocolate y caña de azúcar. 
         En esta experiencia privada, visite una plantación en Manuel Antonio y aprenda cómo 
         se producen estos tres cultivos."
        precio="60€"
      /><br />
      <ActivityOverview
        titl="Tour de chocolate Don Olivo"
        parrafo="El tour Don Olivo Chocolate es la mejor manera de saber, de dónde provienen los 
        mejores productos de Costa Rica, incluyendo el mejor tipo de Chocolate del mundo, café (opcional), 
        frutas tropicales, especias, como vainilla, ron, caña de azúcar, tenemos una finca de chocolate de 
        1600 árboles donde producimos Chocolate orgánico desde hace 96 años cacao criollo! Ven y disfruta de los sabores"
        precio="70€"
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
