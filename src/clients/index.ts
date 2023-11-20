import Alpine from "alpinejs";
import { sortHydration } from "../../packages/components/src/sort/client";
import { cartUpdate } from "../../packages/components/src/cart/client";
import { gridDnd } from "../../packages/unxxxed/grid/components/src/client";
import { scrollThreeDemension } from "../../packages/components/src/three/client";
import {
  createTunnelEffect,
  updateTunnelPosition,
} from "../../packages/unxxxed/basic-route/components/client";

// お悩みポイント 1
Alpine.directive(
  "destroy",
  (el, { expression }, { evaluateLater, cleanup }) => {
    const clean = evaluateLater(expression);
    cleanup(() => clean());
  }
);
Alpine.store("auth", {
  currentUser: null,
});

// @ts-ignore
window.Alpine = Alpine;

window.addEventListener("load", (_event) => {
  // @ts-ignore
  window.Alpine.start();
});

// TODO: route pattern
window.addEventListener("DOMContentLoaded", sortHydration);
cartUpdate;
// gridDnd;
// scrollThreeDemension;
document.addEventListener("DOMContentLoaded", createTunnelEffect);
window.addEventListener("scroll", updateTunnelPosition);
