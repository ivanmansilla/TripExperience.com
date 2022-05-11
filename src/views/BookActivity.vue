<template>
  <div class="title1">
    <h1 id="Title">Reserva la actividad que buscas!</h1>
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
#Title {
  color: orange;
}
.title1 {
  color: black;
  font-size: 12px;
}
</style>
