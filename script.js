document.getElementById('generate').addEventListener('click', () => {
    const length = document.getElementById('slider').value;
    const result = document.getElementById('result');
    
    // Password generation logic
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    result.textContent = password;
});

document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    // Get selected options
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const length = document.getElementById('slider').value;

    // Define character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Build character set based on selected options
    let chars = '';
    if (uppercase) chars += uppercaseChars;
    if (lowercase) chars += lowercaseChars;
    if (numbers) chars += numberChars;
    if (symbols) chars += symbolChars;

    // Generate password
    let password = '';
    if (chars === '') {
        password = 'Please select at least one option';
    } else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
    }

    // Display password
    document.getElementById('result').textContent = password;
}

document.getElementById('copy-btn').addEventListener('click', async () => {
    const password = document.getElementById('result').textContent;
    try {
        await navigator.clipboard.writeText(password);
        document.querySelector('.result__info.left').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('.result__info.left').style.opacity = '0';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy password:', err);
    }
});

const slider = document.getElementById('slider');
const result = document.getElementById('result');

const lengthDisplay = document.createElement('span');
lengthDisplay.classList.add('length__value');
lengthDisplay.style.cssText = 'color: #fff; margin-left: 1rem; font-size: 0.9rem;';
document.querySelector('.length.range__slider').appendChild(lengthDisplay);

lengthDisplay.textContent = slider.value;

slider.addEventListener('input', () => {
    lengthDisplay.textContent = slider.value;
    if (result.textContent !== 'CLICK GENERATE') {
        generatePassword();
    }
});

function generatePassword() {
    const length = slider.value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let chars = '';
    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) chars += '0123456789';
    if (symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    if (chars === '') {
        password = 'Please select at least one option';
    } else {
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
    }
    
    result.textContent = password;
}

// generate button event listener
document.querySelector('.btn.generate').addEventListener('click', generatePassword);


document.getElementById('copy-btn').addEventListener('click', async () => {
    const password = document.getElementById('result').textContent;
    const notification = document.querySelector('.result__info.left');
    
    try {
        await navigator.clipboard.writeText(password);
        notification.style.opacity = '1';
        
        setTimeout(() => {
            notification.style.opacity = '0';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy password:', err);
    }
});

document.getElementById('copy-btn').addEventListener('click', async () => {
    const copyBtn = document.getElementById('copy-btn');
    const password = document.getElementById('result').textContent;
    
    try {
        await navigator.clipboard.writeText(password);
        document.querySelector('.result__info.left').style.opacity = '1';
        
        copyBtn.style.color = '#F99417'; 
        copyBtn.style.background = 'rgba(76, 175, 80, 0.1)';
        
        setTimeout(() => {
            document.querySelector('.result__info.left').style.opacity = '0';
            copyBtn.style.color = '#FDF3E7';
            copyBtn.style.background = 'rgba(255, 255, 255, 0.1)';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy password:', err);
    }
});