// Simulated login state (replace with real authentication system)
const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

// DOM elements
const signupLogin = document.getElementById('signup-login');
const myAccount = document.getElementById('my-account');
const messages = document.getElementById('messages');
const orderDashboard = document.getElementById('order-dashboard');
const logoutBtn = document.getElementById('logout-btn');

// Update dropdown based on login state
if (userLoggedIn) {
    signupLogin.style.display = 'none';
    myAccount.style.display = 'block';
    messages.style.display = 'block';
    orderDashboard.style.display = 'block';
    logoutBtn.style.display = 'block';
} else {
    signupLogin.style.display = 'block';
    myAccount.style.display = 'none';
    messages.style.display = 'none';
    orderDashboard.style.display = 'none';
    logoutBtn.style.display = 'none';
}

// Logout functionality
logoutBtn.addEventListener('click', () => {
    localStorage.setItem('userLoggedIn', 'false');
    alert('Logged out successfully!');
    location.reload();
});

// Simulated login for testing
signupLogin.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('userLoggedIn', 'true');
    alert('Logged in successfully!');
    location.reload();
});
