import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { Drink } from "./drink.js";

class ProgressBar extends BaseGameObject {
    name = 'ProgressBar';
    active = false;
    drinkNearby = false;
    drinkCount = 0;
    maxDrinkCount = 2;

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.2,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 12,
        "currentSpriteIndex": 0
    };

    update = function () {
        if (this.animationData.currentSpriteIndex == this.animationData.lastSpriteIndex) {
            if (this.drinkNearby == false && this.drinkCount <= this.maxDrinkCount) {
                console.log('created');
                switch (this.type) {
                    case 'Beer':
                        new Drink(this.x - 30, this.y + 90, 30, 30, this.type);
                        break;
                    case 'Shot':
                        new Drink(this.x-20, this.y + 45, 30, 30, this.type);
                }
                this.drinkCount++;
                console.log(`${this.type} count: ${this.drinkCount}`);
                this.drinkNearby = true;

            }
        }
    }

    constructor(x, y, width, height, type) {
        super(x, y, width, height, type);
        this.type = type;
        this.loadImagesFromSpritesheet(["./images/progressBar.png"], 2, 7);
    }
}

export { ProgressBar };