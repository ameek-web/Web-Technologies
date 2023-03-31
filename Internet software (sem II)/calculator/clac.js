let display = document.getElementById('display');

// Show 16 buttons
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText ='';
                break;                 //break erase signs 
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch{
                        display.innerText = 'Error';
                    }
                    
                    break;
                default:
                display.innerText += e.target.innerText;
        }

    });
});


