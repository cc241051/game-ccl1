import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { Drink } from "./drink.js";

class Waitress extends BaseGameObject {
    name = "Waitress";
    xVelocity = 0;
    yVelocity = 0;

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.2,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 1,
        "lastSpriteIndex": 1,
        "currentSpriteIndex": 0
    };

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 10,
            right: this.x + this.width - 10,
            top: this.y+30,
            bottom: this.y + this.height
        }
        return bounds;
    };

    update = function () { // Updates the game's state on every frame
        this.x += this.xVelocity * global.deltaTime; // Adjust x and y position based on velocity and time elapsed since last frame ( == deltaTime)
        this.y += this.yVelocity * global.deltaTime;
        this.noScreenWrap();
    }


    reactToCollision = function (collidingObject) {
        switch (collidingObject.name) {
            case "Wall":
                this.switchCurrentSprites(this.animationData.firstSpriteIndex+1, this.animationData.firstSpriteIndex+1);
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.x = this.previousX;
                this.y = this.previousY;
                //this.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);
                break;
            case 'Client':
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.x = this.previousX;
                this.y = this.previousY;
                break;
            case 'Popup':
                break;
            case 'Structure':
                //console.log('collided');
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.x = this.previousX;
                this.y = this.previousY;
                for (let i = 0; i < global.allGameObjects.length; i++) {
                    let progressBar = global.allGameObjects[i];
                    if (progressBar.name == 'ProgressBar' 
                        && progressBar.type == collidingObject.type && progressBar.active == false 
                        && progressBar.drinkCount <= progressBar.maxDrinkCount && progressBar.drinkNearby == false) {
                        progressBar.animationData.currentSpriteIndex = progressBar.animationData.firstSpriteIndex;
                        progressBar.active = true;
                    }
                }
                break;
            case 'Drink':
                if (global.isHoldingDrink == false) {
                    global.isHoldingDrink = true;
                    collidingObject.isHoldingDrink = true;
                    for (let i = 0; i < global.allGameObjects.length; i++) {
                        let progressBar = global.allGameObjects[i];
                        if (progressBar.name == 'ProgressBar' && progressBar.type == collidingObject.type) {
                            progressBar.drinkNearby = false;
                        }
                    }
                }
                break;
            case 'Trashcan':
                this.xVelocity = 0;
                this.yVelocity = 0;
                this.x = this.previousX;
                this.y = this.previousY;
                if(global.isHoldingDrink == true){
                    for(let i = 0; i < global.allGameObjects.length; i++){
                        let object = global.allGameObjects[i];
                        if(object.isHoldingDrink == true){
                            object.active = false;
                            global.isHoldingDrink = false;
                            object.isHoldingDrink = false;
                            for(let j = 0; j < global.allGameObjects.length; j++){
                                let progressBar = global.allGameObjects[j];
                                if(progressBar.name == 'ProgressBar' && progressBar.type == object.type){
                                    progressBar.drinkCount--;
                                }
                            }
                        }
                    }
                }
                break;
        }
    }

    noScreenWrap = function () {
        let canvasBounds = global.getCanvasBounds();
        let playerBounds = this.getBoxBounds();
        if (playerBounds.right >= canvasBounds.right || playerBounds.left <= canvasBounds.left || playerBounds.top <= canvasBounds.top || playerBounds.bottom >= canvasBounds.bottom) {
            this.xVelocity = 0;
            this.yVelocity = 0;
            this.x = this.previousX;
            this.y = this.previousY;
        }

    }

    constructor(x, y, width, height) {
        super(x, y, width, height);

        this.loadImagesFromSpritesheet(["./images/waitress.png"], 4, 5);
    }
}
export { Waitress };