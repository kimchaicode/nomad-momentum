const login = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const greetings = ["Hello", "Hi", "How are you", "What's up", "Hey", "Have a nice day", "Good to see you", "Fighting today"]
const greetingName = document.getElementById("greeting");

const USERNAME_KEY = "username";

function onLogInSubmit(event) {
    event.preventDefault();
    login.classList.replace("center-screen", "hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    userGreeting(username);
}

function userGreeting(username) {
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingName.innerText = `${greeting}, ${username}!`;
    greetingName.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    login.classList.remove("hidden");
    login.addEventListener("submit", onLogInSubmit);
} else {
    userGreeting(savedUsername);
}
