// import { createApp } from "vue"
const { createApp } = Vue
import { Header } from "../components/header.js"
import { contacto } from "../contacto.js"

createApp({
  components: {
    mainHeader: Header,
  },
  data(){
    return {
      contacto,
    }
  },
  computed: {
    direccion() {
      return this.contacto.direccion
    },
  },
}).mount("#app")
