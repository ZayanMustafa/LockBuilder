    document.getElementById('generatePassword').addEventListener('click', function() {

    const length = parseInt(document.getElementById('length').value);
    const numNumbers = parseInt(document.getElementById('numbers').value);
    const numUppercase = parseInt(document.getElementById('uppercase').value);
    const numLowercase = parseInt(document.getElementById('lowercase').value);
    const numsymbols = parseInt(document.getElementById('lowercase').value);

    const numbers = '0478523691';
    const uppercase = 'AQZXSWEDCFVRTGBNHYUJMKOLP';
    const lowercase = 'plokijuhygtrfdewsaqzmnxbcv';
    const symbols = '!}|/]*@:{_[.;,<)^%->(';
    
    var password = '';
    
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
    console.log(allCharacters)
    
    for (let i = password.length; i < length; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    password = password.split('').sort(() => Math.random() -0.5 ).join(''); 
    document.getElementById('passwordShowHear').innerText = `Generated Password: ${password}`;
});
