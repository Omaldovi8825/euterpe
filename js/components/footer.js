import { homeUrl } from "../constants.js"
import { contacto } from "../contacto.js"

export const Footer = {
  template: /*html*/ `
    <footer class="bg-dark pt-6 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 mb-5 text-white">
            <h5 class="mb-4 fw-bold">Enlaces</h5>
            <nav>
              <ul>
                <li v-for="enlace in links" class="mb-2">
                  <a
                    class="text-white text-decoration-none"
                    :href="enlace.link"
                  >
                    {{ enlace.nombre }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-12 col-md-4 mb-5 text-white">
            <h5 class="mb-4 fw-bold">Contacto</h5>
            <p v-for="telefono in contacto.telefonos">
              <i class="bi bi-telephone icon-no-space"></i>
              <span class="ms-2">{{ telefono }}</span>
            </p>
            <p>
              <i class="bi bi-envelope icon-no-space"></i>
              <span class="ms-2">{{ contacto.email }}</span>
            </p>
            <nav>
              <ul class="d-flex">
                <li v-for="({ nombre, link }) in contacto.redes">
                  <a 
                    class="text-white"
                    :href="link"
                    target="_blank"
                  >
                    <i :class="'bi bi-' + nombre + ' fs-3 icon-no-space me-3'"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="col-12 col-md-4 mb-5 text-white">
            <h5 class="mb-4 fw-bold">Dirección</h5>
            <p>
              <i class="bi bi-geo-alt icon-no-space me-2"></i>
              <a
                class="text-white"
                :href="direccion.googleLink"
                target="_blank"
              >
                {{ direccion.calle }} #{{ direccion.numero}}
              </a>
            </p>
            <p>{{ direccion.colonia }}, {{ direccion.cp}}</p>
            <p>{{ direccion.ciudad }}, {{ direccion.estado }}</p>
          </div>
          <div class="col-12 text-white">
            <p class="text-center">
              Copyright © Euterpe Academia de Música – Todos los derechos
              reservados 2024.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  data() {
    return {
      contacto,
      links: [
        {
          nombre: "Inscripción",
          link: `${homeUrl}inscripcion.html`,
        },
        {
          nombre: "Contacto",
          link: `${homeUrl}contacto.html`,
        },
      ],
    }
  },
  computed: {
    direccion() {
      return this.contacto.direccion
    },
  },
}
