let cart=[];

function addToCart(name,price){
  cart.push({name,price});
  alert(name+" ajouté au panier !");
}

function displayCart(){
  let list=document.getElementById("cartItems");
  let total=0;
  cart.forEach(item=>{
    list.innerHTML+=`<p>${item.name} - $${item.price}</p>`;
    total+=item.price;
  });
  document.getElementById("total").innerText="$"+total;
}
