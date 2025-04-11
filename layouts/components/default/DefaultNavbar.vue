<template>
  <nav
    :ref="(el) => (refs.navbar = el)"
    class="default-navbar"
    :class="[{ vertical: props.position === 'vertical' }]"
  >
    <AppButton
      v-for="item in items"
      :key="item.slug"
      tag="NuxtLink"
      :to="item.to"
      active-class="active"
      :data-el-name="item.slug"
      :aria-label="item.label"
      class="default-navbar__item"
    >
      <SvgSprite :icon="item.icon" width="28" height="28" class="item-icon" />

      <span class="item-name">{{ item.name }}</span>
    </AppButton>

    <div
      :ref="(el) => (refs.activeBox = el)"
      class="default-navbar__active-box"
    ></div>
  </nav>
</template>

<script setup>
import { computed } from "vue";

import AppButton from "@/components/ui/AppButton.vue";
import SvgSprite from "@/components/ui/SvgSprite.vue";

const props = defineProps({
  position: {
    type: String,
    default: "horizontal",
    validator: (val) => {
      return ["vertical", "horizontal"].includes(val);
    },
  },
});
const emit = defineEmits(["change"]);

const route = useRoute();

const refs = reactive({});

const activeItem = computed(() => {
  return items.value.find((el) => el.active);
});

const items = computed(() => {
  return [
    {
      slug: "home",
      name: "Home",
      label: "link to home page",
      icon: "home",
      active: false,
      to: "/",
      targetId: "home-page",
    },
    {
      slug: "document",
      name: "Resume",
      label: "link to resume page",
      icon: "document",
      active: false,
      to: "/resume",
      targetId: "resume-page",
    },
    {
      slug: "work",
      name: "Work",
      label: "link to work page",
      icon: "work",
      active: false,
      to: "/work",
      targetId: "work-page",
    },
    {
      slug: "contact",
      name: "Contact",
      label: "link to contact page",
      icon: "contact",
      active: false,
      to: "/contact",
      targetId: "contact-page",
    },
  ].map((el) => ({ ...el, active: (el.active = el.to === route.path) }));
});

function moveActiveBox(item) {
  const activeNav = document.querySelector(`[data-el-name="${item.slug}"]`);

  if (props.position === "vertical") {
    refs.activeBox.style.top = activeNav.offsetTop + "px";
    refs.activeBox.style.left = getComputedStyle(refs.navbar).paddingLeft;
  } else {
    refs.activeBox.style.left = activeNav.offsetLeft + "px";
  }
  refs.activeBox.style.width = activeNav.clientWidth + "px";
}

watch(activeItem, (item) => {
  if (item) {
    moveActiveBox(item);
    emit("change", item);
  }
});

watch(
  () => props.position,
  () => {
    if (activeItem.value) {
      moveActiveBox(activeItem.value);
    }
  }
);

onMounted(() => {
  if (activeItem.value) {
    moveActiveBox(activeItem.value);
  }
});
</script>

<style>
.default-navbar {
  --_shadow: 2px 2px 6px rgb(0, 0, 0, 0.04), 2px 2px 6px rgb(0, 0, 0, 0.04),
    2px 2px 6px rgb(0, 0, 0, 0.04), 2px 2px 6px rgb(0, 0, 0, 0.04),
    -2px -2px 6px rgb(255, 255, 255, 0.9),
    -2px -2px 6px rgb(255, 255, 255, 0.9),
    -2px -2px 6px rgb(255, 255, 255, 0.9), -2px -2px 6px rgb(255, 255, 255, 0.9);
  --_shadow-inset: 2px 2px 6px rgb(0, 0, 0, 0.04) inset,
    2px 2px 6px rgb(0, 0, 0, 0.04) inset, 2px 2px 6px rgb(0, 0, 0, 0.04) inset,
    2px 2px 6px rgb(0, 0, 0, 0.04) inset,
    -2px -2px 6px rgb(255, 255, 255, 0.9) inset,
    -2px -2px 6px rgb(255, 255, 255, 0.9) inset,
    -2px -2px 6px rgb(255, 255, 255, 0.9) inset,
    -2px -2px 6px rgb(255, 255, 255, 0.9) inset;

  --_shadow-dark: 2px 2px 6px rgb(0, 0, 0, 0.24),
    2px 2px 6px rgb(0, 0, 0, 0.24), 2px 2px 6px rgb(0, 0, 0, 0.24),
    2px 2px 6px rgb(0, 0, 0, 0.24), -2px -2px 4px rgb(255, 255, 255, 0.13),
    -2px -2px 4px rgb(255, 255, 255, 0.13),
    -2px -2px 4px rgb(255, 255, 255, 0.13),
    -2px -2px 4px rgb(255, 255, 255, 0.13);

  --_shadow-dark-inset: 2px 2px 6px rgb(0, 0, 0, 0.24) inset,
    2px 2px 6px rgb(0, 0, 0, 0.24) inset, 2px 2px 6px rgb(0, 0, 0, 0.24) inset,
    2px 2px 6px rgb(0, 0, 0, 0.24) inset,
    -2px -2px 4px rgb(255, 255, 255, 0.13) inset,
    -2px -2px 4px rgb(255, 255, 255, 0.13) inset,
    -2px -2px 4px rgb(255, 255, 255, 0.13) inset,
    -2px -2px 4px rgb(255, 255, 255, 0.13) inset;

  position: relative;
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  border-radius: 20px;
  background: var(--bg-gray);
  box-shadow: var(--_shadow);
  padding: 10px 30px;
  margin-top: 20px;
  margin-left: auto;
  margin-bottom: 20px;
  overflow: hidden;

  &.vertical {
    max-width: unset;
    width: fit-content;
    flex-direction: column;
    padding: 16px;
  }

  [data-theme="dark"] & {
    background-color: var(--color-surface-mixed-a20);
    box-shadow: var(--_shadow-dark);
  }

  & .default-navbar__item,
  & .default-navbar__active-box {
    width: 80px;
    min-height: 80px;
    flex-direction: column;
    gap: 3px;
    font-size: 12px;
  }

  & .default-navbar__item {
    box-shadow: var(--_shadow);

    [data-theme="dark"] & {
      color: var(--color-white);
      background-color: var(--color-surface-mixed-a20);
      box-shadow: var(--_shadow-dark);
    }

    &:not(.active) {
      & .item-icon {
        opacity: 0.5;
      }
    }

    & .item-icon,
    & .item-name {
      transition: 0.4s ease-in-out;
      z-index: 1;
    }

    &.active {
      box-shadow: var(--_shadow-inset);

      [data-theme="dark"] & {
        box-shadow: var(--_shadow-dark-inset);
      }

      .item-icon,
      .item-name {
        color: var(--color-white);
      }
    }
  }

  & .default-navbar__active-box {
    position: absolute;
    left: -100px;
    background: var(--bg-accent-gradient);
    border-radius: 20px;
    scale: 0.85;
    user-select: none;
    pointer-events: none;
    z-index: 0;
    transition: 0.4s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: var(--bg-accent-gradient);
      filter: blur(2px);
      border-radius: 20px;
    }
  }
}
</style>
