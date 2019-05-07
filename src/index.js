/*
- Create an element
- Set innerHTML, set styling
- appendChild to body of site
*/


window.onload = function () {

    var elevator = new Elevator({
        element: document.querySelector('.elevator-button'),
        mainAudio: './audio/roltrap.mp3',
        endAudio: './audio/ding.mp3',
        duration: 130000
    })
}

function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight)
}



