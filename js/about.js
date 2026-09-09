
  /* VALUE-CARD TOGGLE */
  document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.value-card').forEach(c => { if (c !== card) c.classList.remove('active'); });
      card.classList.toggle('active');
    });
  });

  /* FAQ JS */
  const thinkingImage = "../assets/pictures/thinking.jpg";
  const ideaImage = "../assets/pictures/idea.jpg";

  function toggleFAQ(selectedCard) {
    const all = document.querySelectorAll(".faq-card");
    const character = document.getElementById("faqCharacter");

    all.forEach(c => {
      if (c !== selectedCard) c.classList.remove("active");
    });

    selectedCard.classList.toggle("active");

    character.style.opacity = "0";
    setTimeout(() => {
      character.src = selectedCard.classList.contains("active") ? ideaImage : thinkingImage;
      character.style.opacity = "1";
    }, 150);
  }

  /* keyboard support for accessibility */
  document.querySelectorAll('.faq-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFAQ(card);
      }
    });
  });
