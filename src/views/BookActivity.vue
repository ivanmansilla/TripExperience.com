<template>
  <div class="title1">
    <h1>Reserva tu actividad!</h1>
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
  color: rgb(255, 110, 0);
  font-size: 12px;
}
</style>
