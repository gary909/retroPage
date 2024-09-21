document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".line");
  const cursor = document.getElementById("cursor");

  let lineIndex = 0;
  let charIndex = 0;
  const typingSpeed = 5; // Speed of typing effect

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

/***************************SPLASH SCREEN******************************** */

// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Set a timeout for 500 milliseconds (0.5 seconds)
  setTimeout(function () {
    var splash = document.getElementById("splash");
    var mainContent = document.getElementById("main-content");

    // Start the fade-out transition
    splash.style.opacity = "0";

    // After the transition duration, hide the splash and show the main content
    setTimeout(function () {
      splash.style.display = "none";
      mainContent.style.display = "block";
    }, 500); // Match this duration with the CSS transition
  }, 500); // Initial display duration for the splash screen
});
