// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
//Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
//Необходимо добавить ссылки на два файла: simple - lightbox.min.js и simple - lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в ul.gallery.
//Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt.
//Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryOfImg = document.querySelector(".gallery");

const imgGalery = galleryItems.map((image) => {
  const newImg = `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
  return newImg;
});

galleryOfImg.insertAdjacentHTML("afterbegin", imgGalery.join(""));

galleryOfImg.addEventListener("click", openOriginalImg);

function openOriginalImg(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }
}
createLightbox();

function createLightbox() {
  const lightbox = new SimpleLightbox(".gallery a", {
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
