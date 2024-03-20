const button = document.querySelector(".button-fetch")
button.addEventListener("click", ()=> {
    a(50)
})

function render({userId, id, title, body}) {
    const container = document.querySelector(".blog")
    const post = document.createElement('div')
    const postHeader = document.createElement('div')
    const postBody = document.createElement('div')
    const postTitle = document.createElement('h3')
    const userId1 = document.createElement('h6')
    const strongUserId = document.createElement('strong')
    const postId = document.createElement('h6')
    const strongPostId = document.createElement('strong')
    const postText = document.createElement('p')

    post.classList.add('post')
    postHeader.classList.add('post-header')
    postBody.classList.add('post-body')
    postTitle.textContent = title
    postId.textContent = id
    userId1.textContent = userId    
    postText.textContent = body

    postId.appendChild(strongPostId)
    userId1.appendChild(strongUserId)
    postBody.appendChild(postText)
    postBody.appendChild(userId1)
    postBody.appendChild(postId)
    postHeader.appendChild(postTitle)
    post.appendChild(postHeader)
    post.appendChild(postBody)
    container.appendChild(post)
}

function error(errorText){
    console.log(errorText);
    const main = document.querySelector("main")
    const errorCard = document.createElement('div')
    const text = document.createElement('span')
    const downText = document.createElement('span')

    errorCard.classList.add('error-card')
    text.classList.add('error-text')
    text.textContent = "Ошибка"
    downText.textContent = errorText

    errorCard.appendChild(text)
    errorCard.appendChild(downText)
    main.appendChild(errorCard)
}

function a(limits){
    const spinGif = document.querySelector(".spin-gif")
    spinGif.classList.remove("hide")
    fetch(`https://jsonplaceholder.typicod.com/posts?_limits=${limits}`)
      .then(response => response.json())
      .then(json =>{
        json.forEach(element => {
            render(element)
        });
      })
      .catch((e)=> {
        error(e)
      })
      .finally(()=>{
        spinGif.classList.add("hide")
      })
}

(function (){
    a(100)
})()
