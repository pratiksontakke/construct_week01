  // Cart Data should be retrived and append to tbody
  let left_cart = document.querySelector(".NASleft-cart-total");
  let tbody  = document.querySelector('tbody');
  let total_price;

  let cart = JSON.parse(localStorage.getItem("addToCartData")) || [];
   displayCart(cart);
   function displayCart(data){
          tbody.innerText = "";
        data.forEach(function(el, index){
                let tr = document.createElement("tr");

                let td1 = document.createElement('td');
                let img = document.createElement('img');
                img.setAttribute('src', el.imgLink);
                let name = document.createElement('p');
                name.innerText = el.name;
                td1.append(img, name);

                let td2 = document.createElement("td");
                td2.innerText = "$"+el.price;
                td2.style.fontWeight = 'bold';
                    
                    // Quantity
                let td3 = document.createElement('td');
                let left = document.createElement('button');
                left.innerText = "-";
                left.setAttribute('class', 'NASquantity');
                left.style.marginRight = '10px';
                left.addEventListener('click', function(){
                     reduceQuantity(el, index);
                })
                let quantity = document.createElement('span');
                    quantity.innerText = el.quantity;
                let right = document.createElement('button');
                right.innerText = "+";
                right.setAttribute('class', 'NASquantity');
                right.style.marginLeft = '10px';
                right.addEventListener('click', function(){
                    increaseQuantity(el, index);
               })
                td3.append(left, quantity, right);

                // total price of product
                let td4 = document.createElement("td");
                td4.innerText = "$"+(el.price * el.quantity);
                td4.style.fontWeight = 'bold';

                // Remove a product
                let td5 = document.createElement('td');
                let button = document.createElement('button');
                button.innerText = 'X';
                button.setAttribute('class', 'NASquantity');
                button.style.borderRadius = '50%';
                td5.append(button)
                td5.addEventListener('click', function(){
                        removeProduct(el, index);
                })

                tr.append(td1, td2,td3, td4, td5);
                tbody.append(tr)

            })
            // total  of sub total after
            totalPrice(data);



            // Saving 
              totalSavings();

            // total price notification   1. free delivery 2. gifts
              totalPrice_freeDelivery();
              totalPrice_gifts();

   }

   function removeProduct(data, index){
          // remove the product from cart;
         
         cart = JSON.parse(localStorage.getItem("addToCartData")) || [];
         console.log(cart, index)
         cart.splice(index, 1);
         localStorage.setItem("addToCartData", JSON.stringify(cart));
         console.log(cart)
         displayCart(cart);
   }

   function reduceQuantity(data, index){ 
         // quantity will reduce of particular product in cart

         cart = JSON.parse(localStorage.getItem("addToCartData")) || [];
         let quantity = cart[index].quantity;

          quantity = quantity -1;

          if(quantity == 0){
            return;
          }

          cart[index].quantity  = quantity;
          localStorage.setItem("addToCartData", JSON.stringify(cart));
         console.log(data, index);

         //display data again on cart
         displayCart(cart);

   }

   function increaseQuantity(data, index){
                  // quantity will increase of particular product in cart

         cart = JSON.parse(localStorage.getItem("addToCartData")) || [];
         let quantity = cart[index].quantity;

          quantity = quantity + 1;
          cart[index].quantity  = quantity;
          localStorage.setItem("addToCartData", JSON.stringify(cart));
         console.log(data, index);
         // dispaly data again on cart 
         displayCart(cart);
   }

   function totalPrice(data){
       
         total_price = data.reduce(function(pre, el){
                return   pre+(el.price *el.quantity);
        }, 0);

          // if cart-total is there than make it empty
        if(document.querySelector('#NAScart-total')){
            document.querySelector('#NAScart-total').parentNode.remove();
        }
        // append this total price below in cart
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        let hr = document.createElement('hr');
        let hr1 = document.createElement('hr');

        let cart_total = document.createElement('p');
        cart_total.innerText = 'Cart Subtotal:';
        let price = document.createElement('p');
        price.innerText = "$"+total_price;

        div.append(cart_total, price);
        div.setAttribute('id', 'NAScart-total');
        div1.append(hr,div, hr1);
        left_cart.append(div1);
   }


   function totalSavings(){
          // total saving should be calculated and it should be showed below Cart total


          // apply coupan code here
        
          if(document.querySelector('#total-savings')){
               document.querySelector("#total-savings").remove();
          }

          let div = document.createElement('div');
          div.setAttribute('id',  'total-savings')
          let h1 = document.createElement('h1');
          h1.innerText = 'Total Savings:'
          let p = document.createElement('p');
          p.setAttribute('id', 'NASsavings')
        

          let form = document.createElement('form');
          form.setAttribute('id', 'form');
          let input = document.createElement('input')
          input.setAttribute('id', 'NAScoupon');
          input.setAttribute('placeholder', 'Got a Coupon Code? Enter Here.')
          let button = document.createElement('button');
          button.setAttribute('type', 'submit');
          button.innerText = 'ADD';
          form.append(input, button);
          div.append(h1, p, form);
          form.addEventListener('submit', couponSubmited);

          left_cart.append(div);
   }

   function couponSubmited(){
         event.preventDefault();
        let saving = document.querySelector('#NASsavings');
        saving.innerText = "";
        let input_value = document.getElementById('NAScoupon').value;
        if(input_value== 'Masai30' || input_value == 'masai30'){
        saving.append('25% is off on Every Product');
        }
   }

     document.querySelector('#NASgifts-click').addEventListener('click', collapseGifts);

   //   collapse of Gift carts 
   function collapseGifts(){
    let display =   document.getElementById('NASgifts').style.display;
    
    if(display == 'none'){
          document.getElementById('NASgifts').style.display = 'block';
          document.getElementById('NASgift-line').style.display = 'block';
          document.getElementById('NASqualified').style.display = 'block';

    }else{
          document.getElementById('NASgifts').style.display = 'none';
          document.getElementById('NASgift-line').style.display = 'none';
          document.getElementById('NASqualified').style.display = 'none';
    }

   }


   function totalPrice_freeDelivery(){
          if(document.getElementById('NASdelivery')){
            document.getElementById('NASdelivery').remove();
          }
         if(total_price  < 50){
              
                let div = document.createElement('div');
                 div.setAttribute('id', 'NASdelivery');
                let img = document.createElement('img');
                img.setAttribute('src', 'https://www.citypng.com/public/uploads/preview/blue-and-white-round-flat-bell-icon-free-png-11638983856xnczcwyace.png');
                let span = document.createElement('span');
                span.innerText  = `Spend another $${(50-total_price)} and receive FREE US tracked delivery!`;
                div.append(img, span);
                document.querySelector('.NASnotifications').append(div);
         }
   }

   function totalPrice_gifts(){
    if(document.getElementById('NASdelivery')){
      document.getElementById('NASdelivery').remove();
    }
    if(total_price >= 130){
            let div = document.createElement('div');
            div.setAttribute('id', 'NASdelivery');
            div.style.backgroundColor= 'green';
            div.style.display = 'block';
          let img = document.createElement('img');
          img.setAttribute('src', 'https://www.citypng.com/public/uploads/preview/blue-and-white-round-flat-bell-icon-free-png-11638983856xnczcwyace.png');
          let p = document.createElement('p');
          p.innerText  = `You have qualified for: Select a gift for you or someone you love when you spend $130 or more
          Don't forget to make your selection below`;
          p.style.display = 'inline'
          div.append(img, p);
          document.querySelector('.NASnotifications').append(div);
    }
   }