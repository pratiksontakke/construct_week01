let isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
if (isLogin) {
  // card addons
  let coupan = JSON.parse(localStorage.getItem("Prscoupan")) || false;
  let addToCartData = JSON.parse(localStorage.getItem("addToCartData")) || [];
  addDataLeftCard(addToCartData);
  function addDataLeftCard(addToCartData) {
    addToCartData.forEach(function (elem, index) {
      let div1 = document.createElement("div");
      div1.setAttribute("class", "amCardorder");
      let div2 = document.createElement("div");
      div2.setAttribute("id", "amCardImgRow");
      let img1 = document.createElement("img");
      img1.setAttribute("src", elem.imgLink);
      let p1 = document.createElement("p");
      p1.innerText = elem.name.substring(0, 80);
      div2.append(img1, p1);
      let div3 = document.createElement("div");
      let p2 = document.createElement("p");
      p2.innerText = "Quantity: ";
      let p3 = document.createElement("p");
      p3.setAttribute("id", "amCardQty");
      p3.innerText = elem.quantity;
      div3.append(p2, p3); //
      let div4 = document.createElement("div");
      let p4 = document.createElement("p");
      p4.innerText = "Price: ";
      let p5 = document.createElement("p");
      let span1 = document.createElement("span");
      span1.innerText = elem.price;
      span1.setAttribute("id", "amCardprice");
      p5.append(span1);
      div4.append(p4, p5);
      div1.append(div2, div3, div4);
      document.querySelector("#appendData").append(div1);
    });
  }
  prsCheckoutTotal(addToCartData);
  function prsCheckoutTotal(addToCartData) {
    let CheckoutTotal = 0;
    addToCartData.forEach(function (el, index) {
      CheckoutTotal += el.price * el.quantity;
    });
    console.log(CheckoutTotal);
    if (coupan) {
      CheckoutTotal = Math.ceil(CheckoutTotal * 0.7);
    }
    document.querySelector("#amCardTota2").innerText = CheckoutTotal;
    document.querySelector("#amCardTota1").innerText = CheckoutTotal;
  }

  // formValidation
  let checkOutDetails =
    JSON.parse(localStorage.getItem("checkOutDetails")) || [];
  let cardData = [
    {
      cardNumber: "1234567812345678",
      cardName: "pratik sontakke",
      expMonth: "12",
      expYrs: "34",
      cvv: "123",
    },
    {
      cardNumber: "1234567812345678",
      cardName: "apeksha motghare",
      expMonth: "12",
      expYrs: "34",
      cvv: "123",
    },
    {
      cardNumber: "1234567812345678",
      cardName: "ayskant mishra",
      expMonth: "12",
      expYrs: "34",
      cvv: "123",
    },
    {
      cardNumber: "1234567812345678",
      cardName: "pushpam kumar",
      expMonth: "12",
      expYrs: "34",
      cvv: "123",
    },
    {
      cardNumber: "1234567812345678",
      cardName: "narendra swami",
      expMonth: "12",
      expYrs: "34",
      cvv: "123",
    },
  ];
  document.querySelector("form").addEventListener("submit", saveData);
  let UserValid = 0;
  function saveData(event) {
    event.preventDefault();
    UserValid = 0;
    let obj = {};
    let amCountry = document.getElementById("amCountry").value;
    obj.amCountry = amCountry;
    let firstName = document.getElementById("firstName").value.toLowerCase();
    obj.firstName = firstName;
    let lastName = document.getElementById("lastName").value.toLowerCase();
    obj.lastName = lastName;
    let zipCode = document.getElementById("zipCode").value;
    obj.zipCode = zipCode;
    let companyName = document
      .getElementById("companyName")
      .value.toLowerCase();
    obj.companyName = companyName;
    let address = document.getElementById("address").value.toLowerCase();
    obj.address = address;
    let address2 = document.getElementById("address2").value.toLowerCase();
    obj.address2 = address2;
    let apartmentNumber = document.getElementById("apartmentNumber").value;
    obj.apartmentNumber = apartmentNumber;
    let city = document.getElementById("city").value.toLowerCase();
    obj.city = city;
    let mob = document.getElementById("mob").value;
    obj.mob = mob;
    let amDeliveryOption = document.getElementById("amDeliveryOption").value;
    obj.amDeliveryOption = amDeliveryOption;
    let cardNumber = document.getElementById("cardNumber").value;
    checkValidcardNumber(cardNumber);
    let cardName = document.getElementById("cardName").value.toLowerCase();
    checkValidName(cardName);
    let expMonth = document.getElementById("expMonth").value;
    checkValidexpMonth(expMonth);
    let expYrs = document.getElementById("expYrs").value;
    checkValidexpYrs(expYrs);
    let cvv = document.getElementById("cvv").value;
    checkValidcvv(cvv);
    let amPaymentOption = document.getElementById("amPaymentOption").value;
    obj.amPaymentOption = amPaymentOption;
    if (UserValid == 5) {
      checkOutDetails.push(obj);
      localStorage.setItem("chekOutDetails", JSON.stringify(checkOutDetails));
      window.location.href = "./OTP.html";
    }
  }
  //Check Card Name
  function checkValidName(val) {
    let valid = false;
    cardData.forEach(function (elem) {
      if (val == elem.cardName) {
        valid = true;
        console.log(elem.cardName);
      }
    });
    if (valid) {
      UserValid++;
    } else {
      alert("Card name is invalid");
      document.getElementById("cardName").value = "";
    }
  }
  function checkValidcardNumber(val) {
    let valid = false;
    cardData.forEach(function (elem) {
      if (val == elem.cardNumber) {
        valid = true;
        console.log(elem.cardNumber);
      }
    });
    if (valid) {
      UserValid++;
    } else {
      alert("Card number is invalid");
      document.getElementById("cardNumber").value = "";
    }
  }
  function checkValidexpMonth(val) {
    let valid = false;
    cardData.forEach(function (elem) {
      if (val == elem.expMonth) {
        valid = true;
        console.log(elem.expMonth);
      }
    });
    if (valid) {
      UserValid++;
    } else {
      alert("Expiry month is invalid");
      document.getElementById("expMonth").value = "";
    }
  }

  function checkValidexpYrs(val) {
    let valid = false;
    cardData.forEach(function (elem) {
      if (val == elem.expYrs) {
        valid = true;
        console.log(elem.expYrs);
      }
    });
    if (valid) {
      UserValid++;
    } else {
      alert("Expiry year is invalid");
      document.getElementById("expYrs").value = "";
    }
  }
  function checkValidcvv(val) {
    let valid = false;
    cardData.forEach(function (elem) {
      if (val == elem.cvv) {
        valid = true;
        console.log(elem.cvv);
      }
    });
    if (valid) {
      UserValid++;
    } else {
      alert("cvv is invalid");
      document.getElementById("cvv").value = "";
    }
  }
} else {
  alert("You are not sign in");
  window.location.href = "./sign_up.html";
}
