  // Cart Data should be retrived and append to tbody
  let left_cart = document.querySelector(".left-cart");
  let tbody  = document.querySelector('tbody');

  let cart = JSON.parse(localStorage.getItem('salePageData')) || [];
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



   }

   function removeProduct(data, index){
          // remove the product from cart;
         
         cart = JSON.parse(localStorage.getItem('salePageData')) || [];
         console.log(cart, index)
         cart.splice(index, 1);
         localStorage.setItem('salePageData', JSON.stringify(cart));
         console.log(cart)
         displayCart(cart);
   }

   function reduceQuantity(data, index){ 
         // quantity will reduce of particular product in cart

         cart = JSON.parse(localStorage.getItem('salePageData')) || [];
         let quantity = cart[index].quantity;

          quantity = quantity -1;

          if(quantity == 0){
            return   removeProduct(data, index);
          }

          cart[index].quantity  = quantity;
          localStorage.setItem('salePageData', JSON.stringify(cart));
         console.log(data, index);

         //display data again on cart
         displayCart(cart);

   }

   function increaseQuantity(data, index){
                  // quantity will increase of particular product in cart

         cart = JSON.parse(localStorage.getItem('salePageData')) || [];
         let quantity = cart[index].quantity;

          quantity = quantity + 1;
          cart[index].quantity  = quantity;
          localStorage.setItem('salePageData', JSON.stringify(cart));
         console.log(data, index);
         // dispaly data again on cart 
         displayCart(cart);
   }

   function totalPrice(data){
       
        let total_price = data.reduce(function(pre, el){
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
        
          if(document.querySelector('#total-savings')){
               document.querySelector("#total-savings").remove();
          }

          let div = document.createElement('div');
          div.setAttribute('id',  'total-savings')
          let h1 = document.createElement('h1');
          h1.innerText = 'Total Savings:'
          let p = document.createElement('p');
          let b = document.createElement('b');
          b.innerText = '25% is off on'
          p.append(b);

          div.append(h1, p);

          left_cart.append(div);
   }