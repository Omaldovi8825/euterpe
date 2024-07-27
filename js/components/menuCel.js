export const MenuCel = {
  template: /*html*/ `
    <teleport to="body">
      <aside class="z-1031 position-absolute top-0 end-0 w-75 h-100 bg1">
        <div class="p-2 text-end">
          <i
            class="bi bi-x-circle text-white icon-no-space fs-1"
            @click="cerrarMenuCel"
          ></i>
        </div>
      </aside>
    </teleport>
  `,
  inject: ["cerrarMenuCel"]
}
