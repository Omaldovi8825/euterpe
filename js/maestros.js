import {
  guitarraAcustica,
  guitarraClasica,
  ukelele,
  bajoElectrico,
  iniciazion,
  guitarraElectrica,
} from "./cursos.js"

class Maestro {
  constructor(
    id,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    img,
    link,
    bio,
    cursos
  ) {
    this.id = id
    this.nombre = nombre
    this.apellidoPaterno = apellidoPaterno
    this.apellidoMaterno = apellidoMaterno
    this.img = img
    this.link = link
    this.bio = bio
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
  `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget velit at tellus condimentum malesuada a id felis. Nunc vel magna arcu. Donec vitae accumsan lacus, convallis vehicula ligula. Maecenas tellus eros, ullamcorper eu massa vitae, sodales consequat urna.</p>
  <p>Pellentesque nibh risus, molestie sed felis ut, interdum vehicula sapien. Morbi felis mauris, vehicula eu facilisis ut, rutrum facilisis purus. Vestibulum ac blandit est, ac vestibulum nibh. Aliquam feugiat fringilla diam, non dignissim tortor accumsan ac. Duis quis nisi rhoncus, consequat arcu a, sodales dolor. Phasellus efficitur bibendum felis tristique tempor. Integer id malesuada sapien. Morbi sit amet augue quis risus gravida pulvinar.</p>`,
  [guitarraAcustica, guitarraClasica, ukelele, bajoElectrico]
)

const nataliaT = new Maestro(
  2,
  "Natalia",
  "Tarquino",
  "Alarcón",
  "nataCard.jpeg",
  "natalia-tarquino",
  `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget velit at tellus condimentum malesuada a id felis. Nunc vel magna arcu. Donec vitae accumsan lacus, convallis vehicula ligula. Maecenas tellus eros, ullamcorper eu massa vitae, sodales consequat urna.</p>
  <p>Pellentesque nibh risus, molestie sed felis ut, interdum vehicula sapien. Morbi felis mauris, vehicula eu facilisis ut, rutrum facilisis purus. Vestibulum ac blandit est, ac vestibulum nibh. Aliquam feugiat fringilla diam, non dignissim tortor accumsan ac. Duis quis nisi rhoncus, consequat arcu a, sodales dolor. Phasellus efficitur bibendum felis tristique tempor. Integer id malesuada sapien. Morbi sit amet augue quis risus gravida pulvinar.</p>`,
  [iniciazion, guitarraAcustica, guitarraClasica, ukelele]
)

const omarM = new Maestro(
  3,
  "Omar",
  "Maldonado",
  "Villanueva",
  "omarCard.jpg",
  "omar-maldonado",
  `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget velit at tellus condimentum malesuada a id felis. Nunc vel magna arcu. Donec vitae accumsan lacus, convallis vehicula ligula. Maecenas tellus eros, ullamcorper eu massa vitae, sodales consequat urna.</p>
  <p>Pellentesque nibh risus, molestie sed felis ut, interdum vehicula sapien. Morbi felis mauris, vehicula eu facilisis ut, rutrum facilisis purus. Vestibulum ac blandit est, ac vestibulum nibh. Aliquam feugiat fringilla diam, non dignissim tortor accumsan ac. Duis quis nisi rhoncus, consequat arcu a, sodales dolor. Phasellus efficitur bibendum felis tristique tempor. Integer id malesuada sapien. Morbi sit amet augue quis risus gravida pulvinar.</p>`,
  [guitarraAcustica, guitarraElectrica]
)

export const maestros = [gabrielM, nataliaT]
