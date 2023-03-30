let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (email.value === "" || password.value === "") {
    alert("Please Enter the details first");
  } else {
    alert("logged In Successfully!!");
  }
});
