const song = document.querySelector("#song_mp3");     /*song-songs*/
const img = document.querySelector("#song_img");
const play = document.getElementById("play");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const song_data = [
    {
        name: "fav-1",
        title: "Udd Gaye",
        artist: "Ritviz",
    },
    {
        name: "fav-2",
        title: "Stage",
        artist: "Ritviz",
    },
    {
        name: "fav-3",
        title: "SHUM",
        artist: "Eurovision 2021",
    },
    {
        name: "fav-4",
        title: "Na Ja ",
        artist: "Pav Dharia",
    },
];

let isPlaying = false;

//for play function 
// play.addEventListener("click", () => {
const playSong = ("click", () => {
    isPlaying = true;
    song.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
});

//for pause function 
// play.addEventListener("click", () => {

const pauseSong = ("click", () => {
    isPlaying = false;
    song.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
});


play.addEventListener("click", () => {
    // if (isPlaying) {
    //     pauseSong();
    // }
    // else{
    //     playSong();
    // }

    isPlaying ? pauseSong() : playSong();

})

// changing the music data

const loadSong = (song_data) => {
    title.textContent = song_data.title;
    artist.textContent = song_data.artist;
    song.src = `song/${song_data.name}.mp3`;
    // songs.src = "song/" + song_data.name + ".mp3";
    img.src = "images/" + song_data.name + ".jpg";
};

songIndex = 0;
// loadSong(song_data[1]);

const nextsong = () => {
    songIndex = (songIndex + 1) % song_data.length;
    loadSong(song_data[songIndex]);
    playSong();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + song_data.length) % song_data.length;
    loadSong(song_data[songIndex]);
    playSong();
};

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevSong);