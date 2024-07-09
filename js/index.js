import { createApp, ref } from "vue"

createApp({
  data(){
    return {
      cursos: [
        {
          id: 1,
          nombre: "Guitarra acústica",
          img: "guit1.jpeg"
        },
        {
          id: 2,
          nombre: "Guitarra clásica",
          img: "guitClas.jpeg"
        },
        {
          id: 3,
          nombre: "Bajo eléctrico",
          img: "bajo1.jpeg"
        },
        {
          id: 4,
          nombre: "Ukelele",
          img: "ukelele1.jpeg"
        },
      ]
    }
  }
})
  .component("curso-card", {
    template: "#cursoCard",
    props: ["nombre", "img"],
    computed: {
      imgUrl(){
        return `./assets/images/${this.img}`
      }
    }
  })
  .mount("#cursos")
