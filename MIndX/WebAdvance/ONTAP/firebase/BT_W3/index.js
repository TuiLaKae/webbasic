function displayLoginBtn() {
    const loginBtn = document.getElementById('login_btn');
    const logoutBtn = document.getElementById('logout_btn');
    const loginState = localStorage.getItem('login');
    if (loginState) {
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline';
    } else {
      loginBtn.style.display = 'inline';
      logoutBtn.style.display = 'none';
    }
  }