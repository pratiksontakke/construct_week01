// it's pratik
let prsweekOfferData = [
    {
        imgLink: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13222912-3854900555458981.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    },
     {
        imgLink: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13222912-3854900555458981.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }, {
        imgLink: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13222912-3854900555458981.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }, {
        imgLink: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13222912-3854900555458981.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }, {
        imgLink: "https://static.thcdn.com/images/xsmall/webp//productimg/original/13222912-3854900555458981.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }

]

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
        button2.addEventListener("click", function (elem, index) {
            // addToCart(elem, index);
        })
        button2.innerText = "Add to Cart";
        a.append(div1, h3, button1, div2, button2);
        document.querySelector("#prsweekOffer").append(a);
    })
}
let prsBuyingNowData = [
    {
        imgLink: "https://static.thcdn.com/images/small/webp//productimg/480/480/13645148-2094934999114430.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    },
     {
        imgLink: "https://static.thcdn.com/images/small/webp//productimg/480/480/13874713-1244963832365050.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }, {
        imgLink: "https://static.thcdn.com/images/small/webp//productimg/480/480/12358556-1974888087906815.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }, {
        imgLink: "https://static.thcdn.com/images/small/webp//productimg/480/480/11814869-9924866362390772.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }

]
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
        button1.addEventListener("click", function (elem, index) {
            // addToCart(elem, index);
        })
        a.append(div1, h3, div2, button1);
        document.querySelector("#prsBuyingNow").append(a);
    })
}

let prsTrendingNowRightData = [
    {
        imgLink: "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11995335-1374635651521394.jpg",
        name: "PCA SKIN Everyday Essentials RegimenPCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    },
     {
        imgLink: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11801869-1044895693263260.jpg",
        name: "PCA SKIN Everyday Essentials Regimen",
        offer: "$40 PCA Skin Gift",
        MSRP: 225,
        price: 163
    }
]

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
        button2.addEventListener("click", function (elem, index) {
            // addToCart(elem, index);
        })
        button2.innerText = "Add to Cart";
        a.append(div1, h3, button1, div2, button2);
        document.querySelector("#prsTrendingNowRight").append(a);
    })
}
let prsTrendingOffersData = [
    {
        imgLink: "https://static.thcdn.com/images/small/webp/widgets/121-us/39/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot17-600x600-053341-095839.jpg",
        name: "SkinCeuticals Gift",
        p: "Receive a Discoloration Defense 2ml (Free Gift) when you spend $150 or more on the brand.",
        MSRP: 225,
        price: 163
    }
]

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
        p1.innerHTML = elem.p;
        div2.append(h3, p1);
        let div3 = document.createElement("div");
        let button1 = document.createElement("button");
        button1.innerText = "SHOP NOW";
        button1.addEventListener("click", function (elem, index) {
            // shopNow(elem, index);
        })
        div3.append(button1)
        a.append(div1, div2, button1);
        document.querySelector("#prsTrendingOffers").append(a);
    })
}

// pratik end