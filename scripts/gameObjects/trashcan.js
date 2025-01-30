import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Trashcan extends BaseGameObject{
    name = "Trashcan";

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImagesFromSpritesheet(["./images/bob.png"], 2, 2);
        this.animationData.timePerSprite = 0.3
        this.animationData.lastSpriteIndex = 3;
    }
}

export { Trashcan };