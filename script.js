"use strict";
var _a;
(_a = document.getElementById('generatePassword')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {

    const lengthInput = document.getElementById('length');
    const numbersInput = document.getElementById('numbers');
    const uppercaseInput = document.getElementById('uppercase');
    const lowercaseInput = document.getElementById('lowercase');
    const symbolsInput = document.getElementById('symbols');
    const length = parseInt(lengthInput.value);
    const numNumbers = parseInt(numbersInput.value);
    const numUppercase = parseInt(uppercaseInput.value);
    const numLowercase = parseInt(lowercaseInput.value);
    const numsymbols = parseInt(symbolsInput.value);
    const numbers = '0478523691';
    const uppercase = 'AQZXSWEDCFVRTGBNHYUJMKOLP';
    const lowercase = 'plokijuhygtrfdewsaqzmnxbcv';
    const symbols = '!}|/]*@:{_[.;,<)^%->(';
    let password = '';
    for (let i = 0; i < numNumbers; i++) {
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    for (let i = 0; i < numUppercase; i++) {
        password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }
    for (let i = 0; i < numLowercase; i++) {
        password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
    }
    for (let i = 0; i < numsymbols; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    const allCharacters = numbers + uppercase + lowercase + symbols;
    for (let i = password.length; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    const passwordDisplay = document.getElementById('passwordShowHear');
    if (passwordDisplay) {
        passwordDisplay.innerText = `Generated Password: ${password}`;
    }
});
