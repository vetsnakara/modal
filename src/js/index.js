import '../css/reset.css'
import '../css/styles.css'

const classes = {
  MENU_OPEN: 'offsite-is-open',
  MENU_CONTAINER: 'offsite-container'
}

const keys = {
  ESQ: 27
}

const body = document.body
const menuOpenBtn = document.querySelector('button')

menuOpenBtn.addEventListener('click', toggleMenu)

function addCloseMenuListeners () {
  document.addEventListener('click', clickOutsideHandler)
  document.addEventListener('keyup', esqPressedHandler)
}

function removeCloseMenuListeners () {
  document.removeEventListener('click', clickOutsideHandler)
  document.removeEventListener('keyup', esqPressedHandler)
}

function toggleMenu () {
  if (isMenuClose()) {
    openMenu()
    addCloseMenuListeners()
  } else {
    closeMenu()
    removeCloseMenuListeners()
  }
}

function clickOutsideHandler ({ target }) {
  const isMenuClicked = !!target.closest(`.${classes.MENU_CONTAINER}`)
  const isMenuOpenBtn = target === menuOpenBtn
  if (isMenuOpen() && !isMenuClicked && !isMenuOpenBtn) {
    toggleMenu()
  }
}

function esqPressedHandler ({ keyCode }) {
  const isEsqPressed = keyCode === keys.ESQ
  if (isMenuOpen() && isEsqPressed) {
    toggleMenu()
  }
}

function closeMenu () {
  body.classList.remove(classes.MENU_OPEN)
}

function openMenu () {
  body.classList.add(classes.MENU_OPEN)
}

function isMenuClose () {
  return !body.classList.contains(classes.MENU_OPEN)
}

function isMenuOpen () {
  return body.classList.contains(classes.MENU_OPEN)
}

// hot reload
if (process.env.NODE_ENV) {
  module.hot.accept()
}
