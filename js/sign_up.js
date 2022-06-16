let signupData = JSON.parse(localStorage.getItem("signupData")) || [];
document.querySelector("form").addEventListener("submit", storeSignupData);

function storeSignupData(event) {
    event.preventDefault();
    let obj = {};
    let name = document.querySelector("#pukName").value;
    obj.name = name;
    let email = document.querySelector("#pukEmail").value;
    let emailCon = document.querySelector("#pukEmailCon").value;
    let pass = document.querySelector("#pukPass").value;
    let passCon = document.querySelector("#pukPassCon").value;
    let mobNo = document.querySelector("#pukMobNo").value;
    obj.mobNo = mobNo;
    let reff = document.querySelector("#pukReff").value;
    obj.reff = reff;
    let emailFlag = false;
    let passwordFlag = false;
    let isLogin = false;
    if (email == emailCon) {
        obj.pass = pass;
        emailFlag = true;
    } else {
        alert ("Email address and confirm email address not matching")
    }
    if (pass == passCon) {
        obj.email = email;
        passwordFlag = true;
    } else {
        alert ("Password and confirm password not matching")
    }
    if (emailFlag && passwordFlag) {
        signupData.push(obj);
        isLogin = true;
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
        localStorage.setItem("signupData", JSON.stringify(signupData));
        window.location.href = "./index.html"
    } else {
        document.querySelector("#pukEmailCon").value = "";
        document.querySelector("#pukPassCon").value = "";
        
    }
    console.log(signupData);
}


