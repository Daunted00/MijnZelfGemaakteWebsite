document.getElementById("contactForm").addEventListener("submit", function(collectData) 
{   collectData.preventDefault(); //de funcie wordt aangeroepen en preventDefault zorgt ervoor dat de pagina niet herlaad na de functie.
   
    const name = document.getElementById("name").value; // name ophalen
    const email = document.getElementById("email").value; // email ophalen
    const message = document.getElementById("message").value; // message ophalen
    console.log(name + ' ' + email + ' ' + message) // om te kijken of het werkt
    
    // (Optioneel) Plaats hier de code om het formulier naar een server te sturen.
    // Dit kan bijvoorbeeld met fetch() als je een API hebt om de gegevens te verwerken.
  
    document.getElementById("responseMessage").textContent = "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op."; // Toon een bevestigingsbericht
  
    document.getElementById("contactForm").reset(); // Velden leegmaken
  });

  