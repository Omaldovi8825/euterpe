import { hostName, ghHos, imagesBaseUrl } from "../constants.js"

export const MaestroCard = {
  template: `
    <div class="card-custom card-maestro">
      <img
        class="w-100 h-100 filtro-gris"
        :src="imgUrl"
        alt="foto maestro"
      />
      <h3 class="card-maestro-nombre text-white mb-0">
        {{ maestro.nombre }} {{ maestro.apellidoPaterno }}
      </h3>
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
}
