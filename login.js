document.addEventListener("DOMContentLoaded", function () {
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToSignup = document.getElementById('switch-to-signup');
    
    const loginForm = document.querySelector('.login');
    const signupForm = document.querySelector('.sign-up');
    const formContainer = document.querySelector('.form-container');
    
    switchToLogin.addEventListener('click', function (event) {
        event.preventDefault();
        formContainer.classList.add('sign-up-mode');
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    });
    
    switchToSignup.addEventListener('click', function (event) {
        event.preventDefault();
        formContainer.classList.remove('sign-up-mode');
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    });
});
