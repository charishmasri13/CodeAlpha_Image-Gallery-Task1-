function openLightbox(image) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = image.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function filterImages(category) {
  const images = document.querySelectorAll('.gallery-item');
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
