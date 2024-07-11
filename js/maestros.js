class Maestro {
  constructor(nombre, apellidoPaterno, apellidoMaterno, img, link) {
    this.nombre = nombre
    this.apellidoPaterno = apellidoPaterno
    this.apellidoMaterno = apellidoMaterno
    this.img = img
    this.link = link
  }
}

const maestroGabriel = new Maestro(
  "Gabriel",
  "Méndez",
  "Alarcón",
  "gaboCard.jpeg",
  "gabriel-mendez"
)

const maestraNatalia = new Maestro(
  "Natalia",
  "Tarquino",
  "Alarcón",
  "nataCard.jpeg",
  "natalia-tarquino"
)

const maestroOmar = new Maestro(
  "Omar",
  "Maldonado",
  "Villanueva",
  "omarCard.jpg",
  "omar-maldonado"
)

export const maestros = [maestroGabriel, maestraNatalia]
