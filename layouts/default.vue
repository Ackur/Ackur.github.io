<template>
  <div class="default-layout">
    <DefaultHeader />

    <div v-if="showDefaultNavbar" class="app-container">
      <DefaultNavbar class="default-layout--navbar" />
    </div>

    <div class="default-layout--main app-container">
      <MyPresentationCard />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import DefaultHeader from "./components/default/DefaultHeader.vue";
import DefaultNavbar from "./components/default/DefaultNavbar.vue";
import MyPresentationCard from "./components/default/MyPresentationCard.vue";

const screenWidth = useScreenWidth();

const mobileScreenWidth = 1024;
const showDefaultNavbar = computed(() => {
  return screenWidth.value >= parseInt(mobileScreenWidth);
});
</script>

<style>
.default-layout {
  position: relative;
  padding-bottom: 15px;

  .default-layout--navbar {
    display: flex;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .default-layout--main {
    display: grid;
    grid-template-columns: minmax(300px, 400px) 1fr;
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
}

.default-enter-active,
.default-leave-active {
  transform-origin: top;
  transition: all 0.4s;
}
.default-enter-from,
.default-leave-to {
  opacity: 0.3;
  filter: grayscale(1);
  transform: scale(0.97);
}
</style>
