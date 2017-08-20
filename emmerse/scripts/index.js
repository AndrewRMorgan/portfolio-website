let obj;
let toggle = 0;
const dropdownMenu = document.getElementById('dropdownMenu');
const hiddenDropdownMenu = document.getElementById('hiddenDropdownMenu');

window.addEventListener("scroll",function() {
   if (window.scrollY > 500) {
     document.getElementById('hiddenNavBar').style.top = '0px';
   } else {
     document.getElementById('hiddenNavBar').style.top = '-70px';
   }
});

$('#dropdownButton').click(function() {
  if (toggle === 0) {
    dropdownMenu.style.height = '225px';
    toggle = 1;
  } else if (toggle === 1) {
    dropdownMenu.style.height = '0px';
    toggle = 0;
  }
})


$('#hiddenDropdownButton').click(function() {
  if (toggle === 0) {
    hiddenDropdownMenu.style.height = '225px';
    toggle = 1;
  } else if (toggle === 1) {
    hiddenDropdownMenu.style.height = '0px';
    toggle = 0;
  }
})

$(".rightLinks").click(function() {
    scroll(this.value);
});

$(".dropdownItem").click(function() {
    scroll(this.value);
});

function scroll(value) {
  if (value === 1) {
    obj = "#homeSection";
  } else if (value === 2) {
    obj = "#featuresSection";
  } else if (value === 3) {
    obj = "#benefitsSection";
  } else if (value === 4) {
    obj = "#pricingSection";
  }
  $('html, body').animate({
      scrollTop: $(obj).offset().top
  }, 1500);
  obj = null;
}
