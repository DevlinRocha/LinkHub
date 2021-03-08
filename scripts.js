const linkhubUsername = document.querySelector('#linkhub-username');
const userBio = document.querySelector('#user-bio');
const linkhubText = document.querySelector('#linkhub-text');

function bioDisplay() {
    userBio.classList.toggle('open');
    linkhubText.classList.toggle('open');
    setTimeout(() => {
        userBio.classList.remove('open-active');
        if(userBio.classList.contains('open')) {
          userBio.classList.add('open-active')
        }
      }, 300);
}

linkhubUsername.addEventListener('click', bioDisplay);