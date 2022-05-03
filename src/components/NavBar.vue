<template>
  <nav id="NavBar">
    <router-link id="NavBarItem" to="/arquitectura">Arquitectura</router-link>
    <router-link id="NavBarItem" to="/naturaleza">Naturaleza</router-link>
    <router-link id="NavBarItem" to="/arte_cultura">Arte y Cultura</router-link>
    <router-link id="NavBarItem" to="/gastronomia">Gastronomía</router-link>
    <router-link id="NavBarItem" to="/ocio_nocturno">Ocio Nocturno</router-link>
    <router-link id="NavBarItem" to="/familia">En familia</router-link>
    <router-link id="NavBarItem" to="/user_blogs"
      >Blogs de Usuarios</router-link
    >
  </nav>
</template>

<script>
export default {};
</script>

<style>
#NavBar {
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: orange;
}
#NavBar a.router-link-exact-active {
  color: orangered;
}
#NavBarItem {
  display: flex;
  justify-content: space-between;
  padding-top: 2px;
  float: left;
  font-size: 20px;
  padding-left: 10px;
}
</style>
