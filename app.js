// -------- STEAM ANIMATION --------
const steamFrames = document.querySelectorAll(".steam");
let steamIndex = 0;

setInterval(() => {
  steamFrames[steamIndex].classList.remove("active");
  steamIndex = (steamIndex + 1) % steamFrames.length;
  steamFrames[steamIndex].classList.add("active");
}, 700);


// -------- PLANT ANIMATION --------
const plantFrames = document.querySelectorAll(".plant");
let plantIndex = 0;

setInterval(() => {
  plantFrames[plantIndex].classList.remove("active");
  plantIndex = (plantIndex + 1) % plantFrames.length;
  plantFrames[plantIndex].classList.add("active");
}, 1000);

const progressContainer = document.getElementById("progressContainer");
const progressBar = document.getElementById("progressBar");

// -------- MUSIC PLAYER --------
const songs = [
  {
    title: "半點心",
    artist: "Grasshopper",
    src: "./assets/music/song2.mp3"
  },
  {
    title: "Bags",
    artist: "Clairo",
    src: "./assets/music/song3.mp3"
  },
      {
    title: "Lovers",
    artist: "Anna North",
    src: "./assets/music/song5.mp3"
  },
    {
    title: "ラブレター",
    artist: "YOASOBI",
    src: "./assets/music/song4.mp3"
  },
  {
    title: "love for you",
    artist: "loveli lori",
    src: "./assets/music/song1.mp3"
  },
    {
    title: "二十歳の恋",
    artist: "Lamp",
    src: "./assets/music/song6.mp3"
  }
];

let currentSongIndex = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("playBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  songTitle.textContent = song.title;
  artist.textContent = song.artist;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.classList.add("showPause");
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.classList.remove("showPause");
}

function togglePlay() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);

  if (isPlaying) {
    playSong();
  }
}

function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);

  if (isPlaying) {
    playSong();
  }
}

playBtn.addEventListener("click", togglePlay);
forwardBtn.addEventListener("click", nextSong);
backBtn.addEventListener("click", previousSong);

audio.addEventListener("ended", nextSong);

loadSong(currentSongIndex);

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progressPercent + "%";
  }
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});

const minBtn = document.getElementById("minBtn");
const closeBtn = document.getElementById("closeBtn");

if (minBtn) {
  minBtn.addEventListener("click", () => {
    window.api.minimize();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    window.api.close();
  });
}