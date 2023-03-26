// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Nuxt 3 Todo App",
      short_name: "Todos",
      description: "Simple Todo app that uses local storage",
      icons: [
        {
          src: "icons/todo_64x64.png",
          type: "image/png",
          sizes: "64x64",
        },
        {
          src: "icons/todo_96x96.png",
          type: "image/png",
          sizes: "96x96",
        },
        {
          src: "icons/todo_128x128.png",
          type: "image/png",
          sizes: "128x128",
        },
        {
          src: "icons/todo_256x256.png",
          type: "image/png",
          sizes: "256x256",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
