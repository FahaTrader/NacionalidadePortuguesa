/*window.addEventListener("scroll", function(){
  const navbar = document.getElementById("navbar");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  const section1Top = section1.getBoundingClientRect().top;
  const section2Top = section2.getBoundingClientRect().top;

  navbar.classList.remove("section1", "section2");

  if (section2Top <= this.window.innerHeight / 2) {
    navbar.classList.add("section2");
  }
  else if (section1Top <= this.window.innerHeight / 2) {
    navbar.classList.add("section1");
  }
});*/

window.onscroll = function() {toggleNavbar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;  // Posição da barra no topo

function toggleNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed");  // Adiciona 'fixed' quando rolar
  } else {
    navbar.classList.remove("fixed");  // Remove 'fixed' quando voltar ao topo
  }
}

const menuToggle = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

function nextStep(step) {
  const currentStep = document.querySelector('.step:not(.hidden)');
  currentStep.classList.add('hidden');

  const nextStep = document.getElementById(`step${step}`);
  nextStep.classList.remove('hidden');
}

function resetSteps() {
  const lastStep = document.querySelector('.step:not(.hidden)');
  lastStep.classList.add('hidden');

  const firstStep = document.getElementById('step1');
  firstStep.classList.remove('hidden');
}
