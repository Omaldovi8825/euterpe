import { createApp } from "vue"
import { Header } from "../components/header.js"
import { Footer } from "../components/footer.js"

createApp({
  components: {
    mainHeader: Header,
    mainFooter: Footer,
  },
}).mount("#app")
