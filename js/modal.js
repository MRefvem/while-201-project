'use strict';

var modal = document.getElementById('modal');

var span = document.getElementById('close');
span.addEventListener('click', function(){
  // display to none
  modal.style.display = 'none';
})
var rock2 = document.getElementById('rock2')
rock2.addEventListener('click', function(){
  modal.style.display = 'block';
})


span.onclick = function() {
  modal.style.display = 'none';
};

