$(function () {
  var splide = new Splide(".splide", {
    direction: "ttb",
    arrows: false,
    drag: true,
    wheel: true,
    releaseWheel: true,
    perPage: 1,
    perMove: 1,
    width: 430,
    height: 640,
  });
  splide.mount();
});
