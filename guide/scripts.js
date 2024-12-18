// Simulated login functionality
const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';

const signupLogin = document.getElementById('signup-login');
const myAccount = document.getElementById('my-account');
const messages = document.getElementById('messages');
const orderDashboard = document.getElementById('order-dashboard');
const logoutBtn = document.getElementById('logout-btn');

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

logoutBtn.addEventListener('click', () => {
    localStorage.setItem('userLoggedIn', 'false');
    alert('Logged out successfully!');
    location.reload();
});

signupLogin.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('userLoggedIn', 'true');
    alert('Logged in successfully!');
    location.reload();
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        tab.classList.add('active');
        const targetPanel = document.querySelector(`#${tab.dataset.target}`);
        targetPanel.classList.add('active');
    });
});
