var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png")
  boyImg=loadAnimation("Runner-1.png","runner-2.png")
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
 
}

function setup(){
  
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4

path.scale=1.2;

//crie um sprite de menino
boy=createSprite(180,340,30,30)
//adicione uma animação de corrida para ele
boy.addAnimation("JakeRunning",boyImg)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible=false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
leftBoundary.visible=false
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
