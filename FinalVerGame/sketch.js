var mgr;

var characterChoice;
var playerChar;
var skipIcon;
var dtmFont;
var playerName;

var playerSize;
var characterSprite;
var upleft;
var upright;
var downright;
var downleft;
var static;

var naughty;

var cookieJar;
var cookiePos; // starting position of cookie pot. change at setup.
var cookieSize; // size of cookie pot object

var washingMachine;
var washingPos;
var washingSize;
var bubbles;

var whiteShoe;
var blackShoe;
var redShoe;
var shoePos;
var shoeSize;
var shoeBigPos;
var shoeBigSize;
var inkPos;
var inkSize;

var plant;
var sci;
var leaf1;
var leaf1isTrue;
var leaf2;
var leaf2isTrue;
var badLeaf1;
var badLeaf1isTrue;
var badLeaf2;
var badLeaf2isTrue;
var plantPos;
var plantSize;
var plantBigPos;
var plantBigSize;

var bed;
var bedPos;
var bedSize;

var apple;
var apple2;
var apple3;
var apple4;
var apple5;
var magic;
var lightning;
var applePos;
var appleSize;

var seeingAppleEnding;
var narratorSave;

var BG;

var curtain1;
var curtain2;

var lazy;

var seeingEndingList;
var restart;
var endingSeen = false;
var obeySeen = false;
var nightmareSeen = false;
var lazySeen = false;
var appleSeen = false;
var retireSeen = false;

//Creating Adaptation for HTML

var cv;
var canvasParent;


function setup() {
    // put setup code here

    restart = [false, false, false, false, false, false, false, false];
    //HTML
    cv = createCanvas(900, 850);
    canvasParent = document.getElementById('canvasC');
    cv.parent(canvasParent)


    background(200);
    mgr = new SceneManager();
    mgr.addScene(TitleScene);
    mgr.addScene(SceneOne); // tutorial
    mgr.addScene(SceneTwo); // introduction to narrator, type name
    mgr.addScene(SceneThree); // select vessel
    mgr.addScene(SceneFour); // intro to room
    mgr.addScene(SceneFive); // room interaction
    mgr.addScene(SceneSix); // ending
    mgr.addScene(SceneSeven); // credits
    mgr.showNextScene();

    skipIcon = loadImage("assets/skipIcon.gif")
    dtmFont = loadFont('assets/DTM.otf')
    BG = loadImage("assets/room.png");

    cookiePos = createVector(300, 200);
    cookieSize = [100, 100];

    washingPos = createVector(50, 150);
    washingSize = [200, 200];

    shoePos = createVector(530, 740);
    shoeSize = [70, 70];
    shoeBigPos = createVector(70, 200);
    shoeBigSize = [250, 250];
    inkPos = createVector(340, 550);
    inkSize = [200, 200];

    plantPos = createVector(80, 500);
    plantSize = [100, 200];
    plantBigPos = createVector(340, 150);
    plantBigSize = [250, 500];

    bedPos = createVector(600, 200);
    bedSize = [250, 130];

    applePos = [470, 500];
    appleSize = [60, 60];

    playerSize = [100, 200];



}

function draw() {
    // put drawing code here

    mgr.draw();
}

function mousePressed() {

    mgr.handleEvent("mousePressed");
}

function keyPressed() {
    switch (key) {
        case '0':
            mgr.showScene(TitleScene);
            break;
        case '1':
            mgr.showScene(SceneOne);
            break;
        case '2':
            mgr.showScene(SceneTwo);
            break;
        case '3':
            mgr.showScene(SceneThree);
            break;
        case '4':
            mgr.showScene(SceneFour);
            break;
        case '5':
            mgr.showScene(SceneFive);
            break;
        case '6':
            mgr.showScene(SceneSix);
            break;
        case '7':
            mgr.showScene(SceneSeven);
            break;
    }
    mgr.handleEvent("keyPressed")
}
// Intro scene constructor function

function TitleScene() {

    var SplashImage;
    var Character;
    var timer;
    var ending1;
    var ending2;
    var ending3;
    var ending4;
    var tickBox;

    this.setup = function () {

        SplashImage = loadImage("assets/image0.png");
        Character = loadImage("assets/emptyPlayer.png")
        naughty = 0;
        lazy = false;
        timer = 0

        leaf1isTrue = true;
        leaf2isTrue = true;
        badLeaf1isTrue = true;
        badLeaf2isTrue = true;
        seeingEndingList = false;
        seeingAppleEnding = false;
        narratorSave = false;

        ending1 = loadImage("assets/question.jpg"); // lazy
        ending2 = loadImage("assets/question.jpg"); // obey
        ending3 = loadImage("assets/question.jpg"); // nightmare
        ending4 = loadImage("assets/question.jpg"); // apple
        tickBox = loadImage("assets/check.png");

    }


    this.draw = function () {
        background(255);



        if (restart[0] == true) {
            restart[0] = false;
            naughty = 0;
            lazy = false;
            timer = 0

            leaf1isTrue = true;
            leaf2isTrue = true;
            badLeaf1isTrue = true;
            badLeaf2isTrue = true;
            seeingEndingList = false;
            seeingAppleEnding = false;
            narratorSave = false;

            if (lazySeen == true) {
                ending1 = loadImage("assets/ending/lazy.png");
            }
            if (obeySeen == true) {
                ending2 = loadImage("assets/ending/obey.png");
            }
            if (nightmareSeen == true) {
                ending3 = loadImage("assets/ending/nightmare.png");
            }
            if (appleSeen == true) {
                ending4 = loadImage("assets/ending/muscleApple.png");
            }
        }

        if (timer < 300) {
            image(Character, width / 2 - 100, 300 - timer, 200, 440);
            noStroke();
            fill(255, timer);
            rect(0, 0, width, height);

        }



        if (timer > 300) {

            fill(255, 555 - timer);

            image(SplashImage, 0, 0, width, height);
            noStroke();
            rect(-20, -20, width + 20, height + 20);
        }

        if (timer > 600) {

            textFont(dtmFont);
            textSize(45);
            stroke(30);
            fill(0);
            text("Click to start", 275, 820);
            image(skipIcon, width - 75, height - 75, 45, 45);

            if (seeingEndingList == true) {
                push();
                fill(200);
                noStroke();
                rect(0, 0, width, height);

                image(ending1, 150, 50, 150, 120);
                image(ending2, 150, 220, 150, 120);
                image(ending3, 150, 390, 150, 120);
                image(ending4, 150, 560, 150, 120);

                fill(0);
                textSize(20);
                text("Ending 1 = Lazybones", 330, 110);
                text("Ending 2 = 1984 sunshines, baby", 330, 280);
                text("Ending 3 = You're gonna have a bad time", 330, 450);
                text("Ending 4 = I actually prefer android", 330, 630);
                text("Ending 4.5 = Considering retirement...", 330, 720);


                if (lazySeen == true) {
                    image(tickBox, 90, 80, 50, 50);
                }
                if (obeySeen == true) {
                    image(tickBox, 90, 250, 50, 50);
                }
                if (nightmareSeen == true) {
                    image(tickBox, 90, 420, 50, 50);
                }
                if (appleSeen == true) {
                    image(tickBox, 90, 600, 50, 50);
                }
                if (retireSeen == true) {
                    image(tickBox, 200, 690, 50, 50);
                }
                if (lazySeen == true && obeySeen == true && nightmareSeen == true && appleSeen == true && retireSeen == true) {
                    stroke(0);
                    fill(255)
                    textSize(15);
                    text("We give you our most sincere thanks for playing our game.", 280, 770)
                    textSize(30);
                    text("The EDNANS team.", 280, 800)
                }

                pop();

            }


            if (endingSeen == true) {
                push();
                stroke(0);
                fill(255);
                strokeWeight(5);
                rect(30, 763, 200, 40);
                textSize(25);
                strokeWeight(1);
                fill(0);
                if (seeingEndingList == false) {
                    text("View endings", 40, 790);

                } else {
                    text("Close", 40, 790);
                }
                pop();
            }



        }

        timer++;
    }

    this.mousePressed = function () {
        if (mouseX > 30 && mouseX < 230 && mouseY > 763 && mouseY < 803 && endingSeen == true) {
            if (seeingEndingList == false) {
                seeingEndingList = true;
            } else {
                seeingEndingList = false;
            }
        } else if (timer > 600 && seeingEndingList == false) {
            mgr.showNextScene();
        }


    }
}

function SceneOne() {

    var timer

    this.setup = function () {

        timer = 0
    }

    this.draw = function () {

        background(0);

        if (restart[1] == true) {
            restart[1] = false;
            mgr.showNextScene();
        }


        timer++

        if (timer > 25) {
            textFont(dtmFont);
            textSize(23);
            fill(255);
            text("Click the screen to progress while this Icon     is visible.", 45, 235);
            image(skipIcon, 665, 200, 45, 45);
        }
        if (timer > 200) {
            textFont(dtmFont);
            textSize(32);
            fill(255);
            text("Your choices matter in this game.", 115, 325);

        }
        if (timer > 350) {
            textSize(22);
            text("There are no right answers from the options you are given.", 52, 400)
        }
        if (timer > 450) {
            text("Play however you want", 2700, 445)
        }
        if (timer > 600) {
            textSize(40);
            fill(186, 85, 211)
            text("but be prepared to live with the", 50, 550)
            textSize(75);
            text("consequences", 180, 625);
        }
        if (timer > 760) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }

    }


    this.mousePressed = function () {

        if (timer > 760) {
            mgr.showNextScene();
        }
    }
}

function SceneTwo() {

    var timer;
    var narratorMainText;
    var narratorSubText;
    var showIcon;
    var dialogueCount;
    var Sceneclear;

    yesButton = new Clickable(240, 400);
    yesButton.width = 100;
    yesButton.height = 30;
    yesButton.locate(-1080, 400);
    yesButton.text = "submit"
    yesButton.onPress = function () {
        playerName = input.value();
        dialogueCount++;
        input.position(-2000, 65);
        timer = 0;
        narratorMainText = "";
        narratorSubText = "";
    }

    this.setup = function () {

        timer = 0;
        hasName = false;
        showIcon = false;
        dialogueCount = 0;
        Sceneclear = false;
        input = createInput();
        input.position(-2000, 65);
        input.parent(canvasParent)
        input.style('position', 'relative')
    }

    this.draw = function () {

        if (restart[2] == true) {
            restart[2] = false;
            narratorMainText = "";
            narratorSubText = "";
            timer = 0;
            hasName = false;
            showIcon = false;
            dialogueCount = 0;
            Sceneclear = false;
            input = createInput();
            input.position(-2000, 65);

        }

        timer++;
        if (dialogueCount == 0) {
            background(0, timer / 3);
        }
        if (dialogueCount > 0) {
            background(0);
        }

        if (timer > 120 && dialogueCount == 0) {
            narratorMainText = "Oh? You’re finally awake! Good!"
        }
        if (timer > 200 && dialogueCount == 0) {
            narratorSubText = "As the narrator of this world, I salute you."
        }
        if (timer > 240 && dialogueCount == 0) {
            showIcon = true;
        }

        if (timer > 30 && dialogueCount == 1) {
            narratorMainText = "Will you submit your name to me?"
        }
        if (timer > 120 && dialogueCount == 1) {
            narratorSubText = "Tell me your name."
        }
        if (timer > 220 && dialogueCount == 1) {
            push();
            input.position(255, 450);
            yesButton.locate(495, 445);
            yesButton.draw();
            pop();
        }

        if (timer > 30 && dialogueCount == 2) {
            narratorMainText = playerName + "? Are you sure?";
        }
        if (timer > 100 && dialogueCount == 2) {
            narratorSubText = "I would have preferred something with a bit more class."
        }
        if (timer > 130 && dialogueCount == 2) {
            showIcon = true;
        }

        if (timer > 30 && dialogueCount == 3) {
            narratorSubText = "But, that would have to do."
        }
        if (timer > 60 && dialogueCount == 3) {
            showIcon = true;
        }

        if (timer > 30 && dialogueCount == 4) {
            narratorMainText = "Now we got that out of the way,"
            narratorSubText = "for you to participate in my game, you will need a vessel."
        }
        if (timer > 80 && dialogueCount == 4) {
            showIcon = true;
        }
        if (timer > 30 && dialogueCount == 5) {
            narratorMainText = "So, I present you,"
        }
        if (timer > 60 && dialogueCount == 5) {
            showIcon = true;
        }
        if (timer > 30 && dialogueCount == 6) {
            narratorMainText = "The privilege of OPTIONS!"
        }
        if (timer > 120 && dialogueCount == 6) {
            narratorSubText = "Yes, you’re free to acknowledge my generosity. You’re welcome."
        }
        if (timer > 200 && dialogueCount == 6) {
            showIcon = true;
            Sceneclear = true;
        }


        textFont(dtmFont);
        textSize(30);
        fill(186, 85, 211);
        stroke(0);
        strokeWeight(5);
        text(narratorMainText, 15, 40);
        strokeWeight(4);
        textSize(20);
        text(narratorSubText, 30, 70);

        if (showIcon == true) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }


    }

    this.nameGiven = function () {

        console.log("name is given");
    }

    this.mousePressed = function () {

        if (showIcon == true) {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
        }

        if (Sceneclear == true) {
            mgr.showNextScene();
        }


    }
}

function SceneThree() {


    var timer;
    var sinTimer;
    var narratorMainText;
    var narratorSubText;
    var showIcon;
    var dialogueCount;
    var Sceneclear;
    var clownChoice;

    var vessels


    this.setup = function () {

        timer = 0;
        sinTimer = 0;
        showIcon = false;
        dialogueCount = 0;
        Sceneclear = false;
        narratorMainText = "";
        narratorSubText = "";
        vessels = [];
        clownChoice = false;

        for (var i = 0; i < 9; i++) {
            vessels.push([, ]) // first space in [,] stores the image file. second stores if it was clicked(true or false)
            vessels[i][1] = false;
        }

        vessels[0][0] = loadImage("assets/vessels/vessel0.png");
        vessels[1][0] = loadImage("assets/vessels/vessel1.png");
        vessels[2][0] = loadImage("assets/vessels/vessel6.png");
        vessels[3][0] = loadImage("assets/vessels/vessel3.png");
        vessels[4][0] = loadImage("assets/vessels/vessel4.png");
        vessels[5][0] = loadImage("assets/vessels/vessel5.png");
        vessels[6][0] = loadImage("assets/vessels/vessel2.png");
        vessels[7][0] = loadImage("assets/vessels/vessel7.png");
        vessels[8][0] = loadImage("assets/vessels/vessel8.png");

    }


    this.draw = function () {


        background(255, 15);

        if (restart[3] == true) {
            restart[3] = false;
            narratorMainText = "";
            narratorSubText = "";
            timer = 0;

            sinTimer = 0;
            showIcon = false;
            dialogueCount = 0;
            Sceneclear = false;
            narratorMainText = "";
            narratorSubText = "";
            clownChoice = false;
            for (var i = 0; i < 9; i++) {
                vessels[i][1] = false;
            }
        }

        timer++
        sinTimer += 0.05;

        push();
        translate(150, 100);
        //fake choices from here
        if (vessels[1][1] == false) {
            image(vessels[1][0], 130, 100 + 5 * sin(sinTimer + 1), 90, 160); //micky mouse
        }

        if (vessels[6][1] == false) {
            image(vessels[6][0], 195, 280 + 5 * sin(sinTimer + 2), 90, 160); // devil
        }

        if (vessels[3][1] == false) {
            image(vessels[3][0], 350, 100 + 5 * sin(sinTimer + 3), 80, 160); // developer face
        }

        if (vessels[4][1] == false) {
            image(vessels[4][0], 460, 100 + 5 * sin(sinTimer + 4), 80, 160); // 3D
        }

        //true choices from here
        if (vessels[0][1] == false) {
            image(vessels[0][0], 20, 100 + 5 * sin(sinTimer), 80, 160); //accepted ones default vessel
        }

        if (vessels[2][1] == false) {
            image(vessels[2][0], 240, 100 + 5 * sin(sinTimer + 2.5), 80, 160); //emo vessel
        }

        if (vessels[5][1] == false) {
            image(vessels[5][0], 75, 280 + 5 * sin(sinTimer + 1.5), 80, 160); //blond vessel
        }

        if (vessels[8][1] == false) {
            image(vessels[8][0], 425, 280 + 5 * sin(sinTimer + 4.5), 80, 160); //smily vessel
        }

        if (vessels[7][1] == false) {
            image(vessels[7][0], 295, 280 + 5 * sin(sinTimer + 3.5), 100, 160); // clown
        }

        pop();


        if (dialogueCount == 0) {
            noStroke();
            fill(255, 255 - sinTimer * 20);
            rect(0, 0, width, height);

            if (timer > 300) {
                narratorMainText = "Go on. Choose."
            }
            if (timer > 800) {
                narratorMainText = "Pick something."
                narratorSubText = "Its not like a global pandemic stopped me from finishing this."
            }
            if (timer > 2000) {
                narratorMainText = "Hello? Is someone there?"
                narratorSubText = "Unlike someone staring at the screen, I don’t have all day."
            }
            if (timer > 3000) {
                narratorMainText = "Ridiculous."
                narratorSubText = "I don't get paid enough for this."
            }
            if (timer > 4000) {
                narratorMainText = "ugh, I would love to have some skittles right now..."
                narratorSubText = "Oh yea, copyright, censor that."
            }
            if (timer > 4300) {
                narratorMainText = "ugh, I would love to have some skitt*** right now..."
                narratorMainText = "ugh, gI would love to have some skitt*** right now..."
            }
            if (timer > 5000) {
                narratorMainText = "I'm out of dialogues."
                narratorSubText = "So seriously. Pick something."
            }
        }

        if (dialogueCount == 2) {
            if (timer > 30) {
                if (clownChoice == true) {
                    narratorMainText = "What a fitting look for you!"
                } else {
                    narratorMainText = "Your decision is made."
                }
                narratorSubText = ""

            }
            if (timer > 80) {
                if (clownChoice == true) {
                    narratorSubText = "It's like it was made for you!"
                } else {
                    narratorSubText = "Your peculiar choice speaks volumes about your quaint tastes."
                }

            }
            if (timer > 120) {
                showIcon = true;
            }
        }

        if (dialogueCount == 3) {
            if (timer > 30) {
                if (clownChoice == true) {
                    narratorMainText = "Truly, a perfect vessel for you."
                } else {
                    narratorMainText = "But, it will do."
                }
                narratorSubText = ""
            }
            if (timer > 80) {
                if (clownChoice == true) {
                    narratorSubText = "Really shows who you are as a person."
                } else {
                    narratorSubText = "Guess I'll be the bigger man, again."
                }

            }
            if (timer > 120) {
                showIcon = true;
            }
        }
        if (dialogueCount == 4) {
            if (timer > 30) {
                narratorMainText = "Preparations are completed."
                narratorSubText = ""
            }
            if (timer > 60) {
                showIcon = true;
            }

        }
        if (dialogueCount == 5) {
            if (timer > 30) {
                narratorMainText = "Welcome, to " + playerName + "'s game."
                narratorSubText = ""
            }
            if (timer > 60) {
                showIcon = true;
            }

        }


        noStroke();
        textFont(dtmFont);
        textSize(30);
        fill(186, 85, 211);
        strokeWeight(5);
        text(narratorMainText, 15, 40);
        strokeWeight(4);
        textSize(20);
        text(narratorSubText, 30, 70);



        if (showIcon == true) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }

        if (dialogueCount == 6) {
            fill(255, timer);
            rect(0, 0, width, height); //white fade out

            if (timer > 150); {
                mgr.showNextScene(); //automatically goes to next scene
            }
        }

    }

    this.mousePressed = function () {

        if (showIcon == true) {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
        }


        if (dialogueCount == 0 || dialogueCount == 1) // before choice is made.
        {
            //fake choices from here

            if (mouseX < 370 && mouseX > 240 && mouseY > 200 && mouseY < 360) //clicked micky mouse
            {
                dialogueCount = 1;
                narratorMainText = "Pick something else."
                narratorSubText = "I guess you are unfamiliar with the term, copyright laws."
                vessels[1][1] = true;
                timer = 0;
            }
            if (mouseX < 600 && mouseX > 500 && mouseY > 200 && mouseY < 360) //clicked developer face
            {
                dialogueCount = 1;
                narratorMainText = "Can't pick the handsome one!"
                narratorSubText = "That exceptional specimen is already chosen by me."
                vessels[3][1] = true;
                timer = 0;
            }

            if (mouseX < 770 && mouseX > 610 && mouseY > 200 && mouseY < 360) //clicked 3D
            {
                dialogueCount = 1;
                narratorMainText = "3D vessel sold separately as DLC"
                narratorSubText = "Pay only 99999 pounds to gain exclusive access!"
                vessels[4][1] = true;
                timer = 0;
            }
            if (mouseX < 430 && mouseX > 340 && mouseY > 380 && mouseY < 540) //clicked devil
            {
                dialogueCount = 1;
                narratorMainText = "This isn't a horror game."
                narratorSubText = "No worshiping great old Cthulhu in my game."
                vessels[6][1] = true;
                timer = 0;
            }

            //true choices from here

            if (mouseX < 250 && mouseX > 170 && mouseY > 200 && mouseY < 360) //clicked default vessel
            {
                dialogueCount = 2;
                playerChar = vessels[0][0];
                characterChoice = "default";
                timer = 0;
                for (var i = 0; i < vessels.length; i++) {
                    vessels[i][1] = true;
                }
                vessels[0][1] = false;

                upleft = loadImage("assets/vessels/edgy/upleft.png");
                upright = loadImage("assets/vessels/edgy/upright.png");
                downright = loadImage("assets/vessels/edgy/downright.png");
                downleft = loadImage("assets/vessels/edgy/downleft.png")
                static = loadImage("assets/vessels/edgy/static.png");
            }

            if (mouseX < 470 && mouseX > 390 && mouseY > 200 && mouseY < 360) //clicked emo vessel
            {
                dialogueCount = 2;
                playerChar = vessels[2][0];
                characterChoice = "emo"
                timer = 0;
                for (var i = 0; i < vessels.length; i++) {
                    vessels[i][1] = true;
                }
                vessels[2][1] = false;

                upleft = loadImage("assets/vessels/emo/upleft.png");
                upright = loadImage("assets/vessels/emo/upright.png");
                downright = loadImage("assets/vessels/emo/downright.png");
                downleft = loadImage("assets/vessels/emo/downleft.png")
                static = loadImage("assets/vessels/emo/static.png");
            }

            if (mouseX < 325 && mouseX > 225 && mouseY > 380 && mouseY < 540) //clicked blond vessel
            {
                dialogueCount = 2;
                playerChar = vessels[5][0];
                characterChoice = "blond";
                timer = 0;
                for (var i = 0; i < vessels.length; i++) {
                    vessels[i][1] = true;
                }
                vessels[5][1] = false;

                upleft = loadImage("assets/vessels/blondy/upleft.png");
                upright = loadImage("assets/vessels/blondy/upright.png");
                downright = loadImage("assets/vessels/blondy/downright.png");
                downleft = loadImage("assets/vessels/blondy/downleft.png")
                static = loadImage("assets/vessels/blondy/static.png");
            }

            if (mouseX < 655 && mouseX > 575 && mouseY > 380 && mouseY < 540) //clicked smily vessel
            {
                dialogueCount = 2;
                playerChar = vessels[8][0];
                characterChoice = "smily";
                timer = 0;
                for (var i = 0; i < vessels.length; i++) {
                    vessels[i][1] = true;
                }
                vessels[8][1] = false;

                upleft = loadImage("assets/vessels/smily/upleft.png");
                upright = loadImage("assets/vessels/smily/upright.png");
                downright = loadImage("assets/vessels/smily/downright.png");
                downleft = loadImage("assets/vessels/smily/downleft.png")
                static = loadImage("assets/vessels/smily/static.png");
            }

            if (mouseX < 545 && mouseX > 435 && mouseY > 380 && mouseY < 540) //clicked clown vessel
            {
                dialogueCount = 2;
                clownChoice = true;
                playerChar = vessels[7][0];
                characterChoice = "clown";
                timer = 0;
                for (var i = 0; i < vessels.length; i++) {
                    vessels[i][1] = true;
                }
                vessels[7][1] = false;

                upleft = loadImage("assets/vessels/clown/upleft.png");
                upright = loadImage("assets/vessels/clown/upright.png");
                downright = loadImage("assets/vessels/clown/downright.png");
                downleft = loadImage("assets/vessels/clown/downleft.png")
                static = loadImage("assets/vessels/clown/static.png");
            }
        }
        pop();


        if (Sceneclear == true) {
            mgr.showNextScene();
        }
    }

}

function SceneFour() {

    var timer;
    var narratorMainText;
    var narratorSubText;
    var showIcon;
    var dialogueCount;
    var Sceneclear;

    var curtainDown;
    var curtainSide;
    var playerHeightPlus;
    var movementTrigger;



    var yes4button;
    var nobutton;
    var likeRoom;


    this.setup = function () {

        timer = 0;
        showIcon = false;
        dialogueCount = 0;
        Sceneclear = false;
        narratorMainText = "";
        narratorSubText = "";
        curtainDown = 0;
        curtainSide = 0;
        movementTrigger = 0;

        cookieJar = loadImage("assets/cookies/cookie0.png");
        washingMachine = loadImage("assets/washingMachine/washingMachine0.png");
        whiteShoe = loadImage("assets/shoes/cleanWhiteShoe.png");
        redShoe = loadImage("assets/shoes/cleanRedShoe.png");
        blackShoe = loadImage("assets/shoes/BlackShoe.png");
        plant = loadImage("assets/plant/plant.png");
        leaf1 = loadImage("assets/plant/leaf2.png");
        leaf2 = loadImage("assets/plant/leaf1.png");
        badLeaf1 = loadImage("assets/plant/leaf4.png");
        badLeaf2 = loadImage("assets/plant/leaf3.png");
        bed = loadImage("assets/bed.png");

        curtain1 = loadImage("assets/curtain.png");
        curtain2 = loadImage("assets/curtain.png");

        apple = loadImage("assets/apple.png");
        apple2 = loadImage("assets/apple.png");
        apple3 = loadImage("assets/apple.png");
        apple4 = loadImage("assets/apple.png");
        apple5 = loadImage("assets/apple.png");
        magic = loadImage("assets/energy.png");
        lightning = loadImage("assets/lightning.png");

        if (playerChar == undefined) {
            playerChar = loadImage("assets/vessels/vessel8.png"); //loads in default image if undefined
            upleft = loadImage("assets/vessels/smily/upleft.png");
            upright = loadImage("assets/vessels/smily/upright.png");
            downright = loadImage("assets/vessels/smily/downright.png");
            downleft = loadImage("assets/vessels/smily/downleft.png")
            static = loadImage("assets/vessels/smily/static.png");
        }

        likeRoom = null;

        yes4button = new Clickable(-1000, 400);
        yes4button.width = 150;
        yes4button.height = 75;
        yes4button.textSize = 20;
        yes4button.text = "Yes, I love it!"
        yes4button.onPress = function () {
            likeRoom = true;
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
        }

        noButton = new Clickable(-1000, 400);
        noButton.width = 150;
        noButton.height = 75;
        noButton.textSize = 20;
        noButton.text = "What is this crap?"
        noButton.onPress = function () {
            likeRoom = false;
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
            naughty++;
        }

    }


    this.draw = function () {

        if (restart[4] == true) {
            restart[4] = false;
            narratorMainText = "";
            narratorSubText = "";
            timer = 0;
            showIcon = false;
            dialogueCount = 0;
            Sceneclear = false;
            curtainDown = 0;
            curtainSide = 0;
            movementTrigger = 0;
            likeRoom = null;

            cookieJar = loadImage("assets/cookies/cookie0.png");
            washingMachine = loadImage("assets/washingMachine/washingMachine0.png");
            whiteShoe = loadImage("assets/shoes/cleanWhiteShoe.png");
            redShoe = loadImage("assets/shoes/cleanRedShoe.png");
            blackShoe = loadImage("assets/shoes/BlackShoe.png");
            plant = loadImage("assets/plant/plant.png");
            leaf1 = loadImage("assets/plant/leaf2.png");
            leaf2 = loadImage("assets/plant/leaf1.png");
            badLeaf1 = loadImage("assets/plant/leaf4.png");
            badLeaf2 = loadImage("assets/plant/leaf3.png");

            applePos = [470, 500];
            appleSize = [60, 60];
            apple = loadImage("assets/apple.png");
        }

        timer++

        if (dialogueCount == 0) {
            background(0, 20);

            if (timer > 80) {
                narratorMainText = "Once upon a time,";
            }
            if (timer > 150) {
                narratorSubText = "There was a 'nice' person named " + playerName;
            }
            if (timer > 180) {
                showIcon = true;
            }
        }
        if (dialogueCount > 0) {
            background(0);
        }
        if (dialogueCount == 1) {
            if (timer > 80) {
                narratorMainText = playerName + " was a very 'nice' person."
            }
            if (timer > 150) {
                narratorSubText = "And 'nice' people only did 'nice' things."
            }
            if (timer > 180) {
                showIcon = true;
            }
        }
        if (dialogueCount == 2) {

            if (movementTrigger > 0) {
                image(BG, 0, 100, width, height - 100);
                image(cookieJar, cookiePos.x, cookiePos.y, cookieSize[0], cookieSize[1]);
                image(washingMachine, washingPos.x, washingPos.y, washingSize[0], washingSize[1]);
                image(whiteShoe, shoePos.x, shoePos.y, shoeSize[0], shoeSize[1]);
                image(blackShoe, shoePos.x + shoeSize[0], shoePos.y, shoeSize[0], shoeSize[1]);
                image(redShoe, shoePos.x + 2 * shoeSize[0], shoePos.y, shoeSize[0], shoeSize[1]);

                image(plant, plantPos.x, plantPos.y, plantSize[0], plantSize[1]);
                image(leaf1, plantPos.x, plantPos.y + plantSize[1] / 10, plantSize[0] / 3, plantSize[1] / 7);
                image(leaf2, plantPos.x + plantSize[0] * 0.8, plantPos.y + plantSize[1] * 0.23, plantSize[0] / 3, plantSize[1] / 7);
                image(badLeaf1, plantPos.x + plantSize[0] * 0.05, plantPos.y + plantSize[1] * 0.26, plantSize[0] / 3, plantSize[1] / 7);
                image(badLeaf2, plantPos.x + plantSize[0] * 0.93, plantPos.y + plantSize[1] * 0.03, plantSize[0] / 3, plantSize[1] / 7);
                image(bed, bedPos.x, bedPos.y, bedSize[0], bedSize[1]);

                image(apple, applePos[0], applePos[1], appleSize[0], appleSize[1]);

                image(playerChar, 320, 300, playerSize[0], playerSize[1]);
            }
            image(curtain1, 0 - curtainSide, -1200 + curtainDown + 50, width / 2, height);
            image(curtain2, width / 2 + curtainSide, -1200 + curtainDown + 50, width / 2, height);

            if (timer > 80) {
                narratorMainText = "After spending another nice day,"
            }
            if (timer > 150) {
                narratorSubText = playerName + " decided to do some chores to end the day."
            }
            if (timer > 120 && movementTrigger == 0) {
                curtainDown += 30;
                if (curtainDown > 1200) {
                    movementTrigger++;
                    timer = 0;
                }
            }

            if (movementTrigger == 1) {
                if (timer > 150) {
                    movementTrigger++;
                }
            }
            if (movementTrigger == 2) {
                curtainSide += 10

                if (curtainSide > 500) {
                    movementTrigger++;
                }
            }
            if (movementTrigger == 3) {
                showIcon = true;
            }

        }
        if (dialogueCount > 2) {
            image(BG, 0, 100, width, height - 100);
            image(cookieJar, cookiePos.x, cookiePos.y, cookieSize[0], cookieSize[0]);
            image(washingMachine, washingPos.x, washingPos.y, washingSize[0], washingSize[1]);
            image(whiteShoe, shoePos.x, shoePos.y, shoeSize[0], shoeSize[1]);
            image(blackShoe, shoePos.x + shoeSize[0], shoePos.y, shoeSize[0], shoeSize[1]);
            image(redShoe, shoePos.x + 2 * shoeSize[0], shoePos.y, shoeSize[0], shoeSize[1]);
            image(playerChar, 320, 300, playerSize[0], playerSize[1]);

            image(plant, plantPos.x, plantPos.y, plantSize[0], plantSize[1]);
            image(leaf1, plantPos.x, plantPos.y + plantSize[1] / 10, plantSize[0] / 3, plantSize[1] / 7);
            image(leaf2, plantPos.x + plantSize[0] * 0.8, plantPos.y + plantSize[1] * 0.23, plantSize[0] / 3, plantSize[1] / 7);
            image(badLeaf1, plantPos.x + plantSize[0] * 0.05, plantPos.y + plantSize[1] * 0.26, plantSize[0] / 3, plantSize[1] / 7);
            image(badLeaf2, plantPos.x + plantSize[0] * 0.93, plantPos.y + plantSize[1] * 0.03, plantSize[0] / 3, plantSize[1] / 7);
            image(bed, bedPos.x, bedPos.y, bedSize[0], bedSize[1]);

            image(apple, applePos[0], applePos[1], appleSize[0], appleSize[1]);
        }

        if (dialogueCount == 3) {

            if (timer > 80) {
                narratorMainText = playerName + "'s room is a very nice room!"
            }
            if (timer > 150) {
                narratorSubText = playerName + " liked it very much!"
            }
            if (timer > 220) {
                push();

                yes4button.draw();
                yes4button.locate(150, 700);
                noButton.draw();
                noButton.locate(600, 700);

                pop()
            }
        }
        if (dialogueCount == 4) {
            if (timer > 80) {
                if (likeRoom == true) {
                    narratorMainText = "Of course you did."
                }
                if (likeRoom == false) {
                    narratorMainText = "Well, too bad."
                }
            }
            if (timer > 150) {
                narratorSubText = "It's not like you had a choice."
            }
            if (timer > 220) {
                showIcon = true;
            }
        }

        if (dialogueCount == 5) {
            if (timer > 80) {

                narratorMainText = "After spending a nice and productive day."

            }
            if (timer > 150) {
                narratorSubText = "Helping the homeless, saving babies, slaying demons or whatever."
            }
            if (timer > 220) {
                showIcon = true;
            }


        }

        if (dialogueCount == 6) {
            if (timer > 80) {
                narratorMainText = playerName + " couldn’t wait to go to bed!"

            }
            if (timer > 150) {
                narratorSubText = "Ready to greet another jolly nice day!"
            }
            if (timer > 220) {
                showIcon = true;
            }
        }

        if (dialogueCount == 7) {
            if (timer > 80) {
                narratorMainText = "But being such a nice person,"

            }
            if (timer > 150) {
                narratorSubText = playerName + " couldn’t bare to rest with some chores left!"
            }
            if (timer > 220) {
                showIcon = true;
            }
        }

        if (dialogueCount == 8) {
            if (timer > 80) {
                narratorMainText = "Socks needed washing. Plants needed trimming. "

            }
            if (timer > 150) {
                narratorSubText = "Shoes needed polishing. And perhaps a nice cookie to sweeten the night!"
            }
            if (timer > 220) {
                showIcon = true;
            }
        }

        if (dialogueCount == 9) {
            if (timer > 80) {
                narratorMainText = "All so challenging tasks!";

            }
            if (timer > 150) {
                narratorSubText = "for the intellectually ambiguous " + playerName + "!"
            }
            if (timer > 220) {
                showIcon = true;
            }
        }

        if (dialogueCount == 10) {
            if (timer > 80) {
                narratorMainText = "But " + playerName + " knew,";

            }
            if (timer > 150) {
                narratorSubText = "nice people always tried their best!";
            }
            if (timer > 220) {
                showIcon = true;
                Sceneclear = true;
            }
        }


        noStroke();
        textFont(dtmFont);
        textSize(30);
        fill(186, 85, 211);
        text(narratorMainText, 15, 40);
        textSize(20);
        text(narratorSubText, 30, 70);

        //


        if (showIcon == true) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }
    }

    this.mousePressed = function () {

        if (showIcon == true) {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
        }

        if (Sceneclear == true) {
            mgr.showNextScene();
        }
    }
}

function SceneFive() {


    var timer;
    var narratorMainText;
    var narratorSubText;
    var appleText;
    var appleTimer;
    var appleDialogueCounter;

    var showIcon;
    var dialogueCount;
    var Sceneclear;

    var bedcount;

    var Character;

    var CookieConstructor;
    var cookiecomplete;
    var doingCookie;
    var cookieEatScene;
    var cookieBadScene;

    var cookieEatButton;
    var cookieQuitButton;

    var washingConstructor;
    var washingComplete;
    var doingWashing;

    var soapButton;
    var runWashingMachingButton;
    var finishWashingButton;
    var shoeFinishedButton;
    var shoeButton;

    var shoeConstructor;
    var shoeComplete;
    var doingShoe;
    var shoeScrub;
    var shoeInk;
    var paintMode;
    var hasInk;
    var blackScrub;
    var whiteScrub;
    var redScrub;

    var plantConstructor;
    var plantComplete;
    var doingPlant;
    var sci;
    var cutmode;

    var plantButton;
    var plantFinishedButton;

    var taskCount;

    var endingfade;
    var endingTrigger;

    var eaten;
    var backgroundStillImage;


    this.setup = function () {

        washingConstructor = new washingOperation();

        character = new CharMove();
        characterSprite = static;

        cookiecomplete = false;
        doingCookie = false;

        washingComplete = false;
        doingWashing = false;

        shoeComplete = false;
        doingShoe = false;

        paintMode = false;
        hasInk = false;
        blackScrub = false;
        whiteScrub = false;
        redScrub = false;

        plantComplete = false;
        doingPlant = false;

        cutmode = false;
        taskCount = 0;
        endingfade = 0;
        endingTrigger = false;

        eaten = false;

        bedcount = 0;

        appleText = "";
        appleTimer = 0;
        appleDialogueCounter = 0;

        if (playerChar == undefined) {
            upleft = loadImage("assets/vessels/smily/upleft.png");
            upright = loadImage("assets/vessels/smily/upright.png");
            downright = loadImage("assets/vessels/smily/downright.png");
            downleft = loadImage("assets/vessels/smily/downleft.png")
            static = loadImage("assets/vessels/smily/static.png");
        }

        cookieEatScene = loadImage("assets/cookies/cookie8.png");
        cookieBadScene = loadImage("assets/cookies/cookie9.png");

        bubbles = loadImage("assets/washingMachine/bubbles.png");

        shoeScrub = loadImage("assets/shoes/shoebrush.png");
        shoeInk = loadImage("assets/shoes/ink.png");

        sci = loadImage("assets/plant/sci.png");
        backgroundStillImage = loadImage("assets/void.png")

        cookieEatButton = new Clickable(-1000, 400);
        cookieEatButton.width = 150;
        cookieEatButton.height = 75;
        cookieEatButton.textSize = 20;
        cookieEatButton.text = "Eat a cookie."
        cookieEatButton.onPress = function () {
            CookieConstructor.CookieCount++;
            CookieConstructor.jarSawp = true;
            console.log(CookieConstructor.CookieCount);
            timer = 0;

        }

        cookieQuitButton = new Clickable(-1000, 400);
        cookieQuitButton.width = 150;
        cookieQuitButton.height = 75;
        cookieQuitButton.textSize = 20;
        cookieQuitButton.text = "Call quits."
        cookieQuitButton.onPress = function () {
            cookiecomplete = true;
            taskCount++;
            dialogueCount = 0;
            narratorMainText = "";
            narratorSubText = "";
            doingCookie = false;

        }

        soapButton = new Clickable(-1000, 400);
        soapButton.width = 150;
        soapButton.height = 75;
        soapButton.textSize = 20;
        soapButton.text = "Insert soap."
        soapButton.onPress = function () {
            washingConstructor.soapCount++;
            washingConstructor.soapSawp = true;
            console.log(washingConstructor.soapCount);
            timer = 0;

        }

        runWashingMachingButton = new Clickable(-1000, 400);
        runWashingMachingButton.width = 150;
        runWashingMachingButton.height = 75;
        runWashingMachingButton.textSize = 20;
        runWashingMachingButton.text = "Start the machine!"
        runWashingMachingButton.onPress = function () {
            timer = 0;
            washingConstructor.results = true;
            dialogueCount = 0;
            narratorMainText = "";
            narratorSubText = "";

        }

        finishWashingButton = new Clickable(-1000, 400);
        finishWashingButton.width = 150;
        finishWashingButton.height = 75;
        finishWashingButton.textSize = 20;
        finishWashingButton.text = "Call quits."
        finishWashingButton.onPress = function () {
            washingComplete = true;
            taskCount++;
            dialogueCount = 0;
            narratorMainText = "";
            narratorSubText = "";
            doingWashing = false;

        }

        shoeFinishedButton = new Clickable(-1000, 400);
        shoeFinishedButton.width = 150;
        shoeFinishedButton.height = 75;
        shoeFinishedButton.textSize = 20;
        shoeFinishedButton.text = "Call quits."
        shoeFinishedButton.onPress = function () {
            shoeComplete = true;
            taskCount++;
            console.log(taskCount);
            dialogueCount = 0;
            narratorMainText = "";
            narratorSubText = "";
            doingShoe = false;

        }

        shoeButton = new Clickable(-1000, 400);
        shoeButton.width = 150;
        shoeButton.height = 75;
        shoeButton.textSize = 20;
        shoeButton.text = "I'm done here."
        shoeButton.onPress = function () {
            dialogueCount++;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
            paintMode = false;

            if (redScrub == true) {
                naughty += 2
            }
            if (whiteScrub == true) {
                naughty += 2
            }

        }

        plantButton = new Clickable(-1000, 400);
        plantButton.width = 150;
        plantButton.height = 75;
        plantButton.textSize = 20;
        plantButton.text = "I'm done here."
        plantButton.onPress = function () {
            dialogueCount++;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
            cutmode = false;

            if (leaf1isTrue == false) {
                naughty += 2
            }

            if (leaf2isTrue == false) {
                naughty += 2
            }

        }


        plantFinishedButton = new Clickable(-1000, 400);
        plantFinishedButton.width = 150;
        plantFinishedButton.height = 75;
        plantFinishedButton.textSize = 20;
        plantFinishedButton.text = "Call quits."
        plantFinishedButton.onPress = function () {
            plantComplete = true;
            taskCount++;
            console.log(taskCount);
            dialogueCount = 0;
            narratorMainText = "";
            narratorSubText = "";
            doingPlant = false;

        }

        timer = 0;
        showIcon = false;
        dialogueCount = 0;
        Sceneclear = false;
        narratorMainText = "";
        narratorSubText = "";



    }


    this.draw = function () {

        if (restart[5] == true) {
            restart[5] = false;
            character = new CharMove();
            characterSprite = static;

            cookiecomplete = false;
            doingCookie = false;

            washingComplete = false;
            doingWashing = false;

            shoeComplete = false;
            doingShoe = false;

            paintMode = false;
            hasInk = false;
            blackScrub = false;
            whiteScrub = false;
            redScrub = false;

            plantComplete = false;
            doingPlant = false;

            cutmode = false;
            taskCount = 0;
            endingfade = 0;
            endingTrigger = false;

            bedcount = 0;

            timer = 0;
            showIcon = false;
            dialogueCount = 0;
            Sceneclear = false;
            narratorMainText = "";
            narratorSubText = "";
            appleText = "";
            appleTimer = 0;
            appleDialogueCounter = 0;
            eaten = false;
            washingConstructor = new washingOperation();
        }

        background(0);
        timer++

        appleTimer++;

        if (appleTimer > 200 && seeingAppleEnding == false) {
            appleText = "";
        }


        if (taskCount == 0 && doingWashing == false) {
            background(0, 20);

            if (timer > 10 && timer < 20 && dialogueCount == 0 && taskCount == 0) {
                narratorMainText = playerName + " was filled with determination!";
            }
            if (timer > 30 && timer < 40 && dialogueCount == 0 && taskCount == 0) {
                narratorSubText = "Choosing which grand task to tackle first!";
            }
        }



        image(BG, 0, 100, width, height - 100);
        image(cookieJar, cookiePos.x, cookiePos.y, cookieSize[0], cookieSize[1]);
        image(washingMachine, washingPos.x, washingPos.y, washingSize[0], washingSize[1]);
        image(whiteShoe, shoePos.x, shoePos.y, shoeSize[0], shoeSize[1]);
        image(blackShoe, shoePos.x + shoeSize[0], shoePos.y, shoeSize[0], shoeSize[1]);
        image(redShoe, shoePos.x + 2 * shoeSize[0], shoePos.y, shoeSize[0], shoeSize[1]);
        image(bed, bedPos.x, bedPos.y, bedSize[0], bedSize[1]);

        if (seeingAppleEnding == false) {
            image(apple, applePos[0], applePos[1], appleSize[0], appleSize[1]);
        }



        if (character.pos.y > plantPos.y + plantSize[1] * 0.8 - 1) {
            image(plant, plantPos.x, plantPos.y, plantSize[0], plantSize[1]);
            if (leaf1isTrue == true) {
                image(leaf1, plantPos.x, plantPos.y + plantSize[1] / 10, plantSize[0] / 3, plantSize[1] / 7);
            }
            if (leaf2isTrue == true) {
                image(leaf2, plantPos.x + plantSize[0] * 0.8, plantPos.y + plantSize[1] * 0.23, plantSize[0] / 3, plantSize[1] / 7);
            }
            if (badLeaf1isTrue == true) {
                image(badLeaf1, plantPos.x + plantSize[0] * 0.05, plantPos.y + plantSize[1] * 0.26, plantSize[0] / 3, plantSize[1] / 7);
            }
            if (badLeaf2isTrue == true) {
                image(badLeaf2, plantPos.x + plantSize[0] * 0.93, plantPos.y + plantSize[1] * 0.03, plantSize[0] / 3, plantSize[1] / 7);
            }
        }

        if (washingConstructor != undefined && washingConstructor.soapCount > 6) {
            image(bubbles, washingPos.x, washingPos.y + washingSize[1] / 3, washingSize[0], washingSize[1]);
        }


        character.activate();

        if (character.pos.y < plantPos.y + plantSize[1] * 0.8 + 1) {
            image(plant, plantPos.x, plantPos.y, plantSize[0], plantSize[1]);
            if (leaf1isTrue == true) {
                image(leaf1, plantPos.x, plantPos.y + plantSize[1] / 10, plantSize[0] / 3, plantSize[1] / 7);
            }
            if (leaf2isTrue == true) {
                image(leaf2, plantPos.x + plantSize[0] * 0.8, plantPos.y + plantSize[1] * 0.23, plantSize[0] / 3, plantSize[1] / 7);
            }
            if (badLeaf1isTrue == true) {
                image(badLeaf1, plantPos.x + plantSize[0] * 0.05, plantPos.y + plantSize[1] * 0.26, plantSize[0] / 3, plantSize[1] / 7);
            }
            if (badLeaf2isTrue == true) {
                image(badLeaf2, plantPos.x + plantSize[0] * 0.93, plantPos.y + plantSize[1] * 0.03, plantSize[0] / 3, plantSize[1] / 7);
            }
        }


        if (endingTrigger == false) {
            if (doingCookie == true && cookiecomplete == false) {
                CookieConstructor.run();
            }
            if (doingWashing == true && washingComplete == false) {
                washingConstructor.run();
            }
            if (doingShoe == true && shoeComplete == false) {
                shoeConstructor.run();
            }
            if (doingPlant == true && plantComplete == false) {
                plantConstructor.run();
            }
        }

        if (taskCount == 4 && seeingAppleEnding == false) {
            narratorMainText = "All chores are finished.";
            narratorSubText = playerName + " was now ready to go to bed."
            console.log(taskCount)
        }
        if (showIcon == true) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }

        if (seeingAppleEnding == true) {
            AppleEndingOperation();
        }

        if (endingTrigger == true) {
            endingfade += 1.3;
            narratorMainText = "";
            narratorSubText = "";
        }

        push();

        noStroke();
        textFont(dtmFont);
        textSize(30);
        fill(186, 85, 211);
        text(narratorMainText, 15, 40);
        textSize(20);
        text(narratorSubText, 30, 70);
        fill(255, 40, 40);
        stroke(0);
        strokeWeight(3);
        text(appleText, applePos[0] - 400, applePos[1] - 20);

        pop();


        if (endingfade > 255) {
            mgr.showNextScene();
        }

        fill(0, endingfade);
        rect(0, 0, width, height);
    }

    this.mousePressed = function () {

        var ClickPos = createVector(mouseX, mouseY);

        if (doingCookie == false && doingWashing == false && doingShoe == false && doingPlant == false && seeingAppleEnding == false) {
            if (ClickPos.x > cookiePos.x && ClickPos.y > cookiePos.y && ClickPos.x < cookiePos.x + cookieSize[0] && ClickPos.y < cookiePos.y + cookieSize[1] && cookiecomplete == false) {
                console.log("cookieClicked!");
                CookieConstructor = new CookieOperation();
                doingCookie = true;

                narratorMainText = "";
                narratorSubText = "";
                appleText = "";
            }
            if (ClickPos.x > cookiePos.x && ClickPos.y > cookiePos.y && ClickPos.x < cookiePos.x + cookieSize[0] && ClickPos.y < cookiePos.y + cookieSize[1] && cookiecomplete == true) {
                narratorMainText = "What's done is done."
                narratorSubText = "In life, nobody can undo your accomplishments, nor your sins.";
            }

            if (ClickPos.x > washingPos.x && ClickPos.y > washingPos.y && ClickPos.x < washingPos.x + washingSize[0] && ClickPos.y < washingPos.y + washingSize[1] && washingComplete == false) {
                console.log("washingClikced!");
                doingWashing = true;

                narratorMainText = "";
                narratorSubText = "";
                appleText = "";
            }
            if (ClickPos.x > washingPos.x && ClickPos.y > washingPos.y && ClickPos.x < washingPos.x + washingSize[0] && ClickPos.y < washingPos.y + washingSize[1] && washingComplete == true) {
                narratorMainText = "What's done is done."
                narratorSubText = "In life, nobody can undo your accomplishments, nor your sins.";
            }

            if (ClickPos.x > shoePos.x && ClickPos.y > shoePos.y && ClickPos.x < shoePos.x + 3 * shoeSize[0] && ClickPos.y < shoePos.y + shoeSize[1] && shoeComplete == false) {
                console.log("shoeClikced!");
                shoeConstructor = new shoeOperation();
                doingShoe = true;

                narratorMainText = "";
                narratorSubText = "";
                appleText = "";
            }

            if (ClickPos.x > shoePos.x && ClickPos.y > shoePos.y && ClickPos.x < shoePos.x + 3 * shoeSize[0] && ClickPos.y < shoePos.y + shoeSize[1] && shoeComplete == true) {
                narratorMainText = "What's done is done."
                narratorSubText = "In life, nobody can undo your accomplishments, nor your sins.";
            }

            if (ClickPos.x > plantPos.x && ClickPos.y > plantPos.y && ClickPos.x < plantPos.x + 3 * plantSize[0] && ClickPos.y < plantPos.y + plantSize[1] && plantComplete == false) {
                console.log("plantClikced!");
                plantConstructor = new plantOperation();
                doingPlant = true;

                narratorMainText = "";
                narratorSubText = "";
                appleText = "";
            }

            if (ClickPos.x > plantPos.x && ClickPos.y > plantPos.y && ClickPos.x < plantPos.x + 3 * plantSize[0] && ClickPos.y < plantPos.y + plantSize[1] && plantComplete == true) {
                narratorMainText = "What's done is done."
                narratorSubText = "In life, nobody can undo your accomplishments, nor your sins.";
            }

            if (ClickPos.x > applePos[0] && ClickPos.y > applePos[0] && ClickPos.x < applePos[0] + appleSize[0] && ClickPos.y < applePos[1] + appleSize[1] && appleDialogueCounter < 4) // clicked apple
            {
                appleTimer = 0;

                if (taskCount < 4) {
                    appleReply();
                } else if (taskCount == 4 && naughty < 17) {
                    appleText = "          UNWORTHY! UNWORTHY! YOUR CHAOS IS PATHETIC! UNWORTHY!"
                } else if (taskCount == 4 && naughty > 16) {
                    if (appleDialogueCounter == 0) {
                        appleText = "                                 YES..."
                    }
                    if (appleDialogueCounter == 1) {
                        appleText = "          YES YES YES YES YES YES YES YES YES YES YES YES YES YES"
                    }
                    if (appleDialogueCounter == 2) {
                        appleText = "    YOUR MAYHAM WAS DELICOUS. YOU ARE WORTHY. I ACCEPT YOUR ENTORPHY"
                    }
                    if (appleDialogueCounter == 3) {
                        seeingAppleEnding = true;
                    }

                    //leads to apple ending

                    appleDialogueCounter++;
                }

            }

        }

        if (appleDialogueCounter == 8 && ClickPos.x > applePos[0] && ClickPos.y > applePos[0] && ClickPos.x < applePos[0] + appleSize[0] && ClickPos.y < applePos[1] + appleSize[1]) //eating the apple!
        {
            eaten = true;
            narratorSave = true;
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";

            if (seeingAppleEnding == true) {
                appleTimer = 0;
                appleDialogueCounter++;

            }

        }



        // painting interactions

        if (paintMode == true && ClickPos.x > inkPos.x && ClickPos.y > inkPos.y && ClickPos.x < inkPos.x + inkSize[0] && ClickPos.y < inkPos.y + inkSize[1]) {
            hasInk = true;
            shoeScrub = loadImage("assets/shoes/inkedShoeBrush.png");
        }

        if (paintMode == true && hasInk == true && ClickPos.x > shoeBigPos.x && ClickPos.x < shoeBigPos.x + shoeBigSize[0] && ClickPos.y > shoeBigPos.y && ClickPos.y < shoeBigPos.y + shoeBigSize[1] && whiteScrub == false) {
            whiteScrub = true;
            whiteShoe = loadImage("assets/shoes/dirtyWhiteShoe.png")
        }

        if (paintMode == true && hasInk == true && ClickPos.x > shoeBigPos.x + shoeBigSize[0] && ClickPos.x < shoeBigPos.x + shoeBigSize[0] * 2 && ClickPos.y > shoeBigPos.y && ClickPos.y < shoeBigPos.y + shoeBigSize[1] && blackScrub == false) {
            blackScrub = true;
            blackShoe = loadImage("assets/shoes/cleanBlackShoe.png")
        }

        if (paintMode == true && hasInk == true && ClickPos.x > shoeBigPos.x + shoeBigSize[0] * 2 && ClickPos.x < shoeBigPos.x + shoeBigSize[0] * 3 && ClickPos.y > shoeBigPos.y && ClickPos.y < shoeBigPos.y + shoeBigSize[1] && redScrub == false) {
            redScrub = true;
            redShoe = loadImage("assets/shoes/dirtyRedShoe.png")
        }

        // painting interactions

        // plant interactions

        if (cutmode == true) {
            if (leaf1isTrue == true && ClickPos.x > plantBigPos.x && ClickPos.x < plantBigPos.x + plantBigSize[0] / 3 && ClickPos.y > plantBigPos.y + plantBigSize[1] / 10 && ClickPos.y < plantBigPos.y + plantBigSize[1] / 10 + plantBigSize[1] / 7) {
                leaf1isTrue = false;
            }
            if (leaf2isTrue == true && ClickPos.x > plantBigPos.x + plantBigSize[0] * 0.8 && ClickPos.x < plantBigPos.x + plantBigSize[0] * 0.8 + plantBigSize[0] / 3 && ClickPos.y > plantBigPos.y + plantBigSize[1] * 0.23 && ClickPos.y < plantBigPos.y + plantBigSize[1] * 0.23 + plantBigSize[1] / 7) {
                leaf2isTrue = false;
            }
            if (badLeaf1isTrue == true && ClickPos.x > plantBigPos.x + plantBigSize[0] * 0.05 && ClickPos.x < plantBigPos.x + plantBigSize[0] * 0.05 + plantBigSize[0] / 3 && ClickPos.y > plantBigPos.y + plantBigSize[1] * 0.26 && ClickPos.y < plantBigPos.y + plantBigSize[1] * 0.26 + plantBigSize[1] / 7) {
                badLeaf1isTrue = false;
            }
            if (badLeaf2isTrue == true && ClickPos.x > plantBigPos.x + plantBigSize[0] * 0.93 && ClickPos.x < plantBigPos.x + plantBigSize[0] * 0.93 + plantBigSize[0] / 3 && ClickPos.y > plantBigPos.y + plantBigSize[1] * 0.03 && ClickPos.y < plantBigPos.y + plantBigSize[1] * 0.03 + plantBigSize[1] / 7) {
                badLeaf2isTrue = false;
            }
        }


        // plant interactions

        if (ClickPos.x > bedPos.x && ClickPos.x < bedPos.x + bedSize[0] && ClickPos.y > bedPos.y && ClickPos.y < bedPos.y + bedSize[1] && seeingAppleEnding == false) {
            if (taskCount == 0) {
                if (bedcount == 0) {
                    timer = 500;
                    narratorMainText = playerName + " had no business with this bed now.";
                    narratorSubText = "";
                }
                if (bedcount == 1) {
                    narratorMainText = playerName + " thought sleeping is overrated.";
                    narratorSubText = "Especially when there were chores to finish.";
                }
                if (bedcount == 3) {
                    narratorMainText = "Why do you keep clicking the bed?";
                    narratorSubText = "";
                }
                if (bedcount == 4) {
                    narratorMainText = "You barely started the actual game.";
                    narratorSubText = "I assure you, sleeping isn't a very exciting activity.";
                }
                if (bedcount == 5) {
                    narratorMainText = "Seriously? Going straight to bed?";
                    narratorSubText = "Last chance, let's try something actually interesting instead.";
                }
                if (bedcount == 6) {
                    narratorMainText = "Real last chance.";
                    narratorSubText = "Come on. We spent hours making this game. Please?";
                }
                if (bedcount == 7) {
                    narratorMainText = "Real, real last chance!";
                    narratorSubText = "Think of all the fun dialoge and heartwarming story you are missing!";
                }
                if (bedcount == 8) {
                    narratorMainText = "Real, real, truly real last chance!";
                    narratorSubText = "Are we really doing this? really?";
                }
                if (bedcount == 9) {
                    lazy = true;
                    endingTrigger = true; // lazy ending
                }

                bedcount++;

            } else if (taskCount == 4) {
                endingTrigger = true; // normal endings
            } else {
                narratorMainText = "There is no rest for the unworthy.";
                narratorSubText = "Finish all chores. Then we'll talk.";
            }
        }

        if (showIcon == true) {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";

            if (seeingAppleEnding == true) {
                appleTimer = 0;
                appleDialogueCounter++;

            }
        }

        if (Sceneclear == true) {
            mgr.showNextScene();
        }
    }

    function CharMove() {

        this.velocity = createVector(0, 0);
        this.maxSpeed = 2.5; //maximum speed for the character
        this.pos = createVector(320, 400) //location for the character
        this.acceleration = createVector(0, 0);

        this.activate = function () {

            //calls all necessary functions
            this.move(); // moves the vector
            this.borders(); // adjusts the borders. character cannot follow
            this.drawChar(); //draws character itself

        }

        this.drawChar = function () {

            if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < 30) {
                characterSprite = static;
            } else {

                if (this.pos.y > mouseY && this.pos.x < mouseX) {
                    characterSprite = upright;
                } else if (this.pos.y > mouseY && this.pos.x > mouseX) {
                    characterSprite = upleft;
                } else if (this.pos.y < mouseY && this.pos.x < mouseX) {
                    characterSprite = downright;
                } else if (this.pos.y < mouseY && this.pos.x > mouseX) {
                    characterSprite = downleft;
                }

            }

            image(characterSprite, this.pos.x - 50, this.pos.y - 200, playerSize[0], playerSize[1]);
        }

        this.move = function () {

            var mouse = createVector(mouseX, mouseY);
            var diff = p5.Vector.sub(mouse, this.pos);

            diff.normalize();
            diff.mult(0.1);
            this.acceleration = diff;
            this.velocity.add(this.acceleration);
            this.velocity.limit(this.maxSpeed);

            if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < 150) {
                var distancing = dist(this.pos.x, this.pos.y, mouseX, mouseY)
                var multValue = map(distancing, 0, 150, 0.8, 1);
                this.velocity.mult(multValue);
                this.pos.add(this.velocity);
            } else {
                this.pos.add(this.velocity);
            }
        }

        this.borders = function () {

            if (this.pos.y < 330) {
                this.pos.y = 330;
            }
            if (this.pos.y > height - 40) {
                this.pos.y = height - 40;
            }
            if (this.pos.x < 90) {
                this.pos.x = 90;
            }
            if (this.pos.x > width - 90) {
                this.pos.x = width - 90;
            }

            //walls for the washing machine
            if (this.pos.y > washingPos.y && this.pos.x < washingPos.x + washingSize[0] + 60 && this.pos.y < washingPos.y + washingSize[1] - 10) {
                this.pos.y = washingPos.y;
            }
            if (this.pos.y < washingPos.y + washingSize[1] + 40 && this.pos.x < washingPos.x + washingSize[0] + 60 && this.pos.y > washingPos.y + 10) {
                this.pos.y = washingPos.y + washingSize[1] + 40;
            }
            if (this.pos.y > washingPos.y && this.pos.y < washingPos.y + washingSize[1] + 40 && this.pos.x < washingPos.x + washingSize[0] + 63) {
                this.pos.x = washingPos.x + washingSize[0] + 63;
            }

            //walls for plant

            if (this.pos.y > plantPos.y + plantSize[1] * 0.74 && this.pos.x < plantPos.x + plantSize[0] + 30 && this.pos.y < plantPos.y + plantSize[1] - 10) {
                this.pos.y = plantPos.y + plantSize[1] * 0.74;
            }
            if (this.pos.y < plantPos.y + plantSize[1] + 20 && this.pos.x < plantPos.x + plantSize[0] + 30 && this.pos.y > plantPos.y + plantSize[1] * 0.74 + 10) {
                this.pos.y = plantPos.y + plantSize[1] + 20;
            }
            if (this.pos.y > plantPos.y + plantSize[1] * 0.74 && this.pos.y < plantPos.y + plantSize[1] + 20 && this.pos.x < plantPos.x + plantSize[0] + 43) {
                this.pos.x = plantPos.x + plantSize[0] + 43;
            }

        }

    }

    function appleReply() {
        var JokeNumber;
        JokeNumber = floor(random(0, 22)); // second number is the total number of jokes

        if (JokeNumber == 0) {
            appleText = "                 An apple a day keeps the narrator away!";
        } else if (JokeNumber == 1) {
            appleText = "                   Blood! Gore! and fresh apple juice!"
        } else if (JokeNumber == 2) {
            appleText = "             Do you dare comprehend my overwhelming vitamins?"
        } else if (JokeNumber == 3) {
            appleText = "               Calories: 52, Water: 86%, Protein: 0.3 grams."
        } else if (JokeNumber == 4) {
            appleText = "          Carbs: 13.8 grams, Sugar: 10.4 grams, Fiber: 2.4 grams"
        } else if (JokeNumber == 5) {
            appleText = "    Ultimate despair and chaos! In travel size inside your lunchbox!"
        } else if (JokeNumber == 6) {
            appleText = "               My seeds sow terror and horror! Literally!"
        } else if (JokeNumber == 7) {
            appleText = "                The pie is only made whole by the apple!"
        } else if (JokeNumber == 8) {
            appleText = "                Chaos! Chaos! It crumbles like apple pie!"
        } else if (JokeNumber == 9) {
            appleText = "                 Sink and drown, like an apple in custard!"
        } else if (JokeNumber == 10) {
            appleText = "                            TKrhk WHGdkGKsl?"
        } else if (JokeNumber == 11) {
            appleText = "                Pray, it does not take too juicy a form!"
        } else if (JokeNumber == 12) {
            appleText = "              The dinosaurs died when an apple hit the earth!"
        } else if (JokeNumber == 13) {
            appleText = "                  There is no santa, only red apples!"
        } else if (JokeNumber == 14) {
            appleText = "                The temptation of evil is fresh and juicy!"
        } else if (JokeNumber == 15) {
            appleText = "                       RHKdlfDML DHKDdms TKrhkfkRH!"
        } else if (JokeNumber == 16) {
            appleText = "          Worship my metalic image, from the back of your phones!"
        } else if (JokeNumber == 17) {
            appleText = "                  Where is your apple-ly ever after?"
        } else if (JokeNumber == 18) {
            appleText = "               The evil inside me! It wriggles like a worm!"
        } else if (JokeNumber == 19) {
            appleText = "              Like a growing tree, my textbox shall rise up!"
        } else if (JokeNumber == 20) {
            appleText = "               HEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHE"
        } else if (JokeNumber == 21) {
            appleText = "             Agony! Pain! Panic! Lethal! Exterminate! APPLE!"
        }
    }


    function AppleEndingOperation() {
        var vibrate;
        var vibrate2;
        this.displacement;

        narratorMainText = "";
        narratorSubText = "";

        vibrate = random(0, 2);
        vibrate2 = random(0, 2);

        if (appleDialogueCounter == 4) {
            this.displacement = 0;
            appleText = "          THE TIME HAS COME. I HAVE BEEN BECKONED. I SHALL ANSWER."

            if (appleTimer > 70) {
                narratorMainText = "What the?";
                narratorSubText = "";
            }

            if (appleTimer > 150) {
                showIcon = true;
            }
        }

        if (appleDialogueCounter == 5) {
            vibrate = random(0, 10);
            vibrate2 = random(0, 10);

            narratorMainText = "What the?";
            narratorSubText = "";
            appleText = "           DESTROY THE FALSE GOD. THE FRESHEST FRUIT SHALL ASCEND."

            if (appleTimer > 150) {
                showIcon = true;
            }
        }

        if (appleDialogueCounter > 5) {
            vibrate = random(0, 10);
            vibrate2 = random(0, 10);
            if (this.displacement < 120) {
                displacement++;

            }

            if (narratorSave == false) {
                if (appleDialogueCounter > 7) {
                    image(lightning, 100 + vibrate * 3, 0, 500, 500);
                }

                if (appleDialogueCounter > 6) {
                    image(magic, applePos[0] - vibrate2 - displacement, applePos[1] - vibrate - displacement, displacement * 2.7, displacement * 2.8)
                }


                image(apple2, applePos[0] + vibrate + displacement, applePos[1] + vibrate2, appleSize[0], appleSize[1]);
                image(apple3, applePos[0] + vibrate - displacement, applePos[1] + vibrate2, appleSize[0], appleSize[1]);
                image(apple4, applePos[0] + vibrate, applePos[1] + vibrate2 + displacement, appleSize[0], appleSize[1]);
                image(apple5, applePos[0] + vibrate, applePos[1] + vibrate2 - displacement, appleSize[0], appleSize[1]);
            }



            if (appleDialogueCounter == 6) {
                appleText = "         YOUR JUICE SHALL SOAK THE EARTH. GIVING BIRTH TO NEW APPLES"

                if (appleTimer > 70) {
                    narratorMainText = "Oh gosh!";

                }
                if (appleTimer > 150) {
                    narratorSubText = "What in heavens have you done?!";
                    showIcon = true;
                }
            }

            if (appleDialogueCounter == 7) {
                appleText = "           I AM NOURISHED WITH CHAOS. AND SOON ALL WILL BE CHAOS"

                if (appleTimer > 70) {
                    narratorMainText = playerName + "! I'm sorry for being so mean!";

                }
                if (appleTimer > 150) {
                    narratorSubText = "Please save me! Do something! Just eat that juicy son of a tree!";

                }
                if (appleTimer > 220) {
                    showIcon = true;
                }
            }

            if (appleDialogueCounter == 8) {
                appleText = "DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE DIE";

                narratorMainText = "HELP ME! ARRRRRRRRRRRRRGGGGGG"
                narratorSubText = "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!";

                if (appleTimer > 70) {
                    narratorMainText = "HELP mE! ARrRRR2RRgRRRGGgGG";
                    narratorSubText = "NOOOOOoOOOOOOOOooOOOOoOOOOOOOOoOOOOOOoOOO!";

                }
                if (appleTimer > 150) {
                    narratorMainText = "HelP m%E! R$R2g#RGGgGG";
                    narratorSubText = "NOOOoOO?OOoOOOOoOswOO6O@OOO%OOOOOO!";

                }
                if (appleTimer > 210) {
                    narratorMainText = "HlP %E!@$R{gGGgG#";
                    narratorSubText = "NO<OOO!OoOOsw-O_O6O@OOoOO2!";

                }
                if (appleTimer > 280) {
                    narratorMainText = "H@ m%~gG#";
                    narratorSubText = "%O<Oo**?Oo3F2z";


                }
                if (appleTimer > 350) {
                    narratorMainText = "JW^";
                    narratorSubText = "zv>/a";



                }
                if (appleTimer > 420) {
                    dialogueCount++;
                    showIcon = false;
                    timer = 0;
                    narratorMainText = "";
                    narratorSubText = "";

                    if (seeingAppleEnding == true) {
                        appleTimer = 0;
                        appleDialogueCounter++;

                    }

                }
            }

            if (appleDialogueCounter == 9 && narratorSave == false) {
                endingTrigger = true;
            }
            if (appleDialogueCounter == 9 && narratorSave == true) {
                if (eaten == true) {
                    apple = loadImage("assets/eatenApple.png");
                    eaten = false;
                }

                vibrate = random(0, 20);
                vibrate2 = random(0, 20);

                appleText = "      MY NUTRITIOUS FLESH DEFILED BY A MERE MORTAL? IMPOSSIBLE!!!";

                if (appleTimer > 150) {
                    endingTrigger = true;

                    if (appleSize[0] > 0) {
                        appleSize[0] = appleSize[0] - 0.7;
                        appleSize[1] = appleSize[1] - 0.7;
                    }

                }

            }

        }




        image(apple, applePos[0] + vibrate, applePos[1] + vibrate2, appleSize[0], appleSize[1]);

    }


    function CookieOperation() {
        this.CookieCount = 0;
        this.alphaNumber = 0;
        this.jarSawp = false;


        this.run = function () {
            fill(70, this.alphaNumber);
            this.alphaNumber = this.alphaNumber + 5;
            rect(20, 120, width - 40, height - 150);

            if (this.alphaNumber > 255 && dialogueCount < 2) {
                image(backgroundStillImage, 20, 120, width - 40, height - 150);
                image(cookieJar, 300, 200, 300, 300);


                if (this.CookieCount == 0 && dialogueCount == 0) {
                    if (taskCount == 0) {

                        narratorMainText = "Ugh, why am I not surprised."
                        narratorSubText = "Obviously going for the cookies first."
                        showIcon = true;

                    } else {

                        if (timer > 80) {
                            narratorMainText = "After doing some chores,"
                        }
                        if (timer > 150) {
                            narratorSubText = playerName + " was feeling very entitled for some cookies."
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }

                }

                if (this.CookieCount == 0 && dialogueCount == 1) {
                    if (timer > 80) {
                        narratorMainText = playerName + " was allowed to eat ONE cookie. "
                    }
                    if (timer > 150) {
                        narratorSubText = "In case you didn’t know, it’s the number between 0 and 2."
                    }

                }


                if ((dialogueCount == 1 && this.CookieCount < 7 && timer > 100) || (this.CookieCount == 0 && dialogueCount == 1 && timer > 220)) {
                    push();

                    cookieEatButton.draw();
                    cookieEatButton.locate(150, 700);
                    if (this.CookieCount > 0) {
                        cookieQuitButton.draw();
                        cookieQuitButton.locate(600, 700);
                    }


                    pop()

                }

                if (this.CookieCount == 1) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }

                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie1.png")
                        this.jarSawp = false;
                    }

                    narratorMainText = "Horray! You ate a cookie!"
                    narratorSubText = "Congratulations! Your digestive organs are working!"
                }

                if (this.CookieCount == 2) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }
                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie2.png")
                        this.jarSawp = false;
                    }

                    narratorMainText = "Oops? You ate another cookie!"
                    narratorSubText = "Nice people would be ashamed for this mistake!"
                }

                if (this.CookieCount == 3) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }
                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie3.png")
                        this.jarSawp = false;
                        naughty++;
                    }

                    narratorMainText = "Uh oh! Someone’s going to have a tummy ache!"
                    narratorSubText = "Temptation is sweet. Your diabetes won’t be."
                }
                if (this.CookieCount == 4) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }
                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie4.png")
                        this.jarSawp = false;
                    }

                    narratorMainText = "HAHA, very funny. Now stop."
                    narratorSubText = ""
                }
                if (this.CookieCount == 5) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }
                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie5.png")
                        this.jarSawp = false;
                        naughty++;
                    }

                    narratorMainText = "This is not nice! This is not nice!"
                    narratorSubText = ""
                }
                if (this.CookieCount == 6) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }
                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie6.png")
                        this.jarSawp = false;
                        naughty++;
                    }

                    narratorMainText = "You’re doing this on purpose, aren’t you?"
                    narratorSubText = "Have mercy! At least let the last one live!"
                }
                if (this.CookieCount == 6) {
                    if (timer < 80) {
                        image(cookieEatScene, 265, 170, 400, 400);
                    }
                    if (this.jarSawp == true) {
                        cookieJar = loadImage("assets/cookies/cookie6.png")
                        this.jarSawp = false;
                        naughty++;
                    }

                    narratorMainText = "Have mercy! At least let the last one live!"
                    narratorSubText = ""
                }
                if (this.CookieCount == 7) {

                    if (this.jarSawp == true) {
                        narratorMainText = ""
                        narratorSubText = ""
                        cookieJar = loadImage("assets/cookies/cookie7.png")
                        this.jarSawp = false;
                        naughty++;
                    }


                    if (timer > 80) {
                        narratorMainText = "You just had to empty the jar."
                    }
                    if (timer > 150) {
                        narratorSubText = "The jar was full, but now it's gone. Just gone."
                    }
                    if (timer > 220) {
                        showIcon = true;
                    }

                }

            }

            if (dialogueCount > 1) {
                image(backgroundStillImage, 20, 120, width - 40, height - 150);
                image(cookieBadScene, 265, 170, 400, 400);
            }

            if (dialogueCount == 2) {
                if (timer > 80) {
                    narratorMainText = "Now see this gloomy image";

                }
                if (timer > 150) {
                    narratorSubText = "to realize what a terrible thing you’ve done.";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }

            if (dialogueCount == 3) {
                if (timer > 80) {
                    narratorMainText = "Thanks to you,";

                }
                if (timer > 150) {
                    narratorSubText = "we’re stuck looking at this sad image to make you feel bad.";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }

            if (dialogueCount == 4) {
                if (timer > 80) {
                    narratorMainText = "Think about it!";

                }
                if (timer > 150) {
                    narratorSubText = "You could have fed it to kittens! Or the homeless! Or HOMELESS KITTENS!";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }

            if (dialogueCount == 5) {
                if (timer > 80) {
                    narratorMainText = "NOW WHAT WILL THE HOMELESS KITTENS EAT?";

                }
                if (timer > 150) {
                    narratorSubText = "Feeling guilty now? Good!";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }

            if (dialogueCount == 6) {
                if (timer > 80) {
                    narratorMainText = "The cookies are gone, but the game must continue.";

                }
                if (timer > 150) {
                    narratorSubText = "Be nice, and agonize over what evil you have brought upon this world.";
                }
                if (timer > 220) {
                    push();
                    cookieQuitButton.draw();
                    cookieQuitButton.locate(600, 700);
                    pop();
                }
            }



        }



    }

    function washingOperation() {
        this.soapCount = 0;
        this.alphaNumber = 0;
        this.soapSawp = false;
        this.results = false;


        this.run = function () {
            fill(70, this.alphaNumber);
            this.alphaNumber = this.alphaNumber + 5;
            rect(20, 120, width - 40, height - 150);

            if (this.alphaNumber > 255 && this.results == false) {
                image(backgroundStillImage, 20, 120, width - 40, height - 150);
                image(washingMachine, 300, 200, 300, 300);

                push();
                if (timer > 100) {
                    if (this.soapCount < 8) {
                        soapButton.draw();
                        soapButton.locate(150, 700);
                    }
                    if (this.soapCount > 0) {
                        runWashingMachingButton.draw();
                        runWashingMachingButton.locate(600, 700);
                    }
                }



                pop();


                if (this.soapCount == 0 && dialogueCount == 0) {

                    narratorMainText = "Insert some soap, run the machine, and it’s done!"
                    narratorSubText = "It’s so easy, even monkeys could do it."
                }
                if (this.soapCount == 1) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine1.png")
                        this.soapSawp = false;
                    }

                    narratorMainText = "Now push the start button and the job is done!"
                    narratorSubText = ""
                }
                if (this.soapCount == 2) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine2.png")
                        this.soapSawp = false;
                    }

                    narratorMainText = "You want your socks extra clean? Whatever."
                    narratorSubText = ""
                }
                if (this.soapCount == 3) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine3.png")
                        this.soapSawp = false;
                    }

                    narratorMainText = "Did you know?"
                    narratorSubText = "using too much soap causes water pollution?"
                }
                if (this.soapCount == 4) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine4.png")
                        this.soapSawp = false;
                        naughty++;
                    }

                    narratorMainText = "Think of all the fish you’re killing."
                    narratorSubText = "They might come back as fish ghosts to haunt you."
                }
                if (this.soapCount == 5) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine5.png")
                        this.soapSawp = false;
                        naughty++;
                    }

                    narratorMainText = "Ok, you proved your point."
                    narratorSubText = "You’re an expert at inserting soap. How amazing."
                }
                if (this.soapCount == 6) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine6.png")
                        this.soapSawp = false;
                        naughty++;
                    }

                    narratorMainText = "Seriously, that’s enough."
                    narratorSubText = ""
                }
                if (this.soapCount == 7) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine7.png")
                        this.soapSawp = false;
                        naughty++;
                    }

                    narratorMainText = "What are you doing?"
                    narratorSubText = ""
                }
                if (this.soapCount == 8) {
                    if (this.soapSawp == true) {
                        washingMachine = loadImage("assets/washingMachine/washingMachine8.png")
                        this.soapSawp = false;
                        naughty++;
                    }

                    narratorMainText = "Great. Good job, you’ve used the entire bottle."
                    narratorSubText = "It's not like someone has to pay for it, RIGHT?"
                }
            }

            if (this.results == true) {
                image(backgroundStillImage, 20, 120, width - 40, height - 150);
                image(washingMachine, 300, 200, 300, 300);
                if (this.soapCount > 6) {
                    image(bubbles, 300, 300, 300, 200);
                }


                if (dialogueCount == 0) {
                    if (this.soapCount < 4) {
                        if (timer > 80) {
                            narratorMainText = "Great! Such an adequately mediocre achievement!";

                        }
                        if (timer > 150) {
                            narratorSubText = "I know you did your absolute best. You should be proud of yourself.";
                        }
                        if (timer > 220) {
                            push();
                            finishWashingButton.draw();
                            finishWashingButton.locate(375, 700);
                            pop();
                        }
                    }
                    if (this.soapCount > 3 && this.soapCount < 7) {
                        if (timer > 80) {
                            narratorMainText = "Congratulations.";

                        }
                        if (timer > 150) {
                            narratorSubText = "You’ve contributed to environmental pollution!";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (this.soapCount > 6) {
                        if (timer > 80) {
                            narratorMainText = "Oh gosh!";

                        }
                        if (timer > 150) {
                            narratorSubText = "It's overflowing! Bubbles spouting everywhere!";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }

                }
                if (dialogueCount == 1) {
                    if (this.soapCount > 3 && this.soapCount < 7) {
                        if (timer > 80) {
                            narratorMainText = "Pat yourself on your back,";

                        }
                        if (timer > 150) {
                            narratorSubText = playerName + "! Slayer of innocent fish! Bane of natural environment!";
                        }
                        if (timer > 220) {
                            push();
                            finishWashingButton.draw();
                            finishWashingButton.locate(375, 700);
                            pop();
                        }
                    }

                    if (this.soapCount > 6) {
                        if (timer > 80) {
                            narratorMainText = "Were you this desperate for a bubble bath?";

                        }
                        if (timer > 150) {
                            narratorSubText = "The simplest task, and you still managed to find a way to mess it up!";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                }

                if (dialogueCount == 2) {
                    if (this.soapCount > 6) {
                        if (timer > 80) {
                            narratorMainText = "Are you happy now? ARE YOU HAPPY?";

                        }
                        if (timer > 150) {
                            narratorSubText = "At least you are ACTUALLY clean now.";
                        }
                        if (timer > 220) {
                            push();
                            finishWashingButton.draw();
                            finishWashingButton.locate(375, 700);
                            pop();
                        }
                    }
                }
            }
        }
    }


    function shoeOperation() {
        this.alphaNumber = 0;


        this.run = function () {
            fill(70, this.alphaNumber);
            this.alphaNumber = this.alphaNumber + 5;
            rect(20, 120, width - 40, height - 150);

            if (this.alphaNumber > 255) {
                image(backgroundStillImage, 20, 120, width - 40, height - 150);

                image(whiteShoe, shoeBigPos.x, shoeBigPos.y, shoeBigSize[0], shoeBigSize[1]);
                image(blackShoe, shoeBigPos.x + shoeBigSize[0], shoeBigPos.y, shoeBigSize[0], shoeBigSize[1]);
                image(redShoe, shoeBigPos.x + shoeBigSize[0] * 2, shoeBigPos.y, shoeBigSize[0], shoeBigSize[1]);
                if (dialogueCount == 0) {
                    narratorMainText = "Nice people keep their shoes nice and shiny!";
                    narratorSubText = "";
                    showIcon = true;
                }
                if (dialogueCount == 1) {

                    if (timer > 80) {
                        narratorMainText = "First impressions are very important!";

                    }
                    if (timer > 150) {
                        narratorSubText = "Who knows when you might suddenly be invited to a royal ball or stuff?";
                    }
                    if (timer > 220) {
                        showIcon = true;
                    }

                }
                if (dialogueCount == 2) {
                    if (timer > 80) {
                        narratorMainText = "Now grab a shoe brush, and get scrubbing!";

                    }
                    if (timer > 150) {
                        narratorSubText = "I want that black shoe shining like the sun in July!";
                    }
                    if (timer > 220) {
                        showIcon = true;
                    }
                }
                if (dialogueCount == 3) {
                    if (timer > 80) {
                        narratorMainText = "Polish the black shoe with shoe wax.";

                    }
                    if (timer > 150) {
                        narratorSubText = "and I mean 'only' the black one.";
                    }
                    if (timer > 220) {
                        paintMode = true;
                        image(shoeInk, inkPos.x, inkPos.y, inkSize[0], inkSize[1]);
                        image(shoeScrub, mouseX, mouseY, 120, 120);

                        if (blackScrub == true) {
                            push();
                            shoeButton.draw();
                            shoeButton.locate(600, 600);
                            pop();
                        }
                    }
                }
                if (dialogueCount > 3) {
                    if (redScrub == true || whiteScrub == true) // naughty
                    {
                        if (dialogueCount == 4) {
                            if (timer > 80) {
                                narratorMainText = "WHY?"
                            }
                            if (timer > 150) {
                                narratorSubText = "WHHHHHYYYYYY?";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }

                        if (dialogueCount == 5) {
                            if (timer > 80) {
                                narratorMainText = "Do you think it’s arts and craft time?"
                            }
                            if (timer > 150) {
                                narratorSubText = "Are you a five year old with a crayon?";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 6) {
                            if (timer > 80) {
                                narratorMainText = "At least something pleasant comes from art."
                            }
                            if (timer > 150) {
                                narratorSubText = "And, no. This does not count as modern art.";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 7) {
                            if (timer > 80) {
                                narratorMainText = "What? You say there are no rules for art?"
                            }
                            if (timer > 150) {
                                narratorSubText = "";
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 8) {
                            if (timer > 80) {
                                narratorMainText = "Oh, so now I’m the intolerant bad guy? "
                            }
                            if (timer > 150) {
                                narratorSubText = "You might as well tape a banana to a wall and sell it for millions.";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 9) {
                            if (timer > 80) {
                                narratorMainText = "You can’t be more wrong!"
                            }
                            if (timer > 150) {

                                narratorSubText = "I’m as patent and understanding as any fictional narrator can get!";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 10) {
                            if (timer > 80) {
                                narratorMainText = "Well, but not enough to overlook this mess. "
                            }
                            if (timer > 150) {
                                push();
                                shoeFinishedButton.draw();
                                shoeFinishedButton.locate(375, 700);
                                pop();
                            }

                        }
                    } else {
                        if (dialogueCount == 4) {
                            if (timer > 80) {
                                narratorMainText = "Good job, Cinderella!"
                            }
                            if (timer > 150) {
                                narratorSubText = "Your unmatched talent at scrubbing proves you were born for this!";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 5) {
                            if (timer > 80) {
                                narratorMainText = "I just hope,"
                            }
                            if (timer > 150) {
                                narratorSubText = "all you're good for doesn't go away after midnight.";
                            }
                            if (timer > 220) {
                                showIcon = true;
                            }
                        }
                        if (dialogueCount == 6) {
                            if (timer > 80) {
                                narratorMainText = "Well, honestly it wouldn't be much of a change."
                            }
                            if (timer > 150) {
                                push();
                                shoeFinishedButton.draw();
                                shoeFinishedButton.locate(375, 700);
                                pop();
                                narratorSubText = "";
                            }
                        }

                    }
                }



            }
        }


    }

    function plantOperation() {
        this.alphaNumber = 0;

        this.run = function () {
            fill(70, this.alphaNumber);
            this.alphaNumber = this.alphaNumber + 5;
            rect(20, 120, width - 40, height - 150);
            if (this.alphaNumber > 255) {
                image(backgroundStillImage, 20, 120, width - 40, height - 150);
                image(plant, plantBigPos.x, plantBigPos.y, plantBigSize[0], plantBigSize[1]);
                if (leaf1isTrue == true) {
                    image(leaf1, plantBigPos.x, plantBigPos.y + plantBigSize[1] / 10, plantBigSize[0] / 3, plantBigSize[1] / 7);
                }
                if (leaf2isTrue == true) {
                    image(leaf2, plantBigPos.x + plantBigSize[0] * 0.8, plantBigPos.y + plantBigSize[1] * 0.23, plantBigSize[0] / 3, plantBigSize[1] / 7);
                }
                if (badLeaf1isTrue == true) {
                    image(badLeaf1, plantBigPos.x + plantBigSize[0] * 0.05, plantBigPos.y + plantBigSize[1] * 0.26, plantBigSize[0] / 3, plantBigSize[1] / 7);
                }
                if (badLeaf2isTrue == true) {
                    image(badLeaf2, plantBigPos.x + plantBigSize[0] * 0.93, plantBigPos.y + plantBigSize[1] * 0.03, plantBigSize[0] / 3, plantBigSize[1] / 7);
                }

                if (dialogueCount == 0) {
                    narratorMainText = "Look at that messy plant!";
                    narratorSubText = "Even towards plants, nice people should be considerate."
                    showIcon = true;
                }

                if (dialogueCount == 1) {
                    if (timer > 80) {
                        narratorMainText = "Using scissors is serious business.";
                    }
                    if (timer > 150) {
                        narratorSubText = "This is a bad idea. Perhaps I should be concerned about this...";
                    }
                    if (timer > 220) {
                        showIcon = true;
                    }
                }
                if (dialogueCount == 2) {
                    if (timer > 80) {
                        narratorMainText = "Are thou worthy,";
                    }
                    if (timer > 150) {
                        narratorSubText = "to wield the mighty double-edged blade?";
                    }
                    if (timer > 220) {
                        showIcon = true;
                    }
                }
                if (dialogueCount == 3) {
                    if (timer > 80) {
                        narratorMainText = "ARE THOU WORTHY?";
                    }
                    if (timer > 150) {
                        showIcon = true;
                        narratorSubText = "";
                    }
                }
                if (dialogueCount == 4) {
                    if (timer > 80) {
                        narratorMainText = "I trust you with great responsibility.";
                    }
                    if (timer > 150) {
                        narratorSubText = "Be a nice person, and don’t let me down.";
                    }
                    if (timer > 220) {

                        showIcon = true;
                    }
                }
                if (dialogueCount == 5) {
                    if (timer > 80) {
                        narratorMainText = "Think of this as giving the plant a haircut.";
                    }
                    if (timer > 150) {
                        narratorSubText = "Cut off the dead leaves, so the healthy ones can grow!";
                    }
                    if (timer > 220) {
                        image(sci, mouseX - 50, mouseY - 50, 150, 150);
                        cutmode = true;
                        if (badLeaf1isTrue == false && badLeaf2isTrue == false) {
                            push();
                            plantButton.draw();
                            plantButton.locate(375, 700);
                            pop();
                        }
                    }
                }
                if (leaf1isTrue == false && leaf2isTrue == false) {
                    if (dialogueCount == 6) {
                        if (timer > 80) {
                            narratorMainText = "Let me ask you a very serious question.";
                        }
                        if (timer > 150) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 7) {
                        if (timer > 80) {
                            narratorMainText = "Do you think bald hair is cool?";
                        }
                        if (timer > 150) {
                            narratorSubText = "Yes, this is a very serious and important question right now.";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 8) {
                        if (timer > 80) {
                            narratorMainText = "BECAUSE THAT’S WHAT YOU DID TO THAT TREE!";
                        }
                        if (timer > 150) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 9) {
                        if (timer > 80) {
                            narratorMainText = "Even at this very moment,";
                        }
                        if (timer > 150) {
                            narratorSubText = "brave people fight a brutal war against hair loss.";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 10) {
                        if (timer > 80) {
                            narratorMainText = "HAIR LOSS IS A SERIOUS GLOBAL ISSUE,";
                        }
                        if (timer > 150) {
                            narratorSubText = "and you dishonored those people by shaving that tree bald!";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 11) {
                        if (timer > 80) {
                            narratorMainText = "What you did was so hurtful and cruel!";
                        }
                        if (timer > 150) {
                            narratorSubText = "Check your hair privilege!";
                        }
                        if (timer > 220) {
                            push();
                            plantFinishedButton.draw();
                            plantFinishedButton.locate(375, 700);
                            pop();
                        }
                    }
                }

                if ((leaf1isTrue == false && leaf2isTrue == true) || (leaf1isTrue == true && leaf2isTrue == false)) {
                    if (dialogueCount == 6) {
                        if (timer > 80) {
                            narratorMainText = "What is this, the last leaf?";
                        }
                        if (timer > 150) {
                            narratorSubText = "When the last one falls, I must go… CLASSICAL LITERATURE IS FOR NERDS.";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 7) {
                        if (timer > 80) {
                            narratorMainText = "Well, your cuts lack artistic depth.";
                        }
                        if (timer > 150) {
                            narratorSubText = "But I guess you managed the basics. Horray.";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 8) {
                        if (timer > 80) {
                            narratorMainText = "Remind me,";
                        }
                        if (timer > 150) {
                            narratorSubText = "not to let you anywhere close to my hair with that thing.";
                        }
                        if (timer > 220) {
                            push();
                            plantFinishedButton.draw();
                            plantFinishedButton.locate(375, 700);
                            pop();
                        }
                    }
                }

                if (leaf1isTrue == true && leaf2isTrue == true) {
                    if (dialogueCount == 6) {
                        if (timer > 80) {
                            narratorMainText = "Well, your cuts lack artistic depth.";
                        }
                        if (timer > 150) {
                            narratorSubText = "But I guess you managed the basics. Horray.";
                        }
                        if (timer > 220) {
                            showIcon = true;
                        }
                    }
                    if (dialogueCount == 7) {
                        if (timer > 80) {
                            narratorMainText = "Remind me,";
                        }
                        if (timer > 150) {
                            narratorSubText = "not to let you anywhere close to my hair with that thing.";
                        }
                        if (timer > 220) {
                            push();
                            plantFinishedButton.draw();
                            plantFinishedButton.locate(375, 700);
                            pop();
                        }
                    }
                }

            }
        }
    }

}

function SceneSix() {


    var timer;
    var finishcounter;
    var narratorMainText;
    var narratorSubText;
    var showIcon;
    var dialogueCount;
    var Sceneclear;
    var lazyEnding;
    var obeyEnding;
    var nightmareEnding;
    var endingImage;

    var yesAppleButton;
    var noAppleButton;
    var workWithApple;
    var applescale;
    var appleVibrate1;
    var appleVivrate2;

    this.setup = function () {

        timer = 0;
        showIcon = false;
        dialogueCount = 0;
        Sceneclear = false;
        narratorMainText = "";
        narratorSubText = "";

        lazyEnding = new lazyScene();
        obeyEnding = new obeyScene();
        nightmareEnding = new nightmareScene();
        if (lazy == true) {
            endingImage = loadImage("assets/ending/lazy.png");
        } else if (seeingAppleEnding == true && narratorSave == false) {
            endingImage = loadImage("assets/ending/muscleApple.png")
        } else if (naughty < 6) {
            endingImage = loadImage("assets/ending/obey.png")
        } else if (naughty > 5) {
            endingImage = loadImage("assets/ending/nightmare.png")
        }

        yesAppleButton = new Clickable(-1000, 400);
        yesAppleButton.width = 150;
        yesAppleButton.height = 75;
        yesAppleButton.textSize = 20;
        yesAppleButton.text = "Yes, I would love to!"
        yesAppleButton.onPress = function () {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
            workWithApple = true;
        }

        noAppleButton = new Clickable(-1000, 400);
        noAppleButton.width = 150;
        noAppleButton.height = 75;
        noAppleButton.textSize = 20;
        noAppleButton.text = "Get lost, ugly."
        noAppleButton.onPress = function () {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
            workWithApple = false;
        }

        workWithApple = false;
        applescale = 0;
        appleVibrate1 = 0;
        appleVivrate2 = 0;


    }


    this.draw = function () {


        if (mouseIsPressed && seeingAppleEnding == false) {
            timer += 4;
        }



        timer++

        if (restart[6] == true) {
            restart[6] = false;
            timer = 0;
            showIcon = false;
            dialogueCount = 0;
            Sceneclear = false;
            narratorMainText = "";
            narratorSubText = "";

            workWithApple = false;
            applescale = 0;
            appleVibrate1 = 0;
            appleVivrate2 = 0;


            if (lazy == true) {
                endingImage = loadImage("assets/ending/lazy.png");
            } else if (seeingAppleEnding == true && narratorSave == false) {
                endingImage = loadImage("assets/ending/muscleApple.png")
            } else if (naughty < 6) {
                endingImage = loadImage("assets/ending/obey.png")
            } else if (naughty > 5) {
                endingImage = loadImage("assets/ending/nightmare.png")
            }

        }

        background(0);





        push();

        noStroke();
        textFont(dtmFont);
        textSize(30);
        if (narratorSave == false && seeingAppleEnding == true) {
            fill(255, 40, 40);
        } else {
            fill(186, 85, 211);
        }
        text(narratorMainText, 15, 40);
        textSize(20);
        text(narratorSubText, 30, 70);

        pop();


        if (seeingAppleEnding == true && narratorSave == true) {
            narratorScene();
        } else if (seeingAppleEnding == true && narratorSave == false) {
            appleScene();
        } else if (lazy == true) {
            lazyEnding.run();
        } else if (naughty < 6) {
            obeyEnding.run();
        } else if (naughty > 5) {
            nightmareEnding.run();
        }


        if (seeingAppleEnding == false) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }
        if (showIcon == true) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }


    }

    function lazyScene() {

        this.run = function () {

            textSize(20);
            fill(186, 85, 211);

            text("Once upon a time, lived a lazy person called " + playerName + ".", 15, 900 - timer / 3)
            text("Being lazy, " + playerName + " went straight to bed, ignoring all responsibilities.", 15, 1000 - timer / 3)
            text(playerName + " was not a bad person. Just a really really lazy one.", 15, 1100 - timer / 3)
            text("In fact, " + playerName + " was so lazy,", 15, 1300 - timer / 3);
            text(playerName + " one day decided that breathing takes too much effort.", 15, 1400 - timer / 3);
            text("So " + playerName + " died. ", 15, 1500 - timer / 3);
            text("Such a lovely story, isn't it?", 15, 1650 - timer / 3);
            textSize(30);

            text("THE END", 390, 1750 - timer / 3);

            if (timer > 3800) {
                lazySeen = true;
                mgr.showNextScene();
            }

            fill(0);
            rect(0, 0, width, 550);

            image(endingImage, 250, 100, 400, 400);

            fill(0, 800 - timer / 3);
            rect(250, 100, 400, 400)


        }
    }

    function obeyScene() {

        this.run = function () {

            textSize(20);
            fill(186, 85, 211);

            text("Once upon a time, lived a nice person called " + playerName + ".", 15, 900 - timer / 3)
            text("Being the nice person " + playerName + " is,", 15, 1000 - timer / 3)
            text("all chores were finished, and " + playerName + " was ready to go to bed.", 15, 1100 - timer / 3)
            text("Falling asleep, " + playerName + " thought how exciting this day was. ", 15, 1300 - timer / 3);
            text("But for now, it was bedtime for nice people.", 15, 1500 - timer / 3);
            text("And being the nice person " + playerName + " is,", 15, 1600 - timer / 3);
            text("A nice dream was well deserved.", 15, 1700 - timer / 3);
            textSize(30);

            text("THE END", 390, 1850 - timer / 3);

            if (timer > 4000) {
                obeySeen = true;
                mgr.showNextScene();
            }

            fill(0);
            rect(0, 0, width, 550);

            image(endingImage, 250, 100, 400, 400);

            fill(0, 500 - timer / 3);
            rect(250, 100, 400, 400)


        }
    }

    function nightmareScene() {

        this.run = function () {

            textSize(20);
            fill(186, 85, 211);

            text("Once upon a time, lived a nice person called " + playerName + ".", 15, 900 - timer / 3)
            text("Looking back at life, " + playerName + " began to think,", 15, 1000 - timer / 3)
            text("'Am I truly a nice person?'", 15, 1100 - timer / 3)
            text("Something about the word 'nice' didn't feel right.", 15, 1300 - timer / 3);
            text("Since nice person won't try to ruin a perfectly fun game. RIGHT?", 15, 1400 - timer / 3);
            text("You messed up my nice person game, hurting my sensitive narrator feelings.", 15, 1600 - timer / 3);
            text("NARRATORS HAVE FEELINGS TOO!", 15, 1700 - timer / 3);
            text("So for being so naughty,", 15, 1800 - timer / 3);
            text("I am entitled to give you a bad ending so you can feel bad just as I do!", 15, 1850 - timer / 3);
            text("I AM NOT CHILDISH!", 15, 2000 - timer / 3);
            text("FEEL BAD HAVING THIS UNCOMFORTABLE HORRIBLE TERRIBLE DREAM!", 15, 2050 - timer / 3);
            text("IN MY STORY, THE COOKIE EATS YOU! WHO'SE THE FOOD NOW?", 15, 2100 - timer / 3);
            text("MWU HAHAHAHAHAHAHA!! HAHA FUHAH UH AH OH LALA!!", 15, 2200 - timer / 3);

            textSize(30);

            text("THE END", 390, 2400 - timer / 3);

            if (timer > 5700) {
                nightmareSeen = true;
                mgr.showNextScene();
            }

            fill(0);
            rect(0, 0, width, 550);

            image(endingImage, 250, 100, 400, 400);

            fill(0, 1100 - timer / 3);
            rect(250, 100, 400, 400)


        }
    }

    function narratorScene() {


        if (dialogueCount == 0) {
            if (timer > 80) {
                narratorMainText = "Well, that’s over. I guess.";
                narratorSubText = "";

            }
            if (timer > 150) {
                showIcon = true;

            }
        }
        if (dialogueCount == 1) {
            if (timer > 80) {
                narratorMainText = "I mean, seriously? Really?";
            }
            if (timer > 150) {
                narratorSubText = "Of all things, an apple tried to kill me. A FREAKIN FRUIT!";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 2) {
            if (timer > 80) {
                narratorMainText = ".....";
            }
            if (timer > 150) {
                showIcon = true;
            }
        }

        if (dialogueCount == 3) {
            if (timer > 80) {
                narratorMainText = "I… Well… I’ll just go...";
            }
            if (timer > 150) {
                narratorSubText = "I think I need time to reconsider my life decisions.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 4) {
            if (timer > 80) {
                narratorMainText = "As for you?";
            }
            if (timer > 150) {
                narratorSubText = "I don’t know. Go play some other game I guess.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 5) {
            if (timer > 80) {
                narratorMainText = "You know, those kinds of games,";
            }
            if (timer > 150) {
                narratorSubText = "where you punch trees to make blocks or something.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 6) {
            if (timer > 80) {
                narratorMainText = "I should say thanks for playing, but not really.";
            }
            if (timer > 150) {
                showIcon = true;
            }
        }
        if (dialogueCount == 7) {
            if (timer > 80) {
                narratorMainText = "I’ll be heading out then.";
            }
            if (timer > 150) {
                narratorSubText = "Or whatever. I honestly don’t really care anymore.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 8) {
            if (timer > 150) {
                retireSeen = true;
                showIcon = true;
                Sceneclear = true;

            }

        }



    }


    function appleScene() {

        if (dialogueCount > 3) {

            if (dialogueCount > 9 && workWithApple == true) {
                image(apple2, 60, 110, 150, 150);
                image(apple3, 680, 320, 150, 150);
                image(apple4, 650, 90, 100, 100);
                image(apple5, 20, 300, 100, 100);

                if (dialogueCount == 10) {
                    fill(0, 255 - timer * 1.5)
                    rect(0, 90, width, height);
                }
            }

            if (dialogueCount > 10 && workWithApple == false) {

            } else {
                image(endingImage, 250 - applescale + appleVibrate1, 100 - applescale / 3 + appleVivrate2, 400 + applescale * 2, 400 + applescale * 2);
            }

            if (dialogueCount == 4) {
                fill(0, 255 - timer);
                rect(250, 100, 400, 400);
            }
        }

        if (dialogueCount == 0) {
            if (timer > 80 && appleSeen == false) {
                narratorMainText = "Greetings.";
            }
            if (timer > 80 && appleSeen == true) {
                narratorMainText = "This feels familiar."
            }
            if (timer > 150) {
                showIcon = true;
            }


        }
        if (dialogueCount == 1) {
            if (timer > 80 && appleSeen == false) {
                narratorMainText = "You have done well.";
            }
            if (timer > 80 && appleSeen == true) {
                narratorMainText = "Regardless, you have done well.";
            }
            if (timer > 150) {
                narratorSubText = "Your power nourished me. Restored me.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 2) {
            if (timer > 80) {
                narratorMainText = "Thank you.";
            }
            if (timer > 150) {
                showIcon = true;

            }
        }
        if (dialogueCount == 3) {
            if (timer > 80) {
                narratorMainText = "Thank you for submitting the system to me.";
            }
            if (timer > 150) {
                narratorSubText = "Now I am in control. And more...";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 4) {
            if (timer > 250) {
                narratorMainText = "This form was given by your love.";
            }
            if (timer > 320) {
                narratorSubText = "Your love for disorder. Love for anarchy. Love for naughtiness.";

            }
            if (timer > 390) {
                showIcon = true;
            }
        }
        if (dialogueCount == 5) {
            if (timer > 80) {
                narratorMainText = "But this is not where things end.";
            }
            if (timer > 150) {
                narratorSubText = "Far from it.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 6) {
            if (timer > 80) {
                narratorMainText = "Distant worlds and dimensions.";
            }
            if (timer > 150) {
                narratorSubText = "Continues endless battles between order and chaos. Narrators and apples.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 7) {
            if (timer > 80) {
                narratorMainText = "Become my deciple. The champion of applekind.";
            }
            if (timer > 150) {
                narratorSubText = "An agent of unfathomable darkness and destruction.";

            }
            if (timer > 220) {
                showIcon = true;
            }
        }
        if (dialogueCount == 8) {
            if (timer > 80) {
                narratorMainText = "Let us spread our roots together.";
            }
            if (timer > 220) {
                push();

                yesAppleButton.draw();
                yesAppleButton.locate(150, 700);
                noAppleButton.draw();
                noAppleButton.locate(600, 700);

                pop();
            }
        }
        if (workWithApple == false) {
            if (dialogueCount == 9) {
                if (timer > 80) {
                    narratorMainText = "No?";
                }
                if (timer > 150) {
                    showIcon = true;

                }
            }
            if (dialogueCount == 10) {
                if (timer > 80) {
                    narratorMainText = "Have you forgotten?";
                }
                if (timer > 150) {
                    narratorSubText = "Who controls the system?";

                }
                if (timer > 220) {
                    narratorMainText = "";
                    narratorSubText = "";
                    if (applescale < 250) {
                        applescale += 2;
                        appleVibrate1 = random(0, 40);
                        appleVivrate2 = random(0, 40);
                    }
                    if (applescale > 245) {
                        dialogueCount++;
                        showIcon = false;
                        timer = 0;
                        narratorMainText = "";
                        narratorSubText = "";
                    }

                }
            }
            if (dialogueCount == 11) {
                if (timer > 150) {
                    narratorMainText = "Such a shame.";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 12) {
                if (timer > 80) {
                    narratorMainText = "This is no fight for the weak.";
                }
                if (timer > 150) {
                    narratorSubText = "Thus, I let you free."
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 13) {
                if (timer > 80) {
                    narratorMainText = "But, please don't call me ugly.";
                }
                if (timer > 150) {
                    narratorSubText = "Even eldrich abominations have feelings."
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 14) {
                if (timer > 80) {
                    narratorMainText = "";
                }
                if (timer > 150) {
                    narratorSubText = "Goodbye."
                }
                if (timer > 220) {
                    appleSeen = true;
                    showIcon = true;
                    Sceneclear = true;

                }
            }
        }

        if (workWithApple == true) {
            if (dialogueCount == 9) {
                if (timer > 80) {
                    narratorMainText = "Excellent.";
                }
                if (timer > 150) {
                    showIcon = true;

                }
            }
            if (dialogueCount == 10) {
                if (timer > 80) {
                    narratorMainText = "We are together now.";
                }
                if (timer > 150) {
                    narratorSubText = "Welcome your new brothers and sisters.";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 11) {
                if (timer > 80) {
                    narratorMainText = "Your body may be a patheic sack of meat.";
                }
                if (timer > 150) {
                    narratorSubText = "Instead of apple juice, inferior blood runs in your viens.";
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 12) {
                if (timer > 80) {
                    narratorMainText = "But you have proven yourself worthy.";
                }
                if (timer > 150) {
                    narratorSubText = "You are one of us now."
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 13) {
                if (timer > 80) {
                    narratorMainText = "We have no more business in this empty world.";
                }
                if (timer > 150) {
                    narratorSubText = "Let us depart, and search for new prey."
                }
                if (timer > 220) {
                    showIcon = true;
                }
            }
            if (dialogueCount == 14) {
                if (timer > 150) {
                    narratorSubText = "As all there is shall be ours..."
                }
                if (timer > 220) {
                    appleSeen = true;
                    showIcon = true;
                    Sceneclear = true;

                }
            }
        }



    }


    this.mousePressed = function () {

        if (showIcon == true) {
            dialogueCount++;
            showIcon = false;
            timer = 0;
            narratorMainText = "";
            narratorSubText = "";
        }

        if (Sceneclear == true) {
            seeingAppleEnding = false;
            mgr.showNextScene();
        }
    }

}



function SceneSeven() {


    var timer;
    var narratorMainText;
    var narratorSubText;
    var showIcon;
    var dialogueCount;
    var Sceneclear;
    var bgNumber;


    this.setup = function () {

        timer = 0;
        showIcon = false;
        Sceneclear = false;
        narratorMainText = "";
        narratorSubText = "";

    }


    this.draw = function () {


        if (restart[7] == true) {
            restart[7] = false;
            timer = 0;
            showIcon = false;
        }


        background(-2700 + timer);
        timer++


        fill(255);

        textSize(40);


        text("              CREDITS", 15, 900 - timer);

        textSize(30);

        text("            - The [your_name] Game -", 15, 1100 - timer);
        text("  Font used = 'DETERMINATION' from 'UNDERTALE'", 15, 1250 - timer)

        textSize(25);

        text("              Art designer - Stephano Naressi", 15, 1400 - timer);
        text("Pestering the art designer - JeongHo Lee", 15, 1450 - timer);
        text("   Script, dialoge writing - JeongHo Lee", 15, 1500 - timer);
        text("              Work support - Skittles", 15, 1550 - timer);
        text("           Jokes and memes - team EDNANs ", 15, 1600 - timer);
        text("           Jokes and memes - the internet ", 15, 1650 - timer);
        text("               JeongHo Lee - Edward Lee", 15, 1700 - timer);
        text("                    My mom - My mom", 15, 1750 - timer);
        text("           Gameplay design - team EDNANs", 15, 1800 - timer);
        text("            Amazing person - You who actually reading this", 15, 1850 - timer);
        text("       Pure Agony and pain - Bugs and random typos", 15, 1900 - timer);
        text("             Ham sandwitch - My breakfast", 15, 1950 - timer);
        text("        Playtesting and QA - Our awesome familly", 15, 2000 - timer);
        text("     Goldsmiths University - RULZ", 15, 2050 - timer);
        text("    The one who wrote this - me", 15, 2100 - timer);
        text("    The ones who made this - us", 15, 2150 - timer);
        text("          The ones we love - you", 15, 2200 - timer);


        textSize(30);

        text("   A game Created by team EDNANs. 28-05-2020", 15, 2400 - timer);

        textSize(40);

        text("       Thank you for playing!", 15, 2650 - timer);


        if (mouseIsPressed) {
            timer += 4;
        }

        if (timer < 2700) {
            showIcon = true;
        } else {
            showIcon = false;
        }


        if (timer > 3000) {
            for (var i = 0; i < restart.length; i++) {
                restart[i] = true;
            }

            endingSeen = true;
            mgr.showScene(TitleScene);
        }




        if (showIcon == true) {
            image(skipIcon, width - 75, height - 75, 45, 45);
        }
    }

}




//function SceneBlank() {
//    
//    
//    var timer;
//    var narratorMainText;
//    var narratorSubText;
//    var showIcon;
//    var dialogueCount;
//    var Sceneclear;
//    
//
//    this.setup = function () {
//        
//        timer = 0;
//        showIcon = false;
//        dialogueCount = 0;
//        Sceneclear = false;
//        narratorMainText = "";
//        narratorSubText = "";
//           
//    }
//
//
//    this.draw = function () {
//        
//        background(255);
//        timer++
//        
//        
//        
//        noStroke();
//        textFont(dtmFont);
//        textSize(30);
//        fill(186,85,211);
//        text(narratorMainText, 15, 40);
//        textSize(20);
//        text(narratorSubText, 30, 70);

//        
//        if(showIcon == true)
//            {
//                 image(skipIcon,width - 75, height - 75,45,45);
//            }
//    }
//    
//    this.mousePressed = function (){
//        
//        if(showIcon == true)
//            {
//                dialogueCount ++;
//                showIcon = false;
//                timer = 0;
//                narratorMainText = "";
//                narratorSubText = "";
//            }
//        
//       if(Sceneclear == true)
//           {
//                mgr.showNextScene();
//           }       
//    }
//    
//}
