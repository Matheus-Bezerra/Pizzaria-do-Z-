let modalQt

const el = (el) => document.querySelector(el)
const els = (el) => document.querySelectorAll(el)

// listagens das pizzas
pizzaJson.map((pizza, index) => {
    let pizzaItem = el('.models .pizza-item').cloneNode(true)
    modalQt = 1
    // preencher as informações em pizzaItem na main da página

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description
    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault()

        // info da modal
        let key = event.target.closest('.pizza-item').getAttribute('data-key')

        el('.pizzaBig img').src = pizzaJson[key].img
        el('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        el('.pizzaInfo--desc').innerHTML = pizzaJson[key].description
        el('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`
        el('.pizzaInfo--size.selected').classList.remove('selected')
        els('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex]
        })

        el('.pizzaInfo--qt').innerHTML = modalQt


        // modal
        el('.pizzaWindowArea').style.opacity = 0
        el('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
        el('.pizzaWindowArea').style.opacity = 1
        }, 200)
    })

    el('.pizza-area').append(pizzaItem)
})

// Eventos do MODAL
function closeModal() {
    el('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        el('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

els('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})