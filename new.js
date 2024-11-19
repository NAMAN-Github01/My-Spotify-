// console.log("Its JS Time!!")

// async function getSongs() {
//     let a = await fetch("http://127.0.0.1:3000/Songs/")
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;

//     let link = div.getElementsByTagName("a")
//     let titles = []
//     let songs = []

//     for(let i = 0; i < link.length; i++) {
//         const element = link[i];
//         if(element.textContent.endsWith(".mp3")) {
//             titles.push(element.textContent.replace(".mp3", ""))
//             songs.push(element.href)
//         }
//     }
//     return {titles, songs};
// }

// async function getCover(){
//     let a = await fetch("http://127.0.0.1:3000/Songs/Covers/")
//     let response = await a.text();
    
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let link = div.getElementsByTagName("a");
//     let cover = []

//     for(let i = 0; i < link.length; i++) {
//         const element = link[i];
//         if(element.textContent.endsWith(".jpg")) {
//             cover.push("/Songs/Covers/"+ element.textContent)
//         }
//     }
//     return cover 
// }

// function playbar(cover, title, artist, duration) {
//     document.querySelector(".playbar").innerHTML += `
//         <div class="cover">
//             <img src="${cover}" alt="${title} Cover" />
//         </div>
//         <div class="details">
//             <h2>${title}</h2>
//             <h3>${artist}</h3> 
//             <p>${duration}</p>
//         </div>
//         <div class="progress-container">
//             <div class="progress"></div>
//         </div>`
        
// }


// function formatDuration(duration) {
//     const minutes = Math.floor(duration / 60);
//     const seconds = Math.floor(duration % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
// }



// async function main() {
//     const { songs, titles } = await getSongs(); // Destructure the returned object
//     const covers = await getCover();
//     let j = 0;


//     if (songs.length > 0 && covers.length > 0) {
//         const cover = covers[1];
//         const title = titles[1];
//         var audio = new Audio(songs[1]);
//         audio.play();
        

//         const artist = "Unknown Artist";
//         playbar(cover, title, artist, formatDuration(audio.duration));

//         audio.addEventListener("loadedmetadata", () => {
//             const duration = formatDuration(audio.duration);
//             console.log("Duration:", duration);
//             playbar(cover, title, artist, duration);
//         }); // Update as needed


        

//         let button = document.querySelector(".p-btn");

//         if (button) {
//             let playPauseIcon = button.querySelector('img');
//             button.addEventListener("click", () => {
//                 alert("Button is clicked");
//                 if (audio.paused) {
//                     audio.play();
//                     if (playPauseIcon) {
//                         playPauseIcon.src = '/SVG/pause-svgrepo-com.svg'; // Change to pause icon
//                     }
//                 } else {
//                     audio.pause();
//                     if (playPauseIcon) {
//                         playPauseIcon.src = '/SVG/play-svgrepo-com.svg'; // Change to play icon
//                     }
//                 }
//             });
//         } else {
//             console.error("Play button not found!");
//         }
//     } else {
//         console.error("Songs or covers not found!");
//     }
//     } 




// main()


    
