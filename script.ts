document.getElementById('generatePassword')?.addEventListener('click', function() {

    const lengthInput = document.getElementById('length') as HTMLInputElement;
    const numbersInput = document.getElementById('numbers') as HTMLInputElement;
    const uppercaseInput = document.getElementById('uppercase') as HTMLInputElement;
    const lowercaseInput = document.getElementById('lowercase') as HTMLInputElement;
    const symbolsInput = document.getElementById('symbols') as HTMLInputElement;

    const length: number = parseInt(lengthInput.value);
    const numNumbers: number = parseInt(numbersInput.value);
    const numUppercase: number = parseInt(uppercaseInput.value);
    const numLowercase: number = parseInt(lowercaseInput.value);
    const numsymbols: number = parseInt(symbolsInput.value);

    const numbers: string = '0478523691';
    const uppercase: string = 'AQZXSWEDCFVRTGBNHYUJMKOLP';
    const lowercase: string = 'plokijuhygtrfdewsaqzmnxbcv';
    const symbols: string = '!}|/]*@:{_[.;,<)^%->(';

    let password: string = '';

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

    const allCharacters: string = numbers + uppercase + lowercase + symbols;
    
    for (let i = password.length; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    const passwordDisplay = document.getElementById('passwordShowHear');
    if (passwordDisplay) {
        passwordDisplay.innerText = `Generated Password: ${password}`;
    }
});
