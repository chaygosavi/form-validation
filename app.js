const form = document.querySelector("#form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const sendData = (count, sRate) => {
  if (sRate === count) {
    alert("Registration SuccessFul");
    swal("Welcome! " + username.value, "Registration Successful", "success");
    location.href = `demo.html?username=${username.value}`
  }
};

const successMsg = () => {
  let formCon = document.getElementsByClassName("form-control");
  var count = formCon.length - 1;

  for (var i = 0; i < formCon.length; i++) {
    if (formCon[i].className === "form-control success") {
      var sRate = 0 + i;
      sendData(count, sRate);
    } else return false;
  }
};

const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }
  var dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2 || dot === emailVal.length - 1) {
    return false;
  }
  return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Minimum 3 characters");
  } else {
    setSuccessMsg(username);
  }

  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email");
  } else {
    setSuccessMsg(email);
  }

  if (phoneVal === "") {
    setErrorMsg(phone, "Phone number cannot be blank");
  } else if (phoneVal.length !== 10) {
    setErrorMsg(phone, "not valid mobile number");
  } else {
    setSuccessMsg(phone);
  }

  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "Minimum 6 characters");
  } else {
    setSuccessMsg(password);
  }

  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Password cannot be blank");
  } else if (cpasswordVal !== passwordVal) {
    setErrorMsg(cpassword, "Wrong password");
  } else {
    setSuccessMsg(cpassword);
  }

  successMsg();
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
