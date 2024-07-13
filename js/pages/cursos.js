// import { createApp } from "vue"
const { createApp } = Vue
import { Header } from "../components/header.js"
import { Footer } from "../components/footer.js"
import { CursoCard } from "../components/cursoCard.js"
import { cursos } from "../cursos.js"
import { imagesBaseUrl } from "../constants.js"

const queryParams = new URLSearchParams(window.location.search)
const idCurso = queryParams.get("id")
const curso = cursos.find(({ link }) => link === idCurso)

createApp({
  components: {
    mainHeader: Header,
    mainFooter: Footer,
    CursoCard,
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
