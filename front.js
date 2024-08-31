
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            const searchInput = document.querySelector('input[type="search"]');
            
            if (searchInput && searchInput.value.trim() === '') {
                alert('Please enter a search term.');
                event.preventDefault(); // Prevent form submission if validation fails
                return;
            }
        });
    }


    const loginButton = document.querySelector('button.s a');
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
         
            event.preventDefault();
            alert('alert!');
            window.location.href = loginButton.href; // Redirect to the login URL
        });
    }
});