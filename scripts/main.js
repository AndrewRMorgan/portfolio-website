var toggle = 0;

document.getElementById('menuButton').addEventListener('click', function() {
  if (toggle === 0) {
    document.getElementById('dropMenu').style.height = '150px';
    toggle = 1;
  } else if (toggle === 1) {
    document.getElementById('dropMenu').style.height = '0px';
    toggle = 0;
  }
})
