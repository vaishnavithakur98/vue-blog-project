document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]',
  )
  const logoDark = document.querySelector('.dark-logo')
  const logoWhite = document.querySelector('.light-logo')
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true
      document.body.classList.add('dark')
      logoDark.classList.add('display-none')
      logoWhite.classList.add('display-block')
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark')
      logoDark.classList.add('display-none')
      logoWhite.classList.add('display-block')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
      document.body.classList.remove('dark')
      logoDark.classList.remove('display-none')
      logoWhite.classList.remove('display-block')
    }
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false)
  }
})
