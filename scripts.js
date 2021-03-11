// VARIABLE DECLARATIONS:

const linkhubUsername = document.querySelector('#linkhub-username');
const linkhubText = document.querySelector('#linkhub-text');
const footer = document.querySelector('footer');
const logoContainer = document.querySelector('#logo-container');
const userBioContainer = document.querySelector('#user-bio-container');
const linkhubInfoContainer = document.querySelector('#linkhub-info-container');

// TESTING:

console.log(footer.getBoundingClientRect());
console.log(userBioContainer.getBoundingClientRect());

// FUNCTIONS:

function bioDisplay() {
  userBioContainer.classList.toggle('open');
  linkhubText.classList.toggle('open');
  linkhubInfoContainer.classList.remove('open');
  linkhubInfoContainer.classList.remove('open-active');
  setTimeout(() => {
      userBioContainer.classList.remove('open-active');
      if (userBioContainer.classList.contains('open')) {
        userBioContainer.classList.add('open-active');
      };
    }, 300);
};

function linkhubDisplay() {
  linkhubInfoContainer.classList.toggle('open');
  linkhubText.classList.toggle('open');
  userBioContainer.classList.remove('open');
  userBioContainer.classList.remove('open-active');
  setTimeout(() => {
    linkhubInfoContainer.classList.remove('open-active');
    if (linkhubInfoContainer.classList.contains('open')) {
      linkhubInfoContainer.classList.add('open-active');
    };
  }, 300);
};

// EVENT LISTENERS:

linkhubUsername.addEventListener('click', bioDisplay);
logoContainer.addEventListener('click', linkhubDisplay);