const el = (el) => document.querySelector(el)
const els = (el) => document.querySelectorAll(el)

pizzaJson.map((pizza, index) => {
    let pizzaItem = el('.models .pizza-item').cloneNode(true)
    // preencher as informações em pizzaItem

    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description
    pizzaItem.querySelector('a').addEventListener('click', (event) => {
        event.preventDefault()
        let key = event.target.closest('.pizza-item').getAttribute('data-key')

        el('.pizzaBig img').src = pizzaJson[key].img
        el('.pizzaInfo h1').innerHTML = pizzaJson[key].name
        el('.pizzaInfo--desc').innerHTML = pizzaJson[key].description

        
        el('.pizzaWindowArea').style.opacity = 0
        el('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
        el('.pizzaWindowArea').style.opacity = 1
        }, 200)
    })

    el('.pizza-area').append(pizzaItem)
})