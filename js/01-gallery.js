// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:
// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на ul.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.
//Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
//Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryOfImg = document.querySelector(".gallery");
//console.log(galleryOfImg);
//console.log("galleryItems", galleryItems);

const imgGalery = galleryItems.map((image) => {
  const newImg = `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
  return newImg;
});

galleryOfImg.insertAdjacentHTML("afterbegin", imgGalery.join(""));

galleryOfImg.addEventListener("click", openOriginalImg);

let instance;
function openOriginalImg(event) {
  //console.log(event.target.dataset.source);

  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`
      <img src = "${event.target.dataset.source}" width="800" height="600"/>
  `);

  instance.show();
}

window.addEventListener("keydown", closeOriginalImg);

function closeOriginalImg(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  window.removeEventListener("keydown", openOriginalImg);
}
