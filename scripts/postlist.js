document.addEventListener('DOMContentLoaded', () => {
// Get the modal element
 const modal = document.getElementById('deleteModal');

 // Get the delete button elements
 const deleteButtons = document.querySelectorAll('.delete-post');

 // Attach click event listeners to delete buttons
 deleteButtons.forEach((button) => {
   button.addEventListener('click', () => {
     modal.style.display = 'block';
   });
 });

 const goButtons = document.querySelectorAll('.gopg');

 goButtons.forEach((icon) => {
   icon.addEventListener('click', () => {    
    gotopg();
   });
 });


 // Close the modal when the Yes button is clicked
 const yesBtn = document.getElementById('yesBtn');
 yesBtn.addEventListener('click', () => {
   modal.style.display = 'none';
   // Perform delete action here
 });

 // Close the modal when the No button is clicked
 const noBtn = document.getElementById('noBtn');
 noBtn.addEventListener('click', () => {
   modal.style.display = 'none';
 });

 // Close the modal if the user clicks outside of it
 window.addEventListener('click', (event) => {
   if (event.target == modal) {
     modal.style.display = 'none';
   }
 });

});

function gotopg ()
{
  window.location.href = "post.html";
}

function showPopup() {

  closePopupOnLoad();

  var popup = document.getElementById('popup');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'block';
  overlay.style.display = 'block';
  
  // Disable the "Sign Up" button
  var showPopupBtn = document.getElementById('signup-button');
  showPopupBtn.disabled = true;
}

function closePopup() {
  var popup = document.getElementById('popup');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  // overlay.style.display = 'none';
  
  // Enable the "Show Pop-up" button
  var showPopupBtn = document.getElementById('signup-button');
  showPopupBtn.disabled = false;
  var showPopupBtn2 = document.getElementById('signin-button');
  showPopupBtn2.disabled = false;      
}

function closePopupOnLoad() {
  closePopup();
  closePopupSignIn();
  closePopupCreate();
}


function submitForm() {
  var name = document.getElementById('name').value;
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  
  // Validate the form data, perform any additional actions or checks here
  
  // For this example, we will just display an alert with the submitted data
  //alert('Name: ' + name + '\nUsername: ' + username + '\nPassword: ' + password + '\nConfirm Password: ' + confirmPassword);
  //closePopup();
}

function showPopupSignIn() {
  var popup = document.getElementById('popupsignin');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'block';
  overlay.style.display = 'block';
  
  // Disable the "Sign In" button
  var showPopupBtn = document.getElementById('signin-button');
  showPopupBtn.disabled = true;
}

function closePopupSignIn() {
  var popup = document.getElementById('popupsignin');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  //overlay.style.display = 'none';
  
  // Enable the "Show Pop-up" button
  var showPopupBtn = document.getElementById('signin-button');
  showPopupBtn.disabled = false;
  var showPopupBtn2 = document.getElementById('signup-button');
  showPopupBtn2.disabled = false;  
}

function submitFormSignIn() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
     
  // Validate the form data, perform any additional actions or checks here
  
  // For this example, we will just display an alert with the submitted data
  //alert('\nUsername: ' + username + '\nPassword: ' + password );
  //closePopupSignIn();
}

function showPopupCreate() {

  closePopupOnLoad();

  var popup = document.getElementById('popupcreate');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'block';
  overlay.style.display = 'block';
  
  /*// Disable the "Sign Up" button
  var showPopupBtn = document.getElementById('create-button');
  showPopupBtn.disabled = true;*/
}

function closePopupCreate() {
  var popup = document.getElementById('popupcreate');
  var overlay = document.getElementById('overlay');
  
  popup.style.display = 'none';
  // overlay.style.display = 'none';
  
  // Enable the "Show Pop-up" button
 /* var showPopupBtn = document.getElementById('create-button');
  showPopupBtn.disabled = false;
  var showPopupBtn2 = document.getElementById('signup-button');
  showPopupBtn2.disabled = false;*/    
}