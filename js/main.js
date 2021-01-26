function handleHorisontalTransform(event) {
  document.querySelectorAll('.parallax').forEach(parallax => {
    const speed = parallax.getAttribute('data-speed');
    const inverse = parallax.getAttribute('data-inverse');

    const isInverse = inverse === "1" // нужно чтобы понимать добавлять ли минус
    const cursorProgress = 100 / (window.innerWidth / event.clientX) // от 0 до 100

    const offset = isInverse ? 10 : -10
    const minMaxValue = isInverse ? (cursorProgress / 5) / speed : -(cursorProgress / 5) / speed

    window.requestAnimationFrame(() => {
      parallax.style.transform = `translateX(${minMaxValue - offset}px)`
    })
  });
}

function handleVerticalTransform(event) {
  const scrollY = window.scrollY
  document.querySelectorAll('.parallax').forEach(parallax => {
    const scroll = parallax.getAttribute('data-scroll');
    const transform = (scrollY * scroll * 25) / (scrollY + 100)

    window.requestAnimationFrame(() => {
      parallax.style.transform = `translateY(-${transform}px)`;
    })
    // if (window.pageYOffset < 1300) {
    // }
  });
}

///////////////////////////
// Handlers - обработчики событий (event) type: mousemove, scroll
///////////////////////////

function handleMouseMove(event) {
  handleHorisontalTransform(event);
}

function handleScrollMove(event) {
  handleVerticalTransform(event);
}

// Init - инициализация (подключение слушателей)

(function() {
  // document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('scroll', handleScrollMove);
})()