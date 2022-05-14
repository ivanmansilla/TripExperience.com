<template>
  <nav id="NavBar">
    <router-link id="NavBarItem" to="/desti">Recomendaciones</router-link>
    <router-link id="NavBarItem" to="/arquitectura">Arquitectura</router-link>
    <router-link id="NavBarItem" to="/naturaleza">Naturaleza</router-link>
    <router-link id="NavBarItem" to="/arte_cultura">Arte y Cultura</router-link>
    <router-link id="NavBarItem" to="/gastronomia">Gastronomía</router-link>
    <router-link id="NavBarItem" to="/ocio_nocturno">Ocio Nocturno</router-link>
    <router-link id="NavBarItem" to="/familia">En familia</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
#NavBar {
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  height: 50px;
  list-style-type: none;
  margin-left: 5%;
  margin-right: 5%;
  padding: 0;
  background-color: #fffcb7;
}
#NavBar a.router-link-exact-active {
  background-color: rgb(255, 110, 0);
  color: white;
  border-radius: 10px;
}

#NavBarItem {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  float: left;
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
