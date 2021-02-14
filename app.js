let dateBase = [ {
    "section": "квіти",
    "group": "троянди",
    "id": 2899838,
    "name": "Троянда",
    "sort": "Pomponella",
    "color": "рожевий",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "квіти",
    "group": "троянди",
    "id": 8867899,
    "name": "Троянда",
    "sort": "Gloria Dei",
    "color": "жовтий",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "квіти",
    "group": "троянди",
    "id": 1390038,
    "name": "Троянда",
    "sort": "Super Star",
    "color": "кораловий",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "квіти",
    "group": "хризантеми",
    "id": 5846268,
    "name": "Xризантема",
    "sort": "Flammenshtal",
    "color": "жовто-коричневий",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "квіти",
    "group": "xризантеми",
    "id": 8839378,
    "name": "Xризантема",
    "sort": "Nordshtern",
    "color": "білий",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "букети",
    "group": "букет",
    "id": 3888878,
    "name": "Назва букету",
    "sort": "",
    "color": "",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "букети",
    "group": "кошик із квітами",
    "id": 2849378,
    "name": "Назва букету",
    "sort": "",
    "color": "",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "букети",
    "group": "квіти у коробці",
    "id": 5877432,
    "name": "Назва букету",
    "sort": "",
    "color": "",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "послуги флориста",
    "group": "оформлення теметичного букету",
    "id": 5889008,
    "name": "Назва букету",
    "sort": "",
    "color": "",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
},
{
    "section": "кімнатні рослини",
    "group": "кактуси",
    "id": 5889008,
    "name": "Кактус",
    "sort": "цереус",
    "color": "зелений",
    "price": "XX,XX",
    "img": "",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cum quisquam nihil commodi quis aliquam nesciunt excepturi possimus, error rerum."
}
]



const render = data => {
    let outputHtml = "";
    for(let i in data) {
        let card = data[i];
        outputHtml += `<div class="card mb-3">
                            <div class="row">
                                <div class="card-text col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">${card.name}</h5>
                                        <p class="card-text">Сорт:
                                            <span class="sort variable">${card.sort}</span>
                                        </p>
                                        <p class="card-text">Колір:
                                            <span class="color variable">${card.color}</span>
                                        </p>
                                        <p class="card-text">Опис:
                                            <span class="discription variable">${card.description}</span>
                                        </p>
                                        <p class="card-text">
                                            <small class="product-code text-muted variable">${card.id}</small>
                                        </p>
                                        <div class="card-last-line">
                                            <p class="card-text">
                                                <span class="price variable">${card.price}</span> грн/шт
                                            </p>
                                            <button  class="add-to-cart button" type="button">
                                                <img class="icons" src="./images/shopping-cart-icon.png" alt="cart-icon">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-image-wrapper col-md-6">
                                    <img class="card-image" src="./images/card-image.png" alt="${card.name}">
                                    <span class="card-image-text"> 220 * 250 </span>
                                </div>
                            </div>
                        </div>`
    }
    return $(".card-wrapper").html(outputHtml);
}
render(dateBase);


$('.search-button').focus(() => $('.search-input').toggle('.hidden'));

$('.cart-button').focus(() => $('.cart-window').toggle('.hidden'));


let cartList = document.querySelector('.cart-list');


const createListItem = function() {
    let listItem = document.createElement('li');
    listItem.className = 'cart-list-item';
    return listItem;
}

let cart = [];
let addBtn = document.querySelectorAll('.add-to-cart');

for (let i in addBtn) { 
    let item = addBtn[i];
    item.onclick = function () { 
        this.disabled = true;
        let listItem = createListItem();
        cartList.append(listItem);
        let cardBody = this.parentElement.parentElement;
        let cartItem = {
            title: cardBody.querySelector('.card-title').textContent,
            id: cardBody.querySelector('.product-code').textContent,
            price: cardBody.querySelector('.price').textContent,
            count: 1
        }
        listItem.innerHTML = `${cartItem.title} ${cartItem.id} ${cartItem.price} 
                              <button type="button" class="cart-btn plus">+</button>
                              <span class="count">${cartItem.count}</span>
                              <button type="button" class="cart-btn minus">-</button>`;
        cart.push(cartItem);
        return listItem;
    }
}



