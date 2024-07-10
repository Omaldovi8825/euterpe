import { createApp, ref } from "vue"
import { CursoCard } from "./components/cursoCard.js"
import { Footer } from "./components/footer.js"

createApp({
  components: {
    cursoCard: CursoCard,
    mainFooter: Footer,
  },
  data() {
    return {
      cursos: [
        {
          id: 1,
          nombre: "Guitarra acústica",
          img: "guit1.jpeg",
          link: "guitarra-clasica",
        },
        {
          id: 2,
          nombre: "Guitarra clásica",
          img: "guitClas.jpeg",
          link: "guitarra-clasica",
        },
        {
          id: 3,
          nombre: "Bajo eléctrico",
          img: "bajo1.jpeg",
          link: "guitarra-clasica",
        },
        {
          id: 4,
          nombre: "Ukelele",
          img: "ukelele1.jpeg",
          link: "guitarra-clasica",
        },
      ],
    }
  },
}).mount("#app")
