<template>
  <div class="app-devel app-card">
    <h2>SVG sprite icons:</h2>
    <br />
    <div class="app-icons">
      <div v-for="name in iconNames" :key="name" class="app-icons__item">
        <SvgSprite :icon="name" width="30" height="30" />
        <span>{{ name }}</span>
      </div>
    </div>
    <div class="code-example">
      <h2>How to use:</h2>
      <pre>
        <code>
          {{ `
          <template>
            <SvgSprite icon='update' width='29' height='30' />
          </template>

          <script setup>
            import SvgSprite from '@/components/ui/SvgSprite.vue'
          </script>`
          }}
        </code>
      </pre>
      <p class="code-example__pretext">OR</p>
      <pre>
        <code>
          {{ `
          <template>
            <svg width="24px" height="24px" fill="red">
              <use href="/images/icons/icons-symbol.svg#update" />
            </svg>
          </template>`
          }}
        </code>
      </pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgSprite from "@/components/ui/SvgSprite.vue";

const iconNames = ref([
  "sun",
  "moon",
  "home",
  "work",
  "contact",
  "document",
  "facebook",
  "linkedin",
  "github",
  "phone",
  "letter",
  "location",
  "download",
  "code",
  "instagram",
  "ux",
  "mentor",
  "dots-spiner",
  "menu",
]);
</script>

<style scoped>
.app-devel {
  padding: 30px;
}
.app-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & .app-icons__item {
    min-width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
.code-example {
  & .code-example__pretext {
    text-align: center;
  }
  pre {
    background-color: #4f4c4c;
    color: #ffff9d;
    overflow-x: auto;
  }
}
</style>
