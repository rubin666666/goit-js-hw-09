import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "/img/1.jpg",
    original: "/img/1-1.jpg",
    description: "Image 1",
  },
  {
    preview: "/img/2.jpg",
    original: "/img/2-1.jpg",
    description: "Image 2",
  },
  {
    preview: "/img/3.jpg",
    original: "/img/3-1.jpg",
    description: "Image 3",
  },
  {
    preview: "/img/1-1.jpg",
    original: "/img/2-2.jpg",
    description: "Image 4",
  },
  {
    preview: "/img/2-1.jpg",
    original: "/img/3-2.jpg",
    description: "Image 5",
  },
  {
    preview: "/img/3-1.jpg",
    original: "/img/1.jpg",
    description: "Image 6",
  },
  {
    preview: "/img/2-2.jpg",
    original: "/img/2.jpg",
    description: "Image 7",
  },
  {
    preview: "/img/3-2.jpg",
    original: "/img/3.jpg",
    description: "Image 8",
  },
  {
    preview: "/img/1.jpg",
    original: "/img/1-1.jpg",
    description: "Image 9",
  },
];

const gallery = document.querySelector(".gallery");
console.log("Gallery element:", gallery);
console.log("Images array:", images);

gallery.innerHTML = images.map(
  ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
      </a>
    </li>`
).join("");

console.log("Gallery HTML:", gallery.innerHTML);

new SimpleLightbox(".gallery a", {
  captionsData: false,
  captionDelay: 250,
});
