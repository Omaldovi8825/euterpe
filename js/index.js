import { createApp, ref } from "vue"
import { CursoCard } from "./components/cursoCard.js"
import { MaestroCard } from "./components/maestroCard.js"
import { Footer } from "./components/footer.js"
import { cursos } from "./cursos.js"
import { maestros } from "./maestros.js"

createApp({
  components: {
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
    maestrosLenght() {
      return this.maestros.length >= 3 ? "col-md-4" : "col-md-6"
    },
  },
}).mount("#app")
