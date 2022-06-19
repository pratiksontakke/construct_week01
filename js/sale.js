// <div id="prsProduct">
import { prsProductData } from "../js/data.js";
let addToCartData = JSON.parse(localStorage.getItem("addToCartData")) || [];
prsProductDiaplay(prsProductData);

function prsProductDiaplay(prsProductData) {
  document.querySelector("#prsProduct").innerHTML = "";
  prsProductData.forEach(function (elem, index) {
    let a = document.createElement("a");

    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", elem.imgLink);
    img.setAttribute("alt", elem.name);
    div1.append(img);

    let h3 = document.createElement("h3");
    h3.innerText = elem.name.substring(0, 27);

    let button1 = document.createElement("button");
    button1.innerText = elem.offer;

    let div2 = document.createElement("div");
    let p1 = document.createElement("p");
    let span1 = document.createElement("span");
    p1.innerHTML = "MSRP: $";
    span1.innerText = elem.MSRP;
    p1.append(span1);

    let p2 = document.createElement("p");
    let span2 = document.createElement("span");
    p2.innerHTML = "$";
    span2.innerText = elem.price;
    p2.append(span2);

    div2.append(p1, p2);

    let button2 = document.createElement("button");
    button2.addEventListener("click", function () {
      button2.style.backgroundColor = "turquoise";
      button2.style.color = "black";
      addToCart(elem, index);
    });
    button2.innerText = "Add to Cart";
    a.append(div1, h3, button1, div2, button2);
    document.querySelector("#prsProduct").append(a);
  });
}

function addToCart(elem) {
  let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
  if (isLogin) {
    let addToCartData = JSON.parse(localStorage.getItem("addToCartData")) || [];
    let flag = false;
    addToCartData.forEach(function (elem2) {
      if (elem.imgLink == elem2.imgLink) {
        alert("Item is already in your cart");
        flag = true;
      }
    });
    if (!flag) {
      elem["quantity"] = 1;
      addToCartData.push(elem);
      localStorage.setItem("addToCartData", JSON.stringify(addToCartData));
    }
  } else {
    alert("You are not sign in");
    window.location.href = "./sign_up.html";
  }
}

document.querySelector("#prsSortPrice").addEventListener("change", sortPrice);

function sortPrice() {
  let val = document.getElementById("prsSortPrice").value;
  if (val == "LowHigh") {
    prsProductData.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (val == "HighLow") {
    prsProductData.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  prsProductDiaplay(prsProductData);
}

document.querySelector("#prsSortName").addEventListener("change", sortName);
function sortName() {
  let val2 = document.getElementById("prsSortName").value;
  if (val2 == "AtoZ") {
    prsProductData.sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  }
  if (val2 == "ZtoA") {
    prsProductData.sort(function (a, b) {
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  }
  prsProductDiaplay(prsProductData);
}
