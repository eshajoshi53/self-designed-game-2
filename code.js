var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["59511ede-163f-4aae-964c-ae5ade04c17a","078f576d-1aa4-470f-af73-c34107dbdb6a","8356ca13-f631-4cce-a733-cb5dc21d2ab8"],"propsByKey":{"59511ede-163f-4aae-964c-ae5ade04c17a":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"078f576d-1aa4-470f-af73-c34107dbdb6a":{"name":"pupilportrait_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png","frameSize":{"x":282,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FW0CI4iuqpnTrc1d6kSj3miix6MgU7I6/category_faces/pupilportrait_03.png"},"8356ca13-f631-4cce-a733-cb5dc21d2ab8":{"name":"kidportrait_07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png","frameSize":{"x":264,"y":370},"frameCount":1,"looping":true,"frameDelay":2,"version":"DK8.stYcZlziAImCg36Fa7yHu1S4LUhW","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":370},"rootRelativePath":"assets/api/v1/animation-library/gamelab/DK8.stYcZlziAImCg36Fa7yHu1S4LUhW/category_faces/kidportrait_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b1 = createSprite(200, 0, 400, 10);
var b2 = createSprite(200, 400, 400, 10);
var b3 = createSprite(0, 200, 10, 400);
var b4 = createSprite(400, 200, 10, 400);
var b5 = createSprite(200, 15, 400, 5);
var b6 = createSprite(200, 385, 400, 5);
var b7 = createSprite(15, 200, 5, 400);
var b8 = createSprite(385, 200, 5, 400);
var b9 = createSprite(200, 130, 400, 5);
var b10 = createSprite(200, 270, 400, 5);
var g1 = createSprite(200, 28, 100, 20);
g1.shapeColor = "white";
var g2 = createSprite(200, 372, 100, 20);
g2.shapeColor = "white";
var ball = createSprite(200, 200, 10, 10);
ball.shapeColor = "white";
ball.setAnimation("soccer_bw_1");
ball.scale = 0.05;
var playerMallet = createSprite(200, 20, 50, 10);
playerMallet.setAnimation("kidportrait_07_1");
playerMallet.scale = 0.1;
var computerMallet = createSprite(200, 350, 50, 10);
computerMallet.setAnimation("pupilportrait_03_1");
computerMallet.scale = 0.1;
var gameState = "serve";
var computerScore = 0;
var playerScore = 0;
function draw() {
  background("lightblue");
  if (ball.x<0||ball.x>400) {
    ball.x = 200;
    ball.y = 200;
    computerMallet.x = 200;
  }
  if (gameState==="serve") {
    textSize(18);
    fill("maroon");
    text("press space to strike", 120, 180);
    computerMallet.x = 200;
    computerMallet.y = 350;
  }
  textSize(18);
  fill("maroon");
  text(computerScore, 25, 225);
  text(playerScore, 25, 185);
  if (keyDown("left")) {
    playerMallet.x=playerMallet.x-10;
  }
  if (keyDown("right")) {
    playerMallet.x = playerMallet.x+10;
  }
  if (keyDown("up")) {
    if (playerMallet.y>25) {
      playerMallet.y=playerMallet.y-10;
    }
  }
  if (keyDown("down")) {
    if (playerMallet.y<120) {
      playerMallet.y = playerMallet.y+10;
    }
  }
  computerMallet.x = ball.x;
  for (var i = 0; i < 400; i=i+20) {
    line(i, 200, i+10, 200);
  }
  createEdgeSprites();
  ball.bounceOff(b7);
  ball.bounceOff(b8);
  ball.bounce(b5);
  ball.bounceOff(b6);
  ball.bounceOff(playerMallet);
  ball.bounceOff(computerMallet);
  playerMallet.bounceOff(b7);
  playerMallet.bounceOff(b8);
  playerMallet.bounceOff(b5);
  playerMallet.bounceOff(b9);
  computerMallet.bounceOff(b7);
  computerMallet.bounceOff(b8);
  computerMallet.collide(b10);
  computerMallet.collide(b6);
  if (keyDown("space")&& gameState==="serve") {
    serve();
    ball.velocityX = ball.velocityX-1;
    ball.velocityY = ball.velocityY-1;
    gameState="play";
  }
  if (ball.isTouching(g1)|| ball.isTouching(g2)) {
    if (ball.isTouching(g1)) {
      computerScore=computerScore+1;
    }
    if (ball.isTouching(g2)) {
      playerScore = playerScore+1;
    }
    reset();
    gameState="serve";
  }
  if (playerScore===5||computerScore===5) {
    gameState = "end";
    fill("maroon");
    textSize(18);
    text("gameOver", 170, 160);
    text("press r to restart", 150, 180);
    playerMallet.x = 200;
    playerMallet.y = 40;
  }
  if (keyDown("r")&&gameState==="end") {
    gameState ="serve";
    computerScore = 0;
    playerScore = 0;
  }
  drawSprites();
}
function serve(){
  ball.velocityX=10;
  ball.velocityY=5;
}
function reset(){
  ball.x=200;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
