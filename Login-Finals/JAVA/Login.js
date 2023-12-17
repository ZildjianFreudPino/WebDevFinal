function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please enter both email and password');
        return false;
    }
    window.location.href = "../html/Main.html";
    return false; 
}