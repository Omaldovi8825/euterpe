import { createApp, ref } from "vue"
import { Header } from "./components/header.js"
import { Footer } from "./components/footer.js"

createApp({
  components: {
    mainHeader: Header,
    mainFooter: Footer,
  },
  data() {
    return {
      alumno: {
        nombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        dtNacimiento: "",
        iCurso: 1,
        iModalidad: 1,
        telefono: "",
        email: "",
        direccion: {
          calle: "",
          numero: "",
          colonia: "",
          cp: "",
          ciudad: "",
          iEstado: 1,
        },
      },
      tutor: {
        nombre: "",
        iParentesco: 1,
        telCelular: "",
        telCasa: "",
        email: "",
        padecimientos: "",
        notas: "",
      },
      contactoEmergencia: {
        nombre: "",
        parentesco: "",
        telCelular: "",
        telCasa: "",
      },
    }
  },
  watch: {
    "alumno.iModalidad"() {
      this.contactoEmergencia = {
        nombre: "",
        parentesco: "",
        telCelular: "",
        telCasa: "",
      }
    },
  },
  computed: {
    esMayorEdad() {
      const dtNacimiento = new Date(this.alumno.dtNacimiento)
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
      return this.alumno.iModalidad == 1
    },
  },
  methods: {
    enviarForma() {
      console.log({
        alumno: {
          nombre: this.alumno.nombre,
          apellidoPaterno: this.alumno.apellidoPaterno,
          apellidoMaterno: this.alumno.apellidoMaterno,
          dtNacimiento: this.alumno.dtNacimiento,
          iCurso: this.alumno.iCurso,
          iModalidad: this.alumno.iModalidad,
          telefono: this.alumno.telefono,
          email: this.alumno.email,
          direccion: {
            calle: this.alumno.direccion.calle,
            numero: this.alumno.direccion.numero,
            colonia: this.alumno.direccion.colonia,
            cp: this.alumno.direccion.cp,
            ciudad: this.alumno.direccion.ciudad,
            iEstado: this.alumno.direccion.iEstado,
          },
        },
        tutor: {
          nombre: this.tutor.nombre,
          iParentesco: this.tutor.iParentesco,
          telCelular: this.tutor.telCelular,
          telCasa: this.tutor.telCasa,
          email: this.tutor.email,
          padecimientos: this.tutor.padecimientos,
          notas: this.tutor.notas,
        },
        contactoEmergencia: {
          nombre: this.contactoEmergencia.nombre,
          parentesco: this.contactoEmergencia.parentesco,
          telCelular: this.contactoEmergencia.telCelular,
          telCasa: this.contactoEmergencia.telCasa,
        },
      })
    },
  },
}).mount("#app")
