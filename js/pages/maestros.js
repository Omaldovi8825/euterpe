// import { createApp } from "vue"
const { createApp } = Vue
import { Header } from "../components/header.js"
import { Footer } from "../components/footer.js"
import { maestros } from "../maestros.js"
import { imagesBaseUrl } from "../constants.js"

const queryParams = new URLSearchParams(window.location.search)
const idMaestro = queryParams.get("id")
const maestro = maestros.find(({ link }) => link === idMaestro)

createApp({
  components: {
    mainHeader: Header,
    mainFooter: Footer,
  },
  data() {
    return {
      maestro,
    }
  },
  computed: {
    imgUrl() {
      return `${imagesBaseUrl}/${this.maestro.img}`
    },
  },
}).mount("#app")
