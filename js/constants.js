const hostName = location.hostname
const ghHos = "omaldovi8825.github.io"

let homeUrl = "/"
let imagesBaseUrl = "/assets/images"
let cursosBaseUrl = "/cursos"
let maestrosBaseUrl = "/maestros"

if (hostName === ghHos) {
  homeUrl = `/euterpe${homeUrl}`
  imagesBaseUrl = `/euterpe${imagesBaseUrl}`
  cursosBaseUrl = `/euterpe${cursosBaseUrl}`
  maestrosBaseUrl = `/euterpe${maestrosBaseUrl}`
}

export { homeUrl, imagesBaseUrl, cursosBaseUrl, maestrosBaseUrl }
