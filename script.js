document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('.button');

    button.addEventListener('click',function(){
        var passwordDiv = document.querySelector('.password-text');
        passwordDiv.textContent = 'new password';
    })
})