import { cursosBaseUrl, imagesBaseUrl, maestrosBaseUrl } from "../constants.js"

export const MaestroCard = {
  template: /*html*/ `
    <div
      class="card-custom card-maestro position-relative d-flex flex-column justify-content-center align-items-center aspect-ratio-4-3"
    >
      <img
        class="position-absolute top-0 left-0 w-100 h-100 filtro-gris"
        :src="imgUrl"
        alt="foto maestro"
      />
      <div class="z-1 d-flex flex-column align-items-center">
        <h3 class="text-white mb-4">
          {{ maestro.nombre }} {{ maestro.apellidoPaterno}}
        </h3>
        <div class="mb-4">
          <a
            v-for="curso in maestro.cursos"
            :href="getCursoLink(curso.link)"
          >          
            <img
              :src="getCursoIcon(curso.icono)"
              class="me-2"
              width="50"
              alt="icono instrumento"
            />
          </a>
        </div>
        <a class="boton btn-phantom px-3 py-2" :href="link">
          <span>Biografía</span>
          <i class="bi-person-circle icon-no-space ms-2"></i>
        </a>
      </div>
    </div>
  `,
  props: ["maestro"],
  data() {
    return {
      imgUrl: `${imagesBaseUrl}/${this.maestro.img}`,
      link: `${maestrosBaseUrl}.html?id=${this.maestro.link}`,
    }
  },
  methods: {
    getCursoIcon(icon) {
      return `${imagesBaseUrl}/${icon}`
    },
    getCursoLink(link) {
      return `${cursosBaseUrl}.html?id=${link}`
    },
  },
}
