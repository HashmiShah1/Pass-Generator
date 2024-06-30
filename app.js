const passwordBox = document.querySelector('#password');
const length = 12; // this is password lenght
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "~!@#$%^&*()_{[}].";

const allChars = upperCase + lowerCase + number + symbols;

let createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]; // jab tak password 12 characters tk nhi ponchta ye run hota rhy ga...
    }
    passwordBox.value = password;
}

let copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}