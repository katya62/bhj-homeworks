
const activeClass = 'rotator__case_active';
 const rotator = document.getElementsByClassName('rotator')[0];
 const delay = 1000;

 function changeActiveElement() {
 const active = document.getElementsByClassName(activeClass)[0];
 let next = active.nextElementSibling;

 if (!next) {
 next = rotator.children[0];
 }

 active.classList.remove(activeClass);
 next.classList.add(activeClass);

 setTimeout(changeActiveElement, delay);
 }

 setTimeout(changeActiveElement, delay);