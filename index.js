let passwordElOne = document.querySelector(".password-one");
let passwordElTwo = document.querySelector(".password-two");

console.log(passwordElOne);

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

for (let i = 0; i < characters.length; i++) { 
    console.log(characters[i]);
}

function generatePassword() {
    let clearPassword = passwordElOne.textContent = "";
    let clearPassword2 = passwordElTwo.textContent = "";
    if (passwordElOne.textContent === "" || passwordElTwo.textContent === "") {
    for (let i = 0; i < 15; i++) {
        let password1 = Math.floor(Math.random() * characters.length);
        let password2 = Math.floor(Math.random() * characters.length);
        passwordElOne.textContent += characters[password1];
        passwordElTwo.textContent += characters[password2];
        console.log(password1);
    }
    return passwordElOne.textContent && passwordElTwo.textContent;
} else if (passwordElOne && passwordElTwo) {
    return clearPassword && clearPassword2;
}
}

