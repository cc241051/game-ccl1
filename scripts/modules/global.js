const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.startButton = document.getElementById('start');
global.startScreen = document.getElementById('gameStartScreen');
global.endScreen = document.getElementById('gameEndScreen');
global.restartButton = document.getElementById('restart');
global.endScore = document.getElementById('endScore');
global.scoreDisplay = document.getElementById('score');



//timers
global.timer = document.getElementById('timer');
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.roundTime = 90;
global.elapsedRoundTime = 0;

global.allGameObjects = [];
global.popups = [];
global.playerObject = {};
global.ctx.imageSmoothingEnabled = false;
global.isHoldingDrink = false;
global.score = 0;


global.getCanvasBounds = function () {
    let bounds = {
        "left": 0,
        "right": this.canvas.width,
        "top": 0,
        "bottom": this.canvas.height
    }

    return bounds;
}

global.checkCollisionWithAnyOther = function (givenObject) {
    for (let i = 0; i < global.allGameObjects.length; i++) {
        let otherObject = global.allGameObjects[i];
        if (otherObject.active == true) {
            let collisionHappened = this.detectBoxCollision(givenObject, otherObject);
            if (collisionHappened) {
                givenObject.reactToCollision(otherObject);
                otherObject.reactToCollision(givenObject);
            }
        }
    }
}

// global.detectCollisionWithCanvas = function(gameobject1){
//     let box1 = gameobject1.getBoxBounds();
//     if(box1.top<=this.canvas.)
// }

global.detectBoxCollision = function (gameObject1, gameObject2) {
    let box1 = gameObject1.getBoxBounds();
    let box2 = gameObject2.getBoxBounds();
    if (gameObject1 != gameObject2) {
        if (box1.top <= box2.bottom &&
            box1.left <= box2.right &&
            box1.bottom >= box2.top &&
            box1.right >= box2.left) {
            return true;
        }
    }
    return false;
}

// global.moneyCount = function (x, y) {
//     global.ctx.textAlign = 'left';
//     global.ctx.font = '22px sans-serif';
//     global.ctx.fillStyle = 'black';
//     global.ctx.fillText(global.score, x, y);
// }


global.displayTimer = function () {
    //🆕 Calculate remaining time without decrementing prematurely
    const remainingTime = Math.max(0, Math.ceil(global.roundTime - global.elapsedRoundTime));
    const passedTime = global.roundTime - remainingTime;
    if (passedTime < 30) {
        global.timer.innerHTML = `10:${passedTime+30} pm`;
    } else if(passedTime <40) {
        global.timer.innerHTML = `11:0${passedTime-30} pm`;
    }else if(passedTime<90){
        global.timer.innerHTML = `11:${passedTime-30} pm`;
    }
};


global.displayScore = function () {
    global.scoreDisplay.innerHTML = `Score: ${global.score}`;
}
export { global }