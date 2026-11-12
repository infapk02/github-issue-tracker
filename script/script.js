const signInBtn = document.querySelector("#signInBtn");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === "Admin" && password === "admin123") {
    window.location.href = "../home.html";
  } else {
    alert("Invalid username or password");
  }
});
