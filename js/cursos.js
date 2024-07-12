class Curso {
  constructor(id, nombre, img, icono, link) {
    this.id = id
    this.nombre = nombre
    this.img = img
    this.icono = icono
    this.link = link
  }
}

export const iniziacion = new Curso(
  1,
  "Iniciazión musical",
  "iniciazionCard.jpeg",
  "pentagramaIcon.png",
  "guitarra-clasica"
)
export const guitarraAcustica = new Curso(
  2,
  "Guitarra acústica",
  "guitAcusticaCard.jpeg",
  "acusticGuitarIcon.png",
  "guitarra-clasica"
)
export const guitarraClasica = new Curso(
  3,
  "Guitarra clásica",
  "guitClasicaCard.jpeg",
  "clasGuitarIcon.png",
  "guitarra-clasica"
)
export const guitarraElectrica = new Curso(
  4,
  "Guitarra eléctrica",
  "guitElectricaCard.webp",
  "electricGuitarIcon.png",
  "guitarra-clasica"
)
export const bajoElectrico = new Curso(
  5,
  "Bajo eléctrico",
  "bajoCard.jpeg",
  "bassIcon.png",
  "guitarra-clasica"
)
export const ukelele = new Curso(
  6,
  "Ukelele",
  "ukeleleCard.jpeg",
  "ukeleleIcon.png",
  "guitarra-clasica"
)

export const cursos = [
  iniziacion,
  guitarraAcustica,
  guitarraClasica,
  guitarraElectrica,
  bajoElectrico,
  ukelele,
]
