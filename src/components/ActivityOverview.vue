<template>
  <div class="container-card">
    <div class="columnpicture">
      <router-link to="/book_activity">
        <img id="myImg" src="../assets/cabaña_inicio.jpg" />
      </router-link>
    </div>
    <div class="text-column">
      <h2 class="title">{{ titl }}</h2>
      <body>
        <p class="paragraph">{{ parrafo }}</p>
      </body>
      <br />
    </div>
    <div class="rightcolumn">
      <body>
        <p>
          <b>desde </b>
          <br /><span class="price">{{ precio }}</span> <br />
          <b>por persona </b>
        </p>
      </body>
      <router-link to="/book_activity">
        <button id="destinationSearchBtn" type="submit" class="btn">
          Informacion/Valorar
        </button>
      </router-link>
      <p>
        93
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <!-- Use an element to toggle between a like/dislike icon -->
        <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityOverview",
  props: {
    titl: String,
    parrafo: String,
    precio: String,
    filename: String,
  },
};
</script>
<style scoped>
.container-card {
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  border-radius: 15px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
  padding-top: 5px;
}

.title {
  color: rgb(255, 110, 0);
  font-weight: bold;
}

.container-card:hover .title {
  color: rgb(255, 50, 0);
  font-style: bold;
}
.container-card:hover {
  box-shadow: 2px 2px 8px 8px lightgray;
}
.columnpicture {
  order: 1;
}
.text-column {
  order: 2;
  text-align: left;
  font-size: 10px;
  width: 500px;
  padding-left: 20px;
}
#myImg {
  margin-top: 10%;
  margin-left: 5%;
  border-radius: 5px;
  width: 75%;
  height: 75%;
}

.columnpicture:hover #myImg {
  opacity: 0.7;
}
.rightcolumn {
  order: 3;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  padding-right: 5%;
}
.price {
  color: rgb(255, 50, 0);
  font-size: 200%;
  font-weight: bold;
}

#destinationSearchBtn {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
}

#destinationSearchBtn:hover {
  background-color: rgb(255, 50, 0);
}
p {
  background-color: #fffcb7;
}
body {
  font-size: 12px;
  font-weight: auto;
}
</style>
