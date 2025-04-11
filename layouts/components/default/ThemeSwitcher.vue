<template>
  <AppButton
    outline
    icon
    aria-label="theme change button"
    class="theme-switcher"
    @click="toogleTheme"
  >
    <Transition name="switch" mode="out-in">
      <SvgSprite
        v-if="currentTheme === themeVariants.dark"
        icon="moon"
        width="22"
        class="theme-switcher--icon"
      />
      <SvgSprite v-else icon="sun" width="28" class="theme-switcher--icon" />
    </Transition>
  </AppButton>
</template>

<script setup>
import AppButton from "@/components/ui/AppButton.vue";
import SvgSprite from "@/components/ui/SvgSprite.vue";

let darkThemeInstance = null;
const themeVariants = { dark: "dark", light: "light" };
const currentTheme = ref();

function setCurrentTheme(theme) {
  currentTheme.value = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function toogleTheme() {
  const theme =
    currentTheme.value === themeVariants.dark
      ? themeVariants.light
      : themeVariants.dark;
  currentTheme.value = theme;

  // waiting for switch animation
  setTimeout(() => {
    setCurrentTheme(theme);
  }, 1000);
}

function onSystemChangeTheme(evt) {
  const theme = evt.matches ? themeVariants.dark : themeVariants.light;
  setCurrentTheme(theme);
}

function init() {
  darkThemeInstance = window.matchMedia("(prefers-color-scheme: dark)");
  const localStoreTheme = localStorage.getItem("theme");
  if (localStoreTheme) {
    setCurrentTheme(
      localStoreTheme === themeVariants.dark
        ? themeVariants.dark
        : themeVariants.light
    );
  } else {
    onSystemChangeTheme(darkThemeInstance);
  }
  darkThemeInstance.addEventListener("change", onSystemChangeTheme);
}

onMounted(init);

onUnmounted(() => {
  darkThemeInstance.removeEventListener("change", onSystemChangeTheme);
});
</script>

<style>
.theme-switcher {
  overflow: clip;
  overflow-clip-margin: 5px;
}

.switch-enter-active {
  animation: bounce-in 0.5s ease;
}
.switch-leave-active {
  animation: bounce-out 0.5s ease;
}

@keyframes bounce-in {
  0% {
    transform: translateX(-40px) rotate(-180deg);
  }
  100% {
    transform: translateX(0px) rotate(0);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateX(0px) rotate(0);
  }
  100% {
    transform: translateX(40px) rotate(180deg);
  }
}
</style>
