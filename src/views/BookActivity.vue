<template>
  <div class="title1">
    <h1>Reserva la actividad que buscas!</h1>
    <div class="components">
      <div class="BookAactivityCard">
        <BookActivityCard />
      </div>
    </div>
    <br />
    <div class="components">
      <div class="BookAactivityCard">
        <BookActivityCard />
      </div>
    </div>
    <br />
    <div class="components">
      <div class="BookAactivityCard">
        <BookActivityCard />
      </div>
    </div>
  </div>
</template>

<script>
import BookActivityCard from "@/components/BookActivityCard.vue";

export default {
  name: "BookActivity",
  components: {
    BookActivityCard,
  },
};
</script>

<style>
.title1 {
  color: rgb(255, 89, 0);
  font-size: 9px;
}
.components {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  float: right;
}
.filter {
  float: left;
  padding-right: 50px;
}
</style>
