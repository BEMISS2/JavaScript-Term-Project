// variables for the games
var gamePiece;
var gameBackground;
var gameObstacles = [];
var gameScore;
var gameOverText;

function startGame() {
    document.getElementById("playGameAgain").style.visibility = "hidden"; 
    gamePiece = new component(85, 130, "media/pixelDude.png", 10, 250, "image");
    gameBackground = new component(900, 600, "media/pixelLand.jpg", 0, 0, "background")
    gameScore = new component("30px", 'VT323', "black", 10, 30, "text");
    gameOverText = new component("100px", 'VT323', "black", 260, 300, "text");
    gameArea.start();
}

// creates canvas for game area
var gameArea = {
    canvas : document.getElementById("gameCanvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 25);

        // checks if any keyboard keys are pressed
        window.addEventListener('keydown', function(e){
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function(e){
            gameArea.keys[e.keyCode] = false;
        })

        },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        clearInterval(this.interval);
    }
}
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = gameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
            if(type == "background"){
                ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if(this.type == "text"){
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
    }

    //function that allows change in positons
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;     
        
        // checks if the x position has reach the end of the background image
        if(this.type == "background"){
            if(this.x == -(this.width)){
                this.x = 0;
            }
        }   
    }

    // function that returns if crash has occured with Booleans
    this.crashWith = function(otherobj){
        var gameLeft = this.x;
        var gameRight = this.x + (this.width);
        var gameTop = this.y;
        var gameBottom = this.y + (this.height);
        var otherLeft = otherobj.x;
        var otherRight = otherobj.x + (otherobj.width);
        var otherTop = otherobj.y;
        var otherBottom = otherobj.y + (otherobj.height);
        var crash = true;
        if((gameBottom < otherTop) ||
            (gameTop > otherBottom) ||
            (gameRight < otherLeft) ||
            (gameLeft > otherRight)){
            
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for(i = 0; i < gameObstacles.length; i += 1){
        if(gamePiece.crashWith(gameObstacles[i])){
            gameArea.stop();
            gameArea.clear();
            gameBackground.update();
            gameScore.text = "SCORE: " + gameArea.frameNo;
            gameScore.update();
            gameOverText.text = "GAME OVER";
            gameOverText.update();
            document.getElementById("playGameAgain").style.visibility = "visible"; 
            return;
        }
    }
    gameArea.clear();
    gameBackground.speedX = -2;
    gameBackground.newPos();
    gameBackground.update();
    gameArea.frameNo += 1;
    if(gameArea.frameNo == 1 || everyInterval(110)){
        x = gameArea.canvas.width;
        minHeight = 160;
        maxHeight = 460;
        height = Math.floor(Math.random()*(maxHeight - minHeight + 1) +minHeight);
        minGap = 150;
        maxGap = 250;
        gap = Math.floor(Math.random()*(maxGap - minGap +1) +minGap);
        gameObstacles.push(new component(100, height, "media/pixelTextMessageDown.png", x, 0, "image"));
        gameObstacles.push(new component(150, x - height - gap, "media/pixelTextMessageUp.png", x, height + gap, "image"));
    }
    // I'm thinking about adding a gravity effect to the obsticles depending on time. This would have the text bubble float downward and off the canvas instead of just being barriers, but i don't hate the design right now.

    for(i = 0; i < gameObstacles.length; i += 1){
        gameObstacles[i].x += -4;
        gameObstacles[i].update();
    }

    //Scrore Updater
    gameScore.text = "SCORE: " + gameArea.frameNo;
    gameScore.update();
    //game piece movement and speed update
    gamePiece.speedX = 0; 
    gamePiece.speedY = 0; 
    if(gameArea.keys && gameArea.keys[37]){gamePiece.speedX = -4;} //move left
    if(gameArea.keys && gameArea.keys[39]){gamePiece.speedX = 4;} // move right
    if(gameArea.keys && gameArea.keys[38]){gamePiece.speedY = -4;} // move up
    if(gameArea.keys && gameArea.keys[40]){gamePiece.speedY = 4;} // move down
    gamePiece.newPos();
    gamePiece.update();
}

function everyInterval(n){
    if((gameArea.frameNo / n) % 1 == 0) {return true;}
        return false;
}