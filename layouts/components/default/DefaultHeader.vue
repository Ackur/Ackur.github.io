<template>
  <header class="default-header app-container">
    <NuxtLink to="/" class="logo">
      <b>Kremenok <span>VV</span></b>
    </NuxtLink>

    <div class="default-header__controls">
      <ThemeSwitcher />
      <AppButton
        color="gradient"
        icon
        aria-label="open menu button"
        class="default-header__controls--item menu"
        @click="showMenu = !showMenu"
      >
        <SvgSprite icon="menu" />
      </AppButton>

      <Teleport to="body">
        <MobileMunu v-model:show="showMenu" />
      </Teleport>
    </div>
  </header>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import SvgSprite from "~/components/ui/SvgSprite.vue";
import MobileMunu from "./MobileMunu.vue";

const showMenu = ref(false);
</script>

<style>
.default-header {
  min-height: var(--default-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: rgb(var(--bg-main-rgb));
    z-index: 10;

    [data-theme="dark"] & {
      background-color: rgb(var(--color-surface-mixed-a0-rgb) / 0.9);
    }
    /* width: calc(100% - var(--app-container-padding) * 2); */
  }

  .logo {
    font-family: var(--font-cursive);
    font-size: 24px;
    color: var(--color-dark);
    text-decoration: unset;

    [data-theme="dark"] & {
      color: var(--color-white);
    }

    span {
      background: var(--bg-accent-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .default-header__controls {
    display: flex;
    align-items: center;
    gap: 20px;

    .default-header__controls--item {
      display: none;
      @media (max-width: 1024px) {
        display: flex;
      }
    }
  }
}
</style>
