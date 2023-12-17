function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName === '' || username === '' || email === '' || phoneNumber === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all the fields');
        return false; 
    }



    return true; }