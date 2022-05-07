<template>
  <div class="title1">
    <h1>Los posts con mas likes de Madagascar</h1>
  </div>
  <div class="components">
    <div class="list">
      <DestinationBlogs
        tit="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experiencia que jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs
        tit="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experiencia que jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs
        photo="../assets/para4.jpg"
        tit="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experienciaque jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs
        tit="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experienciaque jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor="Escrito por Ferran Ferrero"
      /><br />
      <DestinationBlogs
        tit="&nbsp;&nbsp;PARACAIDAS, &nbsp;UNA EXPERIENCIA INOLVIDABLE"
        parraf="Os cuento el dia que me tire con paracaidas en Madagascar, una
          experiencia que jamás voy a olvidar y... ¡cuidado! ¡Os advierto
          que cuando
          lo leais os entraran ganas de vivirla!!"
        autor="Escrito por Ferran Ferrero"
      /><br />
    </div>
  </div>
</template>

<script>
import DestinationBlogs from "@/components/DestinationBlogs.vue";

export default {
  name: "destinationBlogs",
  components: {
    DestinationBlogs,
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
