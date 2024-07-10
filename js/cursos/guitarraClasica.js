import { createApp, ref } from "vue"
import { Header } from "../components/header.js"

createApp({
  components: {
    mainHeader: Header,
  },
}).mount("#app")