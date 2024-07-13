// import { createApp } from "vue"
const { createApp } = Vue
import { CursoCard } from "../components/cursoCard.js"
import { MaestroCard } from "../components/maestroCard.js"
import { Footer } from "../components/footer.js"
import { Header } from "../components/header.js"
import { cursos } from "../cursos.js"
import { maestros } from "../maestros.js"

createApp({
  components: {
    cursoCard: CursoCard,
    maestroCard: MaestroCard,
    mainHeader: Header,
    mainFooter: Footer,
  },
  data() {
    return {
      cursos,
      maestros,
    }
  },
  computed: {
    maestrosLenght() {
      return this.maestros.length >= 3 ? "col-md-4" : "col-md-6"
    },
  },
}).mount("#app")
