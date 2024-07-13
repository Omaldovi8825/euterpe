import {
  guitarraAcustica,
  guitarraClasica,
  ukelele,
  bajoElectrico,
  iniciazion,
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

const gabrielM = new Maestro(
  1,
  "Gabriel",
  "Méndez",
  "Alarcón",
  "gaboCard.jpeg",
  "gabriel-mendez",
  [guitarraAcustica, guitarraClasica, ukelele, bajoElectrico]
)

const nataliaT = new Maestro(
  2,
  "Natalia",
  "Tarquino",
  "Alarcón",
  "nataCard.jpeg",
  "natalia-tarquino",
  [iniciazion, guitarraAcustica, guitarraClasica, ukelele]
)

const omarM = new Maestro(
  3,
  "Omar",
  "Maldonado",
  "Villanueva",
  "omarCard.jpg",
  "omar-maldonado",
  [guitarraAcustica, guitarraElectrica]
)

export const maestros = [gabrielM, nataliaT]
