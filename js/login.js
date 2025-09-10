const formLogin = document.getElementById("form-login");
const acc = JSON.parse(localStorage.getItem("accounts")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

if (currentUser) {
  window.location.href = "../index.html";
}

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = formLogin.username.value.trim();
  const password = formLogin.password.value;

  const validate = () => {
    if (username === "") {
      alert("Username không được để trống");
      return false;
    }

    if (username.length < 6) {
      alert("Username phải có ít nhất 6 ký tự");
      return false;
    }

    if (password === "") {
      alert("Không được để trống password");
      return false;
    }

    return true;
  };

  if (validate()) {
    const user = acc.find(
      (us) => us.username === username && us.password === password
    );

    if (user) {
      alert("Đăng nhập thành công!!");
      window.location.href = "../index.html";
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  }
});
