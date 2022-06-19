let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
if (isLogin) {
  let otp = "1234";
  document.querySelector("#varify").addEventListener("click", otpValid);
  document.querySelector("#resend").addEventListener("click", otpvarify);
  function otpValid() {
    let userotp = document.querySelector("#otp").value;
    if (otp == userotp) {
      window.location.href = "./otpsuccess.html";
    } else {
      alert("Please enter correct OTP");
    }
  }
  function otpvarify() {
    alert("OTP resend to your registered mobile number");
  }
} else {
  alert("You are not sign in");
  window.location.href = "./sign_up.html";
}
