import Sortable from "sortablejs";

export const sortHydration = () => {
  const sortTargets = document.querySelectorAll(".child");
  if (sortTargets) {
    for (let i = 0; i < sortTargets.length; i++) {
      new Sortable(sortTargets[i] as HTMLElement, {
        group: "child",
        animation: 100,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onChoose: function (evt) {
          evt.item.classList.add("highlight");
        },
        onUnchoose: function (evt) {
          evt.item.classList.remove("highlight");
        },
      });
    }
  }

  console.log("sort hydration has loaded.");
};
