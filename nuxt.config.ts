// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/index.css"],

  app: {
    head: {
      htmlAttrs: { lang: "es" },
    },
    pageTransition: { name: "default", mode: "out-in" },
  },

  modules: ["@nuxt/image", "@nuxt/eslint"],
  compatibilityDate: "2024-12-03",
});
