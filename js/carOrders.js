const form = document.querySelector(".orders-form")
const key = "orders"
form.addEventListener("submit", (event) => {
    console.log(event)
    event.preventDefault()
    const input = form.querySelector("input")
    const value = input.value
    create(value)
})

function render(carName) {
    const container = document.querySelector(".orders-output")
    const card = document.createElement('div')
    const text = document.createElement('p')

    card.classList.add('order')
    text.classList.add('order-name')
    text.textContent = carName

    card.appendChild(text)
    container.appendChild(card)
}

function create(carName){
    render(carName)
    const itemStr = localStorage.getItem(key)
    let items = JSON.parse(itemStr)
    if (!items) items = []  
    items.push(carName)
    localStorage.setItem(key, JSON.stringify(items))
}

(function (){
    const itemStr = localStorage.getItem(key)
    let items = JSON.parse(itemStr)
    if (!items) items = [] 
    items.forEach(element => {
       render(element)
    });
})()