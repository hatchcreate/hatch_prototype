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

// Form Validation
document.querySelector('.collab-form').addEventListener('submit', function (e) {
    const businessName = document.getElementById('business-name').value.trim();
    const projectTitle = document.getElementById('project-title').value.trim();
    const description = document.getElementById('description').value.trim();
    const deadline = document.getElementById('deadline').value.trim();
    const category = document.getElementById('category').value;

    if (!businessName || !projectTitle || !description || !deadline || !category) {
        alert('Please fill out all fields in the form.');
        e.preventDefault();
    } else {
        alert('Your collaboration request has been submitted successfully!');
    }
});

// Dynamic Filtering for Featured Projects
const filterProjects = (category) => {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
};
