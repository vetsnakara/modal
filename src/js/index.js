import '../css/reset.css'
import '../css/styles.css'

const classes = {
  OPEN_MODAL: 'modal-is-open',
  OPEN_MODAL_BUTTON: 'jsModalOpen',
  CLOSE_MODAL_BUTTON: 'jsModalClose',
  MODAL_OVERLAY: 'jsModalOverlay'
}

const keys = {
  ESQ: 27
}

const { body } = document

const openModalBtn = document.querySelector(`.${classes.OPEN_MODAL_BUTTON}`)
const closeModalBtn = document.querySelector(`.${classes.CLOSE_MODAL_BUTTON}`)
const modalOverlay = document.querySelector(`.${classes.MODAL_OVERLAY}`)

openModalBtn.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

function openModal () {
  body.classList.add(classes.OPEN_MODAL)
  addCloseModealHandlers()
}

function closeModal () {
  body.classList.remove(classes.OPEN_MODAL)
  removeCloseModealHandlers()
}

function addCloseModealHandlers () {
  document.addEventListener('keyup', handleEsqPressed)
  document.addEventListener('click', handleClickOutside)
}

function removeCloseModealHandlers () {
  document.removeEventListener('keyup', handleEsqPressed)
  document.removeEventListener('click', handleClickOutside)
}

function isModalOpen () {
  return body.classList.contains(classes.OPEN_MODAL)
}

function handleEsqPressed ({ keyCode }) {
  if (isModalOpen() && keyCode === keys.ESQ) {
    closeModal()
  }
}

function handleClickOutside ({ target }) {
  if (isModalOpen() && target === modalOverlay) {
    closeModal()
  }
}
