import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Popup extends BaseGameObject {
    name = "Popup";
    reapearTimer;
    disappearTimer;
    delivered = false;

    animationData = {
        "animationSprites": [],
        "timePerSprite": 2.572,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 15,
        "currentSpriteIndex": 0
    };

    randomOrder = function (numberOfSprites) {
        let x = Math.round(Math.random() * (numberOfSprites - 1));

        //console.log(this.animationData.currentSpriteIndex); //test
        switch (x) {
            case 0: this.type = 'Beer';
                this.switchCurrentSprites(0, 6);
                break;
            case 1: this.type = 'Shot';
                this.switchCurrentSprites(7, 15);
                break;
        }
    }

    startReapearTimer = function () {
        this.reapearTimer = setTimeout(this.reactivatePopup.bind(this), 5000);
    }

    startDisappearTimer = function () {
        this.disappearTimer = setTimeout(this.deactivatePopup.bind(this), 18000);
    }

    reactivatePopup = function () {
        let number = Math.ceil(Math.random() * 100);
        if (number <= 30) {
            this.active = true;
            this.randomOrder(2);
            //console.log(this.type); //test
            this.startDisappearTimer();

        } else {
            this.startReapearTimer();
        }
    }

    deactivatePopup = function () {
        if (this.delivered == true) {
            global.score++;
        } else {
            global.score--;
            console.log('decreased');
        }
        this.active = false;
        clearTimeout(this.disappearTimer);
        this.startReapearTimer();

    }

    killPopup = function () {
        clearTimeout(this.disappearTimer);
        clearTimeout(this.reapearTimer);

    }

    reactToCollision = function (collidingObject) {
        switch (collidingObject.name) {
            case 'Waitress':
                for (var i = 0; i < global.allGameObjects.length; i++) {
                    let object = global.allGameObjects[i];
                    if (object.name == 'Drink' && object.active == true && global.isHoldingDrink == true && object.type == this.type && object.isHoldingDrink == true) {
                        for (let j = 0; j < global.allGameObjects.length; j++) {
                            let progressBar = global.allGameObjects[j];
                            if (progressBar.name == 'ProgressBar' && progressBar.type == object.type) {
                                progressBar.drinkCount--;
                                console.log(`${progressBar.type} count: ${progressBar.drinkCount}`); //test

                            }
                        }
                        object.x = object.ogX;
                        object.y = object.ogY;
                        object.isHoldingDrink = false;
                        global.isHoldingDrink = false;
                        object.active = false;
                        this.delivered = true;
                        this.deactivatePopup();

                    }

                }
                break;
        }
    }

    constructor(x, y, width, height, active) {
        super(x, y, width, height);
        this.active = active;
        this.randomOrder(2);
        if (this.active == true) {
            this.startDisappearTimer();
        } else {
            this.startReapearTimer();
        }

        global.popups.push(this);

        this.loadImagesFromSpritesheet(["./images/popupSprite.png"], 4, 4);
    }
}

export { Popup }; 