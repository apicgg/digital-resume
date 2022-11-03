const checkbox = document.querySelector('#toggle')
const html = document.querySelector('html')
const userTheme = localStorage.getItem('theme')

const enableDarkMode = () => {
  html.classList.add('dark')
  localStorage.setItem('theme', 'dark')
}

const disableDarkMode = () => {
  html.classList.remove('dark')
  localStorage.removeItem('theme')
}

if (userTheme === 'dark') {
  enableDarkMode()
  checkbox.checked = true
}

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
})
