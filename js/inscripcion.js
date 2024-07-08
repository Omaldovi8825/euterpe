import { createApp, ref } from "vue"

createApp({
  data() {
    return {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      dtNacimiento: "",
      tipoCurso: 1,
      tipoModalidad: 1,
    }
  },
  computed: {
    esMayorEdad() {
      const dtNacimiento = new Date(this.dtNacimiento)
      if (isNaN(dtNacimiento)) return false

      const dtActual = new Date()
      const dtActualMx = dtActual.toLocaleDateString("es-MX", {
        timeZone: "CST",
      })
      const dtActualArray = dtActualMx.split("/")
      const diaActual = Number(dtActualArray[0])
      const mesActual = Number(dtActualArray[1])
      const anioActual = Number(dtActualArray[2])

      const dtNacimientoMx = dtNacimiento.toLocaleDateString("es-MX", {
        timeZone: "UTC",
      })
      const dtaNacimientoArray = dtNacimientoMx.split("/")
      const diaNac = Number(dtaNacimientoArray[0])
      const mesNac = Number(dtaNacimientoArray[1])
      const anioNac = Number(dtaNacimientoArray[2])

      const diffAnios = anioActual - anioNac

      if (diffAnios < 18) return false
      if (diffAnios === 18) {
        if (mesActual > mesNac) return true
        if (mesActual === mesNac) {
          if (diaActual >= diaNac) return true
        }
        return false
      }

      return true
    },
    showContactoEmergencia() {
      return this.tipoModalidad == 1
    },
  },
  methods: {
    enviarForma() {
      console.log({
        nombre: this.nombre,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        dtNacimiento: this.dtNacimiento,
      })
    },
  },
}).mount("#form")
