import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { ProgressBar } from "./progressBar.js";
import { Drink } from "./drink.js";


class Structure extends BaseGameObject {
    name = 'Structure';
    drinkDone = false;

    update = function(){
        for(let i = 0; i < global.allGameObjects.length; i++){
            let object = global.allGameObjects[i];
            if (object.name == 'Drink' && object.type == this.type && object.active == true && global.isHoldingDrink == true) {
                this.drinkDone = false;
            }
        }
    }

    getBoxBounds = function () {
        if(this.type == 'Beer'){
            let bounds = {
                left: this.x+40,
                right: this.x + this.width,
                top: this.y,
                bottom: this.y + this.height
            }
            return bounds;
        }else{
            let bounds = {
                left: this.x+20,
                right: this.x + this.width,
                top: this.y,
                bottom: this.y + this.height
            }
            return bounds;
        }
        
    };

    constructor(x, y, width, height, type) {
        super(x, y, width, height, type);
        this.type = type;
        switch(this.type){
            case 'Beer':
                this.loadImages(["./images/barrel1.png"]);
            break;
            case 'Shot':
                this.loadImages(["./images/barTable1.png"]);
            break;
        }
        new ProgressBar(x+30, y, 80, 20, type);
    }
}

export { Structure };