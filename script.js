document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.button');
    var copyImg = document.querySelector('.copy');
    var passwordDiv = document.querySelector('.password-text');

    button.addEventListener('click', function () {
        var password = generatePassword();
        passwordDiv.textContent = password;
        passwordDiv.appendChild(copyImg);
        copyImg.style.display = 'block';
    });

    copyImg.addEventListener('click', function () {
        var password = passwordDiv.textContent;
        navigator.clipboard.writeText(password)
        .then(() => {
            alert('Password copied to clipboard!');
        });
    });
});

function generatePassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);  
    }
    return password;
}
