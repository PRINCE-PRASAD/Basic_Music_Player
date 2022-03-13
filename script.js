const song = document.querySelector("#song_mp3");     /*song-songs*/
const img = document.querySelector("#song_img");
const play = document.getElementById("play");
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById('progress_div');

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

// progress js portion

song.addEventListener('timeupdate', (event) => {
    // console.log(event);
    const { currentTime, duration } = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);

    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`;
    // console.log(progress_time);

    // music duration update


    // console.log(duration);

    let minutes_duration = Math.floor(duration / 60); /*math.floor is the functin where we get number in round figure without any decimal*/
    let second_duration = Math.floor(duration % 60);

    // console.log(minutes_duration);
    // console.log(second_duration);

    let tot_duration = `${minutes_duration}:${second_duration}`;
    if (duration) { /*for removing nana while changing the music */
        total_duration.textContent = `${tot_duration}`;
    }

    //current duration update

    let minutes_currentTime = Math.floor(currentTime / 60);
    let second_currentTime = Math.floor(currentTime % 60);

    if(second_currentTime < 10) {
        second_currentTime = `0${second_currentTime}`;/*for adding 0 in the current_time */
    }
    
    let tot_currentTime = `${minutes_currentTime}:${second_currentTime}`;
    
        current_time.textContent = `${tot_currentTime}`;
    
});

//for progress onclick function

progress_div.addEventListener("click", (event) => {
    console.log(event);
    const { duration } = song;

    let move_progress = 
    (event.offsetX / event.srcElement.clientWidth) * duration; /* here clintwidth it show how may time present in sec in song and offsetx show where u click  */
    
    console.log(duration);
    console.log(move_progress);

    song.currentTime = move_progress;
});

// for automatic next song function
song.addEventListener("ended", nextsong);


next.addEventListener("click", nextsong);
prev.addEventListener("click", prevSong);  