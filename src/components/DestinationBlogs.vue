<template>
  <div class="container-card">
    <div class="columnpicture">
      <img class="activitypicture" src="../assets/para4.jpg" />
    </div>
    <div class="text-column">
      <h3 class="title">{{ tit }}</h3>
      <body>
        <h3 class="paragraph">{{ parraf }}</h3>
        <br />
        <h3 class="paragraph">{{ autor }}</h3>
      </body>
      <br />
    </div>
    <div class="rightcolumn">
      <body>
        <p>Lee aqui el post ⬇</p>
      </body>
      <router-link to="/blog">
        <button id="destiBlogBtn" type="submit" class="btn btn-primary">
          Post
        </button>
      </router-link>
      <br />
      <br />
      <body>
        <section class="contenedor">
          <button type="" class="btn_reaccion">
            <span>Reaccionar</span>
            <div class="reacciones">
              <div class="reaccion">
                <i>❤️</i>
                <span>Favorito</span>
              </div>
              <div class="reaccion">
                <i>👍</i>
                <span>Me gusta</span>
              </div>
              <div class="reaccion">
                <i>😮</i>
                <span>Sorprendido</span>
              </div>
              <div class="reaccion">
                <i>😂</i>
                <span>Me divierte</span>
              </div>
              <div class="reaccion">
                <i>😡</i>
                <span>Me enoja</span>
              </div>
            </div>
          </button>
        </section>
        <p>
          93
          <!-- Add icon library -->
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <!-- Use an element to toggle between a like/dislike icon -->
          <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
        </p>
      </body>
    </div>
  </div>
</template>
<script>
export default {
  name: "DestinationBlogs",
  props: {
    tit: String,
    parraf: String,
    autor: String,
  },
};
</script>
<style scoped>
.container-card {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  border-radius: 15px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
  padding-bottom: 15px;
  padding-left: 10px;
}
.contenedor {
  width: 100%;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
}

.btn_reaccion {
  display: inline-flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -o-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px 10px;
  border: none;
  background: linear-gradient(90deg, orange, orangered);
  border-radius: 8px;
  cursor: pointer;
}
.btn_reaccion > span {
  color: #fff;
}

.btn_reaccion .reacciones {
  display: flex;
  position: absolute;
  bottom: calc(100% + 10px);
  background-color: #d4e4ff;
  padding: 5px;
  border-radius: 5rem;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  -webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  -o-transform: translateY(15px);
  transform: translateY(15px);
}
.btn_reaccion:hover .reacciones {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.btn_reaccion .reacciones::before {
  content: "";
  display: block;
  border-style: solid;
  border-color: transparent;
  border-width: 12px 12px 12px 12px;
  border-top-color: #d4e4ff;
  position: absolute;
  bottom: -24px;
  left: calc(50% - 12px);
}

.btn_reaccion .reaccion {
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: #fff;
  border-radius: 5rem;
  -webkit-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
}
.btn_reaccion .reaccion + .reaccion {
  margin-left: 5px;
}
.btn_reaccion .reaccion i {
  font-size: 1.3rem;
}
.btn_reaccion .reaccion > span {
  display: block;
  width: auto;
  font-size: 0.9em;
  position: absolute;
  top: -1.5rem;
  font-weight: bold;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  color: #333;
  -webkit-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  -webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  -o-transform: translateY(15px);
  transform: translateY(15px);
}
.btn_reaccion .reaccion:nth-child(1):hover > span,
.btn_reaccion .reaccion:nth-child(2):hover > span,
.btn_reaccion .reaccion:nth-child(3):hover > span,
.btn_reaccion .reaccion:nth-child(4):hover > span,
.btn_reaccion .reaccion:nth-child(5):hover > span {
  opacity: 1;
  visibility: visible;
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.btn_reaccion .reaccion:nth-child(1):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(2):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(3):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(4):hover {
  background-color: orangered;
  color: black;
}
.btn_reaccion .reaccion:nth-child(5):hover {
  background-color: orangered;
  color: black;
}

/* animacion salto */
.btn_reaccion .reaccion:hover {
  -webkit-animation-duration: 500ms;
  -o-animation-duration: 500ms;
  animation-duration: 500ms;
  -webkit-animation-timing-function: ease-out;
  -o-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-name: saltar;
  -o-animation-name: saltar;
  animation-name: saltar;
}
@keyframes saltar {
  from {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -o-transform: translateY(-15px);
    transform: translateY(-15px);
  }
  to {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
.columnpicture {
  order: 1;
}
.text-column {
  order: 2;
  text-align: left;
  font-size: 11.5px;
}
.activitypicture {
  float: left;
  padding-top: 10px;
  border-radius: 15px;
  width: 130px;
  height: 130px;
}
.rightcolumn {
  order: 3;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}
.price {
  color: orangered;
}

#destiBlogBtn {
  height: 36px;
  background-color: rgb(255, 110, 0);
  color: white;
  font-weight: bold;
  border-width: 0px;
  outline: 0;
  border-radius: 12px;
}

#destiBlogBtn:hover {
  background-color: rgb(255, 50, 0);
}
</style>
