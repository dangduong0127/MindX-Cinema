const formRes = document.getElementById("form-register");
const acc = JSON.parse(localStorage.getItem("accounts")) || [];

formRes.addEventListener("submit", (e) => {
  // Ngăn hình vi submit mặc định của trình duyệt
  e.preventDefault();
  const username = formRes.username.value.trim();
  const email = formRes.email.value;
  const password = formRes.password.value;
  const confirmPass = formRes.re_password.value;

  const validate = () => {
    if (username === "") {
      alert("Username không được để trống");
      return false;
    }

    if (username.length < 6) {
      alert("Username phải có ít nhất 6 ký tự");
      return false;
    }

    if (email === "") {
      alert("Email không được để trống");
      return false;
    }

    if (password === "") {
      alert("Email không được để trống");
      return false;
    }

    if (password.length < 8) {
      alert("password phải có ít nhất 8 ký tự");
      return false;
    }

    if (password !== confirmPass) {
      alert("Mật khẩu không khớp");
      return false;
    }

    return true;
  };

  if (validate()) {
    acc.push({
      username: username,
      email: email,
      password: password,
    });
    localStorage.setItem("accounts", JSON.stringify(acc));
    alert("Đăng ký thành công tài khoản " + username);
    window.location.href = "./login.html";
  }
});
