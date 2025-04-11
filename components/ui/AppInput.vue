<template>
  <label class="app-input">
    <input
      ref="inputEl"
      v-model="modelValue"
      :type="props.type"
      placeholder=" "
      :required="props.required"
      :autocomplete="props.autocomplete"
    />
    <span class="app-input__label">{{ props.label }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: "off",
  },
  rules: {
    type: Array,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);

const inputEl = ref(null);

const modelValue = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

function checkRules() {
  return checkFieldRules(inputEl.value, props.rules);
}

watch(modelValue, checkRules);

defineExpose({ checkRules });
</script>

<style>
.app-input {
  position: relative;
  display: block;

  & .app-input__label {
    position: absolute;
    left: 0;
    color: var(--color-light);
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.4px;
    translate: 0 -50%;
    transition: 0.25s ease-in-out;

    [data-theme="dark"] & {
      color: var(--color-surface-mixed-a50);
    }
  }

  & input {
    height: 36px;
    width: 100%;
    font-size: 16px;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--bg-gray-three);
    outline: none;
    padding: 0 10px;
    caret-color: var(--color-warning);
    transition: 0.25s ease-in-out;

    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover {
      -webkit-text-fill-color: var(--color-dark);
      box-shadow: 0 0 0px 1000px var(--bg-gray-light) inset;

      [data-theme="dark"] & {
        -webkit-text-fill-color: var(--color-white);
        box-shadow: 0 0 0px 1000px var(--color-surface-mixed-a30) inset;
      }
    }

    &::placeholder {
      transition: 0.2s ease-in-out;
      opacity: 0;
    }

    &:placeholder-shown + .app-input__label {
      max-width: 66.66%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transform-origin: left bottom;
      top: 50%;
    }

    &:not(:placeholder-shown) + .app-input__label,
    &:focus + .app-input__label {
      top: 0;
      font-size: 14px;
      background: var(--bg-accent-gradient);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:not(:placeholder-shown),
    &:focus {
      border-image-slice: 1;
      border-image-source: var(--bg-accent-gradient);
    }
  }
}
</style>
