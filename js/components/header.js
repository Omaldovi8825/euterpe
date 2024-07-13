import { homeUrl, imagesBaseUrl } from "../constants.js"

export const Header = {
  template: `
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
      <nav class="menu">
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
            <a href="#" class="text-decoration-none text-white">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  // props: ["fixed", "backGround"],
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
    }
  },
  methods: {
    headerFantasmaOn() {
      const options = {
        rootMargin: "0px",
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
