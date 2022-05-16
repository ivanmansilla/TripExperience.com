<template>
  <div class="title1">
    <nav-bar-lluis
      style="margin-left: 10%; margin-right: 10%; border-radius: 15px"
    ></nav-bar-lluis>
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
        titl="Arenal Hanging Bridges Park"
        parrafo="Una de las experiencias más increíbles que podrás
         disfrutar. El recorrido por los puentes colgantes en medio de una 
         flora y fauna increíbles es para recomendar a todos los amantes del 
         medio ambiente y de la naturaleza "
        precio="60€"
        filename="../assets/trek1.jpg"
      /><br />
      <ActivityOverview
        titl="El Miro"
        parrafo="Fue difícil encontrarlo, ya que no existe señalización ni ruta en el mapa, sin embargo,
         le preguntamos a un lugareño y nos dio las pistas para encontrarlo. Hay que dejar el carro abajo y subir
          por otro medio. La cuesta es muy pronunciada, se puede entrar en bicicleta o caminando Llegamos al primer
           mirador y nos gustó mucho, la infraestructura es sorprendente."
        precio="0€"
        filename="trek1.jpg"
      /><br />
      <ActivityOverview
        titl="Marina Pez Vela"
        parrafo="Lugar hermoso para visitar en familia. Restaurantes 
        variados, tiendas y la belleza del mar y los yates.
        Imperdible si visita Quépos o Manuel Antonio"
        precio="30€"
        filename="trek1.jpg"
      /><br />
      <ActivityOverview
        titl="Basilisca Nuestra Sra. de los Ángeles"
        parrafo="La Basílica es un lugar de visita obligatoria si se quiere 
        conocer la cultura e historia de Costa Rica. La iglesia tiene una construcción 
        muy hermosa.  "
        precio="20€"
        filename="trek1.jpg"
      /><br />
    </div>
  </div>
</template>

<script>
import ActivityOverview from "@/components/ActivityOverview.vue";
import ActivityFilter from "@/components/ActivityFilter.vue";
import NavBarLluis from "@/components/navBarLluis";

export default {
  name: "ActivityList",
  components: {
    NavBarLluis,
    ActivityOverview,
    ActivityFilter,
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
