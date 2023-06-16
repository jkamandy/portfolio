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


  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    var items = document.getElementsByClassName('my-name');

    for (var i = 0; i < items.length; i++) {
      if (isInViewport(items[i])) {
        items[i].style.opacity = 0; // Make the item visible
      }
    }
  }

  // Attach scroll event listener to the container element
  document.getElementById('my-name-container').addEventListener('scroll', handleScroll);