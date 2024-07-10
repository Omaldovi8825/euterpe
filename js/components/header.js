export const Header = {
  data() {
    return {
      hostName: location.hostname,
      ghHos: "omaldovi8825.github.io",
      logoBaseUrl: "/assets/images/logo1.png",
    }
  },
  template: `
    <header
      class="bg1 d-flex justify-content-around align-items-center py-2 sticky-top"
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
  computed: {
    logoUrl() {
      return this.hostName === this.ghHos
        ? `/euterpe/${this.logoBaseUrl}`
        : this.logoBaseUrl
    },
    homeUrl() {
      return this.hostName === this.ghHos ? "/euterpe/" : "/"
    },
  },
}
