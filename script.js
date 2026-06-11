const audio = new Audio("song.mp3");

function startSurprise(){
    document.getElementById("tapScreen").style.display="none";
    document.getElementById("mainPage").style.display="block";
    audio.play();
}

const noMessages = [
    "Are you sure? 😏",
    "Think again Maa ❤️",
    "My heart says YES 💝",
    "You know you want to 😌",
    "Okk... Last Chance 😍"
];

let noIndex = 0;

function noClick(){
   document.getElementById("noBtn").innerHTML =
noMessages[noIndex] + "<br>😊";
    noIndex++;

    if(noIndex >= noMessages.length){
        noIndex = 0;
    }
}

function yesClick(){
    document.getElementById("mainPage").style.display="none";
    document.getElementById("birthdayPage").style.display="block";
}

const photos = [
"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg",
"photos/photo4.jpg",
"photos/photo5.jpg",
"photos/photo6.jpg",
"photos/photo7.jpg",
"photos/photo8.jpg",
"photos/photo9.jpg",
"photos/photo10.jpg",
"photos/photo11.jpg",
"photos/photo12.jpg",
"photos/photo13.jpg",
"photos/photo14.jpg",
"photos/photo15.jpg",
"photos/photo16.jpg",
"photos/photo17.jpg",
"photos/photo18.jpg",
"photos/photo19.jpg",
"photos/photo20.jpg"
];

let current = 0;

setInterval(() => {

    const slider = document.getElementById("slider");

    if(slider){

        slider.style.opacity = "0";

        setTimeout(() => {

            current++;

          if(current >= photos.length){

    document.getElementById("birthdayPage").style.display = "none";
    document.getElementById("aboutPage").style.display = "block";

    return;
}

            slider.src = photos[current];
            slider.style.opacity = "1";

        },500);

    }

},3000);
function showThoughts(){
    document.getElementById("thoughtsBox").style.display = "block";
}