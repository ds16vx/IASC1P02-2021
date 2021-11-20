/*
  David Saldana
  A#4
  December 5, 2021

  References:

  External Libraries/Code used in website:
  VincentGarreau. “Vincentgarreau/Particles.js: A Lightweight Javascript Library for Creating Particles.” 
  GitHub, https://github.com/VincentGarreau/particles.js/. 

  Google Maps iFrame:
  Google Maps, Google, https://www.google.com.mx/maps/place/Torre%C3%B3n,+Coahuila,+Mexico/@25.548687,-103.4369352,13z/data=!3m1!4b1!4m5!3m4!1s0x868fdba9bb45b3fb:0x8bcc7a9970aea01d!8m2!3d25.5428443!4d-103.4067861. 
*/

var facts = [
  "My favourite book is 'When Breath Becomes Air' which follows the story of a young doctor that faces a terminal cancer diagnosis and attempts to find the meaning of life itself.",
  "Although he is younger by 2 years my brother is taller than me... I am 6'1 and he is 6'3.",
  "I started building computers as a hobby when the COVID lockdowns started, and it is still something I keep up with today.",
  "I've learned a lot of interesting concepts about design and colour theory in this class. I definitely see myself using these concepts in the future.",
  "My family owns a 17 year old cat named Milo and a 3 year old dog named Rex.",
  "At the beginning of the year all my roommates contracted COVID and I managed to get out of the house before I was also infected. I had to live in a hotel for around 2 weeks, but it was worth it.",
  "I am fluent in both English and Spanish, and I am looking into learning French and Greek",
  "This past summer I visited Tobermory with my girlfriend and almost got stuck in Lake Huron after the tour boat's engine failed. We eventually got rescued.",
  "I have 2 last names and no middle name. I typically only use my first last name though.",
  "I took surf lessons for 2 years when I was younger. I once saw my instructor swim away from a shark after it was spotted close to the shore.",
  "I've never broken a bone, had a cavity, or had any food allergies.",
  "For some reason I still use a hotmail email address for some stuff... I need to start using my gmail.",
  "My favourite quote is 'At the end of the game the King and the Pawn go into the same box'.",
  "All the furniture I own in Canada are hand me downs from my roommates and their families. I am starting to form a collection of old junk.",
  "This is my last semester at Brock University.",
  "My favourite class I've taken at Brock University is Artificial Intelligence.",
];

var factNum = 0;
//Makes random fact visible
function learnMore() {
  var factDiv = document.getElementById("randomFact");
  factDiv.style.visibility = "visible";
  factDiv.innerHTML = facts[factNum];
  factNum++;
  if (factNum == facts.length) factNum = 0;
}

//Image "Carousel"
var pic = 0;
var picOne =
  "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/123029441_3887612644599633_5673202593886004702_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZaJTbEHG_aYAX9_wJkG&_nc_oc=AQknNOAspjlgPy7rFpMCljCevLmdJA6rVDBFldGUHf-Cpy_I7cuFHMvWdEIy5ISteV3mPtZMNyeglUnbnUi7sdLa&_nc_ht=scontent-yyz1-1.xx&oh=2bccb7aa83766f3e0cfee1a1038e9bba&oe=61B98729";
var picTwo = "https://i1.sndcdn.com/avatars-000201315455-syhect-original.jpg";
var picThree =
  "https://lh3.googleusercontent.com/pw/AM-JKLUIN4KqcKW8hLs2lqzRW0-b8svyf6xuQTFM8dEhIl3GmjYZMa4W32gf55qaKjYwqNo015PP5tw9tQkHXZAsEct2oFGG7RN3n4UW8FlqGIjBpaqRIs3pK_nFz5SV5JlaNDLagcr1QkG0cGSN8mbLBD_7=w1146-h1528-no?authuser=0";
function changeImg() {
  if (pic == 0) document.getElementsByClassName("aboutImg")[0].src = picTwo;
  else if (pic == 1)
    document.getElementsByClassName("aboutImg")[0].src = picThree;
  else if (pic == 2)
    document.getElementsByClassName("aboutImg")[0].src = picOne;
  pic++;
  if (pic == 3) pic = 0;
}

//Function for Page Timer
var time = 0;
function pageTimer() {
  time++;
  document.getElementById("clock").innerText =
    "You've spent " + time + " seconds in this page";
}

window.onload = function () {
  //Start Timer
  setInterval(pageTimer, 1000);

  //Obtains the page user is in
  var htmlPage = window.location.pathname.split("/").pop();

  //Fade in page title
  document.getElementsByClassName("titlePage")[0].classList.add("fadeIn");
  document.getElementById("clock").classList.add("fadeIn");

  //Fade in element conditions
  //Index Page
  if (htmlPage == "index.html") {
    document.getElementsByClassName("aboutSection")[0].classList.add("fadeIn");
    document
      .getElementsByClassName("aboutImgSection")[0]
      .classList.add("fadeIn");
    document.getElementById("randomFact").classList.add("fadeIn");
    document.getElementsByClassName("map")[0].classList.add("fadeIn");
    //Change Image
    setInterval(changeImg, 6000);
  }
  //ProjectPage
  else if (htmlPage == "projectsPage.html") {
    var skills = document.getElementsByClassName("project");
    var pos = 0;
    var fadeInterval = setInterval(function () {
      if (pos < skills.length) {
        skills[pos].classList.add("fadeIn");
        pos++;
      } else {
        clearInterval(fadeInterval);
      }
    }, 500);
  }
  //SkillPage
  else if (htmlPage == "skillsPage.html") {
    var skills = document.getElementsByClassName("skill");
    var pos = 0;
    var fadeInterval = setInterval(function () {
      if (pos < skills.length) {
        skills[pos].classList.add("fadeIn");
        pos++;
      } else {
        clearInterval(fadeInterval);
      }
    }, 500);
  }
};
