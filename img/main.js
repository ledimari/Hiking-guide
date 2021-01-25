function handleHorisontalTransform(event) {
  document.querySelectorAll('.parallax').forEach(parallax => {
    let speed = parallax.getAttribute('data-speed');
    let inverse = parallax.getAttribute('data-inverse');

    const isInverse = inverse === "1" // нужно чтобы понимать добавлять ли минус
    const cursorProgress = 100 / (window.innerWidth / event.clientX) // от 0 до 100

    const offset = isInverse ? 10 : -10
    const minMaxValue = isInverse ? (cursorProgress / 5) / speed : -(cursorProgress / 5) / speed

    window.requestAnimationFrame(() => {
      parallax.style.transform = `translateX(${minMaxValue - offset}px)`
    })
  });;
}

function handleMouseMove(event) {
  handleHorisontalTransform(event);
}

(function() {
  document.addEventListener('mousemove', handleMouseMove);
})()