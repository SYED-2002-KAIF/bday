// ===============================
// BIRTHDAY SURPRISE
// ===============================

const audio = new Audio("birthday-song.mp3");

audio.loop = false;


// ===============================
// TAP SCREEN
// ===============================

function startSurprise() {

    document.getElementById("tapScreen").style.display = "none";

    document.getElementById("mainPage").style.display = "block";

}


// ===============================
// NO BUTTON
// ===============================

const noMessages = [
    "Are you sure? 😏",
    "Think again Maa ❤️",
    "My heart says YES 💝",
    "You know you want to 😌",
    "Okk... Last Chance 😍"
];

let noIndex = 0;

function noClick() {

    const noBtn = document.getElementById("noBtn");

    noBtn.innerHTML = noMessages[noIndex] + "<br>😊";

    noIndex++;

    if (noIndex >= noMessages.length) {
        noIndex = 0;
    }
}


// ===============================
// YES BUTTON
// ===============================

function yesClick() {

    document.getElementById("mainPage").style.display = "none";

    document.getElementById("birthdayPage").style.display = "block";

    // Start song when YES is clicked
    audio.currentTime = 0;
    audio.play().catch(error => {
        console.log("Audio could not start:", error);
    });

    // Start slideshow
    startSlideshow();
}


// ===============================
// 13 PHOTOS
// ===============================

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
    "Photo12.jpg",
    "photo13.jpg"
];


// ===============================
// SLIDESHOW
// ===============================

let current = 0;
let slideshowStarted = false;

function startSlideshow() {

    if (slideshowStarted) {
        return;
    }

    slideshowStarted = true;

    const slider = document.getElementById("slider");

    if (!slider) {
        console.log("Slider image not found");
        return;
    }

    // First photo
    slider.src = photos[0];

    slider.style.opacity = "1";

    // Change photo every 3 seconds
    const slideshow = setInterval(() => {

        slider.style.opacity = "0";

        setTimeout(() => {

            current++;

            // All photos completed
            if (current >= photos.length) {

                clearInterval(slideshow);

                // Stop song
                audio.pause();
                audio.currentTime = 0;

                // Hide birthday page
                document.getElementById("birthdayPage").style.display = "none";

                // Show final message
                document.getElementById("aboutPage").style.display = "block";

                return;
            }

            // Show next photo
            slider.src = photos[current];

            slider.style.opacity = "1";

        }, 500);

    }, 3000);
}


// ===============================
// THOUGHTS
// ===============================

function showThoughts() {

    document.getElementById("thoughtsBox").style.display = "block";

}
