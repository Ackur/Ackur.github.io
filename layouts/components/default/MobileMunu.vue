<template>
  <transition name="show-menu" mode="out-in">
    <div v-if="showModel" class="mobile-menu" @click="showModel = false">
      <DefaultNavbar
        position="vertical"
        class="mobile-menu--navbar"
        @click.stop
        @change="onNavbarItemClick"
      />
    </div>
  </transition>
</template>

<script setup>
import DefaultNavbar from "./DefaultNavbar.vue";

const props = defineProps({
  show: { type: Boolean, default: false },
});

const emit = defineEmits(["update:show"]);

const showModel = computed({
  get: () => props.show,
  set: (value) => {
    emit("update:show", value);
  },
});

function onNavbarItemClick(item) {
  setTimeout(() => {
    showModel.value = false;
    setTimeout(() => {
      const targetElemTop = document.getElementById(item.targetId).offsetTop;
      const headerHeight = getComputedStyle(document.documentElement)
        .getPropertyValue("--default-header-height")
        .trim();

      window.scrollTo({
        top: targetElemTop - parseInt(headerHeight),
        behavior: "smooth",
      });
    }, 300);
  }, 300);
}
</script>

<style>
.mobile-menu {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .mobile-menu--navbar {
    margin-right: 16px;
  }
}

.show-menu-enter-active,
.show-menu-leave-active {
  transition:
    background-color 0.4s,
    margin 0.7s;

  .mobile-menu--navbar {
    transition: transform 0.4s 0.3s;
  }
}
.show-menu-enter-from,
.show-menu-leave-to {
  background-color: rgba(0, 0, 0, 0);

  .mobile-menu--navbar {
    transform: translateX(150px);
  }
}
</style>
