var username = document.querySelector('.usernameinput');
var password = document.querySelector('.passwordinput');
var submit = document.querySelector('.submitbtn');


submit.addEventListener('click', function (e) {
    if (username.value === '' || password.value === '') {
        e.preventDefault();
        alert('Please enter a username and password');
    } else if (username.value === 'admin' && password.value === 'admin') {
        document.location.href = 'stats.html';

    }
});
