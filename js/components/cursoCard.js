import { hostName, ghHos, imagesBaseUrl, cursosBaseUrl } from "../constants.js"

export const CursoCard = {
  // template: "#cursoCard",
  template: `
    <div class="card-custom card-instrumento c-pointer">
      <a :href="linkUrl" target="_blank">        
        <img
          class="w-100 h-100"
          :src="imgUrl"
          alt="guitarra"
        />
      </a>
      <h5 class="mb-0 w-100 text-white text-end pe-3 py-1 bg1">
        {{ nombre }}
      </h5>q
    </div>
  `,
  props: ["nombre", "img", "link"],
  computed: {
    imgUrl() {
      const imgPath = `${imagesBaseUrl}/${this.img}`
      return hostName === ghHos ? `/euterpe/${imgPath}` : imgPath
    },
    linkUrl() {
      const cursosPath = `${cursosBaseUrl}/${this.link}.html`
      return hostName === ghHos ? `/euterpe/${cursosPath}` : cursosPath
    },
  },
}
