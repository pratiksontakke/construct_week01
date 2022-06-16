// it's pratik

import { prsTrendingOffersData, prsweekOfferData, prsBuyingNowData, prsTrendingNowRightData } from '../js/data.js';
let addToCartData = JSON.parse(localStorage.getItem("addToCartData")) || [];

prsweekOfferDiaplay (prsweekOfferData);

function prsweekOfferDiaplay (prsweekOfferData) {
    document.querySelector("#prsweekOffer").innerHTML = "";
    prsweekOfferData.forEach(function (elem, index) {
        let a = document.createElement("a");

        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imgLink);
        img.setAttribute("alt", elem.name);
        div1.append(img);

        let h3 = document.createElement("h3");
        h3.innerText = elem.name.substring(0,30)+"...";

        let button1 = document.createElement("button");
        button1.innerText = elem.offer;

        let div2 = document.createElement("div");
        let p1 = document.createElement("p");
        let span1 = document.createElement("span");
        p1.innerHTML = "MSRP: $";
        span1.innerText = elem.MSRP;
        p1.append(span1);

        let p2 = document.createElement("p");
        let span2 = document.createElement("span")
        p2.innerHTML = "$";
        span2.innerText = elem.price;
        p2.append(span2);

        div2.append(p1,p2);

        let button2 = document.createElement("button");
        button2.addEventListener("click", function () {
            addToCart(elem, index);
        })
        button2.innerText = "Add to Cart";
        a.append(div1, h3, button1, div2, button2);
        document.querySelector("#prsweekOffer").append(a);
    })
}

prsBuyingNowDiaplay(prsBuyingNowData);
function prsBuyingNowDiaplay(prsBuyingNowData) {
    document.querySelector("#prsBuyingNow").innerHTML = "";
    prsBuyingNowData.forEach(function (elem, index) {
        let a = document.createElement("a");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imgLink);
        img.setAttribute("alt", elem.name);
        div1.append(img);

        let h3 = document.createElement("h3");
        h3.innerText = elem.name.substring(0,35)+"...";

        let div2 = document.createElement("div");

        let p1 = document.createElement("p");
        let span1 = document.createElement("span")
        p1.innerHTML = "$";
        span1.innerText = elem.price;
        p1.append(span1);

        div2.append(p1);

        let button1 = document.createElement("button");
        button1.innerText = "Add to Cart";
        button1.addEventListener("click", function () {
            addToCart(elem, index);
        })
        a.append(div1, h3, div2, button1);
        document.querySelector("#prsBuyingNow").append(a);
    })
}



prsTrendingNowRightDiaplay (prsTrendingNowRightData);

function prsTrendingNowRightDiaplay (prsTrendingNowRightData) {
    document.querySelector("#prsTrendingNowRight").innerHTML = "";
    prsTrendingNowRightData.forEach(function (elem, index) {
        let a = document.createElement("a");

        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imgLink);
        img.setAttribute("alt", elem.name);
        div1.append(img);

        let h3 = document.createElement("h3");
        h3.innerText = elem.name.substring(0,35)+"...";

        let button1 = document.createElement("button");
        button1.innerText = elem.offer;

        let div2 = document.createElement("div");
        let p1 = document.createElement("p");
        let span1 = document.createElement("span");
        p1.innerHTML = "MSRP: $";
        span1.innerText = elem.MSRP;
        p1.append(span1);

        let p2 = document.createElement("p");
        let span2 = document.createElement("span")
        p2.innerHTML = "$";
        span2.innerText = elem.price;
        p2.append(span2);

        div2.append(p1,p2);

        let button2 = document.createElement("button");
        button2.addEventListener("click", function () {
            addToCart(elem, index);
        })
        button2.innerText = "Add to Cart";
        a.append(div1, h3, button1, div2, button2);
        document.querySelector("#prsTrendingNowRight").append(a);
    })
}
prsTrendingOffersDiaplay(prsTrendingOffersData);
function prsTrendingOffersDiaplay(prsTrendingOffersData) {
    document.querySelector("#prsTrendingOffers").innerHTML = "";
    prsTrendingOffersData.forEach(function (elem, index) {
        let a = document.createElement("a");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.imgLink);
        img.setAttribute("alt", elem.name);
        div1.append(img);

        let div2 = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = elem.name.substring(0,35);

        let p1 = document.createElement("p");
        p1.innerHTML = elem.p.substring(0,100)+"...";;
        
        let div3 = document.createElement("div");
        let button1 = document.createElement("button");
        button1.innerText = "SHOP NOW";
        button1.addEventListener("click", function () {
            // shopNow(elem, index);
        })
        div3.append(button1)
        div2.append(h3, p1, div3);
        a.append(div1, div2);
        document.querySelector("#prsTrendingOffers").append(a);
    })
}
function addToCart (elem, index) {
    elem.quantity = 1;
    addToCartData.push(elem)
    localStorage.setItem("addToCartData", JSON.stringify(addToCartData));
    console.log(addToCartData);
}
// pratik end