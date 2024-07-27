import { homeUrl, imagesBaseUrl } from "../constants.js"
import { MenuCel } from "./menuCel.js"

export const Header = {
  components: {
    MenuCel,
  },
  template: /*html*/ `
    <header
      id="header"
      class="d-flex justify-content-around align-items-center py-2"
      :class="[fixed, showBackGround ? 'bg1' : '']"
    >
      <a :href="homeUrl">
        <img
          class="logoHeader"
          :src="logoUrl"
          alt="logo euterpe"
        />
      </a>
      <nav class="d-none d-md-block">
        <ul class="d-flex">
          <li>
            <a href="#" class="text-decoration-none text-white">Cursos</a>
          </li>
          <li class="ms-4">
            <a href="#" class="text-decoration-none text-white">Nosotros</a>
          </li>
          <li class="ms-4">
            <a href="#" class="text-decoration-none text-white">Galería</a>
          </li>
          <li class="ms-4">
            <a
              href="./contacto.html"
              class="text-decoration-none text-white"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div class="d-block d-md-none" @click="abrirMenuCel">
        <i class="bi bi-list text-white fs-1"></i>
        <menu-cel v-if="showMenuCel"></menu-cel>
      </div>
    </header>
  `,
  props: {
    fixed: {
      type: String,
      default: "sticky-top",
    },
    backGround: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      homeUrl,
      logoUrl: `${imagesBaseUrl}/logo1.png`,
      showBackGround: this.backGround,
      showMenuCel: false,
    }
  },
  provide() {
    return {
      cerrarMenuCel: this.cerrarMenuCel,
    }
  },
  methods: {
    abrirMenuCel() {
      this.showMenuCel = true
    },
    cerrarMenuCel() {
      this.showMenuCel = false
    },
    headerFantasmaOn() {
      const options = {
        threshold: 0.5,
      }

      const callback = (entries, observer) => {
        const [entry] = entries
        this.showBackGround = !entry?.isIntersecting
      }

      const observer = new IntersectionObserver(callback, options)
      observer.observe(this.$parent.$refs.parallax)
    },
  },
  mounted() {
    if (!this.backGround) {
      this.headerFantasmaOn()
    }
  },
}
