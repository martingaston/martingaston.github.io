document.addEventListener("DOMContentLoaded", function() {
  greeting();
});

document.getElementById("hi").addEventListener("click", () => { greeting(); });

function greeting() {
  let greetings = ["Hi!", "Hello!", "Bonjour!", "Salut!", "Hola!", "Guten Tag!", "Ciao!", "Ola!", "Namaste!", "Salaam!", "Ohayo!", "Konnichiwa!", "Jambo!"];
  let rand = Math.floor(Math.random() * Math.floor(greetings.length));
  document.getElementById("hi").innerHTML = greetings[rand];
}