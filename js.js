console.log("Welcome to Yosuf's Online Portfolio!")

const typewriterElements = document.querySelectorAll('.typewriter');

typewriterElements.forEach((element) => {
  const text = element.innerText;
  element.innerHTML = '';

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const span = document.createElement('span');
    span.innerText = letter;
    span.style.animationDelay = `${i * 0.1}s`;
    element.appendChild(span);
  }
});

const word = document.querySelector('.word');
const spans = word.querySelectorAll('span');

spans.forEach((span, index) => {
  span.addEventListener('mouseover', () => {
    for (let i = 0; i <= index; i++) {
      spans[i].classList.add('hovered');
    }
  });

  span.addEventListener('mouseout', () => {
    spans.forEach((span) => {
      span.classList.remove('hovered');
    });
  });
});