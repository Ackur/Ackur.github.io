<template>
  <section class="tag-list">
    <h5 class="tag-list__title app-subtitle">{{ props.title }}</h5>
    <p class="tag-list__items">
      <b
        v-for="(tag, idx) in props.tags"
        :key="idx"
        class="tag-list__items--elem"
      >
        {{ tag }}
      </b>
    </p>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<style>
.tag-list {
  .tag-list__title {
    letter-spacing: 0.7px;
    margin-bottom: 15px;
  }

  .tag-list__items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;

    .tag-list__items--elem {
      color: var(--color-dark);
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.24px;
      border-radius: 8px;
      background: var(--bg-gray-two);
      padding: 4px 8px;

      [data-theme="dark"] & {
        background: var(--color-surface-mixed-a50);
      }
    }
  }
}
</style>
