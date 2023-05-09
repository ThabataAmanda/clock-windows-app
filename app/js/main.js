const menuNav = document.querySelector('[data-js="menu-nav"]')
const menuIcon = document.querySelector('[data-js="menu-toggle"]')
const menuLinks = document.querySelectorAll('[data-js="menu-item"]')
const menuList = document.querySelector('[data-js="menu-list"]')

const toggleMenu = () => {
  const navMenuIsActive = menuNav.classList.contains('show-menu')

  if (navMenuIsActive) {
    menuNav.classList.remove('show-menu')
    menuIcon.classList.remove('active')
    return
  }

  menuNav.classList.add('show-menu')
  menuIcon.classList.add('active')
}

const closeMenuWhenClicked = event => {
  const clickedElement = event.target

  if (clickedElement.closest('[data-js="menu-item"]')) {
    toggleMenu()
  }
}

menuIcon.addEventListener('click', toggleMenu)
menuList.addEventListener('click', closeMenuWhenClicked)