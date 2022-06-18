  // Cart Data should be retrived and append to tbody
  let left_cart = document.querySelector(".NASleft-cart-total");
  let tbody  = document.querySelector('tbody');
  let total_price;
  let selectRatio = '0/1';
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
                td2.style.fontWeight = 'bold';

                let td3 = document.createElement('td');

                let td4 = document.createElement("td");
                td4.style.fontWeight = 'bold';
                 // if price of product is zero then  it is a free product
                if(el.price !=  0){
                  td2.innerText = "$"+el.price;

                  // Quantity
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
                td4.innerText = "$"+(el.price * el.quantity);


                }else{
                  td2.innerText = " ";
                  td3.innerText = " ";
                  td4.innerText = el.MSRP;
                  selectRatio = '1/1';
                }
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
              gifts_qualification();

   }

   function removeProduct(data, index){
          // remove the product from cart;
         
        
         cart = JSON.parse(localStorage.getItem("addToCartData")) || [];
         cart.splice(index, 1);
         localStorage.setItem("addToCartData", JSON.stringify(cart));
        
         if(data.price == 0){
             selectRatio = '0/1';
         }
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
        let b = document.createElement('b');
        b.innerText = "-$"+(total_price *.3);
        b.style.padding = '0px 30px';
        saving.innerText = "";
        let input_value = document.getElementById('NAScoupon').value;
        if(input_value== 'Masai30' || input_value == 'masai30'){
        saving.append('30% is off on Every Product', b);
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
          document.querySelector('#NASgifts-click').children[0].setAttribute('class', 'fa fa-angle-down')

    }else{
          document.getElementById('NASgifts').style.display = 'none';
          document.getElementById('NASgift-line').style.display = 'none';
          document.getElementById('NASqualified').style.display = 'none';
          document.querySelector('#NASgifts-click').children[0].setAttribute('class', 'fa fa-angle-up')
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
   
    if(total_price >= 130){
      if(document.getElementById('NASdelivery')){
        document.getElementById('NASdelivery').remove();
      }
            let div = document.createElement('div');
            div.setAttribute('id', 'NASdelivery');
            div.style.backgroundColor= '#c5e7c5';
          let img = document.createElement('img');
          img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCf-8YnNG8UbVsxsEdNRyD1DQrcQM4SgzxEZtnFw0rVoKnm285FpR_z6WAbayEOdYm4o&usqp=CAU');
          let p = document.createElement('p');
          p.innerText  = "You have qualified for: Select a gift for you or someone you love when you spend $130 or more Don't forget to make your selection below";
          p.style.display = 'inline'
          div.append(img, p);
          document.querySelector('.NASnotifications').append(div);
    }
   }

   function gifts_qualification(){
         
        let qualify = document.querySelector('#NASqualified');
        if(qualify){
            qualify.innerText = "";
        }
        if(total_price < 130){
        let div = document.createElement('div');
        let p  = document.createElement('p');
        p.innerText = 'Spend $130.00 or more to qualify';
        let p1 = document.createElement('p');
        p1.innerText  = `$${130- total_price} to go`;
        p1.style.fontWeight = 'bold';

        // progress bar to page
        let img = document.createElement('img');
        img.setAttribute('src', 'https://as1.ftcdn.net/v2/jpg/03/66/39/06/1000_F_366390643_7nFXBxGB1YUHOdhNAxOkEJoovjNUWYLU.jpg');
        img.style.width = '40px';
        img.style.borderRadius ='50%';
        img.style.marginLeft = '10px';
        let div0 = document.createElement('div');
        div0.style.display = 'flex';
        div0.style.justifyContent = 'space-between';
        div0.style.alignItems = 'center';
        div1 = document.createElement('div');
        div1.style.backgroundColor = 'white';
        div1.style.height = '10px';
        div1.style.flexGrow = '1';
        div2 = document.createElement('div');
        div2.style.backgroundColor = 'black';
        div2.style.width = `${Math.floor((total_price/130)*100)}%`;
        div2.style.height = '10px';
        div1.append(div2);
        div.append(p, p1);
        div0.append(div1, img);
        qualify.append(div, div0);
        }else{
          let div = document.createElement('div');
          div.style.display = 'flex';
          div.style.alignItems = 'center';
          let h1 = document.createElement('h1');
          h1.innerText = 'Qualified';
          h1.style.color = 'green';
          let img = document.createElement('img');
          img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCf-8YnNG8UbVsxsEdNRyD1DQrcQM4SgzxEZtnFw0rVoKnm285FpR_z6WAbayEOdYm4o&usqp=CAU')
          img.style.width = '30px';
          let div1 = document.createElement('div');
          let b = document.createElement('b');
          b.innerText =  selectRatio;
          let span = document.createElement('span');
          span.innerText =  'free gift selected';
          div1.append(b, span)
          
          div.append(h1, img);
          qualify.append(div, div1);

          // assign a event listener to free gifts
         let free_gifts =  document.querySelectorAll('.NASgift-options');

         free_gifts.forEach(function(el){
                    el.addEventListener('click', gitfs_Selection);
         })
        }
   }

   function gitfs_Selection(){
           let data = event.target.parentNode.children;
           if(data.length == 3){
                      //Add data cart with price 0
              
              cart = JSON.parse(localStorage.getItem('addToCartData'));
               let isIt_present = false;
              cart.forEach(function(el){
                  if(el.price == 0){
                      el.imgLink = data[0].src;
                      el.name = data[1].innerText;
                      isIt_present = true;
                  }
              })
              if(!isIt_present){
              cart.push({
                     imgLink :  data[0].src,
                     name : data[1].innerText,
                     price: 0,
                     offer: 'save 100%',
                     quantity: 1,
                     MSRP: 'FREE'

              });
            }
            
              localStorage.setItem('addToCartData', JSON.stringify(cart));
              selectRatio = '1/1';
              displayCart(cart);
           }
           console.log(data);
   }