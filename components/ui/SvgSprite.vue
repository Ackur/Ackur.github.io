<template>
  <svg
    v-bind="{
      ...(props.width && { width: props.width }),
      ...(props.height && { height: props.height }),
      ...attrs,
    }"
    :style="props.color && { color: props.color }"
  >
    <use :href="`/images/icons/icons-symbol.svg#${props.icon}`" />
  </svg>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});
const props = defineProps({
  width: { type: String, default: "28" },
  height: { type: String, default: "28" },
  icon: { type: String, default: "moon" },
  color: { type: String, default: "" },
});

const attrs = useAttrs();
</script>
