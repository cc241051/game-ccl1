13.01.25
Today I created the canvas and a place holder for my main character, then i made it move using ASWD keys and created a wall element to test collision(it worked)
Next i made 3 npc's who's constructor creates an instance of a 'popup' object on top of their heads when created.
The rest of the day i worked on making the apparition of the popups random (or to seem random) and at the end i wanted to test whether i can make them disappear on collision(it worked)

14.01.25
Today i worked on making the order-delivery work, i created an object named Beertank that creates an instance of a 'progress bar' in it's constructor as well. As well i introduced a new property of the progress bar 'linkedObject' to mark it as linked to the beer tank. 
Then i made the progressBar activate only when the waitress collides with the beer tank and also used a placeholder animation for the progress bar, that, when reaching it's last frame, would create a beer in the waitress' hand(aka activates a beer object that existed in waitress' hand but was inactive)

15.01.25
Today I  first restructured my code: Created a class for all the drink objects, and added a property called type to differenciate between beer and shot. The same property was added to the class 'structure'(that creates either beer tanks or bar tables), it's respective progress bar, and the popups, so we could finally start checking which drink gets created and whether what we bring to the customer matches their order.
Next i improved the random apparition and disappearing of the popups by making it an idividual function for each popup instead of a global one. 
I also created a Bar Table structure so now you can deliver both beer and shots.

16.01.2025
Today I fixed some bugs and added a couple new features.
First I made the new drinks spawn near the structure upon creation and not in your hand(because there was a bug where the drink would appear even if you were away from the structure). Then i fixed the issue of the drink getting delivered even if you weren't holding it yet and the bug of being able to pick up 2 drinks at the same time instead fof just one.
Lastly i added a score to the game.

17.01.2025
Today I developed the end scenario for my game(aka created a timer that would end the round once it runs out). It wasn't really working in the beginning because I needed to make the previousRunningTime = performace.now() on restart for it to work(I got some help from Lukas and Florian with this one). Then i added the possibility to create a new drink even if you held one in your hand already(the new one would still spawn near the structure). Added a 'trashcan' aka an object that makes the drink in your hand disappear on collision.

Art:
- Mapped the level
- drew floor texture

20.01.2025
(Art only)
- Made the spritesheet for the main character and made the sprites switch based on the direction of walking
- Made the spritesheet for drinks
- Made spritesheet for popups

21.01.25
- Drew the wall texture, then changed the colors of the wall and floor to make it darker, also added wall variations
- created a new map with staircases and 2 kinds of walls
- drew the staircase texture

22.01.2025
- Drew the progress bar and animated it
- drew the barrel
- drew a fence for the second floor
- drew tables with customers

23.01.2025
- Animated the customers
- Removed the trashcan and replaced it with 'Bob' (another npc that would take any drink you give him but won't increase your score)
- Created a top bar in HTML to display the score and timer in a more organized way
- Designed the start and end screen


