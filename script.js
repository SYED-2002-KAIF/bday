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
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg",
"photo7.jpg",
"photo8.jpg",
"photo9.jpg",
"photo10.jpg",
"photo11.jpg",
"photo12.jpg",
"photo13.jpg",
"photo14.jpg",
"photo15.jpg",
"photo16.jpg",
"photo17.jpg",
"photo18.jpg",
"photo19.jpg",
"photo20.jpg"
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
