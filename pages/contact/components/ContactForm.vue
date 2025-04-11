<template>
  <form
    class="contact-form"
    :inert="loading"
    readonly
    novalidate
    @submit.prevent="onSubmit"
  >
    <p class="contact-form__description">
      I am always open to discussing <span>new projects</span>,
      <span>opportunities in tech world</span>, <span>partnerships</span> and
      more so <span>mentorship</span>.
    </p>

    <AppInput
      :ref="(el) => (refs.name = el)"
      v-model="form.name"
      :rules="[required]"
      label="Your name"
      class="contact-form__item"
    />
    <AppInput
      :ref="(el) => (refs.email = el)"
      v-model="form.email"
      :rules="[required, email]"
      type="email"
      label="Your email"
      required
      class="contact-form__item"
    />
    <AppInput
      :ref="(el) => (refs.title = el)"
      v-model="form.title"
      :rules="[required]"
      label="Message title"
      required
      class="contact-form__item"
    />
    <AppInput
      :ref="(el) => (refs.body = el)"
      v-model="form.body"
      :rules="[required, (v) => minLength(v, 10)]"
      label="Message body"
      required
      class="contact-form__item"
    />

    <AppButton
      type="submit"
      outline
      :loading="loading"
      class="contact-form__button-submit"
    >
      Submit
    </AppButton>
  </form>
</template>

<script setup>
import {
  checkFormFields,
  required,
  email,
  minLength,
} from "@/utils/fields-rules";
import AppButton from "~/components/ui/AppButton.vue";
import AppInput from "~/components/ui/AppInput.vue";

const loading = ref(false);
const form = reactive({
  name: "",
  email: "",
  title: "",
  body: "",
});

const refs = reactive({});

function onSubmit() {
  if (checkFormFields(refs)) {
    console.log(form);
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      alert("form data submission is not yet enabled");
    }, 5000);
  }
}
</script>

<style>
.contact-form {
  border-radius: 20px;
  background: var(--bg-gray-light);
  padding: 40px 30px;
  @media (max-width: 768px) {
    padding: 30px 25px;
  }

  [data-theme="dark"] & {
    background: var(--color-surface-mixed-a30);
  }

  .contact-form__description {
    margin-bottom: 20px;
  }

  .contact-form__item {
    margin-bottom: 20px;
  }

  .contact-form__button-submit {
    max-width: 200px;
    width: 100%;
    margin-left: auto;
    @media (max-width: 576px) {
      margin-right: auto;
    }
  }
}
</style>
