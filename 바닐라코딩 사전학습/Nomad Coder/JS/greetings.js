
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);   
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    let greetingText = "hello";
    const date = new Date();
    const time = date.getHours();
    if (time >= 0 && time <=4 || time >=20) {
        greetingText = "Good night,";
    } else if (time <=12) {
        greetingText = "Good morning,";
    } else greetingText = "Good afternoon,";

    greeting.innerText = `${greetingText}` + " " + `${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

    if(savedUsername === null) {
        //show the form 
     loginForm.classList.remove(HIDDEN_CLASSNAME);
     loginForm.addEventListener("submit", onLoginSubmit);   
    } else {
        //show the greetings
        paintGreetings(); 
    }

    
