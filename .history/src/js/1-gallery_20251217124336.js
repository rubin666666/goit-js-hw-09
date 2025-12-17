import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: "images/img1-preview.jpg",
    original: "images/img1.jpg",
    description: "Image 1",
  },
  {
    preview: "images/img2-preview.jpg",
    original: "images/img2.jpg",
    description: "Image 2",
  },
];

const gallery = document.querySelector(".gallery");
gallery.innerHTML = images.map(
  ({ preview, original, description }) => `
    <li>
      <a href="${original}">
        <img src="${preview}" alt="${description}" />
      </a>
    </li>`
).join("");

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
