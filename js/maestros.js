import {
  guitarraAcustica,
  guitarraClasica,
  ukelele,
  bajoElectrico,
  iniziacion,
  guitarraElectrica,
} from "./cursos.js"

class Maestro {
  constructor(id, nombre, apellidoPaterno, apellidoMaterno, img, link, cursos) {
    this.id = id
    this.nombre = nombre
    this.apellidoPaterno = apellidoPaterno
    this.apellidoMaterno = apellidoMaterno
    this.img = img
    this.link = link
    this.cursos = cursos
  }
}

const maestroGabriel = new Maestro(
  1,
  "Gabriel",
  "Méndez",
  "Alarcón",
  "gaboCard.jpeg",
  "gabriel-mendez",
  [guitarraAcustica, guitarraClasica, ukelele, bajoElectrico]
)

const maestraNatalia = new Maestro(
  2,
  "Natalia",
  "Tarquino",
  "Alarcón",
  "nataCard.jpeg",
  "natalia-tarquino",
  [iniziacion, guitarraAcustica, guitarraClasica, ukelele]
)

const maestroOmar = new Maestro(
  3,
  "Omar",
  "Maldonado",
  "Villanueva",
  "omarCard.jpg",
  "omar-maldonado",
  [guitarraAcustica, guitarraElectrica]
)

export const maestros = [maestroGabriel, maestraNatalia]
