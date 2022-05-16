<template>
  <div class="slidecontainer">
    <div class="titlefiltres">
      <h2>Filtros</h2>
    </div>
    <input
      type="text"
      class="form-control"
      id="inputDestination"
      placeholder="Búsqueda general"
    />

    <select name="paises" class="paises">
      <option value="Costa Rica">Costa Rica</option>
      <option value="Madagascar">Madagascar</option>
    </select>
    <div class="price-row">
      <body>
        <p>Precio(€)</p>
      </body>
      <input
        type="range"
        min="10"
        max="300"
        value="300"
        class="slider"
        id="myRange"
      />
      <p>0-300</p>
    </div>
    <div class="checkboxes">
      <body>
        <p>Duración</p>
      </body>
      <label><input type="checkbox" /> <span>Hasta 2h</span></label>
      <label><input type="checkbox" /> <span>2-4h</span></label>
      <label><input type="checkbox" /> <span>4-8h</span></label>
      <label><input type="checkbox" /> <span>más de 8h</span></label>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityFilter",
};
</script>
<style>
.titlefiltres {
  color: rgb(255, 110, 0);
}
#inputDestination {
  margin: 5%;
  border-width: 0px;
  border-radius: 1px;
  height: 20px;
  width: 160px;
}
#inputDestination:hover {
  border-width: 2px;
  border-color: rgb(255, 110, 0);
}
.paises {
  margin: 5%;
  border-width: 0px;
  border-radius: 1px;
}
.paises:hover {
  border-width: 2px;
  border-color: rgb(255, 110, 0);
}
.slidecontainer {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: stretch;
  border-radius: 15px;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fffcb7;
}
.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: rgb(255, 50, 0);
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: rgb(255, 50, 0);
  cursor: pointer;
}
.checkboxes label {
  display: inline-block;
  padding-right: 30px;
  padding-left: 30px;
  white-space: nowrap;
}
.checkboxes input {
  vertical-align: left;
}
.checkboxes label span {
  vertical-align: left;
}
</style>
