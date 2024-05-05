// Date du mariage (année, mois - 1, jour)
var weddingDate = new Date(2024, 8, 28); // Mois est 0-indexé (0 = janvier, 1 = février, etc.)

// Fonction pour mettre à jour le compteur
function updateCountdown() {
    var now = new Date();
    var difference = weddingDate - now;

    if (difference <= 0) {
        // Le mariage est déjà passé
        document.getElementById('countdown').innerHTML = "Le mariage est passé!";
    } else {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = days + "j " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }
}

// Mettre à jour le compteur toutes les secondes
setInterval(updateCountdown, 1000);

// Mettre à jour le compteur immédiatement au chargement de la page
updateCountdown();
