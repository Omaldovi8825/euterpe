import { hostName, ghHos, imagesBaseUrl } from "../constants.js"

export const MaestroCard = {
  template: `
    <div
      class="card-custom card-maestro position-relative d-flex flex-column justify-content-center align-items-center"
    >
      <img
        class="position-absolute top-0 left-0 w-100 h-100 filtro-gris"
        :src="imgUrl"
        alt="foto maestro"
      />
      <div class="z-1">
        <h3 class="text-white mb-4">
          {{ maestro.nombre }} {{ maestro.apellidoPaterno}}
        </h3>
        <div>
          <img
            v-for="curso in maestro.cursos"
            :src="cursoIcon(curso.icono)"
            class="me-2"
            width="50"
            alt=""
          />
        </div>
      </div>
    </div>
  `,
  props: ["maestro"],
  computed: {
    imgUrl() {
      const imgPath = `${imagesBaseUrl}/${this.maestro.img}`
      return hostName === ghHos ? `/euterpe/${imgPath}` : imgPath
    },
    // linkUrl() {
    //   const cursosPath = `${cursosBaseUrl}/${this.link}.html`
    //   return hostName === ghHos ? `/euterpe/${cursosPath}` : cursosPath
    // },
  },
  methods: {
    cursoIcon(icon) {
      return `${imagesBaseUrl}/${icon}`
    },
  },
}
