let url = './data.json';
let json;
let card_product = document.querySelector(".card_product");
let response = await fetch(url);

if (response.ok){
    json = await response.json();
    console.log(json);
} else {
    alert("Ошибка HTTP:" + response.status)
}

for (let card of json){
    card_product.innerHTML += `
    <div class="card">
        <div><img class="card_img" src="images/${card.image}" alt=""></div>
        <div><a class="card_title" href="#">${card.name}</a></div>
        <p class="card_price">${card.price} ₽</p>
        <button class="card_button">В корзину</button>
    </div>
    `;
}