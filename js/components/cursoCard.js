import { imagesBaseUrl, cursosBaseUrl } from "../constants.js"

export const CursoCard = {
  // template: "#cursoCard",
  template: /*html*/`
    <div class="card-custom card-instrumento position-relative c-pointer aspect-ratio-1-1">
      <a :href="linkUrl">        
        <img
          class="w-100 h-100"
          :src="imgUrl"
          :alt="curso.nombre"
        />
      </a>
      <h5 class="mb-0 w-100 text-white text-end pe-3 py-2 bg1-phantom">
        {{ curso.nombre }}
      </h5>
    </div>
  `,
  props: ["curso"],
  data() {
    return {
      imgUrl: `${imagesBaseUrl}/${this.curso.img}`,
      linkUrl: `${cursosBaseUrl}.html?id=${this.curso.link}`,
    }
  },
}
