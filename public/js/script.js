const anotha = document.querySelector('#anothaOne');
anotha.addEventListener('click', () => { location.reload() });

const menu = document.querySelector('.menu')
menu.addEventListener('click', () => {
  const overview = document.querySelector('.overview');
  if (overview.style.display == 'block') {
    overview.style.display = 'none';
  } else {
    overview.style.display = 'block';
  }
})