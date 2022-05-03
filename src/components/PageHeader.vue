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
  <router-view />
</template>

<script>
export default {};
</script>

<style scoped>
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
  border-color: white;
  height: 25px;
}
</style>
