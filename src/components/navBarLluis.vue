<template>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarNav"
      style="margin-right: auto; margin-left: auto; width: 100%"
    >
      <ul class="navbar-nav">
        <router-link id="NavBarItem" to="/general">General</router-link>
        <router-link id="NavBarItem" to="/desti">Recomendaciones</router-link>
        <router-link id="NavBarItem" to="/arquitectura"
          >Arquitectura</router-link
        >
        <router-link id="NavBarItem" to="/naturaleza">Naturaleza</router-link>
        <router-link id="NavBarItem" to="/arte_cultura"
          >Arte y Cultura</router-link
        >
        <router-link id="NavBarItem" to="/gastronomia">Gastronomía</router-link>
        <router-link id="NavBarItem" to="/ocio_nocturno"
          >Ocio Nocturno</router-link
        >
        <router-link id="NavBarItem" to="/familia">En familia</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "navBarLluis",
};
</script>

<style scoped>
.navbar {
  background-color: #fffcb7;
}

#navbarNav {
  justify-content: space-evenly;
}
#navbarNav a.router-link-exact-active {
  background-color: rgb(255, 110, 0);
  color: white;
  border-radius: 10px;
}

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
#NavBarItem:hover {
  color: rgb(255, 110, 0);
}
</style>
