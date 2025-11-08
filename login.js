username = document.querySelector(".username")
password = document.querySelector(".password")
saveBtn = document.querySelector(".saveBtn")
saveBtn.onclick = function () {
  if (username.value && password.value) {
    if (localStorage.getItem(username.value) && JSON.parse(localStorage.getItem(username.value)).password === password.value) {
      alert("Welcome back, " + username.value + "!");
      const name = username.value
      username.value = "";
      password.value = "";
      window.location.href = "katalog.html";
      return
    }
    if (localStorage.getItem(username.value)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
    if (password.value.length < 6 && (!password.value.includes("$") || !password.value.includes("@"))) {
      alert("Password must be at least 6 characters long and contain either '$' or '@'.");
      return;
    }
    if (password.value.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    if (!password.value.includes("$") && !password.value.includes("@")) {
      alert("Password must contain either '$' or '@'.");
      return;
    }
    else {
      userDetails = {
        password: password.value,
      };
      localStorage.setItem(username.value, JSON.stringify(userDetails));
      alert("User registered successfully!");
      const name = username.value
      username.value = "";
      password.value = "";
      window.location.href = "katalog.html";

    }
  }

}

