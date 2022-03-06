var data = {
    title:[
        "Gyumri",
        "Komitas_Shushiki",
        "Rey_Charles_Jack"
    ],
    song:[
        "music/Gyumri.mp3",
        "music/Komitas_Shushiki.mp3",
        "music/Rey_Charles_Jack.mp3"

    ],
    poster:[
        "https://c.tenor.com/d_IO8M1rCD0AAAAC/listening-to-music-jerry.gif",
        "https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif",
        "https://thumbs.gfycat.com/EdibleCriminalAntarcticgiantpetrel-size_restricted.gif"

    ]

}
var curentSong = 0;
var song = new Audio();

console.log(song);

window.onload = function(){
    playSong()
}

//playSong()
//playOrPauseSong
//next
//prev
//decrease
//muted
//increase
//timing


function playSong(){
    song.src = data.song[curentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[curentSong];//???
    let img = document.getElementById('row1');
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main  = document.getElementById('main')
    main.style.backgroundImage = "url("+  data.poster[curentSong] + ")";

}


