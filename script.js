function appendInput(input) {
    const screen = document.getElementById('screen');
    let currentValue = screen.value;

    if (currentValue === '0' && !"+-*/.".includes(input)) {
        screen.value = input;
        return;
    }

    if (currentValue === '0' && input === '-') {
        screen.value = '-';
        return;
    }

    if ("+-*/.".includes(currentValue.slice(-1))) {
        if (input === '-' && "+*/".includes(currentValue.slice(-1))) {
            screen.value += input; 
            return;
        }
        if ("+*/.".includes(input)) return; 
    }

    screen.value += input;
}

function del() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1) || '0';
}

function reset() {
    document.getElementById('screen').value = '0';
}

function calculate() {
    const screen = document.getElementById('screen');
    const expression = screen.value;
 
    if ("+-*/.".includes(expression.slice(-1))) {
        screen.value = 'Error';
        return;
    }

    try {
        
        const result = eval(expression); 
        screen.value = Number.isFinite(result) ? +result.toFixed(3) : 'Error';
    } catch {
        screen.value = 'Error';
    }
}
