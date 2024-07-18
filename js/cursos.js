class Curso {
  constructor(id, nombre, img, icono, link) {
    this.id = id
    this.nombre = nombre
    this.img = img
    this.icono = icono
  }
}

export const iniciazion = new Curso(
  1,
  "Iniciazión musical",
  "iniciazionCard.jpeg",
  "pentagramaIcon.png",
)
export const guitarraAcustica = new Curso(
  2,
  "Guitarra acústica",
  "guitAcusticaCard.jpeg",
  "acusticGuitarIcon.png",
)
export const guitarraClasica = new Curso(
  3,
  "Guitarra clásica",
  "guitClasicaCard.jpeg",
  "clasGuitarIcon.png",
)
export const guitarraElectrica = new Curso(
  4,
  "Guitarra eléctrica",
  "guitElectricaCard.webp",
  "electricGuitarIcon.png",
)
export const bajoElectrico = new Curso(
  5,
  "Bajo eléctrico",
  "bajoCard.jpeg",
  "bassIcon.png",
)
export const ukelele = new Curso(
  6,
  "Ukelele",
  "ukeleleCard.jpeg",
  "ukeleleIcon.png",
)

export const cursos = [
  iniciazion,
  guitarraAcustica,
  guitarraClasica,
  guitarraElectrica,
  bajoElectrico,
  ukelele,
]
