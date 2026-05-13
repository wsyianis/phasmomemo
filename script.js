const ghosts = [

    {
        name: "Banshee",
        characteristics: "Cible un joueur précis et reste focalisée sur lui.",
        hunt: "Chasse uniquement sa cible.",
        speed: "1,7 m/s • 2,8 m/s max",
        evidence: "Empreintes • Orbes • D.O.T.S",
        theme: "banshee",
        special: "Cible unique"
    },

    {
        name: "Démon",
        characteristics: "Très agressif et chasse souvent.",
        hunt: "20 sec entre les chasses.",
        speed: "1,5 m/s • 2,5 m/s max",
        evidence: "Spirit Box • Écriture • EMF 5",
        theme: "demon",
        special: "Encens : 60 sec"
    },

    {
        name: "Yurei",
        characteristics: "Retire de la santé mentale et ferme les portes.",
        hunt: "50% de santé mentale.",
        speed: "1,5 m/s • 2,5 m/s max",
        evidence: "Orbes • Écriture • D.O.T.S",
        theme: "yurei",
        special: "Drain mental"
    },

    {
        name: "Fantôme",
        characteristics: "Invisible plus longtemps pendant les chasses.",
        hunt: "50% de santé mentale.",
        speed: "1,7 m/s • 3,0 m/s max",
        evidence: "Orbes • Spirit Box • EMF 5",
        theme: "phantom",
        special: "peu visible"
    },

    {
        name: "Spectre",
        characteristics: "Ne marche pas dans le sel et peut se téléporter.",
        hunt: "Téléportation fréquente.",
        speed: "1,5 m/s • 2,5 m/s max",
        evidence: "Orbes • EMF 5 • D.O.T.S",
        theme: "spectre",
        special: "Tp"
    },

    {
        name: "Esprit",
        characteristics: "Très sensible à l'encens.",
        hunt: "180 sec d'arrêt avec encens.",
        speed: "1,7 m/s • 2,8 m/s max",
        evidence: "Spirit Box • Écriture • EMF 5",
        theme: "spirit",
        special: "Encens : 180 sec"
    },

    {
        name: "Goryo",
        characteristics: "Les D.O.T.S sont visibles uniquement à la caméra.",
        hunt: "Reste souvent dans sa pièce.",
        speed: "1,5 m/s • 3,0 m/s max",
        evidence: "EMF 5 • Empreintes • D.O.T.S",
        theme: "goryo",
        special: "Caméra"
    },

    {
        name: "Hantu",
        characteristics: "Plus rapide dans le froid.",
        hunt: "N'accélère pas à la vue.",
        speed: "1,4 → 2,7 m/s",
        evidence: "Empreintes • Orbes • Température glaciale",
        theme: "hantu",
        special: "Froid = vitesse"
    },

    {
        name: "Djinn",
        characteristics: "Très rapide avec le courant.",
        hunt: "Peut drainer 25% de santé mentale.",
        speed: "2,5 m/s",
        evidence: "EMF 5 • Empreintes • Spirit Box",
        theme: "djinn",
        special: "le Courant"
    },

    {
        name: "Revenant",
        characteristics: "Très lent sans vision mais ultra rapide quand il voit quelqu'un.",
        hunt: "Extrêmement dangereux.",
        speed: "1 m/s • 3 m/s",
        evidence: "Orbes • Écriture • Température glaciale",
        theme: "revenant",
        special: "Ultra rapide"
    },

    {
        name: "Ombre",
        characteristics: "Très timide avec plusieurs joueurs.",
        hunt: "Interagit très peu.",
        speed: "1,5 m/s",
        evidence: "EMF 5 • Écriture • Température glaciale",
        theme: "shade",
        special: "Très discret"
    },

    {
        name: "Oni",
        characteristics: "Très actif et visible plus longtemps.",
        hunt: "Fait énormément d'événements.",
        speed: "1,7 m/s",
        evidence: "EMF 5 • Spirit Box • D.O.T.S",
        theme: "oni",
        special: "clignotement"
    },

    {
        name: "Cauchemar",
        characteristics: "Éteint les lumières instantanément.apres les avoir allumer",
        speed: "1,5 m/s",
        hunt: "NOP",
        evidence: "Orbes • Spirit Box • Écriture",
        theme: "mare",
        special: "lumiere off"
    },

    {
        name: "Jumeaux",
        characteristics: "Peut faire deux interactions éloignées.",
        hunt: "Deux vitesses possibles.",
        speed: "1,5 • 1,9 m/s",
        evidence: "EMF 5 • Spirit Box • Température glaciale",
        theme: "twins",
        special: "Double interaction"
    },

    {
        name: "Le Mimique",
        characteristics: "Copie les capacités des autres fantômes.",
        hunt: "Comportement totalement variable.",
        speed: "Variable",
        evidence: "Empreintes • Spirit Box • Température glaciale",
        theme: "mimic",
        special: "Faux orbes"
    },

    {
        name: "Thaye",
        characteristics: "Vieillit progressivement.",
        hunt: "Très agressif jeune.",
        speed: "1 → 2,7 m/s",
        evidence: "Orbes • Écriture • D.O.T.S",
        theme: "thaye",
        special: "Vieillit"
    },

    {
        name: "Onryo",
        characteristics: "Déteste les flammes.",
        hunt: "Chasse après 3 flammes souffler",
        speed: "1,5 m/s",
        evidence: "Orbes • Spirit Box • Température glaciale",
        theme: "onryo",
        special: "bougie"
    },

    {
        name: "Obake",
        characteristics: "Peut changer de forme.",
        hunt: "peu changer de skin",
        speed: "1,7 m/s",
        evidence: "EMF 5 • Empreintes • Orbes",
        theme: "obake",
        special: "Transformation"
    },

    {
        name: "Deogen",
        characteristics: "Sait toujours où sont les joueurs.",
        hunt: "Très rapide loin mais lent proche.",
        speed: "3 m/s → 0,4 m/s",
        evidence: "DOTS • Écriture • Spirit Box",
        theme: "deogen",
        special: "cache cache ?"
    },

    {
        name: "Moroï",
        characteristics: "Maudit les joueurs avec la Spirit Box.",
        hunt: "l'encens le paralyse plus longtemps",
        speed: "1,5 → 3,71 m/s",
        evidence: "Écriture • Spirit Box • Température glaciale",
        theme: "moroi",
        special: "Malédiction"
    },

    {
        name: "Myling",
        characteristics: "Très silencieux pendant les chasses.",
        hunt: "on peux le voir mais ne pas l entendre",
        speed: "1,7 • 2,8 m/s",
        evidence: "Écriture • EMF 5 • Ultraviolet",
        theme: "myling",
        special: "Pas silencieux"
    },

    {
        name: "Poltergeist",
        characteristics: "Lance énormément d'objets.",
        hunt: "Très actif avec les objets.",
        speed: "1,7 • 2,8 m/s",
        evidence: "Écriture • Spirit Box • Ultraviolet",
        theme: "polter",
        special: "Objets volants"
    },

    {
        name: "Raiju",
        characteristics: "Devient rapide près des appareils électroniques.",
        hunt: "coeur bass boosted tres rapide avec lampe torche",
        speed: "1,7 • 2,5 • 2,8 m/s",
        evidence: "DOTS • EMF 5 • Orbes",
        theme: "raiju",
        special: "Électronique"
    },

    {
        name: "Gallu",
        characteristics: "Possède plusieurs états émotionnels.",
        hunt: "ne marche pas dans le sel enervé",
        speed: "1,36 → 1,96 m/s",
        evidence: "EMF 5 • UV • Spirit Box",
        theme: "gallu",
        special: "3 états"
    },

    {
        name: "Obambo",
        characteristics: "Alterne entre calme et énervé.",
        hunt: "Très agressif énervé.ne chasse pas calme",
        speed: "1,45 → 1,96 m/s",
        evidence: "DOTS • Écriture • UV",
        theme: "obambo",
        special: "bypolaire"
    },

    {
        name: "La Dayan",
        characteristics: "Détecte les mouvements proches.",
        hunt: "Plus rapide si le joueur bouge.",
        speed: "1,2 → 2,25 m/s",
        evidence: "EMF 5 • Orbes • Spirit Box",
        theme: "dayan",
        special: "pas bouger"
    }

];
/* CONTAINER */

const ghostsContainer = document.getElementById('ghosts-container');

/* ===== OVERLAY + POPUP ===== */
const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const popup = document.createElement("div");
popup.classList.add("popup");
document.body.appendChild(popup);

/* ===== OUVRIR POPUP ===== */
function openPopup(ghost) {

    popup.innerHTML = `
        <h2>${ghost.name}</h2>

        <p><strong>Caractéristiques :</strong> ${ghost.characteristics}</p>
        <p><strong>Chasse :</strong> ${ghost.hunt}</p>
        <p><strong>Vitesse :</strong> ${ghost.speed}</p>
        <p><strong>Preuves :</strong> ${ghost.evidence}</p>

        <button class="close-btn">Fermer</button>
    `;

    popup.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("modal-open");

    popup.querySelector(".close-btn").onclick = closePopup;
}

/* ===== FERMER POPUP ===== */
function closePopup() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
}

/* clic hors popup */
overlay.addEventListener("click", closePopup);

/* ===== CREATION CARTES ===== */
ghosts.forEach(ghost => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h2>${ghost.name}</h2>
        <p><strong>Caractéristiques :</strong> ${ghost.characteristics}</p>
        <p><strong>Chasse :</strong> ${ghost.hunt}</p>
        <p><strong>Vitesse :</strong> ${ghost.speed}</p>
        <p><strong>Preuves :</strong> ${ghost.evidence}</p>
    `;

    card.addEventListener("click", () => openPopup(ghost));

    ghostsContainer.appendChild(card);
});
