import { global } from "./global.js";
import { Wall } from "../gameObjects/wall.js";
import { Floor } from "../gameObjects/floor.js";

import { Waitress } from "../gameObjects/waitress.js";
import { Client } from "../gameObjects/client.js";
import { Structure } from "../gameObjects/structure.js";
import { Money } from "../gameObjects/money.js";
import { Trashcan } from "../gameObjects/trashcan.js";


function gameLoop(totalRunningTime) {
    // console.log(global.elapsedRoundTime);
    if (global.elapsedRoundTime < global.roundTime) {
        
        global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
        global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
        global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
        global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 
        
        global.displayTimer();
        global.displayScore();
        global.elapsedRoundTime += global.deltaTime;

        for (var i = 0; i < global.allGameObjects.length; i++) { //loop in the (game)loop -> the gameloop is continous anyways.. and on every cylce we do now loop through all objects to execute several operations (functions) on each of them: update, draw, collision detection, ...
            if (global.allGameObjects[i].active == true) {
                
                global.allGameObjects[i].storePositionOfPreviousFrame();
                global.allGameObjects[i].update();
                global.checkCollisionWithAnyOther(global.allGameObjects[i]);

                global.allGameObjects[i].draw();
            }
        }

        requestAnimationFrame(gameLoop); 
    }else {
        global.endScreen.style.display = "flex";
        global.canvas.style.display = "none";
        global.endScore.innerHTML = `Score: ${global.score}`;
    }

}
    



function setupGame() {
    let map = [
        [20,  0, 20,  0, 21, 20,  0, 20,  0],
        [11, 11, 11, 11, 11, 11, 11, 11, 11],
        [11, 11, 11, 21, 21, 21, 11, 11, 11],
        [12, 20,  0, 11, 11, 11, 20,  0, 12],
        [ 0, 11, 11, 11, 13, 11, 11, 11,  0],
        [11, 11, 11, 11, 13, 11, 11, 11, 11],
        [11, 11, 11, 11, 13, 11, 11, 11, 11],
    ];

    /* 0 = nothing
       11 = floor
       12 = staircase
       13 = carpet
       20 = wallDouble
       21 = wallSingle
     */
    for (let i = 0; i < map.length; i++) {
        let innerArray = map[i];
        for (let j = 0; j < innerArray.length; j++) {
            switch(innerArray[j]){
                case 11: new Floor(j * 100, i * 100, 100, 100, 'Floor');
                break;
                case 12: new Floor(j * 100, i * 100, 100, 200, 'Staircase');
                break;
                case 13: new Floor(j * 100, i * 100, 100, 100, 'Carpet');
                break;
                case 20: new Wall(j * 100, i * 100, 200, 100, 'Double');
                break;
                case 21: new Wall(j * 100, i * 100, 100, 100, 'Single');
                break;
            }
        }
    }

    new Trashcan(300, 260, 60, 70);
    new Structure(130, 350, 120, 120, 'Beer');
    new Structure(650, 350, 120, 120, 'Shot');

    global.playerObject = new Waitress(450, 320, 65, 70);
    new Client(100, 100, 110, 110, true);
    new Client(250, 550, 110, 110, false);
    new Client(600, 550, 110, 110, false);

    


    new Floor(100, 158, 700, 142, 'Balustrade');


}

//-------------------------MAIN SCREEN-----------------------------------------------

global.startButton.addEventListener('click', startGame);
//-------------------------END SCREEN------------------------------------------------

global.restartButton.addEventListener('click', startGame);


function startGame() {
    console.log('start');
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height);
    global.allGameObjects = [];
    global.canvas.style.display = 'block';
    global.startScreen.style.display = 'none';
    global.endScreen.style.display = 'none';
  
    //🆕 Ensure the restart functionality resets the timer properly
    global.elapsedRoundTime = 0;
    global.prevTotalRunningTime = performance.now();
    global.score = 0;
    global.popups.forEach((popup) => {
        popup.killPopup();
    })
    setupGame();
  
    requestAnimationFrame(gameLoop);
  }



