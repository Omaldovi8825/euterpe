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
    mainHeader: Header,
    cursoCard: CursoCard,
    maestroCard: MaestroCard,
    mainFooter: Footer,
  },
  data() {
    return {
      cursos,
      maestros,
    }
  },
  computed: {
    columnSize() {
      return this.maestros.length > 2 ? "col-sm-4" : "col-sm-6"
    },
  },
}).mount("#app")
