function generatePassword() {
    const words = ["apple", "book", "cat", "dog", "egg", "fish", "goat", "hat", "ice", "jam"];
    const passwordLength = 3;  // Number of words
    const randomNumberLength = 4; // Number of digits

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += words[Math.floor(Math.random() * words.length)];
    }
    
    for (let i = 0; i < randomNumberLength; i++) {
        password += Math.floor(Math.random() * 10);
    }

    document.getElementById('password').innerText = password;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendValue(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
