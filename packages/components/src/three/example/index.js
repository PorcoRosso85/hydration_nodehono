import { films } from "./filmslist.js";
import {
  moveCamera,
  moveCameraAngle,
  setSceneHeight,
} from "./scenesettings.js";
import { updateCardVisibility } from "./cardvisibility.js";

document.addEventListener("DOMContentLoaded", function () {
  appendFilms(films);
  window.addEventListener("scroll", () => {
    console.log("scroll listner is working");
    moveCamera();
    updateCardVisibility();
  });

  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight(films);
});

// カード更新イベントリスナ
// document
// updateSingleFilm()

function createFilmItem(film, index) {
  return `<button id="film-${index}" hx-post="/click" hx-trigger="click" hx-swap="outerHTML">
      <h2>${film.title}</h2>
      <p>Index: ${index}</p>
      <p>Year: ${film.release_date}</p>
      <p>Director: ${film.director}</p>
      <p>${film.description}</p>
    </button>`;
}

function appendFilms(films) {
  const filmsEl = document.querySelector(".viewport .scene3D");
  // // if shadow-root
  // const shadowRoot = document.querySelector("viewport-scene3d").shadowRoot;
  // const filmsEl = shadowRoot.querySelector(".viewport .scene3D");
  let filmsNodes = [];

  for (let index = 0; index < films.length; index++) {
    filmsNodes.push(createFilmItem(films[index], index));
  }

  // LightDOMへ追加
  filmsEl.innerHTML = filmsNodes.join(" ");
}
