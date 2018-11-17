/*-------------------------------------------------------------------------------------------------------------------------------*/
// SECTION: Form functionalities 
// TO DO: make this section more efficient. See if one or the other are being clicked 

// Get modal element
var modal = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modal = document.getElementById('simpleModal');
var modal2 = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modalBtn2 = document.getElementById('modalBtn2');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
modalBtn2.addEventListener('click', openModal2);

// Listen for close click
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);

// Listen for outside click
window.addEventListener('click', outsideClick);
window.addEventListener('click', outsideClick2);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}
function openModal2(){
  modal2.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
function closeModal2(){
  modal2.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
function outsideClick2(e){
  if(e.target == modal2){
    modal2.style.display = 'none';
  }
}