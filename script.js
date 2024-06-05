document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const pioneer = urlParams.get("pioneer");
  if (pioneer) {
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item, index) => {
      if (item.dataset.pioneer === pioneer) {
        $(".carousel").carousel(index);
      }
    });
  }
});
