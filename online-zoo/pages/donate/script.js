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
}

function clickOnBody(e) {
  if (e.clientY > 286) {
    closeMenu(e.clientY)
  }
}

////////////////////////////////////////////////////////////////

function changeAmountInput(input) {
  const nums = document.querySelector(".amount__container").getElementsByTagName('div')
  for (let index = 0; index < nums.length; index++) {
    if (nums[index].innerText === input.value) {
      nums[index].className = 'amount__item checked'
      document.getElementsByName("dot")[index].checked = true;
    }
    else {
      nums[index].className = 'amount__item'
      document.getElementsByName("dot")[index].checked = false;
    }
  }
}

function changeAmountColor(val) {
  const nums = document.querySelector(".amount__container").getElementsByTagName('div')
  for (let index = 0; index < nums.length; index++) {
    if (nums[index].innerText === val) {
      nums[index].className = 'amount__item checked'
    }
    else nums[index].className = 'amount__item'
  }
}

function changeValue(radio) {
  document.getElementById("amount").value = radio.value;
  changeAmountColor(radio.value)
}