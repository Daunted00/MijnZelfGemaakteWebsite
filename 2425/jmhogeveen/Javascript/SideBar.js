document.addEventListener("DOMContentLoaded", function () {
  console.log("Bestand geladen");

  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', function (event) {
      event.stopPropagation(); // Voorkomt dat de klik direct het menu sluit
      menu.classList.toggle('hidden');
      console.log("Button pressed");
    });

    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    });
  } else {
    console.warn("menuToggle of menu niet gevonden op deze pagina.");
  }
});


