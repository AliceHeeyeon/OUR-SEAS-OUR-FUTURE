//feature section gallery//
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const boxes = document.querySelectorAll('#feature .feature-box');
let currentBoxIndex = 0;

// Hides all boxes except for the one
function showBoxes(startIndex, endIndex) {
    boxes.forEach((box, index) => {
        if (index >= startIndex && index <= endIndex) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// Show the first two or three or all boxes if the screen is wide enough
if (window.innerWidth >= 768) {
    showBoxes(currentBoxIndex, currentBoxIndex + 2);
} else if (window.innerWidth >= 600) {
    showBoxes(currentBoxIndex, currentBoxIndex + 1);
} else {
    showBoxes(currentBoxIndex, currentBoxIndex);
}

// When the previous button is clicked, move to the previous boxes
previousBtn.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        currentBoxIndex -= 3;
        if (currentBoxIndex < 0) {
            currentBoxIndex = boxes.length - 3;
        }
        showBoxes(currentBoxIndex, currentBoxIndex + 2);
    } else if (window.innerWidth >= 600) {
        currentBoxIndex -= 2;
        if (currentBoxIndex < 0) {
            currentBoxIndex = boxes.length - 2;
        }
        showBoxes(currentBoxIndex, currentBoxIndex + 1);
    } else {
        currentBoxIndex--;
        if (currentBoxIndex < 0) {
            currentBoxIndex = boxes.length - 1;
        }
        showBoxes(currentBoxIndex, currentBoxIndex);
    }
});

// When the next button is clicked, move to the next boxes
nextBtn.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        currentBoxIndex += 3;
        if (currentBoxIndex >= boxes.length) {
            currentBoxIndex = 0;
        }
        showBoxes(currentBoxIndex, currentBoxIndex + 2);
    } else if (window.innerWidth >= 600) {
        currentBoxIndex += 2;
        if (currentBoxIndex >= boxes.length) {
            currentBoxIndex = 0;
        }
        showBoxes(currentBoxIndex, currentBoxIndex + 1);
    } else {
        currentBoxIndex++;
        if (currentBoxIndex >= boxes.length) {
            currentBoxIndex = 0;
        }
        showBoxes(currentBoxIndex, currentBoxIndex);
    }
});

// Update the displayed boxes when the screen width changes
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        showBoxes(currentBoxIndex, currentBoxIndex + 5);
    } else if (window.innerWidth >= 768) {
        showBoxes(currentBoxIndex, currentBoxIndex + 2);
    } else if (window.innerWidth >= 600) {
        showBoxes(currentBoxIndex, currentBoxIndex + 1);
    } else {
        showBoxes(currentBoxIndex, currentBoxIndex);
    }
});


//--------- hamburger dropdown-----------------//
var dropdown = document.getElementById("dropdown_mobile_tablet");
var hamburgerIcon = document.getElementById("hamburger-icon");
var dropdownHamburgerIcon = document.getElementById("dropdown-hamburger-icon");

function toggleDropdown() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }
}

hamburgerIcon.addEventListener("click", function () {
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});

dropdownHamburgerIcon.addEventListener("click", function () {
    toggleDropdown();
});

// ---------- desktop nav button hover---------//
const hoverText = document.getElementById("nav-donate");

hoverText.addEventListener("mouseover", () => {
    hoverText.textContent = "Takoha";
});

hoverText.addEventListener("mouseout", () => {
    hoverText.textContent = "Donate";
});

//feature button hover//
const featureText = document.getElementById("cta-mission");

featureText.addEventListener("mouseover", () => {
    featureText.textContent = "Misioni me Tirohanga";
});

featureText.addEventListener("mouseout", () => {
    featureText.textContent = "Mission & Vision";
});

//fact button hover//
const factText = document.getElementById("cta-facts");

factText.addEventListener("mouseover", () => {
    factText.textContent = "Ako atu Meka";
});

factText.addEventListener("mouseout", () => {
    factText.textContent = "Learn more Facts";
});

//news button hover//
const newsText = document.getElementById("cta-news");

newsText.addEventListener("mouseover", () => {
    newsText.textContent = "Rangitaki Katoa";
});

newsText.addEventListener("mouseout", () => {
    newsText.textContent = "See All Blog Posts";
});

//donate button hover//
const donateText = document.getElementById("cta-donate");

donateText.addEventListener("mouseover", () => {
    donateText.textContent = "Hoatu he Takoha";
});

donateText.addEventListener("mouseout", () => {
    donateText.textContent = "Make a donation";
});

//--------- desktop nav menu dropdown-----------------//
// about //
const about = document.getElementById("eng_about");
const aboutDropdown = document.getElementById("about_dropdown");

about.addEventListener("click", function () {
    if (about.classList.contains("active")) {
        about.classList.remove("active");
        aboutDropdown.style.display = "none";
    } else {
        about.classList.add("active");
        aboutDropdown.style.display = "block";
    }
});


// involved //
const involved = document.getElementById("eng_involved");
const involvedDropdown = document.getElementById("involved_dropdown");

involved.addEventListener("click", function () {
    if (involved.classList.contains("active")) {
        involved.classList.remove("active");
        involvedDropdown.style.display = "none";
    } else {
        involved.classList.add("active");
        involvedDropdown.style.display = "block";
    }
});

// News //
const news = document.getElementById("eng_news");
const newsDropdown = document.getElementById("news_dropdown");

news.addEventListener("click", function () {
    if (news.classList.contains("active")) {
        news.classList.remove("active");
        newsDropdown.style.display = "none";
    } else {
        news.classList.add("active");
        newsDropdown.style.display = "block";
    }
});