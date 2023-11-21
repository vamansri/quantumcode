import React, { useEffect, useState } from 'react';
import './wp2style.css';

function WebPage3() {
  const [dynamicText, setDynamicText] = useState(null);
  const words = ["react", "angular", "my sql", "springboot"];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    setDynamicText(document.querySelector("h2 span"));
    typeEffect();
  }, []);

  const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);

    if (dynamicText) {
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
    }

    if (!isDeleting && charIndex < currentWord.length) {

      charIndex++;
      setTimeout(typeEffect,100);
    } else if (isDeleting && charIndex > 0) {

      charIndex--;
      setTimeout(typeEffect, 100);
    } else {

      isDeleting = !isDeleting;

      if (dynamicText) {
        dynamicText.classList.remove("stop-blinking");
      }

      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 1400);
    }
  };

  return null;
}

export default WebPage3;
