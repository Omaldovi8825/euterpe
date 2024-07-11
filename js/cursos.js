class Curso {
  constructor(id, nombre, img, link) {
    this.id = id
    this.nombre = nombre
    this.img = img
    this.link = link
  }
}

const cursoIniziacion = new Curso(
  1,
  "Iniciazión musical",
  "iniciazionCard.jpeg",
  "guitarra-clasica"
)
const cursoGuitarraAcustica = new Curso(
  2,
  "Guitarra acústica",
  "guitAcusticaCard.jpeg",
  "guitarra-clasica"
)
const cursoGuitarraClasica = new Curso(
  3,
  "Guitarra clásica",
  "guitClasicaCard.jpeg",
  "guitarra-clasica"
)
const cursoGuitarraElectrica = new Curso(
  4,
  "Guitarra eléctrica",
  "guitElectricaCard.webp",
  "guitarra-clasica"
)
const cursoBajoElectrico = new Curso(
  5,
  "Bajo eléctrico",
  "bajoCard.jpeg",
  "guitarra-clasica"
)
const cursoUkelele = new Curso(
  6,
  "Ukelele",
  "ukeleleCard.jpeg",
  "guitarra-clasica"
)

export const cursos = [
  cursoIniziacion,
  cursoGuitarraAcustica,
  cursoGuitarraClasica,
  cursoGuitarraElectrica,
  cursoBajoElectrico,
  cursoUkelele,
]
