// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/index.css"],

  app: {
    head: {
      htmlAttrs: { lang: "es" },
      script: [
        {
          children: `
            (function () {
              try {
                const theme = localStorage.getItem('theme') || 'system';
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
                if (isDark) document.documentElement.dataset.theme = 'dark';
              } catch(e) {}
            })();
          `,
          tagPosition: "head",
          hid: "theme-detection",
        },
      ],
    },
    pageTransition: { name: "default", mode: "out-in" },
  },

  modules: ["@nuxt/image", "@nuxt/eslint"],
  compatibilityDate: "2024-12-03",
});
