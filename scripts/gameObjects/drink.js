import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { ProgressBar } from "./progressBar.js";


class Drink extends BaseGameObject {
    name = 'Drink';
    active = true;
    ogX;
    ogY;
    isHoldingDrink = false; //'is being held'

    update = function () {
        if (global.isHoldingDrink == true && this.isHoldingDrink == true) {
            this.x = global.playerObject.x + 20;
            this.y = global.playerObject.y-15;
        }
    }

    constructor(x, y, width, height, type) {
        super(x, y, width, height, type);
        this.type = type;
        this.ogX = x;
        this.ogY = y;
        this.loadImagesFromSpritesheet(["./images/drink.png"], 2, 1);
        switch (this.type) {
            case 'Beer':
                this.switchCurrentSprites(0, 0);
                break;
            case 'Shot':
                this.switchCurrentSprites(1, 1);
                break;
        }
    }
}

export { Drink };