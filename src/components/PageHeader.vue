<template>
  <ul class="headerContainer">
    <router-link to="/"
      ><img class="logo" src="../assets/Triplogo.png"
    /></router-link>
    <router-link to="/about"
      ><li class="headerItem"><a> Ayuda </a></li></router-link
    >
    <li class="headerItem"><a href="https://www.google.com"> Idioma </a></li>
    <li class="headerItem">
      <a href="https://www.google.com"> Iniciar Sesion </a>
    </li>
  </ul>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
.logo {
  margin-right: auto;
  padding-left: 0px;
}
.headerContainer {
  list-style: none;
  display: flex;
}
.headerItem {
  padding-right: 10px;
  padding-top: 20px;
}
.headerItem a {
  color: orange;
}
.headerItem a:hover {
  color: orangered;
}
</style>
