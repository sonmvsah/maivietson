export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    port: 3001,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mai Việt Sơn - Thiết kế website , Online Marketing Solutions",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Dây là website của tôi",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", type: "", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", type: "", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        type: "",
        href: "https://fonts.googleapis.com/css2?family=Fahkwang:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
      },
      {
        rel: "stylesheet",
        type: "",
        href: "/css/main.css",
      },
    ],
    css: ["~/assets/css/custom.css"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css", "@/static/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/sanitize-html.js",
    {
      src: "~/plugins/vue-video-background",
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    // "@nuxtjs/stylelint-module",
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
