// script.js
const ghosts = [
    {
        name: "Banshee",
        characteristics: "Cible un joueur au hasard au début de la partie, et change de cible une fois qu'il meurt ou quitte la partie.",
        hunt: "Chasse uniquement un joueur ciblé.",
        speed: "1,7 m/s (base), 2,8 m/s (max)",
        evidence: "Empreintes, Orbes, D.O.T.S."
    },
    {
        name: "Démon",
        characteristics: "Le délai minimum entre 2 chasses normales est de 20 secondes (au lieu de 25). L'encens l'empêche de chasser pendant 60 secondes (au lieu de 90).",
        hunt: "Chasse fréquemment et à des niveaux de santé plus élevés.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Spirit Box, Écriture, EMF 5."
    },
    {
        name: "Yurei",
        characteristics: "En utilisant son pouvoir, il enlève 15% de santé mentale aux joueurs à moins de 7,5 mètres de lui et ferme une porte de sa pièce entièrement.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Écriture, D.O.T.S."
    },
    {
        name: "Fantôme",
        characteristics: "N'apparaît pas sur les photos et celles-ci ne sont pas brouillées. Clignotement lent, il est invisible pendant un minimum de 1 seconde contre 0,3 à 1 seconde pour les autres entités.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,7 m/s (base), 3,0 m/s (max)",
        evidence: "Orbes, Spirit Box, EMF 5."
    },
    {
        name: "Spectre",
        characteristics: "Ne peut pas marcher dans le sel et ne laisse donc pas d'empreintes de pas. Peut se téléporter vers un joueur aléatoire.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, EMF 5, D.O.T.S."
    },
    {
        name: "Esprit",
        characteristics: "L'encens l'empêche de chasser pendant 180 secondes (au lieu de 90).",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,7 m/s (base), 2,8 m/s (max)",
        evidence: "Spirit Box, Écriture, EMF 5."
    },
    {
        name: "Goryo",
        characteristics: "Ne peut pas changer de pièce favorite (sauf si on utilise le vœu de santé mentale à la Patte de singe). Les D.O.T.S. ne sont visibles qu'à la caméra et si personne ne se trouve dans sa pièce.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 3,0 m/s (max)",
        evidence: "Orbes, Écriture, D.O.T.S."
    },
    {
        name: "Hantu",
        characteristics: "Ne peut pas allumer le disjoncteur. Il n'accélère pas à la vue du joueur, mais uniquement à la température des pièces qu'il traverse.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Spirit Box, EMF 5."
    },
    {
        name: "Djinn",
        characteristics: "Ne peut pas éteindre directement le disjoncteur. Si le disjoncteur est allumé, il peut drainer 25% de santé mentale à tous les joueurs à moins de 3 mètres ou dans la même pièce. Il n'accélère pas, mais passe à sa vitesse maximale instantanément à la vue du joueur, et ralentit à 2 m du joueur ou s'il le perd de vue.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "2,0 m/s (base), 3,0 m/s (max)",
        evidence: "Orbes, Spirit Box, D.O.T.S."
    },
    {
        name: "Revenant",
        characteristics: "Plus lent, mais plus rapide quand il voit une victime.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,0 m/s (base), 3,0 m/s (max)",
        evidence: "Orbes, Écriture, EMF 5."
    },
    {
        name: "Ombre",
        characteristics: "Évite de chasser si plusieurs joueurs sont présents.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Écriture, D.O.T.S."
    },
    {
        name: "Oni",
        characteristics: "A tendance à beaucoup interagir, surtout avec des joueurs à proximité. Clignotement lent, il est visible plus souvent qu'invisible pendant les chasses.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 3,0 m/s (max)",
        evidence: "Orbes, Spirit Box, EMF 5."
    },
    {
        name: "Cauchemar",
        characteristics: "Ne peut pas allumer les lumières et les radios, mais peut allumer les téléviseurs, les ordinateurs et le disjoncteur. Peut éteindre une lumière instantanément qu'un joueur vient d'allumer à moins de 4 mètres d'elle.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Spirit Box, EMF 5."
    },
    {
        name: "Jumeaux",
        characteristics: "N'est en réalité qu'une seule entité. A la possibilité de faire une double interaction, l'une à moins de 3 mètres et l'autre à moins de 16 mètres. Deux vitesses différentes possibles pendant les chasses.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Écriture, D.O.T.S."
    },
    {
        name: "Le Mimique",
        characteristics: "Copie une autre entité et ses caractéristiques toutes les 30 à 120 secondes en dehors des chasses.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Spirit Box, EMF 5."
    },
    {
        name: "Thaye",
        characteristics: "Toutes les 1 à 2 minutes, il tente de vieillir. Si un joueur se trouve dans sa pièce, son âge augmentera de 1. Sinon, il attend 30 secondes avant de tenter à nouveau.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Écriture, D.O.T.S."
    },
    {
        name: "Onryo",
        characteristics: "Tente une chasse dans un délai de 6 secondes chaque fois qu'il souffle 3 flammes. Les flammes empêchant les chasses et celles soufflées pendant les chasses comptent aussi.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Spirit Box, EMF 5."
    },
    {
        name: "Obake",
        characteristics: "Peut changer de forme.",
        hunt: "Chasse à partir de 50 % de santé.",
        speed: "1,5 m/s (base), 2,5 m/s (max)",
        evidence: "Orbes, Écriture, D.O.T.S."
    }
];


const ghostsContainer = document.getElementById('ghosts-container');

ghosts.forEach(ghost => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = ghost.name;

    const characteristics = document.createElement('p');
    characteristics.textContent = `Caractéristiques: ${ghost.characteristics}`;

    const hunt = document.createElement('p');
    hunt.textContent = `Chasse: ${ghost.hunt}`;

    const speed = document.createElement('p');
    speed.textContent = `Vitesse: ${ghost.speed}`;

    const evidence = document.createElement('p');
    evidence.textContent = `Preuves: ${ghost.evidence}`;

    card.appendChild(title);
    card.appendChild(characteristics);
    card.appendChild(hunt);
    card.appendChild(speed);
    card.appendChild(evidence);

    ghostsContainer.appendChild(card);
});
