/* =====================================================
   1. TES CATÉGORIES ET TES CARTES : c'est ici que tu édites
   ===================================================== */

// Chaque catégorie a une couleur (filtres et pastilles)
const CATEGORIES = {
  "Cartographie web":        "#2B8A9E",
  "Télédétection":           "#2F6FA3",
  "Cartographie thématique": "#B58B2A",
  "Analyse spatiale":        "#3E7C59",
  "Relief et topographie":   "#8A5A44",
  "Réseaux et mobilité":     "#7A4FA0"
};

// Pour ajouter un projet : copie un bloc { ... } et modifie-le.
// image : une seule image. images : plusieurs images (série), chacune avec une légende.
// year et link sont facultatifs : link = adresse de la carte en ligne (bouton « Voir le projet »).
const MAPS = [
  {
    title: "Prédire la gentrification dans le Grand Paris (2026)",
    category: "Analyse spatiale",
    year: 2025,
    tools: "Python (pandas, NumPy, scikit-learn, Matplotlib), QGIS",
    images: [
      { src: "images/paris-ses-2006.png", caption: "SES 2006" },
      { src: "images/paris-ses-2016.png", caption: "SES 2016" },
      { src: "images/paris-evolution-ses.png", caption: "Évolution du SES" },
      { src: "images/paris-types-gentrification.png", caption: "Types 2006-2016" },
      { src: "images/paris-predictions-2026.png", caption: "Prédictions 2026" }
    ],
    description: "Ces cartes sont issues de mon travail de master qui cherche à prédire la gentrification dans la Métropole du Grand Paris à l'horizon 2026. À partir des recensements de l'INSEE de 2006 et 2016, un indice de statut socio-économique (SES) a été calculé pour chaque IRIS par analyse en composantes principales. Les IRIS ont été classés selon l'évolution de cet indice (ascendant, stable, déclinant), puis ceux qui se gentrifient ont été regroupés par clustering en trois types : marginale, classique et super-gentrification. Deux méthodes d'ensemble, Random Forest et Gradient Boosting Machine (GBM), ont été comparées pour prédire les IRIS gentrifiés en 2026. Les IRIS en progression se concentrent dans Paris et à l'ouest de la métropole, ceux en déclin surtout à l'est et au nord-est.",
    skills: ["Analyse des données (Python: pandas, NumPy", "Préparation et traitement de données de recensement (échelle IRIS)", "Machine Learning (Random Forest et Gradient Boosting)", "Constrcution d'indicateurs (indice socio-économique)", "Visualisation et cartographie de données (Matplotlib)"]
  },
  {
    title: "Évolution de l'occupation du sol par canton",
    category: "Cartographie web",
    year: 2023,
    image: "images/web-occupation-sol.png",
    tools: "JavaScript, D3.js, HTML, CSS",
    link: "https://aaeilo.github.io/Land-cover-change-Switzerland/",
    description: "Application web interactive pour explorer l'évolution de l'occupation du sol en Suisse, canton par canton. Un menu permet de choisir le type d'occupation (urbain, agricole, boisé, improductif) et un curseur temporel de changer d'année. La carte colore chaque canton selon la part de surface concernée. Un clic sur un canton affiche un diagramme en barres de la superficie de chaque occupation, avec la surface totale et l'année.",
    skills: ["Carte interactive", "Visualisation avec D3.js", "Curseur temporel", "Diagramme lié à la carte"]
  },
  {
    title: "Espaces protégés de Namibie",
    category: "Cartographie web",
    year: 2022,
    image: "images/web-namibie.png",
    tools: "JavaScript, HTML, CSS",
    link: "https://aaeilo.github.io/Namibia-protected-area/",
    description: "Carte interactive pédagogique sur la gestion durable des ressources naturelles en Namibie, à travers ses quatre types d'espaces protégés : parcs nationaux, réserves naturelles, communes conservatoires et zone maritime. Un panneau permet d'afficher ou de masquer chaque type. Un clic sur une zone ouvre une fiche avec une photo et un texte sur la faune, la flore et le mode de gestion. Les communes conservatoires, gérées par les communautés locales, couvrent environ 20 % du territoire.",
    skills: ["Carte web interactive", "Gestion de couches", "Fiches d'information", "Vulgarisation scientifique"]
  },
  {
    title: "Croissance de New Cairo (1984-2022)",
    category: "Télédétection",
    year: 2022,
    tools: "Google Earth Engine (JavaScript), QGIS",
    images: [
      { src: "images/newcairo-1984.png", caption: "1984" },
      { src: "images/newcairo-1994.png", caption: "1994" },
      { src: "images/newcairo-2004.png", caption: "2004" },
      { src: "images/newcairo-2014.png", caption: "2014" },
      { src: "images/newcairo-2022.png", caption: "2022" }
    ],
    description: "Cette série suit l'extension urbaine de New Cairo (Égypte) entre 1984 et 2022. Les images satellites Landsat ont été classées avec un algorithme de Machine Learning (Random Forest) dans Google Earth Engine, au moyen d'un script JavaScript. Les résultats ont été exportés en GeoTIFF, puis vectorisés et mis en page dans QGIS. La ville passe de quelques taches isolées en 1984 à un tissu continu à l'ouest en 2022. Les capteurs diffèrent selon les années (Landsat 5, 7 et 8), la comparaison entre dates demande donc de la prudence.",
    skills: ["Google Earth Engine", "Classification Random Forest", "Imagerie Landsat", "Conversion raster-vecteur", "Mise en page comparable"]
  },
  {
    title: "Typologie des communes",
    category: "Cartographie thématique",
    year: 2023,
    tools: "QGIS",
    image: "images/typologie-communes.png",
    description: "Cette carte présente la répartition des types de communes (ville-centre, centre principal, multi-orientée, centre hors agglomération, rurale) dans ma zone d'étude. La classification de l'OFS a été jointe aux communes de Swisstopo grâce au numéro OFS, puis symbolisée par catégories, avec un carton de localisation. Les communes urbaines se concentrent à l'ouest autour des lacs, tandis que l'est est surtout rural.",
    skills: ["Jointure attributaire", "Symbologie catégorisée", "Carton de localisation", "Mise en page"]
  },
  {
    title: "Une majorité défavorable",
    category: "Cartographie thématique",
    year: 2023,
    tools: "QGIS",
    image: "images/votation-federale.png",
    description: "Cette carte montre le résultat communal de la votation fédérale du 13 février 2022 sur le train de mesures en faveur des médias, en part de oui (%). Les données de l'OFS ont été nettoyées et converties, puis jointes aux communes. La classification graduée est symétrique autour de 50 %, avec une palette divergente rouge-vert. Toute la zone d'étude est en dessous de 50 % de oui, la plupart des communes entre 20 et 40 %.",
    skills: ["Nettoyage de données OFS", "Jointure attributaire", "Classification graduée", "Palette divergente"]
  },
  {
    title: "Points d'intérêt et altitude à Schwende-Rüte",
    category: "Relief et topographie",
    year: 2023,
    tools: "QGIS, swissALTI3D",
    image: "images/courbes-niveau.png",
    description: "Cette carte situe les points d'intérêt de la commune de Schwende-Rüte (AI) selon leur altitude. Le modèle numérique de terrain swissALTI3D a servi à calculer l'altitude de chaque point et à extraire des courbes de niveau tous les 10 m, ensuite simplifiées, lissées et filtrées. Les courbes sont hiérarchisées en trois niveaux, les principales étant étiquetées. Cinq points sont étiquetés : les deux plus hauts, les deux plus bas et un d'altitude moyenne.",
    skills: ["Extraction d'altitudes depuis un MNT", "Courbes de niveau", "Simplification et lissage", "Style par règles", "Étiquetage conditionnel"]
  },
  {
    title: "Évolution de l'occupation du sol (1985-2018)",
    category: "Analyse spatiale",
    year: 2023,
    tools: "QGIS",
    image: "images/evol-occupation-sol.png",
    description: "Cette carte montre les hectares dont l'occupation du sol a changé entre 1985 et 2018 dans ma zone d'étude. Les deux rasters de la statistique de la superficie de l'OFS ont été comparés pixel par pixel avec la calculatrice raster pour produire un raster binaire (0 sans changement, 1 avec changement). Au total, 3 638 ha ont changé. Les bâtiments d'OpenStreetMap et un masque gris autour de la zone d'étude la mettent en évidence.",
    skills: ["Calculatrice raster", "Statistiques zonales", "Données raster et vectorielles", "Polygones inversés", "Légende manuelle"]
  },
  {
    title: "Centralité des bâtiments (POI de loisirs)",
    category: "Analyse spatiale",
    year: 2023,
    tools: "QGIS, Python",
    image: "images/centralite-batiments.png",
    description: "Cette carte mesure la centralité des bâtiments de ma zone d'étude vis-à-vis des POI de loisirs, c'est-à-dire le nombre de POI situés dans un rayon de 650 m autour de chaque bâtiment. Les données OpenStreetMap ont été traitées avec des centroïdes, des zones tampons et une jointure spatiale avec comptage, puis représentées en symboles proportionnels (compensation de Flannery). Les bâtiments les mieux dotés se concentrent dans la zone urbanisée au pied de la remontée mécanique.",
    skills: ["Zones tampons", "Jointure spatiale avec résumé", "Symboles proportionnels", "Script Python"]
  },
  {
    title: "Densité du bâti",
    category: "Cartographie thématique",
    year: 2023,
    tools: "QGIS",
    image: "images/densite-batiments.png",
    description: "Cette carte montre la part de surface occupée par les bâtiments dans chaque cellule d'une grille régulière de 50 m sur 50 m. La grille a été croisée avec les bâtiments OpenStreetMap par analyse de superposition, puis la surface bâtie a été rapportée à celle de la cellule. Les cellules sans bâtiments sont masquées. Le bâti est regroupé dans le village au pied de la remontée, avec quelques cellules isolées le long de la ligne.",
    skills: ["Grille régulière", "Analyse de superposition", "Calcul de champs", "Classification choroplèthe"]
  },
  {
    title: "Impact visuel de la remontée mécanique Gütsch-Express",
    category: "Analyse spatiale",
    year: 2023,
    tools: "QGIS, Visibility Analysis",
    image: "images/impact-visuel-rm.png",
    description: "Cette carte estime l'impact visuel théorique de la remontée mécanique Gütsch-Express. Une analyse de visibilité sur le modèle numérique de terrain a compté, pour chaque point, le nombre de pylônes visibles (leurs hauteurs sont simulées pour l'exercice). Le résultat a été normalisé, rééchantillonné à 50 m, puis croisé avec la densité du bâti selon une matrice de décision pour obtenir trois niveaux d'impact. L'impact fort se concentre dans la zone habitée en bas à gauche.",
    skills: ["Analyse de visibilité", "Calculatrice raster", "Rééchantillonnage", "Rastérisation", "Analyse multicritère"]
  },
  {
    title: "Itinéraires rapides de livraison de pizza",
    category: "Réseaux et mobilité",
    year: 2023,
    tools: "QGIS, Modeleur graphique",
    image: "images/pizzeria-itineraires.png",
    description: "Cette carte montre les itinéraires les plus rapides d'une pizzeria vers 12 adresses tirées au hasard dans ma zone d'étude, composée de trois communes urbaines adjacentes. Un modèle documenté du Modeleur graphique calcule les trajets sur le réseau routier OpenStreetMap, en tenant compte des sens de circulation et des vitesses, et le temps moyen de livraison. Le trajet le plus long est mis en évidence en rouge.",
    skills: ["Modeleur graphique", "Calcul d'itinéraires", "Contraintes de sens et de vitesse", "Extraction aléatoire"]
  },
  {
    title: "Zones de desserte des arrêts de bus",
    category: "Réseaux et mobilité",
    year: 2023,
    tools: "QGIS, Modeleur graphique",
    image: "images/desserte-arrets.png",
    description: "Cette carte montre les zones que l'on peut atteindre à pied depuis les arrêts de transport public de la partie nord de ma zone d'étude, par classes de 250, 500 et 750 m le long du réseau routier. Les trois calculs ont été enchaînés dans un modèle documenté. Chaque tronçon est affiché dans la plus petite classe de distance où il se trouve. Le centre est bien desservi, les extrémités beaucoup moins.",
    skills: ["Zones de desserte sur réseau", "Modeleur graphique", "Préparation d'un réseau routier", "Fusion de couches"]
  },
  {
    title: "Proximité des arrêts de bus selon les types de POI",
    category: "Réseaux et mobilité",
    year: 2023,
    tools: "QGIS, QNEAT3, Modeleur graphique",
    image: "images/bus-plus-proche-poi.png",
    description: "Cette carte relie, pour trois catégories de points d'intérêt (loisirs, commerces, équipements publics), un échantillon aléatoire de POI à l'arrêt de bus le plus proche selon le réseau routier. Un modèle documenté calcule une matrice origine-destination, puis la liaison la plus courte est représentée par une ligne droite classée en trois niveaux : proche, moyennement éloignée et lointaine. Trois cartes juxtaposées permettent de comparer les catégories.",
    skills: ["Matrice origine-destination", "Analyse de plus proche installation", "Classification ordinale", "Cartes multiples"]
  }
];

/* =====================================================
   2. CODE DU SITE (tu peux le laisser tel quel)
   ===================================================== */

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const dialog = document.getElementById("detail");
const vis = document.getElementById("detail-visual");
let active = "Toutes";
let current = null;

const imgs = m => m.images || (m.image ? [{ src: m.image, caption: "" }] : []);
const meta = m => m.category + (m.year ? ", " + m.year : "");

// Visuel de remplacement : courbes de niveau générées à partir du titre
function placeholder(seed, color) {
  let h = 0;
  for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const rnd = () => (h = (h * 1664525 + 1013904223) >>> 0) / 4294967296;
  const cx = 150 + rnd() * 100, cy = 100 + rnd() * 100;
  let rings = "";
  for (let i = 1; i <= 9; i++) {
    const rx = i * 22 + rnd() * 10, ry = i * 15 + rnd() * 8;
    rings += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${rnd() * 40 - 20} ${cx} ${cy})"/>`;
  }
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Aperçu à remplacer"><rect width="400" height="300" fill="#EEF3F0"/><g fill="none" stroke="${color}" stroke-width="1.6" opacity=".85">${rings}</g></svg>`;
}

function visual(m, k = 0) {
  const l = imgs(m);
  if (!l.length) return placeholder(m.title, CATEGORIES[m.category] || "#0F2229");
  return `<img src="${l[k].src}" alt="${m.title}${l[k].caption ? " (" + l[k].caption + ")" : ""}">`;
}

function renderFilters() {
  const names = ["Toutes", ...Object.keys(CATEGORIES)];
  filters.innerHTML = names.map(n =>
    `<button type="button" aria-pressed="${n === active}" data-cat="${n}">${n === "Toutes" ? "" : `<span class="dot" style="--c:${CATEGORIES[n]}"></span>`}${n}</button>`).join("");
}

function renderGrid() {
  const list = MAPS.filter(m => active === "Toutes" || m.category === active);
  grid.innerHTML = list.map(m => {
    const n = imgs(m).length;
    return `<li><button type="button" class="card" data-i="${MAPS.indexOf(m)}">
      <div class="thumb">${visual(m)}${n > 1 ? `<span class="badge">${n} cartes</span>` : ""}</div>
      <h3>${m.title}</h3>
      <p class="meta"><i style="--c:${CATEGORIES[m.category]}"></i>${meta(m)}</p>
    </button></li>`;
  }).join("");
}

function show(k) {
  const l = imgs(current);
  vis.querySelector(".stage").innerHTML = visual(current, k);
  vis.querySelector(".cap").textContent = l[k] ? l[k].caption : "";
  vis.querySelectorAll(".strip button").forEach((b, i) => b.setAttribute("aria-pressed", i === k));
}

filters.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  active = b.dataset.cat;
  renderFilters();
  renderGrid();
});

grid.addEventListener("click", e => {
  const b = e.target.closest(".card");
  if (!b) return;
  current = MAPS[b.dataset.i];
  const l = imgs(current);
  vis.innerHTML = `<div class="stage"></div><p class="cap"></p>` +
    (l.length > 1 ? `<div class="strip">${l.map((x, i) => `<button type="button" data-k="${i}">${x.caption || i + 1}</button>`).join("")}</div>` : "");
  show(0);
  document.getElementById("detail-title").textContent = current.title;
  document.getElementById("detail-meta").textContent = `${meta(current)}. Outils : ${current.tools}`;
  document.getElementById("detail-desc").textContent = current.description;
  document.getElementById("detail-skills").innerHTML = current.skills.map(s => `<li>${s}</li>`).join("");
  const a = document.getElementById("detail-link");
  a.hidden = !current.link;
  a.href = current.link || "#";
  dialog.showModal();
});

vis.addEventListener("click", e => {
  const b = e.target.closest(".strip button");
  if (b) show(+b.dataset.k);
});

document.getElementById("close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });

// Coordonnées (approx. Suisse) qui suivent la souris dans le hero
const hero = document.getElementById("hero");
const readout = document.getElementById("readout");
hero.addEventListener("pointermove", e => {
  const r = hero.getBoundingClientRect();
  const lon = 5.95 + ((e.clientX - r.left) / r.width) * (10.5 - 5.95);
  const lat = 47.8 - ((e.clientY - r.top) / r.height) * (47.8 - 45.8);
  readout.textContent = `${lat.toFixed(4)}° N   ${lon.toFixed(4)}° E`;
});
readout.textContent = "46.5197° N   6.6323° E";

document.getElementById("year").textContent = new Date().getFullYear();
renderFilters();
renderGrid();
