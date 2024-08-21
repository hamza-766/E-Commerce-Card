var root = document.getElementById("root");

var main_container = document.createElement("div");
root.appendChild(main_container);
main_container.setAttribute("class", "main_container");

var image = document.createElement("img");
image.setAttribute("src", "https://assets.teepublic.com/assets/featured_products/featured_product-kids_tee-8b72929ff6c38bd97a16f8baf3688f8f0c13032570baaa8118d9842d1f6bdf18.jpg")
main_container.appendChild(image);
image.setAttribute("class", "image_c");

var details = document.createElement("div");
main_container.appendChild(details);
details.setAttribute("class", "details");

var heading = document.createElement("heading");
var h_Text = document.createTextNode("This is my Product");
heading.appendChild(h_Text);
details.appendChild(heading);
heading.setAttribute("class", "heading");
heading.appendChild(h_Text);



var color = document.createElement("div");
var paraTag = document.createElement("p");
var para = document.createTextNode("Color");
heading.appendChild(color);
color.appendChild(paraTag);
paraTag.appendChild(para);
paraTag.setAttribute("class","color");

var all_btn =document.createElement("div")
var red_btn = document.createElement("button");
red_btn.setAttribute("class","red_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(all_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
red_btn.setAttribute("class","yellow_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
red_btn.setAttribute("class","blue_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)


var red_btn = document.createElement("button");
red_btn.setAttribute("class","green_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
red_btn.setAttribute("class","black_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
red_btn.setAttribute("class","purple_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)






var color1 = document.createElement("div");
color1.setAttribute("class","main_div_s")
var paraTag = document.createElement("p");
var para = document.createTextNode("Size");
heading.appendChild(color1);
color1.appendChild(paraTag);
paraTag.appendChild(para);
paraTag.setAttribute("class","color");



var all_btn =document.createElement("div");
all_btn.setAttribute("class","all_btn")
var red_btn = document.createElement("button");
var size_btn =document.createElement("p")
var size_btn_pera = document.createTextNode("20")
size_btn.appendChild(size_btn_pera)
red_btn.appendChild(size_btn)
all_btn.appendChild(red_btn)
red_btn.setAttribute("class","size_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(all_btn)
paraTag.appendChild(red_btn)




var red_btn = document.createElement("button");
var size_btn =document.createElement("p")
var size_btn_pera = document.createTextNode("22")
size_btn.appendChild(size_btn_pera)
red_btn.appendChild(size_btn)
red_btn.setAttribute("class","size_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
var size_btn =document.createElement("p")
var size_btn_pera = document.createTextNode("24")
size_btn.appendChild(size_btn_pera)
red_btn.appendChild(size_btn)
red_btn.setAttribute("class","size_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)


var red_btn = document.createElement("button");
var size_btn =document.createElement("p")
var size_btn_pera = document.createTextNode("26")
size_btn.appendChild(size_btn_pera)
red_btn.appendChild(size_btn)
red_btn.setAttribute("class","size_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
var size_btn =document.createElement("p")
var size_btn_pera = document.createTextNode("28")
size_btn.appendChild(size_btn_pera)
red_btn.appendChild(size_btn)
red_btn.setAttribute("class","size_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)

var red_btn = document.createElement("button");
var size_btn =document.createElement("p")
var size_btn_pera = document.createTextNode("30")
size_btn.appendChild(size_btn_pera)
red_btn.appendChild(size_btn)
red_btn.setAttribute("class","size_btn")
all_btn.appendChild(red_btn)
paraTag.appendChild(red_btn)


// var buttondiv = document.createElement("div")
// var button2 = document.createElement("button")
// button2.setAttribute("class","button2")
// buttondiv.appendChild(button2)
// main_container.appendChild(button2)
// var button2_pera = document.createElement("p")
// button2_pera.setAttribute("class", "addToCart")
// var button2_pera1 = document.createTextNode("ADD TO CART")
// button2.appendChild(button2_pera)
// button2_pera.appendChild(button2_pera1)

var buttondiv = document.createElement("div");
var button2 = document.createElement("button");
button2.setAttribute("class", "button2");
buttondiv.appendChild(button2);
main_container.appendChild(button2);
var button2_pera = document.createElement("p");
button2_pera.setAttribute("class", "addToCart");
var button2_pera1 = document.createTextNode("ADD TO CART");
button2.appendChild(button2_pera);
button2_pera.appendChild(button2_pera1);

button2.onclick = function() {
    alert("Congratulation You Have ADD TO CART!");
};













