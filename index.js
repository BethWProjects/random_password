let passwordElOne = document.querySelector(".password-one");
let passwordElTwo = document.querySelector(".password-two");
let themeSwitch = document.querySelector("#theme-switch");
let toggleDark = true;



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//generate Password
function generatePassword() {
    let clearPassword = passwordElOne.textContent = "";
    let clearPassword2 = passwordElTwo.textContent = "";
    if (passwordElOne.textContent === "" || passwordElTwo.textContent === "") {
    for (let i = 0; i < 15; i++) {
        let password1 = Math.floor(Math.random() * characters.length);
        let password2 = Math.floor(Math.random() * characters.length);
        passwordElOne.textContent += characters[password1];
        passwordElTwo.textContent += characters[password2];
    }
    return passwordElOne.textContent && passwordElTwo.textContent;
} else if (passwordElOne && passwordElTwo) {
    return clearPassword && clearPassword2;
}
}

//Light/Dark Mode toggle
function setLightDarkMode() {
    let body = document.body;
    body.classList.toggle('light-mode');
    let heading = document.querySelector('h2');
    heading.classList.toggle('light-mode-description');
    if (toggleDark === true) {
        themeSwitch.textContent = "Dark Mode";
        themeSwitch.style.color = "#1F2937";
        toggleDark = false;
    } else {
        themeSwitch.textContent = "Light Mode";
        themeSwitch.style.color = 'white';
        toggleDark = true;
    }
}

//Copy to Clipboard
function copyText(element) { 
        var textToCopy = element.textContent;
      
        // Create a temporary textarea element
        var textarea = document.createElement('textarea');
        textarea.value = textToCopy;
      
        // Append the textarea to the DOM
        document.body.appendChild(textarea);
      
        // Copy the text from the textarea
        textarea.select();
        document.execCommand('copy');
      
        // Remove the temporary textarea
        document.body.removeChild(textarea);
      
        // Provide visual feedback to the user
        if (textToCopy !== "") {
            element.textContent = "Copied!";
            setTimeout(function() {
              generatePassword();
            }, 2500); // Reset the text after 2 seconds
        }
      }

//Hover state on password <p> elements only when text is showing, created separate class attribute in HTML and CSS for the element to apply the "this" keyword to the function, to access the element.
//showHover is a boolean value, if the text is showing, then showHover is true, if not, then it is false.
  
  function toggleHoverState(element, showHover) {
    if (showHover && element.textContent.trim() !== '') {
      element.classList.add('hover');
    } else {
      element.classList.remove('hover');
    }
  }