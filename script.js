function insert(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLast() {
    let value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}
