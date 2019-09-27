function onClickBigCircle(event) {
    let delay = 0;
    let smallCircle = document.getElementById('small_circle');
    let date = new Date();
    let seconds = date.getSeconds();
    console.log(seconds)

    var clickTimer = setInterval(btnTimer, 1000);
    // console.log(clickTimer)

    function btnTimer() {
        let date = new Date()
        btnSeconds = date.getSeconds();
        console.log(btnSeconds)
    }
    delay = clickTimer - seconds;

    if (delay >= 2) {
        for (let i = 0; i < 5; i++) {
            smallCircle.style.animationName = 'example';
        }

    } else {
        smallCircle.style.backgroundColor = 'black';
    }

    bigCircle = document.getElementById('big_circle')
    if (bigCircle.style.backgroundColor == 'black') {
        bigCircle.style.backgroundColor = 'orange';
    } else if (bigCircle.style.backgroundColor == 'orange') {
        bigCircle.style.backgroundColor = 'yellow';
    } else {
        bigCircle.style.backgroundColor = 'black';
    }
}