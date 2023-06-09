const inputElement = document.querySelector(".inputElement");
const btn = document.querySelector(".btn");
const activeCases = document.querySelector("#active");
const totalCases = document.querySelector("#cases");
const totalCritical = document.querySelector("#critical");
const totalDeaths = document.querySelector("#death");
const recovered = document.querySelector("#recovered");
const tests = document.querySelector("#tests");

btn.addEventListener("click", () => {
  const country = inputElement.value.trim().toLowerCase();
  fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => response.json())
    .then((data) => {
      activeCases.textContent = data.active;
      totalCases.textContent = data.cases;
      totalCritical.textContent = data.critical;
      totalDeaths.textContent = data.deaths;
      recovered.textContent = data.recovered;
      tests.textContent = data.tests;
    })
    .catch((error) => {
      console.error(error);
    });
});

particlesJS("particles-js", 
  {"particles":{
    "number":{"value":160,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#ffffff"},
    "shape":{"type":"circle",
        "stroke":{"width":0,"color":"#000000"},
        "polygon":{"nb_sides":5},
        "image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},
    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},
    "line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,
    "attract":{"enable":false,"rotateX":600,"rotateY":600}}},
    "interactivity":{"detect_on":"canvas","events":{
      "onhover":{
        "enable":true,"mode":"bubble"},
      "onclick":{
        "enable":true,"mode":"repulse"},
        "resize":true},
    "modes":{"grab":{
        "distance":400,"line_linked":{"opacity":1}},
        "bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},
        "repulse":{"distance":400,"duration":0.4},
        "push":{"particles_nb":4},"remove":{"particles_nb":2}}},
  
  "retina_detect":true});
      
var count_particles, stats, update; stats = new Stats; 

stats.setMode(0); stats.domElement.style.position = 'absolute'; 
stats.domElement.style.left = '0px'; 
stats.domElement.style.top = '0px'; 

document.body.appendChild(stats.domElement); 
count_particles = document.querySelector('.js-count-particles'); 

update = function() { stats.begin(); stats.end(); 
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { 
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 

requestAnimationFrame(update); }; requestAnimationFrame(update);;