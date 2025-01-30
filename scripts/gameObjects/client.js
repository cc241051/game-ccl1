import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { Popup } from "./popup.js";

class Client extends BaseGameObject {
    name = "Client";

    getBoxBounds = function () {
        let bounds = {
            left: this.x,
            right: this.x + this.width,
            top: this.y+40,
            bottom: this.y + this.height
        }
        return bounds;
    };

    constructor(x, y, width, height, active) {
        super(x, y, width, height);
        this.loadImagesFromSpritesheet(["./images/client.png"], 1, 2);
        this.animationData.timePerSprite = 0.5;
        this.animationData.lastSpriteIndex = 1;
        new Popup(x+width/2, y-30, 60, 60, active);
    }
}

export { Client }; 