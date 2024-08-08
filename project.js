// jQuery for toggle functionality (example for mobile responsiveness) for contact page
$(document).ready(function(){
    $('.footer-section h3').click(function(){
        $(this).next('ul').slideToggle();
    });
});
document.getElementById('show-register-form').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login-form').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});