function palindromo(palavra) {
    palavra = palavra.replace(/[\s,]/g, ''); 
    palavra = palavra.toLowerCase();     
    const palavraRev = palavra.split('').reverse().join('');
    return palavra === palavraRev;
  }

module.exports = palindromo