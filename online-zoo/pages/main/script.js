// let show = false
let container = document.querySelector('.burger__links__container')
let display = getComputedStyle(container).display

function showMenu(e) {
  event.stopPropagation()
  if (display === 'none') {
    container.classList.add('open')
  }
  const elem = document.createElement('div')
  elem.className = "background"
  elem.style.height = document.body.height
  elem.id = 'bckgr'
  if (document.getElementById('bckgr')) {
    return
  }
  document.body.append(elem)
  document.body.style.height = '100vh'
  document.body.style.overflow = 'hidden'
  window.addEventListener('click', clickOnBody)
}

function closeMenu(x) {
  event.stopPropagation()
  if (x > 286) {
    container.classList.remove('open')
    const elem = document.querySelector('.background')
    elem.remove()
    window.removeEventListener('click', clickOnBody)
  }
  if (event.currentTarget === event.target) {
    container.classList.remove('open')
    const elem = document.querySelector('.background')
    elem.remove()
    window.removeEventListener('click', clickOnBody)
  }
  // window.removeEventListener('click', clickOnBody)
}

function clickOnBody(e) {
  console.log(e.clientY)
  if (e.clientY > 286) {
    closeMenu(e.clientY)
  }
}

//////////////////////////////////////////////////////////////////

let avatarMODAL = document.getElementById('src-for-avatar')
avatarMODAL.src = ''
let nameMODAL = document.querySelector('#name-for-modal')
let timeMODAL = document.querySelector('#time-for-modal')
let textMODAL = document.querySelector('#text-for-modal')
let locationMODAL = document.querySelector('#location-for-modal')

function showComment(e) {
  if (window.innerWidth <= 1000) {
    let regex = /\w+[.](svg|png)/g
    let textCARD = e.querySelector('.main__text').innerHTML
    let avatarCARD = e.querySelector('#avatar').src.match(regex)[0]
    let nameCARD = e.querySelector('.name').innerHTML
    let timeCARD = e.querySelector('.time').innerHTML
    let locationCARD = e.querySelector('.location').innerHTML

    avatarMODAL.src = '../../assets/images/users/' + avatarCARD
    nameMODAL.innerHTML = nameCARD
    timeMODAL.innerHTML = timeCARD
    textMODAL.innerHTML = textCARD
    locationMODAL.innerHTML = locationCARD

    let modal = document.querySelector('.modal')
    let display = getComputedStyle(modal).display
    modal.classList.add('open')
  }
}

function closeComment(e) {
  if (event.currentTarget === event.target) {
    let modal = document.querySelector('.modal')
    let display = getComputedStyle(modal).display
    modal.classList.toggle('open')
  }
}

////////////////////////////////////////////////////////////////////////////

let isLeft = false;
let isRight = false;
let isScroll = false;
const carouselTablet = document.getElementsByClassName("animals__wrapper")[0]
const cardsTablet = document.getElementsByClassName("animal__card")
if (carouselTablet.clientWidth === 600) {
  while (cardsTablet.length > 4) {
    cardsTablet[cardsTablet.length - 1].remove()
  }
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
      randomIndex = Math.floor((Math.random() * (currentIndex)));
      currentIndex--;
      [array[currentIndex].innerHTML, array[randomIndex].innerHTML] = [
          array[randomIndex].innerHTML, array[currentIndex].innerHTML];
  }
  return array;
}

function slideLeft() {
  if (isScroll) return
  isScroll = true;
  const carousel = document.getElementsByClassName("animals__wrapper")[0]
  const nodes = document.getElementsByClassName("animal__card")
  const length = carousel.clientWidth === 600 ? 4 : 6
  const leftOffset = carousel.clientWidth === 1160 ? 1185 :
    carousel.clientWidth === 940 ? 1027 :
      carousel.clientWidth === 600 ? 628 : 0
  if (isRight) {
    while (nodes.length > length) {
      nodes[0].remove()
    }
  }
  let images = []
  for (let index = 0; index < length; index++) {
    images.push(nodes[index].cloneNode(true))
  }
  shuffle(images)
  for (let index = 0; index < length; index++) {
    carousel.prepend(images[index])
  }
  carousel.scrollLeft = carousel.clientWidth === 1160 ? 1185 :
    carousel.clientWidth === 940 ? 940 :
      carousel.clientWidth === 600 ? 600 : 0
  carousel.scrollBy({
    top: 0,
    left: 0 - leftOffset,
    behavior: "smooth"
  });
  isLeft = true;
  isRight = false;
  setTimeout(() => { isScroll = false }, 600)
}

function slideRight() {
  if (isScroll) return
  isScroll = true;
  const carousel = document.getElementsByClassName("animals__wrapper")[0]
  const nodes = document.getElementsByClassName("animal__card")
  const length = carousel.clientWidth === 600 ? 4 : 6
  const leftOffset = carousel.clientWidth === 1160 ? 1185 :
    carousel.clientWidth === 940 ? 1027 :
      carousel.clientWidth === 600 ? 628 : 0
  if (isLeft) {
    while (nodes.length > length) {
      nodes[nodes.length - 1].remove()
    }
  }
  let images = []
  for (let index = 0; index < length; index++) {
    images.push(nodes[index].cloneNode(true))
  }
  shuffle(images)
  for (let index = 0; index < length; index++) {
    carousel.append(images[index])
  }
  carousel.scrollBy({
    top: 0,
    left: leftOffset,
    behavior: "smooth"
  });
  isRight = true;
  isLeft = false;
  setTimeout(() => { isScroll = false }, 600)
}

////////////////////////////////////////////////////////////////////////////

let usersId = 0;

function changeUsers(e) {
  if (window.innerWidth <= 1280) {
    document.getElementById("range").max = 8
    switchUsers(e.value, 322)
  }
  else {
    document.getElementById("range").max = 7
    switchUsers(e.value, 297)
  }
}

function switchUsers(value, offset) {
  const users = document.getElementById('users__container__wrapper')
  const newId = value;
  if (newId > usersId) {
    users.scrollTo({
      top: 0,
      left: offset * value,
      behavior: "smooth"
    });

  }
  if (newId < usersId) {
    users.scrollTo({
      top: 0,
      left: offset * value,
      behavior: "smooth"
    });
  }
  usersId = newId;
}