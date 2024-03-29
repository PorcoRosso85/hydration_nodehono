import { sortHydration } from '@hydration_hononode/sort'
// import { sortHydration } from "@hydration_hononode/sort";
// import { cartUpdate } from "../../../components/src/cart/client";
// import { gridDnd } from "../../../unxxxed/grid/components/src/client";
// import { scrollThreeDemension } from "../../../components/src/three/client";
// import {
//   createTunnelEffect,
//   updateTunnelPosition,
// } from "../../../unxxxed/basic-route/components/client";
import { closeModal, imageCanvasEditor, mapLibre, noticesHandler } from '@petittech/works'
import Alpine from 'alpinejs'

// お悩みポイント 1
Alpine.directive('destroy', (el, { expression }, { evaluateLater, cleanup }) => {
  const clean = evaluateLater(expression)
  cleanup(() => clean())
})
Alpine.store('auth', {
  currentUser: null,
})

// @ts-ignore
window.Alpine = Alpine

window.addEventListener('load', (_event) => {
  // @ts-ignore
  window.Alpine.start()
})

// // TODO: route pattern
window.addEventListener('DOMContentLoaded', sortHydration)
// cartUpdate;
// // gridDnd;
// // scrollThreeDemension;
// document.addEventListener("DOMContentLoaded", createTunnelEffect);
// window.addEventListener("scroll", updateTunnelPosition);

// closeModal()
noticesHandler()
// mapLibre()
window.addEventListener('DOMContentLoaded', imageCanvasEditor())
