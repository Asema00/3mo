const miniBox = document.querySelector('.miniBox')
let positionLeft = 0;
let positionTop = 0;
let positionLeftEnd = 260;
let positionTopEnd = 260;

const moveBox = () => {
    if (positionLeft <=260 ){
        positionLeft +=15;
        miniBox.style.left = `${positionLeft}px`
        setTimeout(moveBox,20)

} else if (positionTop <=260 ){
    positionTop +=15;
    miniBox.style.top = `${positionTop}px`
    setTimeout(moveBox,20)

}else if (positionLeftEnd >10 ){
        positionLeftEnd -=20;
        miniBox.style.left = `${positionLeftEnd}px`
        setTimeout(moveBox,20)

}else if (positionTopEnd >10 ){
        positionTopEnd -=20;
        miniBox.style.top = `${positionTopEnd}px`
        setTimeout(moveBox,20)

}else {
         positionLeft = 0;
         positionTop = 0;
         positionLeftEnd = 260;
         positionTopEnd = 260;
        moveBox()
    }
}
moveBox()

//2-домашнее задание

let counterValue = 0;
let intervalId = null;

function startCounter() {
    intervalId = setInterval(incrementCounter, 1000);
}

function incrementCounter() {
    counterValue++;
    document.getElementById('counter').innerText = counterValue;
}

function stopCounter() {
    clearInterval(intervalId);
}

function resumeCounter() {
    startCounter();
}

function clearCounter() {
    counterValue = 0;
    document.getElementById('counter').innerText = counterValue;
    stopCounter();
}

document.getElementById('startBtn').addEventListener('click', startCounter);
document.getElementById('stopBtn').addEventListener('click', stopCounter);
document.getElementById('resumeBtn').addEventListener('click', resumeCounter);
document.getElementById('clearBtn').addEventListener('click', clearCounter);
