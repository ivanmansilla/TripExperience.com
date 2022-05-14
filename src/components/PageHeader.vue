<template>
  <ul class="headerContainer">
    <router-link class="logo" to="/">
      <img class="logo" src="../assets/Triplogo.png"
    /></router-link>
    <li class="headerItem"><a> Ayuda </a></li>
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
  color: rgb(255, 110, 0);
}
.headerItem a:hover {
  color: rgb(255, 50, 0);
}
#LanguageSelection {
  height: 25px;
  color: rgb(255, 110, 0);
  border-color: rgb(255, 110, 0);
}

#LanguageSelection:hover {
  color: rgb(255, 70, 0);
}

#SignInButton {
  background-color: rgb(255, 110, 0);
  color: white;
  border-radius: 5px;
  border-width: 0px;
  height: 25px;
}
#SignInButton:hover {
  background-color: rgb(255, 50, 0);
}
</style>
