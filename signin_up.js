let para_danger = document.querySelector(".para_danger");
let para_success = document.querySelector(".para_success");


function signup() {
  if (username.value == "" || email.value == "" || password.value == "") {
   
  }
   else {
    setTimeout(() => {
      username.value = "";
      email.value = "";
      password.value = "";
    }, 2000);

    // para_success.style.display = "block";
  }

  setTimeout(() => {
    para_danger.style.display = "none";
    para_success.style.display = "none";
  }, 3000);
}
