const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

//easy way:
// loveMe.addEventListener('dblclick', (e)=>{
//     console.log(123)
// })


// doing own double-click event()


let clickTime = 0
let clickCounter = 0

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0){
        clickTime = new Date().getTime()
        //test
        // console.log(clickTime)
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0

            //test
            // console.log('doubleclick')
        } else {
            clickTime = new Date().getTime()

            //test
            // console.log('new time')
        }
    }
})

const createHeart = (event) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = event.clientX
    const y = event.clientY
    //console.log(x, y)

    // creating the working area with offset, for better usability

    const leftOffset = event.target.offsetLeft
    const topOffset = event.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
    times.innerHTML = ++clickCounter

    // removing the temporary 'i's :
    setTimeout(() => heart.remove(), 1000)

    // console.log(xInside, yInside)
    
}