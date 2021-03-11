// VARIABLE DECLARATIONS:

const userInfo = document.querySelector('#user-info');
const linkhubUsername = document.querySelector('#linkhub-username');
const linkboxes = document.querySelectorAll('.linkbox');
const footer = document.querySelector('footer');
const logoContainer = document.querySelector('#logo-container');
const linkhubText = document.querySelector('#linkhub-text');
const userBioContainer = document.querySelector('#user-bio-container');
const linkhubInfoContainer = document.querySelector('#linkhub-info-container');



// TESTING:

console.log(footer.getBoundingClientRect());
console.log(userBioContainer.getBoundingClientRect());



// FUNCTIONS:

function closeDisplay() {
  openDisplay = document.querySelector('.hidden.open');

  if (openDisplay) {
    openDisplay.classList.remove('open');
    openDisplay.classList.remove('open-active');
    
    setTimeout(() => {
      linkhubText.classList.remove('open');
    }, 700);
  };
};

function addBorder() {
  this.style.border = '5px solid lightskyblue';

  setTimeout(() => {
    this.style.border = '5px solid orangered';
  }, 300);
};

function bioDisplay(e) {
  e.stopPropagation();
  userBioContainer.classList.toggle('open');
  linkhubText.classList.add('open');
  linkhubInfoContainer.classList.remove('open');
  linkhubInfoContainer.classList.remove('open-active');

  setTimeout(() => {
      userBioContainer.classList.remove('open-active');

      if (userBioContainer.classList.contains('open')) {
        userBioContainer.classList.add('open-active');
      } else {
        linkhubText.classList.remove('open');
      };
      
    }, 300);
};

function linkhubDisplay() {
  linkhubInfoContainer.classList.toggle('open');
  linkhubText.classList.add('open');
  userBioContainer.classList.remove('open');
  userBioContainer.classList.remove('open-active');

  setTimeout(() => {
    linkhubInfoContainer.classList.remove('open-active');

    if (linkhubInfoContainer.classList.contains('open')) {
      linkhubInfoContainer.classList.add('open-active');
    } else {
      linkhubText.classList.remove('open');
    };

  }, 300);
};



// EVENT LISTENERS:

userInfo.addEventListener('click', closeDisplay);
linkhubUsername.addEventListener('click', bioDisplay);
linkboxes.forEach(linkbox => linkbox.addEventListener('click', addBorder));
logoContainer.addEventListener('click', linkhubDisplay);