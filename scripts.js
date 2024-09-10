document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".line");
  const cursor = document.getElementById("cursor");

  let lineIndex = 0;
  let charIndex = 0;
  const typingSpeed = 10; // Speed of typing effect

  function typeCharacter() {
    if (lineIndex < lines.length) {
      let currentLine = lines[lineIndex].dataset.line;

      if (charIndex < currentLine.length) {
        lines[lineIndex].style.opacity = 1;
        lines[lineIndex].textContent += currentLine[charIndex];

        // Move the cursor to the correct position
        const rect = lines[lineIndex].getBoundingClientRect();
        const cursorX = rect.left + lines[lineIndex].offsetWidth + 2;
        const cursorY = rect.top + window.scrollY; // Adjust for scrolling if any
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

        charIndex++;
        setTimeout(typeCharacter, typingSpeed);
      } else {
        lines[lineIndex].textContent += "\n";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeCharacter, typingSpeed);
      }
    } else {
      cursor.style.display = "none"; // Hide cursor when typing is complete
    }
  }

  typeCharacter();
});
