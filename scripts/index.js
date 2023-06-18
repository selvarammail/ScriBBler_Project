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
    overlay.style.display = 'none';
    
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
    overlay.style.display = 'none';
    
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
    overlay.style.display = 'none';
    
    // Enable the "Show Pop-up" button
   /* var showPopupBtn = document.getElementById('create-button');
    showPopupBtn.disabled = false;
    var showPopupBtn2 = document.getElementById('signup-button');
    showPopupBtn2.disabled = false;*/    
  }

  function redirectToPage() {
    window.location.href = "html/postlist.html";
  }