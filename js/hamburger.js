const menu = document.querySelector('#menu')
const hamburger = document.querySelector('#hamburger')


hamburger.addEventListener('click', () => {
  menu.classList.toggle('active')
  if (hamburger.classList.contains('fi-br-menu-burger')) {
    hamburger.classList.remove('fi-br-menu-burger')
    hamburger.classList.add('fi-rr-cross-circle')
  } else {
    hamburger.classList.remove('fi-rr-cross-circle')
    hamburger.classList.add('fi-br-menu-burger')
  }
})