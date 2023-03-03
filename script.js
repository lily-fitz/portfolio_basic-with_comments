// Variable: Mobile menu button
const menuButton = document.querySelector('.menu-button')
// Variable: Navigation list
const navList = document.querySelector('.nav-list')

// Goal: When the button is clicked, we display the navigation menu

// We want the button to listen for a click event
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('menu-active')

  //// Variable: The navigation list is/isn't visible
  const visibility = navList.getAttribute('data-visible')
  //// Conditional: When we click the button:
  ////   If the menu opens, we set the variable to true (is visible).
  ////   If the menu closes, we set the variable to false (isn't visible).
  if (visibility === 'false') {
    navList.setAttribute('data-visible', true)
  } else {
    navList.setAttribute('data-visible', false)
  }
})

// Goal: When Esc is pressed, we close the navigation menu

// We want the button to listen for a key press event
window.addEventListener('keydown', (e) => {
  //// Variable: The Escape key has been pressed (check the key pressed equals the ESC key)
  let keydownEscape = e.key === 'Escape'
  //// Variable: The navigation list is/isn't visible
  const visibility = navList.getAttribute('data-visible')

  //// Conditional: IF the navigation menu AND the key pressed was escape, hide the navigation menu, switch the toggle button from an 'X' back to a hamburger
  if (visibility === 'true' && keydownEscape) {
    navList.setAttribute('data-visible', false)
    menuButton.classList.remove('menu-active')
  }
})

// Goal: When Esc is pressed, we close the navigation menu

// We want the button to listen for a key press event
window.addEventListener('keydown', (e) => {
  //// Variable: The Escape key has been pressed (check the key pressed equals the ESC key)
  let keydownEscape = e.key === 'Escape'
  //// Variable: The navigation list is/isn't visible
  const visibility = navList.getAttribute('data-visible')

  //// Conditional: IF the navigation menu AND the key pressed was escape, hide the navigation menu, switch the toggle button from an 'X' back to a hamburger
  if (visibility === 'true' && keydownEscape) {
    navList.setAttribute('data-visible', false)
    menuButton.classList.remove('menu-active')
  }
})

// Goal: When an in-page link is clicked, the mobile navigation menu closes

// Variable: All links in navigation
const links = document.querySelectorAll('nav a')

// Loop through each link in the navigation
links.forEach((l) => {
  // Each link listens for a click event
  l.addEventListener('click', () => {
    // Remove the 'menu-active' class from the menu button
    menuButton.classList.remove('menu-active')
    // Set the 'data-visible' attribute to false
    navList.setAttribute('data-visible', false)
  })
})
