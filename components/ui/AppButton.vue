<template>
  <component
    :is="
      ['nuxt-link', 'NuxtLink'].includes(props.tag)
        ? defineNuxtLink({}) //resolveComponent('NuxtLink')
        : props.tag
    "
    class="app-button"
    v-bind="{
      ...(props.color && { color: props.color }),
      ...(props.outline && { outline: props.outline }),
      ...(props.size && { size: props.size }),
      ...(props.icon && { icon: props.icon }),
      ...attrs,
    }"
  >
    <slot v-if="!props.loading">{{ props.title }}</slot>

    <SvgSprite v-else icon="dots-spiner" class="app-button__loader" />
  </component>
</template>

<script setup>
import SvgSprite from "./SvgSprite.vue";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  tag: { type: String, default: "button" },
  title: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
    validator: (val) => {
      return ["", "gradient", "gray"].includes(val);
    },
  },
  outline: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
    validator: (val) => {
      return ["", "sm", "lg"].includes(val);
    },
  },
  icon: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const attrs = useAttrs();
</script>

<style>
.app-button {
  --border: 2px;
  --height: 44px;

  position: relative;
  width: fit-content;
  min-height: var(--height);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  background: var(--bg-gray);
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.15s;

  [data-theme="dark"] & {
    color: var(--color-light);
  }

  &:hover {
    box-shadow:
      0px 0px 4px 0px rgba(0, 0, 0, 0.2),
      0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  }
  &:active {
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  }

  &[icon] {
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 0;
  }

  &[size="lg"] {
    --height: 56px;

    &[icon] {
      min-width: var(--height);
    }
  }

  &[outline]:not([color]) {
    background-color: transparent;
    background-clip: padding-box;
    border: solid var(--border) transparent;

    [data-theme="dark"] & {
      color: var(--color-white);
    }

    &:before {
      content: "";
      position: absolute;
      inset: calc(var(--border) * -1);
      z-index: 0;
      border-radius: inherit;
      background: var(--bg-accent-gradient);
      padding: var(--border);
      mask:
        linear-gradient(#000 0 0) content-box,
        linear-gradient(#000 0 0);
      mask-composite: exclude;
    }
  }
  &[color="gradient"] {
    background: var(--bg-accent-gradient);
    background-size: 100% auto;
    color: var(--color-white);
    transition: 0.3s ease-in-out;

    &:hover {
      background-size: 170% auto;
    }
  }
  &[color="gray"] {
    background: var(--bg-gray-two);
    color: var(--color-dark);
  }

  & .app-button__loader {
    position: absolute;
    width: auto;
    height: 100%;
  }
}
</style>
