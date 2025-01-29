$(document).ready(function (e) {
    console.log("Document is ready");
    $('#contactForm').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://hooks.zapier.com/hooks/catch/21323519/2kyspov/",
            type: "post",
            data: $("#contactForm").serialize(),
            success: function() {
                //redirect to another page
                document.getElementById("responseMessage").textContent = "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op."; // Toon een bevestigingsbericht

            }
        });
    });
})

