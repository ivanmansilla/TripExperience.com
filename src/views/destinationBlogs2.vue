<template>
  <div class="title1">
    <h1>Los posts con mas likes de Costa Rica</h1>
  </div>
  <div class="components">
    <div class="list">
      <DestinationBlogs2
        tit2="&nbsp;&nbsp;MI PRIMER TREKKING, &nbsp;'EL MORADO' "
        parraf2="Un día en una típica reunión de amigas....decidimos probar suerte
        haciendo trekking por primera vez. Me pareció una gran idea estar al
        aire libre y embarcarme en esta aventura. Nos informamos en
        TripExperience viendo y leyendo otras experiencias......"
        autor2="Escrito por Alexia Putellas"
      /><br />
      <DestinationBlogs2
        tit2="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf2="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experiencia que jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor2="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs2
        tit2="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf2="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experienciaque jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor2="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs2
        tit2="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf2="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experienciaque jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor2="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs2
        tit2="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf2="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experiencia que jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor2="Escrito por Ferran Ferrero"
      /><br />
    </div>
  </div>
</template>

<script>
import DestinationBlogs2 from "@/components/DestinationBlogs2.vue";

export default {
  name: "destinationBlogs2",
  components: {
    DestinationBlogs2,
  },
};
</script>

<style>
.title1 {
  color: rgb(255, 89, 0);
  font-size: 9px;
}
.components {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
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
