let  galleryItems = document.querySelectorAll(".gallery-item");
let galleryImg = document.querySelector(".gallery-image");
let galleryModal = document.querySelector(".gallery-modal");

let caption = document.querySelector(".caption-text");

let closeBtn = document.querySelector(".close");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let index = 1;

function showLightBox(n) {
    if (n > galleryItems.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItems.length;
    }
    let imageLocation = galleryItems[index-1].children[0].getAttribute("src");
    let imageCaption = galleryItems[index-1].children[0].getAttribute("alt");
    galleryImg.setAttribute("src", imageLocation);
    galleryImg.setAttribute("alt", imageCaption);
    caption.innerHTML = imageCaption
}

function currentImage() {
    galleryModal.style.display = "block";
    document.body.style.overflow = "hidden";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    slideImage(-1);
}

function nextImage() {
    slideImage(1);
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

function closeModal() {
    galleryModal.style.display = "none";
    document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);