document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.buttons');
    const screen = document.createElement('div');
    screen.classList.add('screen');
    document.querySelector('.main-container').prepend(screen);
    let screenValue = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            let buttonText = e.target.innerText;
            
            if (button.id === 'AC') {
                screenValue = '';
                screen.innerText = screenValue;
            } else if (button.id === 'back-space') {
                screenValue = screenValue.slice(0, -1);
                screen.innerText = screenValue;
            } else if (button.id === 'mod') {
                screenValue += '%';
                screen.innerText = screenValue;
            } else if (button.id === 'div') {
                screenValue += '/';
                screen.innerText = screenValue;
            } else if (button.id === 'mul') {
                screenValue += '*';
                screen.innerText = screenValue;
            } else if (button.id === 'min') {
                screenValue += '-';
                screen.innerText = screenValue;
            } else if (button.id === 'plus') {  
                screenValue += '+';
                screen.innerText = screenValue;
            } else if (button.id === 'equal') {
                try {
                    screenValue = eval(screenValue);
                    screen.innerText = screenValue;
                } catch {
                    screen.innerText = 'Error';
                    screenValue = '';
                }
            } else {
                screenValue += buttonText;
                screen.innerText = screenValue;
            }
        });
    });
});
