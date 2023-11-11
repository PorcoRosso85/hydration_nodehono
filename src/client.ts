import Alpine from "alpinejs";
import sort from "./sort";

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

window.onload = sort;
