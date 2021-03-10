const linkhubUsername = document.querySelector('#linkhub-username');
const userBioContainer = document.querySelector('#user-bio-container');
const linkhubText = document.querySelector('#linkhub-text');
const footer = document.querySelector('footer');

console.log(footer.getBoundingClientRect());
console.log(userBioContainer.getBoundingClientRect());

function bioDisplay() {
    userBioContainer.classList.toggle('open');
    linkhubText.classList.toggle('open');
    setTimeout(() => {
        userBioContainer.classList.remove('open-active');
        if(userBioContainer.classList.contains('open')) {
          userBioContainer.classList.add('open-active')
        }
      }, 300);
}

linkhubUsername.addEventListener('click', bioDisplay);