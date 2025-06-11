const seasonalColors = {
  winter: {
    background: "#6a7a5a",
    text: "#d7cbb2",
    textbox: "#8daf9b",
    title: "#c6c09c",
  },
  spring: {
    background: "#c0d4b5",
    text: "#9b7d61",
    textbox: "#dfc49b",
    title: "#fed8a6",
  },
  summer: {
    background: "#e79796",
    text: "#f4cfc7",
    textbox: "#c6c09c",
    title: "#e79796",
  },
  autumn: {
    background: "#684627",
    text: "#f2d8a1",
    textbox: "#cb8140",
    title: "#dfbe80",
  },
};

const buttons = document.querySelectorAll("#season-switcher button");

function setSeason(season) {
  document.body.className = season;

  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.season === season);
  });
}

// Automatisk basert på måned
const now = new Date();
const month = now.getMonth();
let currentSeason = "";

if (month >= 2 && month <= 4) currentSeason = "spring";
else if (month >= 5 && month <= 7) currentSeason = "summer";
else if (month >= 8 && month <= 10) currentSeason = "autumn";
else currentSeason = "winter";

// Sett første gang
setSeason(currentSeason);

// Lytt til klikk
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setSeason(btn.dataset.season);
  });
});
