import Alpine from "alpinejs";
import { sortHydration } from "../../packages/components/src/sort/client";
import { cartUpdate } from "../../packages/components/src/cart/client";
import { gridDnd } from "../../packages/unxxxed/grid/components/src/client";

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

window.addEventListener("load", sortHydration);
cartUpdate;
gridDnd;
