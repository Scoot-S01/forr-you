const typedTextSpan = document.querySelector(".typing");
const textArray = ["My Girl", "Bunga Bundana", "🩷🩷🩷"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, 500);
  }
}

setTimeout(type, 1000);

let progres = document.getElementById("progres");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progres.max = song.duration;
  progres.value = song.currentTime;
};

function playPause() {
  var song = document.getElementById("song");
  var ctrlIcon = document.getElementById("ctrlIcon");
  var img = document.querySelector(".img-song");

  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    img.classList.remove("rotating"); // Menghentikan animasi putar gambar
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    img.classList.add("rotating"); // Memulai animasi putar gambar
  }
}

progres.oninput = function () {
  song.currentTime = progres.value;
};

// Tombol Forward
document.querySelector(".fa-forward").addEventListener("click", function () {
  song.currentTime += 5; // Menambah durasi lagu sebesar 5 detik
});

// Tombol Backward
document.querySelector(".fa-backward").addEventListener("click", function () {
  song.currentTime -= 5; // Mengurangi durasi lagu sebesar 5 detik
});

song.volume = 0.3;