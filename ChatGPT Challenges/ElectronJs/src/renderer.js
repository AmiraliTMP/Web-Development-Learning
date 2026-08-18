const helloButton = document.querySelector("#helloButton");

helloButton.addEventListener("click", () => {
  window.electronAPI.sayHello();
});
