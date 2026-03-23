const STORAGE_KEY = "flappyKidsAcademy.v2";
const PORTAL_PROGRESS_MAX = 18;
const APP_META = {
  version: "1.0.0",
  publishedAt: "2026-03-22",
  summary: "Monedas, mundo bonus, nuevos ambientes, reto ampliado y base de actualizaciones desde GitHub."
};
const GITHUB_REPO = {
  owner: "leonard1982",
  repo: "nivel_bird",
  branch: "main"
};
const GITHUB_URLS = {
  repo: `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}`,
  releases: `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/releases`,
  commitsApi: `https://api.github.com/repos/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/commits?sha=${GITHUB_REPO.branch}&per_page=1`,
  releasesApi: `https://api.github.com/repos/${GITHUB_REPO.owner}/${GITHUB_REPO.repo}/releases/latest`
};

const difficulties = [
  { id: "muy-facil", label: "Muy Fácil", gapRatio: 0.31, speed: 3.1, spawnMs: 1780, collectibleChance: 0.52, hazardChance: 0.16 },
  { id: "facil", label: "Fácil", gapRatio: 0.27, speed: 3.55, spawnMs: 1640, collectibleChance: 0.46, hazardChance: 0.2 },
  { id: "intermedio", label: "Intermedio", gapRatio: 0.235, speed: 4.15, spawnMs: 1480, collectibleChance: 0.4, hazardChance: 0.26 },
  { id: "avanzado", label: "Avanzado", gapRatio: 0.2, speed: 4.8, spawnMs: 1340, collectibleChance: 0.34, hazardChance: 0.32 }
];

const skins = [
  { id: "sol", label: "Pajarito Sol", body: "#ffd166", wing: "#ff9f1c", cheek: "#ff6b6b", scarf: "#1a759f" },
  { id: "mint", label: "Pajarito Menta", body: "#95d5b2", wing: "#52b788", cheek: "#ff8fab", scarf: "#355070" },
  { id: "berry", label: "Pajarito Baya", body: "#f28482", wing: "#e76f51", cheek: "#ffd6a5", scarf: "#6d597a" }
];

const ageGroups = [
  { id: "4-6", label: "4-6 años" },
  { id: "7-9", label: "7-9 años" },
  { id: "10+", label: "10+ años" }
];

const learningTopics = [
  { id: "mixed", label: "Mixto" },
  { id: "colors", label: "Colores" },
  { id: "math", label: "Matemáticas" },
  { id: "letters", label: "Letras" },
  { id: "english", label: "Inglés básico" }
];

const environments = [
  { id: "garden", label: "Jardín alegre", skyTop: "#7fdfff", skyBottom: "#fff6cf", groundTop: "#7ed957", groundBottom: "#3ea64f", accent: "#ffd166", hazard: "bee", ambient: "petals", obstacleStyle: "flower", mountain: ["#87d58a", "#59b96a", "#3f9956"] },
  { id: "night", label: "Noche brillante", skyTop: "#091833", skyBottom: "#1e3563", groundTop: "#304a72", groundBottom: "#16243e", accent: "#d4c1ff", hazard: "bat", ambient: "stars", obstacleStyle: "pipe", mountain: ["#20304f", "#172540", "#101a2f"] },
  { id: "winter", label: "Invierno", skyTop: "#cfe8ff", skyBottom: "#f7fbff", groundTop: "#c3ddff", groundBottom: "#8fb4d9", accent: "#7bdff2", hazard: "ice", ambient: "snow", obstacleStyle: "icicle", mountain: ["#dbeaf5", "#bfd1e6", "#9fb8d1"] },
  { id: "lava", label: "Lava caliente", skyTop: "#421111", skyBottom: "#ff7b00", groundTop: "#4f3421", groundBottom: "#26160e", accent: "#ffb703", hazard: "fire", ambient: "embers", obstacleStyle: "pipe", mountain: ["#4a2b22", "#3a211a", "#22130e"] },
  { id: "canyon", label: "Rocas y cañón", skyTop: "#f0c27b", skyBottom: "#ffe0b2", groundTop: "#b07d54", groundBottom: "#7c5335", accent: "#e09f3e", hazard: "rock", ambient: "dust", obstacleStyle: "rock", mountain: ["#d1a67c", "#b88357", "#99633e"] },
  { id: "crystal", label: "Cristales mágicos", skyTop: "#253b6e", skyBottom: "#8ec5ff", groundTop: "#5cc8ff", groundBottom: "#345995", accent: "#b8f2e6", hazard: "crystal", ambient: "glow", obstacleStyle: "crystal", mountain: ["#4da8da", "#2b73a6", "#22577a"] },
  { id: "jungle", label: "Selva curiosa", skyTop: "#7be495", skyBottom: "#d6ffd8", groundTop: "#5fbf5c", groundBottom: "#2f7f42", accent: "#ff99c8", hazard: "thorn", ambient: "petals", obstacleStyle: "flower", mountain: ["#82c864", "#539c4f", "#376f38"] },
  { id: "ocean", label: "Océano de burbujas", skyTop: "#70d6ff", skyBottom: "#dff6ff", groundTop: "#49a6e9", groundBottom: "#1b6ca8", accent: "#ffd166", hazard: "jelly", ambient: "bubbles", obstacleStyle: "coral", mountain: ["#7cc7ff", "#4d9de0", "#2c699a"] }
];

const powerups = [
  { id: "shield", label: "Escudo", emoji: "🛡️", color: "#4cc9f0" },
  { id: "slow", label: "Tiempo lento", emoji: "⏱️", color: "#b5179e" },
  { id: "star", label: "Estrella", emoji: "⭐", color: "#ffd166" },
  { id: "wings", label: "Alas suaves", emoji: "🪽", color: "#80ed99" },
  { id: "heart", label: "Corazón", emoji: "❤️", color: "#ff4d6d" },
  { id: "coin", label: "Moneda", emoji: "🪙", color: "#ffca3a" }
];

const tips = [
  "El menú queda disponible desde el botón superior para entrar y salir sin perder pantalla de juego.",
  "Cada ambiente trae peligros distintos: abejas, murciélagos, hielo, lava, rocas o cristales.",
  "Ahora tienes varias vidas: si fallas, el pájaro vuelve con espacio seguro para reaccionar.",
  "Si un niño quiere practicar algo concreto, usa el selector de tema y deja el modo mixto para sesiones variadas.",
  "Las monedas premio sirven para futuras mejoras y también aparecen en los portales bonus.",
  "El sonido y la música se generan en el navegador; puedes apagarlos desde el botón superior."
];

const upgradeCatalog = [
  { id: "starterShield", name: "Escudo inicial", maxLevel: 3, baseCost: 10, description: "Empiezas cada vuelo con más tiempo de escudo." },
  { id: "extraHeart", name: "Corazón extra", maxLevel: 2, baseCost: 16, description: "Aumenta las vidas máximas del pajarito." },
  { id: "academyBoost", name: "Multiplicador premio", maxLevel: 3, baseCost: 14, description: "Cada reto correcto entrega más puntos premio." },
  { id: "portalScout", name: "Portal amable", maxLevel: 2, baseCost: 12, description: "Los portales aparecen con más espacio y menos peligro cerca." }
];

const missionCatalog = [
  { id: "play_rounds", name: "Vuela 3 partidas", target: 3, reward: 8, description: "Completa vuelos para entrenar el control." },
  { id: "take_portals", name: "Entra a 2 portales", target: 2, reward: 10, description: "Explora los túneles o árboles de reto." },
  { id: "perfect_challenges", name: "Logra 2 retos perfectos", target: 2, reward: 14, description: "Responde todas las preguntas de un reto sin fallar." },
  { id: "collect_powerups", name: "Toma 6 ayudas", target: 6, reward: 9, description: "Recoge escudos, alas, estrellas o corazones." }
];

const topicMeta = [
  { id: "colors", label: "Colores" },
  { id: "math", label: "Matemáticas" },
  { id: "letters", label: "Letras" },
  { id: "english", label: "Inglés" }
];

const eventTemplates = {
  garden: { id: "butterflies", label: "Mariposas amigas", duration: 5200, description: "Más ayudas y vuelo suave." },
  night: { id: "moon_glow", label: "Luz de luna", duration: 5200, description: "El ritmo baja un poco y el cielo brilla." },
  winter: { id: "wind_push", label: "Ráfaga fría", duration: 4600, description: "El viento empuja al pájaro hacia arriba y abajo." },
  lava: { id: "heat_wave", label: "Ola de calor", duration: 5000, description: "Las partículas suben y el entorno se vuelve intenso." },
  canyon: { id: "gust", label: "Viento del cañón", duration: 4300, description: "Una brisa lateral vuelve el vuelo más técnico." },
  crystal: { id: "prism_bonus", label: "Prisma bonus", duration: 5200, description: "Los retos y premios brillan más fuerte." },
  jungle: { id: "bloom_path", label: "Selva en flor", duration: 5200, description: "Aparecen más monedas y flores suaves." },
  ocean: { id: "tide_bonus", label: "Marea brillante", duration: 5200, description: "Más monedas entre corales y burbujas." }
};

const colorQuestions = [
  { ages: ["4-6", "7-9"], prompt: "¿Qué color se forma al mezclar amarillo y azul?", answer: "Verde", options: ["Verde", "Rojo", "Negro"], fact: "Amarillo + azul = verde." },
  { ages: ["4-6", "7-9", "10+"], prompt: "¿Cuál de estos es un color cálido?", answer: "Naranja", options: ["Naranja", "Azul", "Morado"], fact: "El naranja es un color cálido." },
  { ages: ["7-9", "10+"], prompt: "¿Cuál color suele representar la naturaleza?", answer: "Verde", options: ["Verde", "Gris", "Negro"], fact: "El verde suele asociarse con plantas y naturaleza." },
  { ages: ["4-6", "7-9"], prompt: "¿De qué color es una nube en un dibujo simple?", answer: "Blanca", options: ["Blanca", "Negra", "Morada"], fact: "Las nubes suelen dibujarse blancas." },
  { ages: ["4-6", "7-9", "10+"], prompt: "¿Cuál de estos colores se parece al sol?", answer: "Amarillo", options: ["Amarillo", "Azul", "Gris"], fact: "El amarillo recuerda al sol." },
  { ages: ["7-9", "10+"], prompt: "¿Cuál de estos colores es frío?", answer: "Azul", options: ["Rojo", "Azul", "Naranja"], fact: "El azul es un color frío." },
  { ages: ["4-6", "7-9"], prompt: "¿Qué color suele tener el pasto?", answer: "Verde", options: ["Verde", "Rosa", "Morado"], fact: "El pasto suele ser verde." },
  { ages: ["7-9", "10+"], prompt: "¿Qué color combina rojo y blanco?", answer: "Rosado", options: ["Rosado", "Verde", "Marrón"], fact: "Rojo y blanco dan rosado." }
];

const englishQuestions = [
  { ages: ["4-6", "7-9", "10+"], prompt: "¿Cómo se dice 'rojo' en inglés?", answer: "Red", options: ["Blue", "Red", "Green"], fact: "'Rojo' en inglés es 'red'." },
  { ages: ["4-6", "7-9", "10+"], prompt: "¿Cómo se dice 'gato' en inglés?", answer: "Cat", options: ["Dog", "Cat", "Bird"], fact: "'Gato' en inglés es 'cat'." },
  { ages: ["7-9", "10+"], prompt: "¿Qué significa 'sun'?", answer: "Sol", options: ["Luna", "Sol", "Nube"], fact: "'Sun' significa 'sol'." },
  { ages: ["7-9", "10+"], prompt: "¿Cómo se dice 'azul' en inglés?", answer: "Blue", options: ["Blue", "Pink", "Black"], fact: "'Azul' en inglés es 'blue'." },
  { ages: ["4-6", "7-9"], prompt: "¿Cómo se dice 'perro' en inglés?", answer: "Dog", options: ["Dog", "Fish", "Book"], fact: "'Perro' en inglés es 'dog'." },
  { ages: ["4-6", "7-9", "10+"], prompt: "¿Qué significa 'apple'?", answer: "Manzana", options: ["Naranja", "Manzana", "Pera"], fact: "'Apple' significa 'manzana'." },
  { ages: ["7-9", "10+"], prompt: "¿Cómo se dice 'casa' en inglés?", answer: "House", options: ["Mouse", "House", "Flower"], fact: "'Casa' en inglés es 'house'." },
  { ages: ["7-9", "10+"], prompt: "¿Qué significa 'star'?", answer: "Estrella", options: ["Mar", "Estrella", "Puerta"], fact: "'Star' significa 'estrella'." },
  { ages: ["10+"], prompt: "¿Cómo se dice 'escuela' en inglés?", answer: "School", options: ["School", "Chair", "Window"], fact: "'Escuela' en inglés es 'school'." }
];

const letterWords = [
  { ages: ["4-6"], word: "sol", letter: "S" },
  { ages: ["4-6"], word: "luna", letter: "L" },
  { ages: ["4-6", "7-9"], word: "flor", letter: "F" },
  { ages: ["7-9", "10+"], word: "tren", letter: "T" },
  { ages: ["7-9", "10+"], word: "barco", letter: "B" },
  { ages: ["4-6", "7-9"], word: "mesa", letter: "M" },
  { ages: ["4-6", "7-9"], word: "nube", letter: "N" },
  { ages: ["7-9", "10+"], word: "queso", letter: "Q" },
  { ages: ["7-9", "10+"], word: "zapato", letter: "Z" },
  { ages: ["10+"], word: "elefante", letter: "E" }
];

const colorFamilies = [
  { ages: ["4-6", "7-9", "10+"], base: "cielo", color: "Azul", wrong: ["Rojo", "Marrón"] },
  { ages: ["4-6", "7-9"], base: "limón", color: "Amarillo", wrong: ["Azul", "Morado"] },
  { ages: ["4-6", "7-9", "10+"], base: "fresa", color: "Rojo", wrong: ["Verde", "Negro"] },
  { ages: ["7-9", "10+"], base: "uva", color: "Morado", wrong: ["Naranja", "Gris"] }
];

const englishVocabulary = [
  { ages: ["4-6", "7-9"], es: "pez", en: "Fish", wrong: ["Milk", "Sun"] },
  { ages: ["4-6", "7-9", "10+"], es: "verde", en: "Green", wrong: ["White", "Brown"] },
  { ages: ["7-9", "10+"], es: "libro", en: "Book", wrong: ["Tree", "River"] },
  { ages: ["7-9", "10+"], es: "luna", en: "Moon", wrong: ["Door", "Rain"] }
];

const dom = {
  stage: document.getElementById("gameStage"),
  canvas: document.getElementById("gameCanvas"),
  scoreValue: document.getElementById("scoreValue"),
  bestValue: document.getElementById("bestValue"),
  livesValue: document.getElementById("livesValue"),
  academyPointsValue: document.getElementById("academyPointsValue"),
  nextLesson: document.getElementById("nextLesson"),
  meterFill: document.getElementById("meterFill"),
  effectsList: document.getElementById("effectsList"),
  environmentLabel: document.getElementById("environmentLabel"),
  environmentSummary: document.getElementById("environmentSummary"),
  lessonLabel: document.getElementById("lessonLabel"),
  eventBanner: document.getElementById("eventBanner"),
  overlay: document.getElementById("stageOverlay"),
  overlayEyebrow: document.getElementById("overlayEyebrow"),
  overlayTitle: document.getElementById("overlayTitle"),
  overlayText: document.getElementById("overlayText"),
  overlayButton: document.getElementById("overlayButton"),
  quizOverlay: document.getElementById("quizOverlay"),
  quizEyebrow: document.getElementById("quizEyebrow"),
  quizSceneTitle: document.getElementById("quizSceneTitle"),
  quizPrompt: document.getElementById("quizPrompt"),
  quizStatus: document.getElementById("quizStatus"),
  quizOptions: document.getElementById("quizOptions"),
  quizFeedback: document.getElementById("quizFeedback"),
  quizActions: document.getElementById("quizActions"),
  quizPrimaryBtn: document.getElementById("quizPrimaryBtn"),
  quizSecondaryBtn: document.getElementById("quizSecondaryBtn"),
  toast: document.getElementById("toast"),
  menuToggleBtn: document.getElementById("menuToggleBtn"),
  closeDrawerBtn: document.getElementById("closeDrawerBtn"),
  drawer: document.getElementById("configDrawer"),
  drawerBackdrop: document.getElementById("drawerBackdrop"),
  installBtn: document.getElementById("installBtn"),
  downloadWindowsBtn: document.getElementById("downloadWindowsBtn"),
  downloadAndroidBtn: document.getElementById("downloadAndroidBtn"),
  audioToggleBtn: document.getElementById("audioToggleBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  restartBtn: document.getElementById("restartBtn"),
  playerName: document.getElementById("playerName"),
  difficultySelect: document.getElementById("difficultySelect"),
  skinSelect: document.getElementById("skinSelect"),
  ageGroupSelect: document.getElementById("ageGroupSelect"),
  learningTopicSelect: document.getElementById("learningTopicSelect"),
  startBtn: document.getElementById("startBtn"),
  gamesPlayed: document.getElementById("gamesPlayed"),
  correctAnswers: document.getElementById("correctAnswers"),
  accuracy: document.getElementById("accuracy"),
  academyPointsDrawer: document.getElementById("academyPointsDrawer"),
  appVersionValue: document.getElementById("appVersionValue"),
  repoVersionValue: document.getElementById("repoVersionValue"),
  updateSummary: document.getElementById("updateSummary"),
  checkUpdatesBtn: document.getElementById("checkUpdatesBtn"),
  updateNowBtn: document.getElementById("updateNowBtn"),
  downloadHelp: document.getElementById("downloadHelp"),
  leaderboardList: document.getElementById("leaderboardList"),
  tipText: document.getElementById("tipText"),
  shopList: document.getElementById("shopList"),
  missionsList: document.getElementById("missionsList"),
  topicStats: document.getElementById("topicStats")
};

const ctx = dom.canvas.getContext("2d");
const audioContext = setupAudio();
const musicState = { timer: null, step: 0 };
const storage = loadStorage();

const state = {
  mode: "idle",
  drawerOpen: true,
  audioEnabled: storage.audioEnabled !== false,
  installPromptEvent: null,
  serviceWorkerRegistration: null,
  viewport: { width: 0, height: 0, groundHeight: 120, pipeWidth: 76, birdX: 120 },
  lastTime: 0,
  score: 0,
  bestScore: storage.bestScore || 0,
  lives: 3,
  maxLives: 3,
  academyPoints: storage.academyPoints || 0,
  upgrades: normalizeUpgrades(storage.upgrades),
  missions: normalizeMissions(storage.missions),
  topicStats: normalizeTopicStats(storage.topicStats),
  gamesPlayed: storage.gamesPlayed || 0,
  correctAnswers: storage.correctAnswers || 0,
  totalQuestions: storage.totalQuestions || 0,
  leaderboard: storage.leaderboard || [],
  playerName: storage.playerName || "",
  difficulty: storage.difficulty || difficulties[1].id,
  skin: storage.skin || skins[0].id,
  ageGroup: storage.ageGroup || ageGroups[1].id,
  learningTopic: storage.learningTopic || learningTopics[0].id,
  environmentIndex: 0,
  pipes: [],
  collectibles: [],
  hazards: [],
  portals: [],
  particles: [],
  clouds: [],
  stars: [],
  ambientParticles: [],
  bird: createBird(),
  effects: { shield: 0, slow: 0, wings: 0 },
  spawnTimer: 0,
  nextPortalAt: getInitialPortalTarget(),
  portalPending: false,
  quizQuestion: null,
  challengeSession: null,
  portalOfferKind: null,
  bonusSession: null,
  quizResumeTimer: null,
  toastTimer: 0,
  worldShift: 0,
  safeReturnMs: 0,
  damageFlashMs: 0,
  cameraShakeMs: 0,
  trailTimer: 0,
  lastEventScore: 0,
  activeEvent: null,
  eventTimerMs: 0,
  tick: 0,
  lastGapCenter: null,
  updateInfo: {
    latestVersion: null,
    latestSha: null,
    latestMessage: "",
    latestUrl: "",
    releaseUrl: GITHUB_URLS.releases,
    hasUpdate: false,
    checkedAt: null,
    downloads: { windows: "", android: "" }
  },
  portalReadyAt: null,
  recentQuestionPrompts: [],
  recentPortalKinds: []
};

init();

function init() {
  state.maxLives = 3 + state.upgrades.extraHeart;
  state.lives = state.maxLives;
  populateSelect(dom.difficultySelect, difficulties);
  populateSelect(dom.skinSelect, skins);
  populateSelect(dom.ageGroupSelect, ageGroups);
  populateSelect(dom.learningTopicSelect, learningTopics);

  dom.playerName.value = state.playerName;
  dom.difficultySelect.value = state.difficulty;
  dom.skinSelect.value = state.skin;
  dom.ageGroupSelect.value = state.ageGroup;
  dom.learningTopicSelect.value = state.learningTopic;
  dom.tipText.textContent = tips[0];

  resizeCanvas();
  setEnvironmentByScore(true);
  syncOverlay("Configura tu vuelo", "Ajusta el panel y despega", "El menú aparece abierto al iniciar. Elige dificultad, edad y tema educativo; luego podrás cerrarlo y jugar a pantalla completa.", "Empezar partida");
  syncDrawer(true);
  syncStats();
  syncProfileSummary();
  syncAudioButton();
  syncInstallButton();
  syncUpdateUI();
  renderShop();
  renderMissions();
  renderTopicStats();
  bindEvents();
  registerPwa();
  checkForUpdates(true);
  requestAnimationFrame(loop);
}

function bindEvents() {
  window.addEventListener("resize", resizeCanvas);

  dom.menuToggleBtn.addEventListener("click", toggleDrawer);
  dom.closeDrawerBtn.addEventListener("click", closeDrawer);
  dom.drawerBackdrop.addEventListener("click", closeDrawer);

  dom.audioToggleBtn.addEventListener("click", toggleAudio);
  dom.installBtn.addEventListener("click", handleInstallClick);
  dom.downloadWindowsBtn.addEventListener("click", () => handleDownloadClick("windows"));
  dom.downloadAndroidBtn.addEventListener("click", () => handleDownloadClick("android"));
  dom.checkUpdatesBtn.addEventListener("click", () => checkForUpdates(false));
  dom.updateNowBtn.addEventListener("click", openUpdatePage);
  dom.pauseBtn.addEventListener("click", () => {
    if (state.mode === "playing") {
      pauseGame();
      return;
    }
    if (state.mode === "paused") {
      resumeGame();
    }
  });

  dom.startBtn.addEventListener("click", startGame);
  dom.restartBtn.addEventListener("click", startGame);
  dom.overlayButton.addEventListener("click", () => {
    if (state.mode === "paused") {
      resumeGame();
      return;
    }
    startGame();
  });

  dom.quizPrimaryBtn.addEventListener("click", handleQuizPrimaryAction);
  dom.quizSecondaryBtn.addEventListener("click", handleQuizSecondaryAction);

  dom.playerName.addEventListener("input", () => {
    state.playerName = dom.playerName.value.trim();
    persistAll();
    syncStats();
  });

  dom.difficultySelect.addEventListener("change", () => {
    state.difficulty = dom.difficultySelect.value;
    persistAll();
    syncProfileSummary();
  });

  dom.skinSelect.addEventListener("change", () => {
    state.skin = dom.skinSelect.value;
    persistAll();
  });

  dom.ageGroupSelect.addEventListener("change", () => {
    state.ageGroup = dom.ageGroupSelect.value;
    persistAll();
    syncProfileSummary();
  });

  dom.learningTopicSelect.addEventListener("change", () => {
    state.learningTopic = dom.learningTopicSelect.value;
    persistAll();
    syncProfileSummary();
  });

  dom.canvas.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    resumeAudio();
    if (state.mode === "playing" || state.mode === "bonus") {
      flapBird();
      return;
    }
    if (state.mode === "idle" || state.mode === "gameover") {
      startGame();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
      event.preventDefault();
      resumeAudio();
      if (state.mode === "playing" || state.mode === "bonus") {
        flapBird();
      } else if (state.mode === "idle" || state.mode === "gameover") {
        startGame();
      }
    }

    if (event.code === "KeyM") {
      toggleAudio();
    }

    if (event.code === "KeyP") {
      if (state.mode === "playing") {
        pauseGame();
      } else if (state.mode === "paused") {
        resumeGame();
      }
    }
  });
}

function startGame() {
  resumeAudio();
  stopMusic();

  if (!dom.playerName.value.trim()) {
    openDrawer();
    dom.playerName.focus();
    showToast("Escribe un nombre antes de iniciar.");
    return;
  }

  clearTimeout(state.quizResumeTimer);

  state.playerName = dom.playerName.value.trim();
  state.difficulty = dom.difficultySelect.value;
  state.skin = dom.skinSelect.value;
  state.ageGroup = dom.ageGroupSelect.value;
  state.learningTopic = dom.learningTopicSelect.value;
  state.mode = "playing";
  state.score = 0;
  state.pipes = [];
  state.collectibles = [];
  state.hazards = [];
  state.portals = [];
  state.particles = [];
  state.bird = createBird();
  state.maxLives = 3 + state.upgrades.extraHeart;
  state.lives = state.maxLives;
  state.effects = { shield: 1600 + state.upgrades.starterShield * 900, slow: 0, wings: 0 };
  state.spawnTimer = 0;
  state.nextPortalAt = getInitialPortalTarget();
  state.portalPending = false;
  state.portalReadyAt = null;
  state.quizQuestion = null;
  state.challengeSession = null;
  state.portalOfferKind = null;
  state.bonusSession = null;
  state.lastTime = 0;
  state.worldShift = 0;
  state.safeReturnMs = 0;
  state.damageFlashMs = 0;
  state.cameraShakeMs = 0;
  state.trailTimer = 0;
  state.lastEventScore = 0;
  state.activeEvent = null;
  state.eventTimerMs = 0;
  state.tick = 0;
  state.lastGapCenter = null;
  state.environmentIndex = 0;

  setEnvironmentByScore(true);
  dom.quizOverlay.classList.add("hidden");
  dom.quizActions.classList.add("hidden");
  dom.quizStatus.textContent = "";
  dom.quizFeedback.textContent = "";
  dom.overlay.classList.add("hidden");
  dom.pauseBtn.textContent = "Pausar";
  dom.tipText.textContent = tips[Math.floor(Math.random() * tips.length)];

  syncStats();
  syncProfileSummary();
  renderMissions();
  persistAll();
  closeDrawer();
  ensureMusic();
  sfxStart();
  updateMission("play_rounds", 1);
  showToast("Partida iniciada. Mantén el vuelo y responde los retos.");
}

function pauseGame() {
  if (state.mode !== "playing") {
    return;
  }

  state.mode = "paused";
  stopMusic();
  dom.pauseBtn.textContent = "Continuar";
  syncOverlay("Pausa activa", "Partida en pausa", "Puedes abrir el menú, cambiar opciones y luego continuar.", "Continuar");
  dom.overlay.classList.remove("hidden");
}

function resumeGame() {
  if (state.mode !== "paused") {
    return;
  }

  state.mode = "playing";
  state.lastTime = 0;
  dom.pauseBtn.textContent = "Pausar";
  dom.overlay.classList.add("hidden");
  ensureMusic();
  showToast("Partida reanudada.");
}

function endGame() {
  state.mode = "gameover";
  state.gamesPlayed += 1;
  state.bestScore = Math.max(state.bestScore, state.score);
  state.leaderboard.push({ name: state.playerName, score: state.score });
  state.leaderboard.sort((a, b) => b.score - a.score);
  state.leaderboard = state.leaderboard.slice(0, 5);
  stopMusic();
  persistAll();
  syncStats();

  const accuracy = state.totalQuestions === 0
    ? "0%"
    : `${Math.round((state.correctAnswers / state.totalQuestions) * 100)}%`;

  syncOverlay("Vuelo terminado", `Puntaje ${state.score}`, `Récord ${state.bestScore} · Partidas ${state.gamesPlayed} · Precisión ${accuracy}. Puedes jugar otra vez o abrir el menú para ajustar el vuelo.`, "Jugar de nuevo");
  dom.overlay.classList.remove("hidden");
  dom.pauseBtn.textContent = "Pausar";
  sfxGameOver();
  showToast("Fin de partida. Revisa tu progreso local.");
}

function enterPortal(portal) {
  clearTimeout(state.quizResumeTimer);
  stopMusic();
  portal.used = true;
  state.portalOfferKind = portal.kind;
  state.challengeSession = portal.kind === "bonus" ? null : createChallengeSession(portal.kind);
  state.mode = "portal";
  setQuizScene(portal.kind === "bonus" ? "bonus" : "portal");
  dom.quizOverlay.classList.remove("hidden");
  dom.quizOptions.innerHTML = "";
  dom.quizActions.classList.remove("hidden");
  if (portal.kind === "bonus") {
    dom.quizEyebrow.textContent = "Modo bonus";
    dom.quizSceneTitle.textContent = "Mundo de monedas";
    dom.quizPrimaryBtn.textContent = "Entrar al bonus";
    dom.quizSecondaryBtn.textContent = "Seguir volando";
    dom.quizPrompt.textContent = "Encontraste una puerta brillante";
    dom.quizStatus.textContent = "Podrás viajar a otro mundo por unos segundos para agarrar la mayor cantidad de monedas posible.";
    setQuizFeedback("Si no quieres entrar, continúas la partida normal sin castigo.", "neutral");
  } else {
    dom.quizEyebrow.textContent = portal.kind === "tree" ? "Árbol del saber" : "Túnel de retos";
    dom.quizSceneTitle.textContent = portal.kind === "tree" ? "Desafío de aprendizaje" : "Ruta de preguntas";
    dom.quizPrimaryBtn.textContent = "Aceptar reto";
    dom.quizSecondaryBtn.textContent = "Seguir sin reto";
    dom.quizPrompt.textContent = portal.kind === "tree" ? "Entraste al Árbol del Saber" : "Entraste al Túnel de Retos";
    dom.quizStatus.textContent = `Reto opcional de ${state.challengeSession.total} preguntas para nivel ${getDifficulty().label}.`;
    setQuizFeedback("Si aceptas, cada respuesta correcta suma puntos del juego, monedas y ventajas.", "neutral");
  }
  updateMission("take_portals", 1);
}

function handleQuizPrimaryAction() {
  if (state.mode === "portal") {
    if (state.portalOfferKind === "bonus") {
      startBonusRound();
      return;
    }
    startChallengeQuestions();
    return;
  }

  if (state.mode === "challenge-result") {
    resumeFromChallenge("Vuelves al vuelo con espacio seguro.");
  }
}

function handleQuizSecondaryAction() {
  if (state.mode === "portal") {
    state.challengeSession = null;
    resumeFromChallenge("Seguiste el vuelo sin tomar el reto.");
    return;
  }

  if (state.mode === "challenge-result") {
    resumeFromChallenge("Vuelves al vuelo con espacio seguro.");
  }
}

function createChallengeSession(kind) {
  const questionsByLevel = {
    "muy-facil": 2,
    "facil": 2,
    "intermedio": 3,
    "avanzado": 4
  };
  const total = questionsByLevel[state.difficulty] || 2;
  return {
    kind,
    total,
    index: 0,
    correct: 0,
    bonusMultiplier: getAcademyMultiplier(),
    questions: buildQuestionSet(total)
  };
}

function startChallengeQuestions() {
  if (!state.challengeSession) {
    return;
  }

  state.mode = "quiz";
  setQuizScene("challenge");
  renderChallengeQuestion();
}

function renderChallengeQuestion() {
  const session = state.challengeSession;
  const question = session.questions[session.index];
  state.quizQuestion = question;
  dom.quizActions.classList.add("hidden");
  dom.quizOptions.innerHTML = "";
  dom.quizEyebrow.textContent = "Reto activo";
  dom.quizSceneTitle.textContent = `${labelFor(learningTopics, state.learningTopic)} · ${state.ageGroup}`;
  dom.quizPrompt.textContent = question.prompt;
  dom.quizStatus.textContent = `Pregunta ${session.index + 1} de ${session.total} · Elige la mejor respuesta`;
  setQuizFeedback("Lee con calma y toca la respuesta más correcta.", "neutral");

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = `<span class="quiz-option__tag">${String.fromCharCode(65 + dom.quizOptions.children.length)}</span><span class="quiz-option__text">${escapeHtml(option)}</span>`;
    button.addEventListener("click", () => answerQuiz(option));
    dom.quizOptions.appendChild(button);
  });
}

function answerQuiz(option) {
  if (!state.quizQuestion || !state.challengeSession) {
    return;
  }

  const session = state.challengeSession;
  registerTopicAttempt(state.quizQuestion.topicId, option === state.quizQuestion.answer);
  state.totalQuestions += 1;

  if (option === state.quizQuestion.answer) {
    session.correct += 1;
    state.correctAnswers += 1;
    setQuizFeedback(`Correcto. ${state.quizQuestion.fact}`, "success");
    sfxCorrect();
  } else {
    setQuizFeedback(`La respuesta correcta era ${state.quizQuestion.answer}. ${state.quizQuestion.fact}`, "error");
    sfxWrong();
  }

  session.index += 1;

  window.setTimeout(() => {
    if (session.index >= session.total) {
      finishChallengeSession();
      return;
    }
    renderChallengeQuestion();
  }, 900);
}

function finishChallengeSession() {
  const session = state.challengeSession;
  const rewards = resolveChallengeRewards(session.correct, session.total);
  if (session.correct === session.total) {
    updateMission("perfect_challenges", 1);
  }

  state.score += rewards.scorePoints;
  state.academyPoints += rewards.academyPoints;
  updatePortalMilestones();
  rewards.powerups.forEach((powerup) => applyPowerup(powerup, true));

  state.quizQuestion = null;
  state.mode = "challenge-result";
  setQuizScene("result");
  dom.quizOptions.innerHTML = "";
  dom.quizActions.classList.remove("hidden");
  dom.quizPrimaryBtn.textContent = "Volver al juego";
  dom.quizSecondaryBtn.textContent = "Continuar";
  dom.quizEyebrow.textContent = "Resultado del reto";
  dom.quizSceneTitle.textContent = session.kind === "tree" ? "Bosque del saber" : "Túnel completado";
  dom.quizPrompt.textContent = session.kind === "tree" ? "Reto del Árbol completado" : "Reto del Túnel completado";
  dom.quizStatus.textContent = `Aciertos: ${session.correct} de ${session.total}`;
  setQuizFeedback(buildRewardSummary(rewards), "success");
  persistAll();
  syncStats();
}

function buildQuestionSet(total) {
  const questions = [];
  const seenPrompts = new Set();
  let attempts = 0;

  while (questions.length < total && attempts < total * 18) {
    const question = buildQuestion();
    attempts += 1;
    if (seenPrompts.has(question.prompt) || state.recentQuestionPrompts.includes(question.prompt)) {
      continue;
    }
    seenPrompts.add(question.prompt);
    questions.push(question);
  }

  while (questions.length < total && attempts < total * 28) {
    const question = buildQuestion();
    attempts += 1;
    if (seenPrompts.has(question.prompt)) {
      continue;
    }
    seenPrompts.add(question.prompt);
    questions.push(question);
  }

  questions.forEach((question) => rememberQuestionPrompt(question.prompt));
  return questions;
}

function setQuizFeedback(text, tone = "neutral") {
  dom.quizFeedback.textContent = text;
  dom.quizFeedback.dataset.tone = tone;
}

function rememberQuestionPrompt(prompt) {
  if (!prompt) {
    return;
  }
  state.recentQuestionPrompts = state.recentQuestionPrompts.filter((item) => item !== prompt);
  state.recentQuestionPrompts.push(prompt);
  state.recentQuestionPrompts = state.recentQuestionPrompts.slice(-12);
}

function setQuizScene(scene) {
  dom.quizOverlay.dataset.scene = scene;
}

function startBonusRound() {
  const world = getWorld();
  state.mode = "bonus";
  state.challengeSession = null;
  state.quizQuestion = null;
  state.bonusSession = {
    remainingMs: 9500,
    collected: 0,
    spawnTimer: 0,
    coins: [],
    worldShift: 0
  };
  dom.quizOverlay.classList.add("hidden");
  dom.quizActions.classList.add("hidden");
  state.bird.vy = -6.4;
  state.bird.y = clamp(state.bird.y, 90, world.height - world.groundHeight - 90);
  showToast("Entraste al mundo bonus. Recoge todas las monedas que puedas.");
}

function finishBonusRound() {
  if (!state.bonusSession) {
    return;
  }

  const collected = state.bonusSession.collected;
  const academyGain = Math.max(4, collected);
  const scoreGain = Math.floor(collected / 4);
  state.score += scoreGain;
  state.bestScore = Math.max(state.bestScore, state.score);
  state.academyPoints += academyGain;
  updatePortalMilestones();
  state.mode = "challenge-result";
  setQuizScene("result");
  dom.quizOverlay.classList.remove("hidden");
  dom.quizActions.classList.remove("hidden");
  dom.quizOptions.innerHTML = "";
  dom.quizPrimaryBtn.textContent = "Volver al juego";
  dom.quizSecondaryBtn.textContent = "Continuar";
  dom.quizEyebrow.textContent = "Bonus completado";
  dom.quizSceneTitle.textContent = "Mundo de monedas";
  dom.quizPrompt.textContent = "Regresaste del bonus";
  dom.quizStatus.textContent = `Monedas recogidas: ${collected}`;
  dom.quizFeedback.textContent = `Ganaste +${academyGain} monedas premio y +${scoreGain} puntos de juego.`;
  state.bonusSession = null;
  syncEventBanner();
  persistAll();
  syncStats();
}

function resolveChallengeRewards(correct, total) {
  const difficultyWeight = {
    "muy-facil": 1,
    "facil": 2,
    "intermedio": 3,
    "avanzado": 4
  };
  const weight = difficultyWeight[state.difficulty] || 1;
  const rewards = {
    scorePoints: correct,
    academyPoints: Math.round(correct * weight * (state.challengeSession?.bonusMultiplier || 1)),
    powerups: []
  };

  if (correct >= Math.ceil(total / 2)) {
    rewards.powerups.push("shield");
  }
  if (correct === total) {
    rewards.powerups.push(weight >= 3 ? "wings" : "slow");
    rewards.scorePoints += weight;
    rewards.academyPoints += Math.round(weight * 2 * (state.challengeSession?.bonusMultiplier || 1));
    if (state.lives < state.maxLives) {
      rewards.powerups.push("heart");
    }
  }

  return rewards;
}

function buildRewardSummary(rewards) {
  const bonuses = [];
  bonuses.push(`+${rewards.scorePoints} puntos de juego`);
  bonuses.push(`+${rewards.academyPoints} monedas premio`);
  rewards.powerups.forEach((powerup) => bonuses.push(findPowerup(powerup).label));
  return `Ganaste ${bonuses.join(", ")}.`;
}

function resumeFromChallenge(message) {
  state.challengeSession = null;
  state.quizQuestion = null;
  state.portalOfferKind = null;
  state.bonusSession = null;
  state.mode = "playing";
  state.lastTime = 0;
  state.safeReturnMs = 1600;
  applySafeReturnSpace();
  dom.quizOverlay.classList.add("hidden");
  dom.quizActions.classList.add("hidden");
  syncEventBanner();
  ensureMusic();
  showToast(message);
}

function loop(timestamp) {
  const deltaMs = state.lastTime === 0 ? 16 : Math.min(32, timestamp - state.lastTime);
  state.lastTime = timestamp;
  const dt = deltaMs / 16.6667;

  update(dt, deltaMs);
  draw();
  requestAnimationFrame(loop);
}

function update(dt, deltaMs) {
  state.tick += dt;
  updateToast(deltaMs);
  updateAmbient(dt, deltaMs);
  updateParticles(dt);
  tickEvent(deltaMs);
  state.damageFlashMs = Math.max(0, state.damageFlashMs - deltaMs);
  state.cameraShakeMs = Math.max(0, state.cameraShakeMs - deltaMs);

  if (state.mode === "idle" || state.mode === "gameover") {
    floatBirdIdle();
    return;
  }

  if (state.mode === "paused" || state.mode === "quiz" || state.mode === "portal" || state.mode === "challenge-result") {
    return;
  }

  const world = getWorld();
  const preset = getDifficulty();
  const speed = getScrollSpeed(world);
  maybeTriggerEvent();

  tickEffects(deltaMs);
  state.safeReturnMs = Math.max(0, state.safeReturnMs - deltaMs);
  state.spawnTimer += deltaMs;
  state.worldShift += speed * dt;
  state.trailTimer += deltaMs;

  if (state.mode === "bonus") {
    updateBird(dt, world);
    updateFlightTrail();
    updateBonusWorld(dt, deltaMs, world);
    return;
  }

  updateBird(dt, world);
  updateFlightTrail();
  updatePipes(dt, speed, world);
  if (state.mode !== "playing") {
    return;
  }
  updatePortals(dt, speed, world);
  if (state.mode !== "playing") {
    return;
  }
  updateCollectibles(dt, speed, world);
  updateHazards(dt, speed, world);
  if (state.mode !== "playing") {
    return;
  }
  maybeSpawnSet(preset, world);
  checkWorldCollisions(world);
}

function updateFlightTrail() {
  if (state.trailTimer < 70) {
    return;
  }

  state.trailTimer = 0;
  const skin = getSkin();
  const world = getWorld();
  const trailColor = state.effects.wings > 0 ? "#80ed99" : state.effects.shield > 0 ? "#7bdff2" : skin.body;
  spawnBurst(world.birdX - 18, state.bird.y + 2, trailColor, 3, 0.65);
}

function updateAmbient(dt, deltaMs) {
  const world = getWorld();

  state.clouds.forEach((cloud) => {
    cloud.x -= cloud.speed * dt;
    if (cloud.x < -200) {
      cloud.x = world.width + 120;
      cloud.y = randomBetween(50, Math.max(140, world.height * 0.38));
      cloud.scale = randomBetween(0.7, 1.5);
    }
  });

  const env = getEnvironment();
  state.ambientParticles.forEach((particle) => {
    if (env.ambient === "snow") {
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      if (particle.y > world.height) {
        particle.y = -10;
        particle.x = Math.random() * world.width;
      }
    } else if (env.ambient === "embers") {
      particle.x += particle.vx * dt;
      particle.y -= particle.vy * dt;
      if (particle.y < -10) {
        particle.y = world.height + 10;
        particle.x = Math.random() * world.width;
      }
    } else if (env.ambient === "dust") {
      particle.x -= particle.vy * dt;
      particle.y += Math.sin((state.tick + particle.seed) * 0.05) * 0.12;
      if (particle.x < -20) {
        particle.x = world.width + 20;
      }
    } else if (env.ambient === "glow") {
      particle.phase += 0.03 * dt;
    } else if (env.ambient === "bubbles") {
      particle.y -= particle.vy * dt;
      particle.x += Math.sin((state.tick + particle.seed) * 0.06) * 0.3;
      if (particle.y < -10) {
        particle.y = world.height + 10;
        particle.x = Math.random() * world.width;
      }
    } else if (env.ambient === "petals") {
      particle.x -= particle.vy * dt;
      particle.y += particle.vx * dt;
      if (particle.y > world.height + 12 || particle.x < -20) {
        particle.x = world.width + 20;
        particle.y = Math.random() * world.height * 0.7;
      }
    }
  });

  if (deltaMs > 0 && state.mode === "playing") {
    const nextIndex = Math.floor(state.score / 6) % environments.length;
    if (nextIndex !== state.environmentIndex) {
      state.environmentIndex = nextIndex;
      regenerateAmbient();
      syncProfileSummary();
      showToast(`Nuevo ambiente: ${getEnvironment().label}.`);
    }
  }
}

function updateBird(dt, world) {
  let gravity = state.effects.wings > 0 ? 0.22 : 0.43;
  const maxFall = state.effects.wings > 0 ? 6.5 : 8.8;
  if (state.activeEvent?.id === "butterflies") gravity *= 0.9;
  if (state.activeEvent?.id === "heat_wave") gravity *= 0.86;
  state.bird.vy += gravity * dt;
  if (state.activeEvent?.id === "wind_push") {
    state.bird.vy += Math.sin(state.tick * 0.08) * 0.08 * dt;
  }
  if (state.activeEvent?.id === "gust") {
    state.bird.y += Math.sin(state.tick * 0.12) * 0.9 * dt;
  }
  state.bird.vy = Math.min(state.bird.vy, maxFall);
  state.bird.y += state.bird.vy * dt;
  state.bird.rotation = clamp(state.bird.vy * 0.08, -0.48, 1.12);
  state.bird.flap = Math.max(0, state.bird.flap - 0.08 * dt);

  const minBirdY = 34;
  const maxBirdY = world.height - world.groundHeight - 26;
  state.bird.y = clamp(state.bird.y, minBirdY, maxBirdY);
}

function updatePipes(dt, speed, world) {
  state.pipes.forEach((pipe) => {
    pipe.x -= speed * dt;
    if (!pipe.passed && pipe.x + world.pipeWidth < world.birdX) {
      pipe.passed = true;
      state.score += 1;
      state.bestScore = Math.max(state.bestScore, state.score);
      const portalWasPending = state.portalPending;
      updatePortalMilestones();
      if (!portalWasPending && state.portalPending) {
        showToast("Se acerca un portal de reto opcional.");
      }
      sfxScore();
      spawnBurst(world.birdX + 18, state.bird.y - 10, "#ffe066", 8, 1.1);
      syncStats();
      persistAll();
    }
  });

  state.pipes = state.pipes.filter((pipe) => pipe.x + world.pipeWidth > -60);
}

function updatePortals(dt, speed, world) {
  state.portals.forEach((portal) => {
    portal.x -= speed * dt;
    portal.phase += 0.05 * dt;
    portal.y = portal.baseY + Math.sin(portal.phase) * 6;

    if (!portal.used && distance(world.birdX, state.bird.y, portal.x, portal.y) < portal.radius + 22) {
      enterPortal(portal);
    }
  });

  state.portals = state.portals.filter((portal) => !portal.used && portal.x > -80);
}

function updateCollectibles(dt, speed, world) {
  state.collectibles.forEach((item) => {
    item.x -= speed * dt;
    item.phase += 0.08 * dt;
    item.y = item.baseY + Math.sin(item.phase) * 8;

    if (distance(world.birdX, state.bird.y, item.x, item.y) < item.radius + 18) {
      applyPowerup(item.kind);
      spawnBurst(item.x, item.y, item.color, 14);
      item.collected = true;
    }
  });

  state.collectibles = state.collectibles.filter((item) => !item.collected && item.x > -40);
}

function updateHazards(dt, speed, world) {
  state.hazards.forEach((hazard) => {
    hazard.x -= speed * dt;
    hazard.phase += 0.07 * dt;
    hazard.y = hazard.baseY + Math.sin(hazard.phase) * hazard.amplitude;

    if (distance(world.birdX, state.bird.y, hazard.x, hazard.y) < hazard.radius + 18) {
      hazard.hit = true;
      onDamage(hazard.kind);
    }
  });

  state.hazards = state.hazards.filter((hazard) => !hazard.hit && hazard.x > -60);
}

function updateBonusWorld(dt, deltaMs, world) {
  if (!state.bonusSession) {
    finishBonusRound();
    return;
  }

  const bonus = state.bonusSession;
  const bonusSpeed = Math.max(4.2, getScrollSpeed(world) * 1.18);
  bonus.remainingMs = Math.max(0, bonus.remainingMs - deltaMs);
  bonus.spawnTimer += deltaMs;
  bonus.worldShift += bonusSpeed * dt;

  if (bonus.spawnTimer >= 260) {
    bonus.spawnTimer = 0;
    const baseY = randomBetween(80, world.height - world.groundHeight - 96);
    const cluster = Math.random() < 0.34 ? 3 : Math.random() < 0.65 ? 2 : 1;
    for (let index = 0; index < cluster; index += 1) {
      bonus.coins.push({
        x: world.width + 60 + index * 42,
        y: baseY + Math.sin(index * 0.7) * 28,
        radius: 15,
        phase: Math.random() * Math.PI * 2,
        vx: bonusSpeed + index * 0.2
      });
    }
  }

  bonus.coins.forEach((coin) => {
    coin.x -= coin.vx * dt;
    coin.phase += 0.08 * dt;
    coin.y += Math.sin(coin.phase) * 0.6;

    if (distance(world.birdX, state.bird.y, coin.x, coin.y) < coin.radius + 18) {
      coin.collected = true;
      bonus.collected += 1;
      state.cameraShakeMs = Math.max(state.cameraShakeMs, 80);
      sfxScore();
      spawnBurst(coin.x, coin.y, "#ffca3a", 8, 0.9);
    }
  });

  bonus.coins = bonus.coins.filter((coin) => !coin.collected && coin.x > -40);
  dom.eventBanner.classList.remove("hidden");
  dom.eventBanner.textContent = `Bonus monedas · ${Math.ceil(bonus.remainingMs / 1000)}s · ${bonus.collected} tomadas`;

  if (bonus.remainingMs === 0) {
    finishBonusRound();
  }
}

function maybeSpawnSet(preset, world) {
  const mobileBoostGap = world.width < 540 ? 42 : 0;
  const mobileBoostSpawn = world.width < 540 ? 200 : 0;
  if (state.spawnTimer < preset.spawnMs + mobileBoostSpawn) {
    return;
  }

  state.spawnTimer = 0;
  const gap = clamp(world.height * preset.gapRatio + mobileBoostGap, world.width < 540 ? 178 : 150, world.width < 540 ? 280 : 245);
  const minCenter = 92 + gap * 0.5;
  const maxCenter = world.height - world.groundHeight - 88 - gap * 0.5;
  let center = randomBetween(minCenter, maxCenter);
  if (state.lastGapCenter !== null) {
    const maxJump = world.width < 540 ? 68 : 96;
    center = clamp(center, state.lastGapCenter - maxJump, state.lastGapCenter + maxJump);
  }
  center = clamp(center, minCenter, maxCenter);
  state.lastGapCenter = center;
  const top = center - gap * 0.5;
  const pipeX = world.width + 80;
  state.pipes.push({ x: pipeX, top, gap, passed: false });

  let collectibleChance = preset.collectibleChance;
  if (state.activeEvent?.id === "butterflies") collectibleChance += 0.22;
  if (state.activeEvent?.id === "prism_bonus") collectibleChance += 0.1;
  if (state.activeEvent?.id === "bloom_path" || state.activeEvent?.id === "tide_bonus") collectibleChance += 0.14;
  let hazardChance = preset.hazardChance;
  if (state.upgrades.portalScout > 0) hazardChance -= 0.04 * state.upgrades.portalScout;
  if (state.activeEvent?.id === "moon_glow") hazardChance -= 0.04;

  const spawnPortal = state.portalPending && state.portals.length === 0 && state.mode === "playing";
  const portalKind = spawnPortal ? pickPortalKind() : null;

  if (Math.random() < collectibleChance) {
    const availablePowerups = powerups.filter((powerup) => powerup.id !== "coin");
    const powerup = availablePowerups[Math.floor(Math.random() * availablePowerups.length)];
    state.collectibles.push({
      x: pipeX + world.pipeWidth + randomBetween(40, 105),
      y: 0,
      baseY: top + gap * randomBetween(0.3, 0.7),
      radius: 18,
      kind: powerup.id,
      color: powerup.color,
      phase: Math.random() * Math.PI * 2
    });
  }

  const coinCount = Math.random() < 0.55 ? (Math.random() < 0.34 ? 3 : 2) : 1;
  if (Math.random() < 0.72) {
    const coinStartX = pipeX + world.pipeWidth + randomBetween(22, 82);
    const coinBaseY = top + gap * randomBetween(0.26, 0.74);
    for (let index = 0; index < coinCount; index += 1) {
      state.collectibles.push({
        x: coinStartX + index * 36,
        y: 0,
        baseY: coinBaseY + Math.sin(index * 0.7) * 20,
        radius: 15,
        kind: "coin",
        color: "#ffca3a",
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  if (!spawnPortal && Math.random() < Math.max(0.08, hazardChance)) {
    const env = getEnvironment();
    state.hazards.push({
      x: pipeX + world.pipeWidth + randomBetween(80, 150),
      y: 0,
      baseY: top + gap * randomBetween(0.28, 0.72),
      amplitude: Math.min(30, gap * 0.18),
      radius: 17,
      kind: env.hazard,
      phase: Math.random() * Math.PI * 2,
      hit: false
    });
  }

  if (spawnPortal) {
    state.portalPending = false;
    state.portalReadyAt = null;
    rememberPortalKind(portalKind);
    const scoutOffset = 80 + state.upgrades.portalScout * 40;
    state.portals.push({
      x: pipeX + world.pipeWidth + randomBetween(scoutOffset, scoutOffset + 60),
      y: 0,
      baseY: top + gap * 0.5,
      radius: portalKind === "bonus" ? 32 : 28,
      kind: portalKind,
      phase: Math.random() * Math.PI * 2,
      used: false
    });
  }
}

function checkWorldCollisions(world) {
  if (state.safeReturnMs > 0) {
    return;
  }

  const birdRadius = 16;
  const groundY = world.height - world.groundHeight;

  if (state.bird.y + birdRadius >= groundY || state.bird.y - birdRadius <= 0) {
    onDamage("muro");
    return;
  }

  for (const pipe of state.pipes) {
    const withinX = world.birdX + birdRadius > pipe.x && world.birdX - birdRadius < pipe.x + world.pipeWidth;
    const hitTop = state.bird.y - birdRadius < pipe.top;
    const hitBottom = state.bird.y + birdRadius > pipe.top + pipe.gap;

    if (withinX && (hitTop || hitBottom)) {
      onDamage("obstáculo");
      return;
    }
  }
}

function onDamage(source) {
  if (state.effects.shield > 0) {
    state.effects.shield = 0;
    state.bird.vy = -4.4;
    spawnBurst(getWorld().birdX, state.bird.y, "#7bdff2", 18);
    state.cameraShakeMs = 180;
    syncStats();
    showToast(`El escudo bloqueó un peligro: ${source}.`);
    sfxShield();
    return;
  }

  if (state.lives > 1) {
    state.lives -= 1;
    state.safeReturnMs = 1800;
    state.damageFlashMs = 260;
    state.cameraShakeMs = 380;
    state.bird.vy = -3.6;
    spawnBurst(getWorld().birdX, state.bird.y, "#ff4d6d", 20);
    applySafeReturnSpace();
    syncStats();
    persistAll();
    showToast(`Golpe recibido. Te quedan ${state.lives} vidas.`);
    sfxShield();
    return;
  }

  spawnBurst(getWorld().birdX, state.bird.y, getSkin().body, 24);
  state.cameraShakeMs = 520;
  endGame();
}

function applySafeReturnSpace() {
  const world = getWorld();
  const safeDistance = world.width * 0.42;
  const minX = world.birdX + 60;

  state.pipes.forEach((pipe) => {
    if (pipe.x < minX + safeDistance) {
      pipe.x += safeDistance;
    }
  });

  state.collectibles.forEach((item) => {
    if (item.x < minX + safeDistance) {
      item.x += safeDistance;
    }
  });

  state.hazards.forEach((hazard) => {
    if (hazard.x < minX + safeDistance) {
      hazard.x += safeDistance;
    }
  });

  state.portals.forEach((portal) => {
    if (portal.x < minX + safeDistance) {
      portal.x += safeDistance;
    }
  });

  state.spawnTimer = Math.min(state.spawnTimer, getDifficulty().spawnMs * 0.25);
  state.bird.vy = -1.5;
}

function flapBird() {
  const lift = state.effects.wings > 0 ? -8.3 : -7.2;
  state.bird.vy = lift;
  state.bird.flap = 1;
  sfxFlap();
}

function applyPowerup(kind, silent = false) {
  if (kind === "shield") {
    state.effects.shield = 4200;
    if (!silent) showToast("Escudo activado.");
  }
  if (kind === "slow") {
    state.effects.slow = 4200;
    if (!silent) showToast("Tiempo lento activado.");
  }
  if (kind === "star") {
    state.score += 3;
    state.bestScore = Math.max(state.bestScore, state.score);
    updatePortalMilestones();
    if (!silent) showToast("Estrella: +3 puntos.");
  }
  if (kind === "wings") {
    state.effects.wings = 4200;
    if (!silent) showToast("Alas suaves activadas.");
  }
  if (kind === "heart") {
    if (state.lives < state.maxLives) {
      state.lives += 1;
      if (!silent) showToast("Ganaste una vida.");
    } else {
      state.academyPoints += 2;
      if (!silent) showToast("Vida completa: +2 puntos premio.");
    }
  }
  if (kind === "coin") {
    state.academyPoints += Math.max(1, Math.round(getAcademyMultiplier()));
    if (!silent) showToast("Moneda recogida.");
  }

  state.cameraShakeMs = Math.max(state.cameraShakeMs, 120);
  spawnBurst(getWorld().birdX, state.bird.y - 10, findPowerup(kind).color, 12);
  if (kind !== "coin") {
    updateMission("collect_powerups", 1);
  }
  syncStats();
  persistAll();
  if (kind === "coin") {
    sfxScore();
  } else {
    sfxPowerup();
  }
}

function tickEffects(deltaMs) {
  state.effects.shield = Math.max(0, state.effects.shield - deltaMs);
  state.effects.slow = Math.max(0, state.effects.slow - deltaMs);
  state.effects.wings = Math.max(0, state.effects.wings - deltaMs);
  syncEffects();
}

function draw() {
  const world = getWorld();
  const env = getEnvironment();
  const shake = state.cameraShakeMs > 0 ? Math.min(9, state.cameraShakeMs / 60) : 0;
  const shakeX = shake > 0 ? randomBetween(-shake, shake) : 0;
  const shakeY = shake > 0 ? randomBetween(-shake * 0.6, shake * 0.6) : 0;

  ctx.clearRect(0, 0, world.width, world.height);
  ctx.save();
  ctx.translate(shakeX, shakeY);
  if (state.mode === "bonus" && state.bonusSession) {
    drawBonusWorld(world);
    drawBonusCoins();
    drawParticles();
    drawBird(world);
    ctx.restore();
    return;
  }
  drawSky(world, env);
  drawBackLayers(world, env);
  drawPipes(world, env);
  drawPortals();
  drawCollectibles();
  drawHazards();
  drawGround(world, env);
  drawParticles();
  drawBird(world);
  ctx.restore();

  if (state.damageFlashMs > 0) {
    ctx.fillStyle = `rgba(255, 77, 109, ${0.08 + state.damageFlashMs / 1200})`;
    ctx.fillRect(0, 0, world.width, world.height);
  }
}

function drawBonusWorld(world) {
  const bonus = state.bonusSession;
  const gradient = ctx.createLinearGradient(0, 0, 0, world.height);
  gradient.addColorStop(0, "#2e2a82");
  gradient.addColorStop(0.55, "#1a5be0");
  gradient.addColorStop(1, "#8edaff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, world.width, world.height);

  for (let index = 0; index < 24; index += 1) {
    const starX = (index * 83 - bonus.worldShift * 0.3) % (world.width + 120);
    const x = starX < -20 ? starX + world.width + 120 : starX;
    const y = 40 + (index % 6) * 48 + Math.sin(state.tick * 0.04 + index) * 10;
    ctx.fillStyle = index % 2 === 0 ? "rgba(255,255,255,0.95)" : "rgba(255,214,102,0.9)";
    ctx.beginPath();
    ctx.arc(x, y, 2 + (index % 3), 0, Math.PI * 2);
    ctx.fill();
  }

  for (let cloud = 0; cloud < 5; cloud += 1) {
    ctx.globalAlpha = 0.34;
    ctx.fillStyle = "#fefefe";
    drawCloud((cloud * 210 - bonus.worldShift * 0.55) % (world.width + 260), 90 + cloud * 48, 0.95 + cloud * 0.06);
  }
  ctx.globalAlpha = 1;

  const groundY = world.height - world.groundHeight;
  const groundGradient = ctx.createLinearGradient(0, groundY, 0, world.height);
  groundGradient.addColorStop(0, "#ffd166");
  groundGradient.addColorStop(1, "#f77f00");
  ctx.fillStyle = groundGradient;
  ctx.fillRect(0, groundY, world.width, world.groundHeight);

  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.fillRect(0, groundY, world.width, 14);
}

function drawBonusCoins() {
  if (!state.bonusSession) {
    return;
  }

  state.bonusSession.coins.forEach((coin) => {
    ctx.save();
    ctx.translate(coin.x, coin.y);
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(0, 0, coin.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffca3a";
    ctx.beginPath();
    ctx.arc(0, 0, coin.radius - 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#7a4a00";
    ctx.font = "bold 18px Trebuchet MS";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("$", 0, 1);
    ctx.restore();
  });
}

function drawSky(world, env) {
  const gradient = ctx.createLinearGradient(0, 0, 0, world.height);
  gradient.addColorStop(0, env.skyTop);
  gradient.addColorStop(1, env.skyBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, world.width, world.height);

  if (env.id === "night") {
    state.stars.forEach((star) => {
      ctx.globalAlpha = 0.5 + Math.sin(state.tick * 0.04 + star.phase) * 0.45;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#f7f0c6";
    ctx.beginPath();
    ctx.arc(world.width - 86, 92, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = env.skyTop;
    ctx.beginPath();
    ctx.arc(world.width - 72, 84, 28, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = env.id === "lava" ? "#ffcf56" : "#ffe066";
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = env.id === "lava" ? 36 : 28;
    ctx.beginPath();
    ctx.arc(world.width - 86, 92, env.id === "lava" ? 38 : 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

function drawBackLayers(world, env) {
  state.clouds.forEach((cloud) => {
    if (env.id === "lava") {
      ctx.globalAlpha = 0.32;
      ctx.fillStyle = "#5b3425";
    } else if (env.id === "night") {
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = "#8ea8d6";
    } else if (env.id === "winter") {
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "#ffffff";
    } else {
      ctx.globalAlpha = 0.72;
      ctx.fillStyle = "#ffffff";
    }
    drawCloud(cloud.x, cloud.y, cloud.scale);
  });
  ctx.globalAlpha = 1;

  const shift = state.worldShift * 0.18;
  env.mountain.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, world.height - world.groundHeight + 10);
    for (let x = -80; x <= world.width + 120; x += 110) {
      const px = x - (shift * (index + 1) % 110);
      const peak = world.height - world.groundHeight - 20 - index * 34 - Math.sin((x + shift) * 0.02) * 10;
      ctx.quadraticCurveTo(px + 55, peak - 58, px + 110, world.height - world.groundHeight + 10);
    }
    ctx.lineTo(world.width, world.height);
    ctx.lineTo(0, world.height);
    ctx.closePath();
    ctx.fill();
  });

  drawAmbient(world, env);
}

function drawAmbient(world, env) {
  state.ambientParticles.forEach((particle) => {
    if (env.ambient === "snow") {
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    if (env.ambient === "embers") {
      ctx.fillStyle = particle.seed > 0.5 ? "#ffb703" : "#ffd166";
      ctx.globalAlpha = 0.55 + Math.sin(state.tick * 0.04 + particle.seed) * 0.2;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      return;
    }

    if (env.ambient === "dust") {
      ctx.fillStyle = "rgba(160, 114, 78, 0.24)";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.4, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    if (env.ambient === "glow") {
      ctx.fillStyle = `rgba(184,242,230,${0.35 + Math.sin(particle.phase) * 0.18})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size + Math.sin(particle.phase) * 1.1, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    if (env.ambient === "petals") {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(state.tick * 0.02 + particle.seed);
      ctx.fillStyle = "rgba(255,255,255,0.78)";
      ctx.beginPath();
      ctx.ellipse(0, 0, particle.size * 1.8, particle.size, 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    if (env.ambient === "bubbles") {
      ctx.strokeStyle = "rgba(255,255,255,0.52)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.8, 0, Math.PI * 2);
      ctx.stroke();
    }
  });
}

function drawPipes(world, env) {
  state.pipes.forEach((pipe) => {
    drawPipeSegment(pipe.x, 0, world.pipeWidth, pipe.top, false, env);
    drawPipeSegment(pipe.x, pipe.top + pipe.gap, world.pipeWidth, world.height - world.groundHeight - (pipe.top + pipe.gap), true, env);
  });
}

function drawPipeSegment(x, y, width, height, upsideDown, env) {
  if (height <= 0) {
    return;
  }

  ctx.save();
  if (upsideDown) {
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(Math.PI);
    ctx.translate(-(x + width / 2), -(y + height / 2));
  }

  if (env.obstacleStyle === "flower") {
    drawFlowerObstacle(x, y, width, height, env);
  } else if (env.obstacleStyle === "icicle") {
    drawIcicleObstacle(x, y, width, height);
  } else if (env.obstacleStyle === "rock") {
    drawRockObstacle(x, y, width, height);
  } else if (env.obstacleStyle === "crystal") {
    drawCrystalObstacle(x, y, width, height);
  } else if (env.obstacleStyle === "coral") {
    drawCoralObstacle(x, y, width, height);
  } else {
    drawClassicPipeObstacle(x, y, width, height, env);
  }

  ctx.restore();
}

function drawClassicPipeObstacle(x, y, width, height, env) {
  let startColor = env.accent;
  let endColor = "#f77f00";
  let capColor = "#1f2d3d";

  if (env.id === "night") {
    startColor = "#7c8ec9";
    endColor = "#384d7d";
    capColor = "#e0e7ff";
  } else if (env.id === "lava") {
    startColor = "#8c4b20";
    endColor = "#3d2518";
    capColor = "#ffba08";
  }

  const gradient = ctx.createLinearGradient(x, y, x + width, y);
  gradient.addColorStop(0, startColor);
  gradient.addColorStop(0.35, "rgba(255,255,255,0.8)");
  gradient.addColorStop(0.6, startColor);
  gradient.addColorStop(1, endColor);

  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = capColor;
  ctx.fillRect(x - 10, y + height - 22, width + 20, 22);
  ctx.strokeStyle = "#1f2d3d";
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);
  ctx.strokeRect(x - 10, y + height - 22, width + 20, 22);
}

function drawFlowerObstacle(x, y, width, height, env) {
  ctx.fillStyle = env.id === "jungle" ? "#2f8f46" : "#58b947";
  ctx.fillRect(x + width * 0.32, y, width * 0.36, Math.max(18, height - 30));
  ctx.strokeStyle = "#214b2d";
  ctx.lineWidth = 3;
  ctx.strokeRect(x + width * 0.32, y, width * 0.36, Math.max(18, height - 30));

  ctx.fillStyle = "#2b9348";
  ctx.beginPath();
  ctx.ellipse(x + width * 0.26, y + height * 0.45, width * 0.2, 18, -0.8, 0, Math.PI * 2);
  ctx.ellipse(x + width * 0.74, y + height * 0.58, width * 0.2, 18, 0.8, 0, Math.PI * 2);
  ctx.fill();

  const headY = y + height - 24;
  ctx.fillStyle = env.id === "jungle" ? "#d62828" : "#ef476f";
  ctx.beginPath();
  ctx.ellipse(x + width * 0.5, headY, width * 0.58, 24, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffe8cc";
  ctx.beginPath();
  ctx.ellipse(x + width * 0.5, headY + 1, width * 0.42, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1f2d3d";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  for (let tooth = 0; tooth < 6; tooth += 1) {
    const toothX = x + width * 0.2 + tooth * (width * 0.12);
    ctx.moveTo(toothX, headY - 2);
    ctx.lineTo(toothX + 5, headY - 14);
    ctx.lineTo(toothX + 10, headY - 2);
  }
  ctx.stroke();
}

function drawIcicleObstacle(x, y, width, height) {
  const gradient = ctx.createLinearGradient(x, y, x + width, y);
  gradient.addColorStop(0, "#dff4ff");
  gradient.addColorStop(0.5, "#ffffff");
  gradient.addColorStop(1, "#8fc4f0");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(x + width * 0.5, y);
  ctx.lineTo(x + width, y + height - 22);
  ctx.lineTo(x, y + height - 22);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(x + width * 0.2, y + height - 26, width * 0.6, 26);
  ctx.strokeStyle = "#4f6c8e";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawRockObstacle(x, y, width, height) {
  ctx.fillStyle = "#9c7a5b";
  ctx.beginPath();
  ctx.moveTo(x + width * 0.12, y + height);
  ctx.lineTo(x + width * 0.24, y + height * 0.3);
  ctx.lineTo(x + width * 0.48, y + height * 0.08);
  ctx.lineTo(x + width * 0.76, y + height * 0.22);
  ctx.lineTo(x + width * 0.88, y + height);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#5d4037";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawCrystalObstacle(x, y, width, height) {
  ctx.fillStyle = "#7bdff2";
  ctx.beginPath();
  ctx.moveTo(x + width * 0.5, y);
  ctx.lineTo(x + width, y + height * 0.32);
  ctx.lineTo(x + width * 0.78, y + height);
  ctx.lineTo(x + width * 0.22, y + height);
  ctx.lineTo(x, y + height * 0.32);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#22577a";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + width * 0.5, y + 6);
  ctx.lineTo(x + width * 0.45, y + height - 8);
  ctx.moveTo(x + width * 0.5, y + 6);
  ctx.lineTo(x + width * 0.72, y + height * 0.62);
  ctx.stroke();
}

function drawCoralObstacle(x, y, width, height) {
  ctx.fillStyle = "#ff7aa2";
  ctx.fillRect(x + width * 0.38, y + height * 0.2, width * 0.24, height * 0.8);
  ctx.beginPath();
  ctx.arc(x + width * 0.5, y + height * 0.18, width * 0.32, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#00b4d8";
  ctx.beginPath();
  ctx.arc(x + width * 0.26, y + height * 0.48, width * 0.16, 0, Math.PI * 2);
  ctx.arc(x + width * 0.74, y + height * 0.56, width * 0.16, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#1f2d3d";
  ctx.lineWidth = 3;
  ctx.strokeRect(x + width * 0.38, y + height * 0.2, width * 0.24, height * 0.8);
}

function drawCollectibles() {
  state.collectibles.forEach((item) => {
    if (item.kind === "coin") {
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.fillStyle = "#ffd166";
      ctx.beginPath();
      ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffca3a";
      ctx.beginPath();
      ctx.arc(0, 0, item.radius - 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#7a4a00";
      ctx.font = "bold 18px Trebuchet MS";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("$", 0, 1);
      ctx.restore();
      return;
    }

    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.shadowColor = item.color;
    ctx.shadowBlur = 18;
    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#10233d";
    ctx.beginPath();
    ctx.arc(0, 0, item.radius - 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = "20px Trebuchet MS";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = item.color;
    ctx.fillText(findPowerup(item.kind).emoji, 0, 1);
    ctx.restore();
  });
}

function drawPortals() {
  state.portals.forEach((portal) => {
    ctx.save();
    ctx.translate(portal.x, portal.y);
    if (portal.kind === "tree") {
      ctx.fillStyle = "#6b8f3f";
      ctx.beginPath();
      ctx.arc(0, -10, 26, 0, Math.PI * 2);
      ctx.arc(-18, 6, 18, 0, Math.PI * 2);
      ctx.arc(18, 4, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#7f5539";
      ctx.fillRect(-8, 10, 16, 26);
      ctx.fillStyle = "rgba(255, 244, 143, 0.8)";
      ctx.beginPath();
      ctx.arc(0, 4, 11 + Math.sin(portal.phase) * 1.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (portal.kind === "tunnel") {
      ctx.strokeStyle = "#6c757d";
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.arc(0, 0, 24, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = "#9ad1ff";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "rgba(154, 209, 255, 0.35)";
      ctx.beginPath();
      ctx.arc(0, 0, 16 + Math.sin(portal.phase) * 1.4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = "#ffd166";
      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#5cc8ff";
      ctx.beginPath();
      ctx.arc(0, 0, 21 + Math.sin(portal.phase) * 1.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 22px Trebuchet MS";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("B", 0, 1);
    }
    ctx.restore();
  });
}

function drawHazards() {
  state.hazards.forEach((hazard) => {
    ctx.save();
    ctx.translate(hazard.x, hazard.y);

    if (hazard.kind === "bee") {
      ctx.fillStyle = "#ffd166";
      ctx.beginPath();
      ctx.ellipse(0, 0, 16, 11, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#1f2d3d";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-7, -9);
      ctx.lineTo(-7, 9);
      ctx.moveTo(2, -10);
      ctx.lineTo(2, 10);
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.74)";
      ctx.beginPath();
      ctx.ellipse(-6, -12, 7, 5, -0.5, 0, Math.PI * 2);
      ctx.ellipse(7, -11, 7, 5, 0.5, 0, Math.PI * 2);
      ctx.fill();
    } else if (hazard.kind === "bat") {
      ctx.fillStyle = "#1f2d3d";
      ctx.beginPath();
      ctx.moveTo(-18, 2);
      ctx.quadraticCurveTo(-4, -18, 0, 0);
      ctx.quadraticCurveTo(4, -18, 18, 2);
      ctx.quadraticCurveTo(6, -3, 0, 8);
      ctx.quadraticCurveTo(-6, -3, -18, 2);
      ctx.fill();
    } else if (hazard.kind === "ice") {
      ctx.fillStyle = "#d9f0ff";
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(14, 0);
      ctx.lineTo(0, 18);
      ctx.lineTo(-14, 0);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#4f6c8e";
      ctx.lineWidth = 3;
      ctx.stroke();
    } else if (hazard.kind === "fire") {
      ctx.fillStyle = "#ffb703";
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fb5607";
      ctx.beginPath();
      ctx.moveTo(0, -20);
      ctx.lineTo(10, -2);
      ctx.lineTo(-2, -4);
      ctx.lineTo(6, 14);
      ctx.lineTo(-12, 2);
      ctx.closePath();
      ctx.fill();
    } else if (hazard.kind === "rock") {
      ctx.fillStyle = "#8d6e63";
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#5d4037";
      ctx.lineWidth = 3;
      ctx.stroke();
    } else if (hazard.kind === "crystal") {
      ctx.fillStyle = "#a9def9";
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(14, -2);
      ctx.lineTo(8, 18);
      ctx.lineTo(-8, 18);
      ctx.lineTo(-14, -2);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#22577a";
      ctx.lineWidth = 3;
      ctx.stroke();
    } else if (hazard.kind === "thorn") {
      ctx.fillStyle = "#588157";
      ctx.beginPath();
      ctx.ellipse(0, 0, 16, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#1f2d3d";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-14, -2);
      ctx.lineTo(-2, -16);
      ctx.lineTo(10, -2);
      ctx.lineTo(2, 16);
      ctx.lineTo(-14, -2);
      ctx.stroke();
    } else if (hazard.kind === "jelly") {
      ctx.fillStyle = "#90e0ef";
      ctx.beginPath();
      ctx.arc(0, -2, 16, Math.PI, Math.PI * 2);
      ctx.lineTo(16, 8);
      ctx.quadraticCurveTo(0, 16, -16, 8);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#0077b6";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-10, 8);
      ctx.lineTo(-8, 20);
      ctx.moveTo(0, 8);
      ctx.lineTo(2, 24);
      ctx.moveTo(10, 8);
      ctx.lineTo(8, 20);
      ctx.stroke();
    }

    ctx.restore();
  });
}

function drawGround(world, env) {
  const groundY = world.height - world.groundHeight;
  const gradient = ctx.createLinearGradient(0, groundY, 0, world.height);
  gradient.addColorStop(0, env.groundTop);
  gradient.addColorStop(1, env.groundBottom);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, groundY, world.width, world.groundHeight);

  ctx.fillStyle = "rgba(255,255,255,0.22)";
  ctx.fillRect(0, groundY, world.width, 14);

  if (env.id === "lava") {
    for (let x = -20; x < world.width + 40; x += 48) {
      const bubbleX = x + (state.worldShift % 48);
      ctx.fillStyle = "rgba(255, 186, 8, 0.28)";
      ctx.beginPath();
      ctx.arc(bubbleX, groundY + 26 + Math.sin((bubbleX + state.tick) * 0.08) * 6, 9, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (env.id === "winter") {
    ctx.fillStyle = "rgba(255,255,255,0.46)";
    ctx.fillRect(0, groundY + 10, world.width, 12);
  } else if (env.id === "ocean") {
    for (let x = 0; x < world.width + 40; x += 48) {
      const waveX = x + (state.worldShift % 48);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.beginPath();
      ctx.arc(waveX, groundY + 16, 14, Math.PI, Math.PI * 2);
      ctx.fill();
    }
  } else if (env.id === "jungle" || env.id === "garden") {
    for (let x = -20; x < world.width + 40; x += 50) {
      const leafX = x + (state.worldShift % 50);
      ctx.fillStyle = "rgba(255,255,255,0.14)";
      ctx.beginPath();
      ctx.ellipse(leafX, groundY + 34, 10, 18, 0.4, 0, Math.PI * 2);
      ctx.ellipse(leafX + 14, groundY + 56, 9, 16, -0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    for (let x = 0; x < world.width + 40; x += 42) {
      const offset = state.worldShift % 42;
      ctx.fillStyle = "rgba(25, 43, 70, 0.16)";
      ctx.fillRect(x + offset, groundY + 26, 16, 16);
      ctx.fillRect(x - 18 + offset, groundY + 60, 10, 10);
    }
  }

  ctx.fillStyle = "rgba(17, 32, 61, 0.16)";
  ctx.font = "bold 22px Trebuchet MS";
  ctx.fillText("A", 24, groundY + 44);
  ctx.fillText("2", 82, groundY + 80);
  ctx.fillText("B", 142, groundY + 52);
  ctx.fillText("3", 208, groundY + 92);
}

function drawBird(world) {
  const skin = getSkin();
  const birdX = world.birdX;
  const bird = state.bird;

  ctx.save();
  ctx.translate(birdX, bird.y);
  ctx.rotate(bird.rotation);

  if (state.safeReturnMs > 0 && Math.sin(state.tick * 0.3) > 0) {
    ctx.globalAlpha = 0.45;
  }

  if (state.effects.shield > 0) {
    const pulse = 0.88 + Math.sin(state.tick * 0.18) * 0.08;
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = "#7bdff2";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, 28 * pulse, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  if (state.effects.slow > 0) {
    ctx.strokeStyle = "#d291ff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-26, -8);
    ctx.lineTo(-40, -14);
    ctx.moveTo(-24, 2);
    ctx.lineTo(-42, 2);
    ctx.moveTo(-22, 12);
    ctx.lineTo(-38, 18);
    ctx.stroke();
  }

  ctx.fillStyle = skin.body;
  ctx.beginPath();
  ctx.ellipse(0, 0, 22, 18, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = skin.wing;
  ctx.beginPath();
  ctx.ellipse(-5, bird.flap > 0 ? -10 : 7, 12, 8, -0.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(8, -4, 6.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#18233d";
  ctx.beginPath();
  ctx.arc(10, -4, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ff7b54";
  ctx.beginPath();
  ctx.moveTo(16, -1);
  ctx.lineTo(30, 3);
  ctx.lineTo(16, 8);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = skin.cheek;
  ctx.beginPath();
  ctx.arc(5, 7, 4.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = skin.scarf;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-14, -10);
  ctx.lineTo(4, -13);
  ctx.stroke();

  if (state.effects.wings > 0) {
    ctx.strokeStyle = "#80ed99";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-18, -2);
    ctx.quadraticCurveTo(-32, -18, -30, 8);
    ctx.moveTo(-18, 2);
    ctx.quadraticCurveTo(-30, 20, -30, -2);
    ctx.stroke();
  }

  if (state.academyPoints >= 15) {
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.moveTo(0, -28);
    ctx.lineTo(4, -19);
    ctx.lineTo(14, -18);
    ctx.lineTo(6, -12);
    ctx.lineTo(8, -2);
    ctx.lineTo(0, -8);
    ctx.lineTo(-8, -2);
    ctx.lineTo(-6, -12);
    ctx.lineTo(-14, -18);
    ctx.lineTo(-4, -19);
    ctx.closePath();
    ctx.fill();
  }

  if (state.lives === 1) {
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-18, -18);
    ctx.lineTo(-6, -6);
    ctx.moveTo(-6, -18);
    ctx.lineTo(-18, -6);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;

  ctx.restore();
}

function drawParticles() {
  state.particles.forEach((particle) => {
    ctx.globalAlpha = particle.life / particle.maxLife;
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
}

function floatBirdIdle() {
  state.bird.y = getWorld().height * 0.42 + Math.sin(state.tick * 0.05) * 14;
  state.bird.rotation = Math.sin(state.tick * 0.04) * 0.12;
}

function populateSelect(select, options) {
  select.innerHTML = "";
  options.forEach((option) => {
    const element = document.createElement("option");
    element.value = option.id;
    element.textContent = option.label;
    select.appendChild(element);
  });
}

function resizeCanvas() {
  const rect = dom.stage.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  state.viewport.width = Math.max(320, Math.round(rect.width));
  state.viewport.height = Math.max(520, Math.round(rect.height));
  state.viewport.groundHeight = clamp(Math.round(state.viewport.height * 0.15), 90, 150);
  state.viewport.pipeWidth = state.viewport.width < 540
    ? clamp(Math.round(state.viewport.width * 0.074), 52, 68)
    : clamp(Math.round(state.viewport.width * 0.085), 66, 92);
  state.viewport.birdX = state.viewport.width < 540
    ? clamp(Math.round(state.viewport.width * 0.19), 88, 118)
    : clamp(Math.round(state.viewport.width * 0.22), 102, 156);

  dom.canvas.width = Math.round(state.viewport.width * dpr);
  dom.canvas.height = Math.round(state.viewport.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  regenerateAmbient();
}

function regenerateAmbient() {
  const world = getWorld();
  state.clouds = Array.from({ length: 6 }, (_, index) => ({
    x: (world.width / 6) * index + randomBetween(0, 80),
    y: randomBetween(60, Math.max(120, world.height * 0.34)),
    scale: randomBetween(0.8, 1.45),
    speed: randomBetween(0.12, 0.36)
  }));

  state.stars = Array.from({ length: 44 }, () => ({
    x: Math.random() * world.width,
    y: Math.random() * world.height * 0.45,
    size: randomBetween(1, 2.6),
    phase: Math.random() * Math.PI * 2
  }));

  state.ambientParticles = Array.from({ length: 42 }, () => ({
    x: Math.random() * world.width,
    y: Math.random() * world.height,
    vx: randomBetween(-0.6, 0.8),
    vy: randomBetween(0.6, 1.8),
    size: randomBetween(1.2, 3.4),
    phase: Math.random() * Math.PI * 2,
    seed: Math.random() * Math.PI * 2
  }));
}

function getWorld() {
  return state.viewport;
}

function getDifficulty() {
  return difficulties.find((item) => item.id === state.difficulty) || difficulties[1];
}

function getSkin() {
  return skins.find((item) => item.id === state.skin) || skins[0];
}

function getEnvironment() {
  return environments[state.environmentIndex] || environments[0];
}

function setEnvironmentByScore(force) {
  const nextIndex = Math.floor(state.score / 6) % environments.length;
  if (force || nextIndex !== state.environmentIndex) {
    state.environmentIndex = nextIndex;
    regenerateAmbient();
    syncProfileSummary();
  }
}

function getScrollSpeed(world) {
  const preset = getDifficulty();
  const scale = world.width / 420;
  const slowFactor = state.effects.slow > 0 ? 0.68 : 1;
  return preset.speed * scale * slowFactor;
}

function findPowerup(kind) {
  return powerups.find((item) => item.id === kind) || powerups[0];
}

function buildQuestion() {
  const topic = state.learningTopic;
  const age = state.ageGroup;

  if (topic === "colors") {
    return buildColorQuestion(age);
  }

  if (topic === "english") {
    return buildEnglishQuestion(age);
  }

  if (topic === "letters") {
    return buildLetterQuestion(age);
  }

  if (topic === "math") {
    return buildMathQuestion(age);
  }

  const builders = [() => buildMathQuestion(age), () => buildLetterQuestion(age)];
  if (colorQuestions.some((item) => item.ages.includes(age)) || colorFamilies.some((item) => item.ages.includes(age))) {
    builders.push(() => buildColorQuestion(age));
  }
  if (englishQuestions.some((item) => item.ages.includes(age)) || englishVocabulary.some((item) => item.ages.includes(age))) {
    builders.push(() => buildEnglishQuestion(age));
  }
  return builders[Math.floor(Math.random() * builders.length)]();
}

function buildColorQuestion(age) {
  const pool = colorQuestions.filter((item) => item.ages.includes(age));
  const dynamicPool = colorFamilies.filter((item) => item.ages.includes(age));

  if (dynamicPool.length > 0 && Math.random() < 0.45) {
    const entry = pickFrom(dynamicPool);
    return {
      prompt: `¿De qué color es normalmente un ${entry.base}?`,
      topicId: "colors",
      answer: entry.color,
      options: shuffleUnique([entry.color, ...entry.wrong]),
      fact: `Normalmente un ${entry.base} se asocia con el color ${entry.color.toLowerCase()}.`
    };
  }

  return { ...pickFrom(pool), topicId: "colors" };
}

function buildEnglishQuestion(age) {
  const pool = englishQuestions.filter((item) => item.ages.includes(age));
  const dynamicPool = englishVocabulary.filter((item) => item.ages.includes(age));

  if (dynamicPool.length > 0 && Math.random() < 0.45) {
    const entry = pickFrom(dynamicPool);
    return {
      prompt: `¿Cómo se dice "${entry.es}" en inglés?`,
      topicId: "english",
      answer: entry.en,
      options: shuffleUnique([entry.en, ...entry.wrong]),
      fact: `"${entry.es}" en inglés es "${entry.en}".`
    };
  }

  return { ...pickFrom(pool), topicId: "english" };
}

function buildMathQuestion(age) {
  if (age === "4-6") {
    if (Math.random() < 0.5) {
      const base = randomInt(1, 8);
      return {
        prompt: `¿Qué número viene después del ${base}?`,
        topicId: "math",
        answer: String(base + 1),
        options: shuffleUnique([String(base + 1), String(base + 2), String(Math.max(0, base - 1))]),
        fact: `Después del ${base} viene el ${base + 1}.`
      };
    }
    const left = randomInt(1, 5);
    const right = randomInt(1, 4);
    return {
      prompt: `¿Cuánto es ${left} + ${right}?`,
      topicId: "math",
      answer: String(left + right),
      options: shuffleUnique([String(left + right), String(left + right + 1), String(Math.max(0, left + right - 1))]),
      fact: `${left} + ${right} = ${left + right}.`
    };
  }

  if (age === "7-9") {
    if (Math.random() < 0.5) {
      const left = randomInt(1, 8);
      const right = randomInt(1, 6);
      return {
        prompt: `¿Cuánto es ${left} + ${right}?`,
        topicId: "math",
        answer: String(left + right),
        options: shuffleUnique([String(left + right), String(left + right + 2), String(Math.max(0, left + right - 2))]),
        fact: `${left} + ${right} = ${left + right}.`
      };
    }
    const left = randomInt(4, 10);
    const right = randomInt(1, 4);
    return {
      prompt: `¿Cuánto es ${left} - ${right}?`,
      topicId: "math",
      answer: String(left - right),
      options: shuffleUnique([String(left - right), String(left - right + 1), String(left - right - 1)]),
      fact: `${left} - ${right} = ${left - right}.`
    };
  }

  if (Math.random() < 0.5) {
    const left = randomInt(5, 12);
    const right = randomInt(2, 7);
    return {
      prompt: `¿Cuánto es ${left} - ${right}?`,
      topicId: "math",
      answer: String(left - right),
      options: shuffleUnique([String(left - right), String(left - right + 2), String(left - right - 2)]),
      fact: `${left} - ${right} = ${left - right}.`
    };
  }

  const left = randomInt(2, 5);
  const right = randomInt(2, 4);
  return {
    prompt: `¿Cuánto es ${left} x ${right}?`,
    topicId: "math",
    answer: String(left * right),
    options: shuffleUnique([String(left * right), String(left * right + left), String(left * right - right)]),
    fact: `${left} x ${right} = ${left * right}.`
  };
}

function buildLetterQuestion(age) {
  if (age === "10+") {
    const advanced = [
      { prompt: "¿Cuál de estas letras es una vocal?", answer: "A", options: ["A", "R", "T"], fact: "A, E, I, O y U son vocales." },
      { prompt: "¿Cuál de estas palabras empieza con la letra B?", answer: "Barco", options: ["Casa", "Barco", "Silla"], fact: "'Barco' empieza con B." },
      { prompt: "¿Cuál palabra termina con vocal?", answer: "Casa", options: ["Sol", "Tren", "Casa"], fact: "'Casa' termina en vocal." }
    ];
    return { ...pickFrom(advanced), topicId: "letters" };
  }

  const item = pickFrom(letterWords.filter((entry) => entry.ages.includes(age)));
  const pool = shuffleArray("ABCDEFGHILMNPRSTU".split("")).filter((letter) => letter !== item.letter).slice(0, 2);
  return {
    prompt: `¿Con qué letra empieza la palabra "${item.word}"?`,
    topicId: "letters",
    answer: item.letter,
    options: shuffleUnique([item.letter, ...pool]),
    fact: `"${item.word}" empieza con la letra ${item.letter}.`
  };
}

function syncOverlay(eyebrow, title, text, buttonText) {
  dom.overlayEyebrow.textContent = eyebrow;
  dom.overlayTitle.textContent = title;
  dom.overlayText.textContent = text;
  dom.overlayButton.textContent = buttonText;
}

function maybeTriggerEvent() {
  if (state.activeEvent || state.score < 10) {
    return;
  }

  const triggerScore = Math.floor(state.score / 10) * 10;
  if (triggerScore === 0 || triggerScore === state.lastEventScore) {
    return;
  }

  state.lastEventScore = triggerScore;
  const template = eventTemplates[getEnvironment().id];
  state.activeEvent = { ...template };
  state.eventTimerMs = template.duration;
  syncEventBanner();
  showToast(`${template.label}: ${template.description}`);
}

function tickEvent(deltaMs) {
  if (!state.activeEvent) {
    return;
  }

  state.eventTimerMs = Math.max(0, state.eventTimerMs - deltaMs);
  syncEventBanner();
  if (state.eventTimerMs === 0) {
    state.activeEvent = null;
    syncEventBanner();
  }
}

function syncEventBanner() {
  if (state.mode === "bonus" && state.bonusSession) {
    dom.eventBanner.classList.remove("hidden");
    dom.eventBanner.textContent = `Bonus monedas · ${Math.ceil(state.bonusSession.remainingMs / 1000)}s · ${state.bonusSession.collected} tomadas`;
    return;
  }

  if (!state.activeEvent) {
    dom.eventBanner.classList.add("hidden");
    dom.eventBanner.textContent = "";
    return;
  }

  dom.eventBanner.classList.remove("hidden");
  dom.eventBanner.textContent = `${state.activeEvent.label} · ${Math.ceil(state.eventTimerMs / 1000)}s`;
}

function getAcademyMultiplier() {
  let multiplier = 1 + state.upgrades.academyBoost * 0.25;
  if (state.activeEvent?.id === "prism_bonus") {
    multiplier += 0.35;
  }
  return multiplier;
}

function getPortalStepRange() {
  if (state.difficulty === "muy-facil") return [10, 13];
  if (state.difficulty === "facil") return [11, 14];
  if (state.difficulty === "intermedio") return [12, 16];
  return [14, 18];
}

function getInitialPortalTarget() {
  const [minStep] = getPortalStepRange();
  return minStep;
}

function scheduleNextPortal(baseScore) {
  const [minStep, maxStep] = getPortalStepRange();
  state.nextPortalAt = baseScore + randomInt(minStep, maxStep);
}

function pickPortalKind() {
  const choices = [];
  choices.push("tunnel", "tunnel", "tree");
  if (state.score >= 18) {
    choices.push("bonus");
  }
  if (state.score >= 30) {
    choices.push("bonus");
  }

  let filtered = choices.slice();
  const lastKind = state.recentPortalKinds[state.recentPortalKinds.length - 1];
  if (lastKind && filtered.some((item) => item !== lastKind)) {
    filtered = filtered.filter((item) => item !== lastKind);
  }

  return pickFrom(filtered);
}

function rememberPortalKind(kind) {
  state.recentPortalKinds.push(kind);
  state.recentPortalKinds = state.recentPortalKinds.slice(-3);
}

function updatePortalMilestones() {
  if (state.portalPending) {
    return;
  }

  if (state.score >= state.nextPortalAt) {
    state.portalPending = true;
    state.portalReadyAt = state.nextPortalAt;
    scheduleNextPortal(state.nextPortalAt);
  }
}

function syncStats() {
  const accuracy = state.totalQuestions === 0
    ? 0
    : Math.round((state.correctAnswers / state.totalQuestions) * 100);

  dom.scoreValue.textContent = String(state.score);
  dom.bestValue.textContent = String(state.bestScore);
  dom.livesValue.textContent = "❤️".repeat(state.lives) + "🖤".repeat(Math.max(0, state.maxLives - state.lives));
  dom.academyPointsValue.textContent = String(state.academyPoints);
  dom.gamesPlayed.textContent = String(state.gamesPlayed);
  dom.correctAnswers.textContent = String(state.correctAnswers);
  dom.accuracy.textContent = `${accuracy}%`;
  dom.academyPointsDrawer.textContent = String(state.academyPoints);
  if (state.portalPending) {
    dom.nextLesson.textContent = "Portal listo";
    dom.meterFill.style.width = "100%";
  } else {
    const distanceToPortal = Math.max(0, state.nextPortalAt - state.score);
    const [minStep, maxStep] = getPortalStepRange();
    const meterBase = clamp(maxStep - minStep + 1, 1, PORTAL_PROGRESS_MAX);
    dom.nextLesson.textContent = `${distanceToPortal} puntos`;
    dom.meterFill.style.width = `${clamp((meterBase - distanceToPortal) / meterBase, 0, 1) * 100}%`;
  }

  if (state.leaderboard.length === 0) {
    dom.leaderboardList.innerHTML = "<li>Sin registros todavía.</li>";
  } else {
    dom.leaderboardList.innerHTML = state.leaderboard
      .map((item) => `<li>${escapeHtml(item.name)} · ${item.score} pts</li>`)
      .join("");
  }

  syncEffects();
  renderShop();
}

function syncEffects() {
  const items = [];
  if (state.effects.shield > 0) items.push("🛡️ Escudo");
  if (state.effects.slow > 0) items.push("⏱️ Tiempo lento");
  if (state.effects.wings > 0) items.push("🪽 Alas suaves");
  if (state.safeReturnMs > 0) items.push("✨ Salida segura");

  if (items.length === 0) {
    dom.effectsList.textContent = "Sin ventajas";
    return;
  }

  dom.effectsList.innerHTML = items.map((item) => `<span>${item}</span>`).join("");
}

function syncProfileSummary() {
  dom.lessonLabel.textContent = `${labelFor(learningTopics, state.learningTopic)} · ${state.ageGroup}`;
  dom.environmentLabel.textContent = getEnvironment().label;
  dom.environmentSummary.textContent = getEnvironment().label;
}

function toggleDrawer() {
  const willOpen = !state.drawerOpen;
  if (willOpen && state.mode === "playing") {
    pauseGame();
  }
  state.drawerOpen = willOpen;
  syncDrawer(false);
}

function openDrawer() {
  if (!state.drawerOpen && state.mode === "playing") {
    pauseGame();
  }
  state.drawerOpen = true;
  syncDrawer(false);
}

function closeDrawer() {
  state.drawerOpen = false;
  syncDrawer(false);
}

function syncDrawer(initial) {
  dom.drawer.classList.toggle("is-open", state.drawerOpen);
  dom.drawerBackdrop.classList.toggle("is-visible", state.drawerOpen);
  if (initial) {
    dom.overlay.classList.remove("hidden");
  }
}

function showToast(text) {
  dom.toast.textContent = text;
  dom.toast.classList.add("is-visible");
  state.toastTimer = 1800;
}

function updateToast(deltaMs) {
  if (state.toastTimer <= 0) {
    dom.toast.classList.remove("is-visible");
    return;
  }
  state.toastTimer -= deltaMs;
}

function syncAudioButton() {
  dom.audioToggleBtn.textContent = state.audioEnabled ? "Sonido: ON" : "Sonido: OFF";
}

function renderShop() {
  dom.shopList.innerHTML = upgradeCatalog.map((upgrade) => {
    const level = state.upgrades[upgrade.id];
    const cost = getUpgradeCost(upgrade, level);
    const isMax = level >= upgrade.maxLevel;
    return `
      <article class="shop-card">
        <div class="shop-card__head">
          <h3>${upgrade.name}</h3>
          <span class="level-badge">Nivel ${level}/${upgrade.maxLevel}</span>
        </div>
        <p>${upgrade.description}</p>
        <div class="shop-card__head">
          <span class="price-badge">${isMax ? "Completo" : `${cost} pts`}</span>
          <span class="topic-badge">${upgradeEffectText(upgrade.id, level)}</span>
        </div>
        <button class="secondary-btn" type="button" data-upgrade-id="${upgrade.id}" ${isMax ? "disabled" : ""}>
          ${isMax ? "Mejora máxima" : "Comprar mejora"}
        </button>
      </article>
    `;
  }).join("");

  dom.shopList.querySelectorAll("[data-upgrade-id]").forEach((button) => {
    button.addEventListener("click", () => buyUpgrade(button.getAttribute("data-upgrade-id")));
  });
}

function renderMissions() {
  dom.missionsList.innerHTML = missionCatalog.map((mission) => {
    const progress = state.missions[mission.id]?.progress || 0;
    const claimed = state.missions[mission.id]?.claimed || false;
    const ratio = clamp(progress / mission.target, 0, 1);
    return `
      <article class="mission-card ${claimed ? "mission-card--done" : ""}">
        <div class="mission-card__head">
          <h3>${mission.name}</h3>
          <span class="price-badge">+${mission.reward} pts</span>
        </div>
        <p>${mission.description}</p>
        <div class="mission-card__head">
          <span class="topic-badge">${Math.min(progress, mission.target)}/${mission.target}</span>
          <span class="level-badge">${claimed ? "Completada" : "Activa"}</span>
        </div>
        <div class="mission-progress"><div class="mission-progress__fill" style="width:${ratio * 100}%"></div></div>
      </article>
    `;
  }).join("");
}

function renderTopicStats() {
  dom.topicStats.innerHTML = topicMeta.map((topic) => {
    const stats = state.topicStats[topic.id];
    const accuracy = stats.total === 0 ? 0 : Math.round((stats.correct / stats.total) * 100);
    const badge = stats.correct >= 15 ? "Medalla oro" : stats.correct >= 8 ? "Medalla plata" : stats.correct >= 3 ? "Medalla bronce" : "En progreso";
    return `
      <article class="topic-card">
        <div class="topic-card__head">
          <h3>${topic.label}</h3>
          <span class="topic-badge">${badge}</span>
        </div>
        <p>Aciertos: ${stats.correct} · Intentos: ${stats.total}</p>
        <div class="topic-card__meta">
          <span class="level-badge">${accuracy}% precisión</span>
          <span class="price-badge">${Math.max(0, 15 - stats.correct)} para oro</span>
        </div>
      </article>
    `;
  }).join("");
}

function buyUpgrade(upgradeId) {
  const upgrade = upgradeCatalog.find((item) => item.id === upgradeId);
  if (!upgrade) {
    return;
  }
  const level = state.upgrades[upgrade.id];
  if (level >= upgrade.maxLevel) {
    return;
  }
  const cost = getUpgradeCost(upgrade, level);
  if (state.academyPoints < cost) {
    showToast("No tienes suficientes puntos premio.");
    return;
  }

  state.academyPoints -= cost;
  state.upgrades[upgrade.id] += 1;
  state.maxLives = 3 + state.upgrades.extraHeart;
  state.lives = state.mode === "playing" ? Math.min(state.lives, state.maxLives) : state.maxLives;
  persistAll();
  syncStats();
  renderShop();
  showToast(`Compraste ${upgrade.name}.`);
}

function getUpgradeCost(upgrade, currentLevel) {
  return upgrade.baseCost + currentLevel * 6;
}

function upgradeEffectText(upgradeId, level) {
  if (upgradeId === "starterShield") return `+${level * 0.9}s inicio`;
  if (upgradeId === "extraHeart") return `+${level} vida máx`;
  if (upgradeId === "academyBoost") return `x${(1 + level * 0.25).toFixed(2)}`;
  if (upgradeId === "portalScout") return `+${level * 40}px portal`;
  return "";
}

function updateMission(missionId, amount) {
  const mission = state.missions[missionId];
  if (!mission || mission.claimed) {
    return;
  }
  mission.progress = Math.min(mission.progress + amount, missionCatalog.find((item) => item.id === missionId).target);
  if (mission.progress >= missionCatalog.find((item) => item.id === missionId).target && !mission.claimed) {
    mission.claimed = true;
    const reward = missionCatalog.find((item) => item.id === missionId).reward;
    state.academyPoints += reward;
    showToast(`Misión completada: +${reward} puntos premio.`);
    sfxCorrect();
  }
  persistAll();
  syncStats();
  renderMissions();
}

function registerTopicAttempt(topicId, isCorrect) {
  const key = state.topicStats[topicId] ? topicId : "letters";
  state.topicStats[key].total += 1;
  if (isCorrect) {
    state.topicStats[key].correct += 1;
  }
  persistAll();
  renderTopicStats();
}

function syncInstallButton() {
  const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  if (standalone) {
    dom.installBtn.textContent = "App instalada";
    dom.installBtn.disabled = true;
    return;
  }

  dom.installBtn.disabled = false;
  dom.installBtn.textContent = state.installPromptEvent ? "Instalar en celular" : "Instalar / ver ayuda";
}

function syncUpdateUI() {
  dom.appVersionValue.textContent = APP_META.version;
  dom.repoVersionValue.textContent = state.updateInfo.latestVersion || "Sin revisar";
  dom.updateNowBtn.disabled = !state.updateInfo.latestUrl && !state.updateInfo.releaseUrl;

  const downloadsReady = Boolean(state.updateInfo.downloads.windows || state.updateInfo.downloads.android);
  dom.downloadHelp.textContent = downloadsReady
    ? "Si ya hay archivos publicados en GitHub Releases, estos botones abren el instalador correcto."
    : "Si todavía no hay instalador publicado, el botón te llevará a la página de lanzamientos del repositorio.";

  if (!state.updateInfo.checkedAt) {
    dom.updateSummary.textContent = "Todavía no se ha consultado GitHub.";
    return;
  }

  if (state.updateInfo.hasUpdate) {
    dom.updateSummary.textContent = `Hay una versión nueva: ${state.updateInfo.latestVersion}. Novedad: ${state.updateInfo.latestMessage}`;
    return;
  }

  dom.updateSummary.textContent = `Tu juego está al día. Última novedad revisada: ${state.updateInfo.latestMessage}`;
}

function registerPwa() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPromptEvent = event;
    syncInstallButton();
  });

  window.addEventListener("appinstalled", () => {
    state.installPromptEvent = null;
    syncInstallButton();
    showToast("La app quedó instalada.");
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js")
        .then((registration) => {
          state.serviceWorkerRegistration = registration;
        })
        .catch(() => {
          showToast("No se pudo activar el modo offline.");
        });
    });
  }
}

async function handleInstallClick() {
  if (state.installPromptEvent) {
    state.installPromptEvent.prompt();
    await state.installPromptEvent.userChoice.catch(() => null);
    state.installPromptEvent = null;
    syncInstallButton();
    return;
  }

  showToast("En celular abre el menú del navegador y elige 'Instalar app' o 'Agregar a pantalla de inicio'.");
}

async function checkForUpdates(silent = false) {
  if (!navigator.onLine) {
    state.updateInfo.checkedAt = new Date().toISOString();
    syncUpdateUI();
    if (!silent) {
      showToast("Sin conexión. No se pudo consultar GitHub.");
    }
    return;
  }

  dom.checkUpdatesBtn.disabled = true;
  dom.checkUpdatesBtn.textContent = "Buscando...";

  try {
    const [commitResponse, releaseResponse] = await Promise.all([
      fetch(`${GITHUB_URLS.commitsApi}&t=${Date.now()}`, { cache: "no-store" }),
      fetch(`${GITHUB_URLS.releasesApi}?t=${Date.now()}`, { cache: "no-store" }).catch(() => null)
    ]);

    const commits = commitResponse.ok ? await commitResponse.json() : [];
    const latestCommit = Array.isArray(commits) ? commits[0] : null;
    const latestVersion = latestCommit
      ? `${latestCommit.sha.slice(0, 7)} · ${formatDate(latestCommit.commit.author.date)}`
      : "Sin commits públicos";

    state.updateInfo.latestVersion = latestVersion;
    state.updateInfo.latestSha = latestCommit?.sha || "";
    state.updateInfo.latestMessage = sanitizeCommitMessage(latestCommit?.commit?.message || "Sin novedades publicadas.");
    state.updateInfo.latestUrl = latestCommit?.html_url || GITHUB_URLS.repo;
    state.updateInfo.checkedAt = new Date().toISOString();
    state.updateInfo.hasUpdate = false;

    if (releaseResponse && releaseResponse.ok) {
      const release = await releaseResponse.json();
      state.updateInfo.releaseUrl = release.html_url || GITHUB_URLS.releases;
      state.updateInfo.downloads.windows = findReleaseAssetUrl(release.assets, "windows");
      state.updateInfo.downloads.android = findReleaseAssetUrl(release.assets, "android");
      if (release.tag_name) {
        state.updateInfo.latestVersion = release.tag_name;
      }
      if (release.body) {
        state.updateInfo.latestMessage = sanitizeCommitMessage(release.body.split("\n").find((line) => line.trim()) || state.updateInfo.latestMessage);
      }
      state.updateInfo.hasUpdate = Boolean(release.tag_name && release.tag_name !== APP_META.version);
    } else {
      state.updateInfo.releaseUrl = GITHUB_URLS.releases;
      state.updateInfo.downloads.windows = "";
      state.updateInfo.downloads.android = "";
    }

    syncUpdateUI();

    if (!silent) {
      showToast(state.updateInfo.hasUpdate ? "Hay una actualización disponible." : "No hay actualizaciones nuevas.");
    } else if (state.updateInfo.hasUpdate && window.matchMedia("(display-mode: standalone)").matches) {
      showToast("Tu app encontró una actualización en GitHub.");
    }
  } catch (error) {
    state.updateInfo.checkedAt = new Date().toISOString();
    syncUpdateUI();
    if (!silent) {
      showToast("No se pudo validar el repositorio ahora.");
    }
  } finally {
    dom.checkUpdatesBtn.disabled = false;
    dom.checkUpdatesBtn.textContent = "Buscar actualizaciones";
  }
}

function handleDownloadClick(platform) {
  const url = platform === "windows"
    ? (state.updateInfo.downloads.windows || state.updateInfo.releaseUrl || GITHUB_URLS.releases)
    : (state.updateInfo.downloads.android || state.updateInfo.releaseUrl || GITHUB_URLS.releases);

  if (platform === "windows" && !state.updateInfo.downloads.windows) {
    showToast("Todavía no hay instalador de Windows publicado. Se abrirán los lanzamientos.");
  } else if (platform === "android" && !state.updateInfo.downloads.android) {
    showToast("Todavía no hay APK publicado. Se abrirán los lanzamientos.");
  }

  openExternalUrl(url);
}

async function openUpdatePage() {
  if (state.serviceWorkerRegistration) {
    state.serviceWorkerRegistration.update().catch(() => null);
  }

  const target = state.updateInfo.releaseUrl || state.updateInfo.latestUrl || GITHUB_URLS.repo;
  openExternalUrl(target);
}

function openExternalUrl(url) {
  if (!url) {
    showToast("No hay un enlace disponible todavía.");
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

function findReleaseAssetUrl(assets, platform) {
  if (!Array.isArray(assets)) {
    return "";
  }

  const matcher = platform === "windows"
    ? (asset) => /\.(exe|msi|zip)$/i.test(asset.name)
    : (asset) => /\.(apk|aab)$/i.test(asset.name);
  return assets.find(matcher)?.browser_download_url || "";
}

function sanitizeCommitMessage(message) {
  return String(message).split("\n")[0].trim() || "Sin descripción.";
}

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("es-CO", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(value));
  } catch (error) {
    return value;
  }
}

function toggleAudio() {
  state.audioEnabled = !state.audioEnabled;
  syncAudioButton();
  persistAll();
  if (!state.audioEnabled) {
    stopMusic();
  } else {
    ensureMusic();
  }
}

function ensureMusic() {
  if (!state.audioEnabled || !audioContext || state.mode !== "playing" || musicState.timer) {
    return;
  }
  resumeAudio();
  musicState.step = 0;
  playMusicStep();
  musicState.timer = window.setInterval(playMusicStep, 320);
}

function stopMusic() {
  if (musicState.timer) {
    clearInterval(musicState.timer);
    musicState.timer = null;
  }
}

function playMusicStep() {
  if (!audioContext || !state.audioEnabled || state.mode !== "playing") {
    return;
  }

  const melody = [659, 784, 880, 988, 880, 784, 659, 587];
  const bass = [220, 220, 247, 196, 220, 165, 196, 220];
  const index = musicState.step % melody.length;
  playTone(melody[index], 0.18, "triangle", 0.03);
  playTone(bass[index], 0.22, "sine", 0.02);
  if (index % 2 === 0) {
    playTone(melody[index] * 0.5, 0.12, "triangle", 0.015);
  }
  musicState.step += 1;
}

function sfxStart() {
  playTone(520, 0.07, "triangle", 0.05);
  window.setTimeout(() => playTone(784, 0.07, "triangle", 0.045), 90);
}

function sfxFlap() {
  playTone(540, 0.05, "sine", 0.04);
}

function sfxScore() {
  playTone(840, 0.06, "square", 0.04);
}

function sfxPowerup() {
  playTone(720, 0.07, "square", 0.05);
  window.setTimeout(() => playTone(980, 0.07, "square", 0.04), 80);
}

function sfxShield() {
  playTone(420, 0.08, "triangle", 0.05);
}

function sfxCorrect() {
  playTone(740, 0.08, "square", 0.05);
  window.setTimeout(() => playTone(1046, 0.08, "triangle", 0.045), 90);
}

function sfxWrong() {
  playTone(280, 0.08, "triangle", 0.04);
}

function sfxGameOver() {
  playTone(220, 0.18, "sawtooth", 0.05);
  window.setTimeout(() => playTone(164, 0.22, "sawtooth", 0.05), 120);
}

function setupAudio() {
  try {
    return new (window.AudioContext || window.webkitAudioContext)();
  } catch (error) {
    return null;
  }
}

function resumeAudio() {
  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playTone(frequency, duration, type, volume) {
  if (!audioContext || !state.audioEnabled) {
    return;
  }

  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function createBird() {
  return { y: 240, vy: 0, rotation: 0, flap: 0 };
}

function drawCloud(x, y, scale) {
  ctx.beginPath();
  ctx.arc(x, y, 28 * scale, Math.PI * 0.5, Math.PI * 1.5);
  ctx.arc(x + 28 * scale, y - 16 * scale, 24 * scale, Math.PI, Math.PI * 2);
  ctx.arc(x + 58 * scale, y - 4 * scale, 22 * scale, Math.PI * 1.5, Math.PI * 0.5);
  ctx.closePath();
  ctx.fill();
}

function spawnBurst(x, y, color, count, speedFactor = 1) {
  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = randomBetween(1.2, 3.8) * speedFactor;
    state.particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: randomBetween(20, 42),
      maxLife: 42,
      radius: randomBetween(2, 4.8),
      color
    });
  }
}

function updateParticles(dt) {
  state.particles.forEach((particle) => {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vy += 0.12 * dt;
    particle.life -= dt;
  });

  state.particles = state.particles.filter((particle) => particle.life > 0);
}

function persistAll() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    audioEnabled: state.audioEnabled,
    bestScore: state.bestScore,
    academyPoints: state.academyPoints,
    upgrades: state.upgrades,
    missions: state.missions,
    topicStats: state.topicStats,
    gamesPlayed: state.gamesPlayed,
    correctAnswers: state.correctAnswers,
    totalQuestions: state.totalQuestions,
    leaderboard: state.leaderboard,
    playerName: state.playerName,
    difficulty: state.difficulty,
    skin: state.skin,
    ageGroup: state.ageGroup,
    learningTopic: state.learningTopic
  }));
}

function normalizeUpgrades(value) {
  const base = { starterShield: 0, extraHeart: 0, academyBoost: 0, portalScout: 0 };
  return { ...base, ...(value || {}) };
}

function normalizeMissions(value) {
  const base = {};
  missionCatalog.forEach((mission) => {
    base[mission.id] = { progress: 0, claimed: false };
  });
  return { ...base, ...(value || {}) };
}

function normalizeTopicStats(value) {
  const base = {};
  topicMeta.forEach((topic) => {
    base[topic.id] = { correct: 0, total: 0 };
  });
  return { ...base, ...(value || {}) };
}

function loadStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function pickFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function labelFor(items, id) {
  return (items.find((item) => item.id === id) || items[0]).label;
}

function distance(x1, y1, x2, y2) {
  return Math.hypot(x1 - x2, y1 - y2);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function shuffleArray(items) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function shuffleUnique(items) {
  return shuffleArray(Array.from(new Set(items)));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
