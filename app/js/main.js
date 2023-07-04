const menuNav = document.querySelector('[data-js="menu-nav"]')
const menuIcon = document.querySelector('[data-js="menu-toggle"]')
const menuLinks = document.querySelectorAll('[data-js="menu-item"]')
const menuList = document.querySelector('[data-js="menu-list"]')

const toggleMenu = (event) => {
  const navMenuIsActive = menuNav.classList.contains('show-menu')

  if (navMenuIsActive) {
    menuNav.classList.remove('show-menu')
    menuIcon.classList.remove('active')
    return
  }

  menuNav.classList.add('show-menu')
  menuIcon.classList.add('active')
}

const handleMenu = event => {
  const clickedElement = event.target;
  const clickedElementDataset = clickedElement.dataset.menu;

  console.log(clickedElementDataset)

  if (!clickedElementDataset) {
    return;
  }

  if (clickedElement.closest('[data-js="menu-item"]')) {
    toggleMenu();
  }

  const currentPanel = document.querySelector(`[data-panel='${clickedElementDataset}']`);
  const panels = document.querySelectorAll("[data-tool]");

  panels.forEach((panel) => panel.classList.remove("active-panel"));
  currentPanel.classList.add("active-panel");
}

menuIcon.addEventListener('click', toggleMenu)
menuList.addEventListener('click', handleMenu)