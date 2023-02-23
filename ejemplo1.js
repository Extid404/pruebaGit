import prompt from 'prompt';
function countUpperCaseChars(str){ 
    let upperCaseCharCount = 0; 
    for(let i=0; i < str.length; i++){ 
        let char = str[i]; 
        if (char === char.toUpperCase()) { 
            upperCaseCharCount++; 
        }  
    } 
    return upperCaseCharCount; 
} 
let word = prompt('Ingrese una palabra'); 
console.log('El número de letras mayúsculas en la palabra es', countUpperCaseChars(word)); 


