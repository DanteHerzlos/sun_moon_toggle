const toggle = document.getElementById('toggle')

toggle?.addEventListener('click', () => {
  if (toggle.classList.contains('active')) {
    toggle.classList.remove('active')
  } else {
    toggle.classList.add('active')
  }
})
