import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Wall extends BaseGameObject{
    name = "Wall";

    getBoxBounds = function () {
        let bounds = {
            left: this.x,
            right: this.x + this.width,
            top: this.y,
            bottom: this.y + this.height
        }
        return bounds;
    };

    constructor(x, y, width, height, type) {
        super(x, y, width, height, type);
        this.type = type;
        switch(this.type){
            case 'Single': this.loadImages(["./images/wallSingle.png"]);
            break;
            case 'Double': this.loadImages(["./images/wall2.png"]);
        }
        
    }

}

export { Wall };