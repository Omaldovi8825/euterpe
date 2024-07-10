export const CursoCard = {
  data() {
    return {
      hostName: location.hostname,
      ghHos: "omaldovi8825.github.io",
      imagesBaseUrl: "assets/images",
      cursosBaseUrl: "cursos",
    }
  },
  // template: "#cursoCard",
  template: `
    <div class="col-12 col-sm-6 col-md-4 col-xl-3 mb-3">
      <div class="card-instrumento c-pointer">
        <a :href="linkUrl" target="_blank">        
          <img
            class="w-100 h-100"
            :src="imgUrl"
            alt="guitarra"
          />
        </a>
        <h5 class="mb-0 w-100 text-white text-end pe-3 py-1 bg1">
          {{ nombre }}
        </h5>
      </div>
    </div>
  `,
  props: ["nombre", "img", "link"],
  computed: {
    imgUrl() {
      const imgPath = `${this.imagesBaseUrl}/${this.img}`
      return this.hostName === this.ghHos ? `/euterpe/${imgPath}` : imgPath
    },
    linkUrl() {
      const cursosPath = `${this.cursosBaseUrl}/${this.link}.html`
      return this.hostName === this.ghHos
        ? `/euterpe/${cursosPath}`
        : cursosPath
    },
  },
}
