<template>
  <ul class="headerContainer">
    <router-link class="logo" to="/">
      <img class="logo" src="../assets/Triplogo.png"
    /></router-link>
    <router-link to="/about"
      ><li class="headerItem"><a> Ayuda </a></li>
    </router-link>
    <select id="LanguageSelection" class="form-select">
      <option selected>🇪🇸Español</option>
      <option>🇬🇧English</option>
    </select>
    <li class="headerItem">
      <a> Iniciar Sesión </a>
    </li>
    <button id="SignInButton" type="submit" class="btn btn-primary">
      Registrarse
    </button>
  </ul>
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
  <router-view />
</template>

<script>
export default {};
</script>

<style>
.logo {
  margin-right: auto;
}
.headerContainer {
  list-style: none;
  display: flex;
}
.headerItem {
  padding-right: 10px;
  padding-left: 10px;
}
.headerItem a {
  color: orange;
}
.headerItem a:hover {
  color: orangered;
}
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
#LanguageSelection {
  height: 25px;
  color: orange;
  border-color: orange;
}

#LanguageSelection:hover {
  color: orangered;
}

#SignInButton {
  background-color: orange;
  color: white;
  height: 25px;
}
</style>
