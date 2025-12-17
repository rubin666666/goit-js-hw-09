import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "/src/img/1.jpg",
    original: "/src/img/1-1.jpg",
    description: "Image 1",
  },
  {
    preview: "/src/img/2.jpg",
    original: "/src/img/2-1.jpg",
    description: "Image 2",
  },
  {
    preview: "/src/img/3.jpg",
    original: "/src/img/3-1.jpg",
    description: "Image 3",
  },
  {
    preview: "/src/img/1.jpg",
    original: "/src/img/2-2.jpg",
    description: "Image 4",
  },
  {
    preview: "/src/img/2.jpg",
    original: "/src/img/3-2.jpg",
    description: "Image 5",
  },
  {
    preview: "/src/img/3.jpg",
    original: "/src/img/1-1.jpg",
    description: "Image 6",
  },
  {
    preview: "/src/img/1.jpg",
    original: "/src/img/2-1.jpg",
    description: "Image 7",
  },
  {
    preview: "/src/img/2.jpg",
    original: "/src/img/3-1.jpg",
    description: "Image 8",
  },
  {
    preview: "/src/img/3.jpg",
    original: "/src/img/1-1.jpg",
    description: "Image 9",
  },
];

const gallery = document.querySelector(".gallery");
gallery.innerHTML = images.map(
  ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
).join("");

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
