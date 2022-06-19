let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
if (isLogin) {
  document.querySelector("#ok").addEventListener("click", function () {
    window.location.href = "./index.html";
  });
  let data = JSON.parse(localStorage.getItem("addToCartData")) || [];
  let coupan = JSON.parse(localStorage.getItem("Prscoupan")) || false;
  console.log(coupan)
  displayCart(data);
  function displayCart(data) {
    document.querySelector("tbody").innerText = "";
    data.forEach(function (el, index) {
      let tr1 = document.createElement("tr");
  
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", el.imgLink);
      let name = document.createElement("p");
      name.innerText = el.name;
      td1.append(img, name);
      let td2 = document.createElement("td");
      td2.innerText = el.price;
      let td3 = document.createElement("td");
      td3.innerText = el.quantity;
      tr1.append(td1, td2, td3);
      document.querySelector("tbody").append(tr1);
      prsCheckoutTotal(data);
    });
  }
  // CheckoutTotal
  function prsCheckoutTotal(data) {
    let CheckoutTotal = 0;
    data.forEach(function (el, index) {
      CheckoutTotal += el.price * el.quantity;
    });
    console.log(CheckoutTotal);
    if (coupan) {
      CheckoutTotal = Math.ceil(CheckoutTotal * 0.7);
    }
    document.querySelector("#CheckoutTotal").innerText = CheckoutTotal; 
  }
  
} else {
  alert("You are not sign in");
  window.location.href = "./sign_up.html";
}

