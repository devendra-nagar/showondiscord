//login page
let login = document.querySelector("#login");
let loginpage = document.querySelector(".login-page");
let loginelem = document.querySelector(".login-elem");
let loginsignup = document.querySelector(".login h3");
let verifybtn = document.querySelector("#verifyotp");
let inputotp = document.querySelector("#input-otp");
let otpwrapper = document.querySelector("#otp-wrapper")
let closeBtn = document.querySelector(".close-btn");
let generateotp = document.querySelector("#generateotp");
let mainotp;
login.addEventListener("click", function () {
    loginpage.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
    loginpage.style.display = "none";
});
generateotp.addEventListener("click", function () {
    mainotp = Math.trunc(Math.random() * 9000) + 1000;
    alert("otp is " + mainotp);
    otpwrapper.style.display = "block";
    generateotp.style.display = "none";
    verifybtn.style.display = "block";
});
verifybtn.addEventListener("click", function () {
    let userotp = Number(inputotp.value);
    if (mainotp === userotp) {
        alert("verified");
        loginelem.style.display = "none";
        loginsignup.textContent = "verified";
    }
    else {
        alert("wrong otp");
        generateotp.style.display = "block";
        generateotp.innerText = "retry otp";
        verifybtn.style.display = "none";
        inputotp.value = "";
    }
});
//cart page
let cartbuttons = document.querySelectorAll(".add-to-cart");
let cartcount = document.querySelector("#cart-count");
let cartclose = document.querySelector("#cart-close");
let cartpage = document.querySelector(".cart-page");
let cart = document.querySelector("#cart");
let cartitems = document.querySelector(".cart-items");

let count = 0;
cartbuttons.forEach(function (button) {
    button.addEventListener("click", function () {
        count++;
        cartcount.innerText = count;
        button.innerText = `added item in cart`;
        let product = button.closest(".product");
        

        let image = product.querySelector("img").src;
        let name = product.querySelector(".product-dets h5").innerHTML;
        let price = product.querySelector(".price h5").innerHTML;
        let cartitem = document.createElement("div");
        cartitem.classList.add("cart-item");
        cartitem.innerHTML = `
        <img src="${image}" alt="product"> 
        <div>
            <h4>${name}</h4>
            <p>${price}</p>
        </div>

        <button class="remove-item">Remove</button>       
        `
        cartitems.appendChild(cartitem);

    });
});
cart.addEventListener("click", function(){
    cartpage.style.display = "flex"; 
});
cartclose.addEventListener("click", function(){
    cartpage.style.display = "none"; 
});




