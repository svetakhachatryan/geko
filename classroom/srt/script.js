document.addEventListener("mousemove", (event) => {
    const x = event.clientX
    const y = event.clientY
    const heart = document.createElement("div")
    heart.className = "heart"
    heart.textContent = "♥"
    heart.style.left = `${x}px`
    heart.style.top = `${y}px`
    document.body.prepend(heart)
    const timer = setTimeout(() => {
        heart.remove()
        clearTimeout(timer)
    }, 1990);
})