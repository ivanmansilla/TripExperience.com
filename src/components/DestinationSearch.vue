<template>
  <div class="container-card">
    <div class="row">
      <div class="text-column">
        <h3 class="title">¿Adónde vas?</h3>
        <body>
          Escribe aqui:
        </body>
        <br />
        <input
          type="text"
          class="form-control"
          id="inputDestination"
          placeholder="Destino"
        />
        <br />
        <br />
        <router-link to="/desti">
          <button
            id="destinationSearchBtn"
            type="submit"
            class="btn btn-primary"
          >
            Buscar
          </button>
        </router-link>
        <br />
        <br />
        <body>
          no sabes a donde ir?
        </body>
        <br />
        <router-link to="/desti">
          <button
            id="destinationSearchBtn"
            type="submit"
            class="btn btn-primary"
          >
            Recomiéndame
          </button>
        </router-link>
      </div>
      <div class="column">
        <img class="sunset" src="../assets/sunset.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "destinationPage",
};
</script>
<style scoped>
.container-card {
  height: auto;
  justify-content: first baseline;
  display: flex;
  border-radius: 15px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.text-column {
  padding-left: 30px;
  float: left;
  text-align: left;
  padding-top: 50px;
}
.column {
  float: right;
  padding-left: 20px;
}
.sunset {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 270px;
  width: 700px;
  height: 450px;
}

#inputDestination {
  width: 200px;
  height: 30px;
  border-width: 0px;
}

.form-control {
  border-radius: 10px;
}
#destinationSearchBtn {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
  cursor: pointer;
}

#destinationSearchBtn:hover {
  background-color: rgb(255, 50, 0);
}
</style>
