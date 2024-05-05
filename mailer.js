    document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("envoyer-btn").addEventListener("click", function () {
        const nomPrenom = document.getElementById("nom-prenom").value;
        const mairieChecked = document.getElementById("mairie").checked ? "Oui" : "Non";
        const houppaChecked = document.getElementById("houppa").checked ? "Oui" : "Non";
        const chabbatChecked = document.getElementById("chabbat").checked ? "Oui" : "Non";
        const nePourrontAssisterChecked = document.getElementById("ne-pourront-assister").checked ? "Oui" : "Non";
        const nombrePersonnes = document.getElementById("nombre-personnes").value;
        const message = document.getElementById("message").value;

        const contenuMail = `
        Nom & Prénom: ${nomPrenom}
        Assisteront à:
          - Mairie: ${mairieChecked}
          - Houppa: ${houppaChecked}
          - Chabbat: ${chabbatChecked}
        Ne pourront assister: ${nePourrontAssisterChecked}
        Nombre de personnes: ${nombrePersonnes}
        Message aux mariés: ${message}
      `;

        // Envoyer l'e-mail via EmailJS
        emailjs.send("dT5k6_NHCBe-g2Pgr", "template_x9c35fg", {
            to_email: "raphaelmoula@gmail.com",
            content: contenuMail
        })
            .then(function(response) {
                console.log("E-mail envoyé avec succès:", response);
                alert("E-mail envoyé avec succès!");
            }, function(error) {
                console.error("Erreur lors de l'envoi de l'e-mail:", error);
                alert("Une erreur est survenue lors de l'envoi de l'e-mail. Veuillez réessayer plus tard.");
            });
    });
});
