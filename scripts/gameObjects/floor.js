import { BaseGameObject } from "./baseGameObject.js";

class Floor extends BaseGameObject{
    name = "Floor";

    constructor(x, y, width, height, type) {
        super(x, y, width, height, type);
        this.type = type;
        switch(this.type){
            case 'Floor': this.loadImages(["./images/floor2.png"]);
            break;
            case 'Staircase': this.loadImages(["./images/staircase.png"]);
            break;
            case 'Balustrade': this.loadImages(["./images/balustradeFull.png"]);
            break;
            case 'Carpet': this.loadImages(["./images/carpet.png"]);
        }
        
    }

}

export { Floor };