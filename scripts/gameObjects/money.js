import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Money extends BaseGameObject {
    name = 'Money';

    update = function(){
       // global.moneyCount(this.x + this.width + 10, this.y+ this.height);
    }
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/money.png"]);
    }
}

export { Money }; 