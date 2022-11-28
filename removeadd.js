const list = document.querySelectorAll('.menu li a');
list.forEach(item => {
  item.addEventListener('click', (e) => {
    list.forEach(el => { el.classList.remove('active'); });
    item.classList.add('active');
  });
});