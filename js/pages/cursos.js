// import { createApp } from "vue"
const { createApp } = Vue
import { Header } from "../components/header.js"
import { Footer } from "../components/footer.js"
import { cursos } from "../cursos.js"
import { imagesBaseUrl } from "../constants.js"

const queryParams = new URLSearchParams(window.location.search)
const idCurso = Number(queryParams.get("id"))
const curso = cursos.find(({ id }) => id === idCurso)

createApp({
  components: {
    mainHeader: Header,
    mainFooter: Footer,
  },
  data() {
    return {
      curso,
    }
  },
  computed: {
    imgUrl() {
      return `${imagesBaseUrl}/${this.curso.img}`
    },
  },
}).mount("#app")
