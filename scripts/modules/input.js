import { global } from "./global.js";

function move(event) {


    
    //Example Movement for the PacMan Game
    switch (event.key) {
        case "d":
        case "D":
            if(global.playerObject.xVelocity!= 200){
                global.playerObject.switchCurrentSprites(8, 11);
            }
            global.playerObject.xVelocity = 200;
            global.playerObject.yVelocity = 0;
            
            break;
        case "a":
        case "A":
            if(global.playerObject.xVelocity!= -200){
                global.playerObject.switchCurrentSprites(4, 7);
            }
            global.playerObject.xVelocity = -200;
            global.playerObject.yVelocity = 0;
            
            break;
        case "w":
        case "W":
            if(global.playerObject.yVelocity!= -200){
                global.playerObject.switchCurrentSprites(12, 15);
            }
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = -200;
            
            break;
        case "s":
        case "S":
            if(global.playerObject.yVelocity!= 200){
                global.playerObject.switchCurrentSprites(0, 3);
            }
            global.playerObject.xVelocity = 0;
            global.playerObject.yVelocity = 200;
            
            break;

    }
}

function stop() {
    global.playerObject.switchCurrentSprites(global.playerObject.animationData.firstSpriteIndex +1,global.playerObject.animationData.firstSpriteIndex +1);
    global.playerObject.xVelocity = 0;
    global.playerObject.yVelocity = 0;

    switch (event.key) {
        case "d":
        case "D":
            global.playerObject.xVelocity = 0;
            
            break;
        case "a":
        case "A":
            global.playerObject.xVelocity = 0;
            
            break;
        case "w":
        case "W":
            global.playerObject.yVelocity = 0;
            
            break;
        case "s":
        case "S":
            global.playerObject.yVelocity = 0;
            
            break;

    }
    
}

document.addEventListener("keypress", move);

//if you just want to move as long as the player presses a key:
document.addEventListener("keyup", stop);