<template>
  <div class="title1">
    <h1>Reserva la actividad que buscas!</h1>
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
  font-size: 15px;
}
</style>
