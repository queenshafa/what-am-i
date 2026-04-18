document.addEventListener("DOMContentLoaded", function () {
  const counter = new Counter({ workspace: "my-website" });

  // Increment the view count when the page loads
  counter
    .up("page-views")
    .then((result) => {
      document.getElementById("view-count").textContent = result.value;
    })
    .catch((error) => {
      console.error("Error tracking page view:", error);
      document.getElementById("view-count").textContent = "Error loading count";
    });
});

let yearInput = document.getElementById("yearInput");
const checkBtn = document.getElementById("checkBtn");
const userImage = document.getElementById("cardImage");
const userTitle = document.getElementById("cardTitle");
const userDesc = document.getElementById("cardDesc");

function checkAge() {
  const rawValue = yearInput.value;
  if (rawValue === "") {
    userImage.src = "assets/unc.png";
    userTitle.textContent = "hey!";
    userDesc.textContent = "put the year first, silly!";
    return;
  }

  let birthYear = Number(yearInput.value);

  if (birthYear > 2024 && birthYear < 2040) {
    // fetus
    userImage.src = "assets/fetus.png";
    userTitle.textContent = "fetus";
    userDesc.textContent = "did you just born yesterday";
  } else if (birthYear > 2012 && birthYear < 2026) {
    // alpha kid
    userImage.src = "assets/alpha-kid.png";
    userTitle.textContent = "alpha kid";
    userDesc.textContent = "tung tung sahur 67";
  } else if (birthYear > 1996 && birthYear < 2013) {
    // gen z
    userImage.src = "assets/gen-z.png";
    userTitle.textContent = "gen z";
    userDesc.textContent = "u're fine i guess";
  } else if (birthYear > 1980 && birthYear < 1997) {
    // unc
    userImage.src = "assets/unc.png";
    userTitle.textContent = "unc";
    userDesc.textContent = "u da real unc";
  } else if (birthYear > 1964 && birthYear < 1981) {
    // father
    userImage.src = "assets/father.png";
    userTitle.textContent = "father";
    userDesc.textContent = "hi dad";
  } else if (birthYear > 1945 && birthYear < 1965) {
    // granny
    userImage.src = "assets/granny.png";
    userTitle.textContent = "granny";
    userDesc.textContent = "do u knit on a rocker w cats";
  } else if (birthYear > 1927 && birthYear < 1946) {
    // ww2 survivor
    userImage.src = "assets/ww2-survivor.png";
    userTitle.textContent = "ww2 survivor";
    userDesc.textContent = "what where u doing on ww2";
  } else if (birthYear < 1928) {
    // fossil
    userImage.src = "assets/fossil.png";
    userTitle.textContent = "fossil";
    userDesc.textContent = "which dino did u ride daily";
  }

  birthYear.value = "";
  birthYear.focus();
}

document.addEventListener("DOMContentLoaded", (event) => {
  userImage.src = "assets/unc.png";
  userTitle.textContent = "hey!";
  userDesc.textContent = "put the year first, silly!";
});

checkBtn.addEventListener("click", checkAge);
