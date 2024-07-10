export const Header = {
  props: ["logoUrl"],
  template: `
    <header
      class="bg1 d-flex justify-content-around align-items-center py-2 sticky-top"
    >
      <a href="/">
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
}
