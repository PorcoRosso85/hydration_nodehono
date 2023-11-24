export const gridDnd = document.addEventListener(
  "DOMContentLoaded",
  function () {
    const grid = document.getElementById("grid");

    // 100個のセルを生成
    for (let i = 0; i < 100; i++) {
      let cell = document.createElement("div");
      cell.classList.add("grid-item");
      grid.appendChild(cell);
    }

    // ドラッグアンドドロップの機能
    const draggables = document.querySelectorAll(".draggable");
    const gridItems = document.querySelectorAll(".grid-item");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    gridItems.forEach((item) => {
      item.addEventListener("dragover", (e) => {
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        item.appendChild(draggable);
      });
    });
  }
);
