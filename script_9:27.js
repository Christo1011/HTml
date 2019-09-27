var image1 = document.getElementById("image1");
var canvas1 = document.getElementById("canvas1");
var ctx = canvas1.getContext('2d');
var y = 20;
var x1 = 10;
var x2 = 300;
var i;
for(i = 0; i < 4; i++){
  ctx.beginPath();
  ctx.moveTo(x1,y );
  ctx.lineTo(x2, y);
  ctx.stroke();

  y += 60
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  //ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("image/png", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image/png");
  //ev.target.appendChild(document.getElementById(data));
}
//var x_image = 10;
//var y_image = 10;
/*function mouseUp(){

  //y+40
  ctx.drawImage(image1, x_image, y_image, 30, 30);
  //x_image += 40
}*/
var image_new = new Image(30,30)
var posx = 10
var posy = 10
function getMousePos(canvas,event){

  var rect = canvas.getBoundingClientRect(),
  scaleX = canvas.width / rect.width,
  scaleY = canvas.height / rect.height;
  //console.log(rect.width,rect.height);
  return{
    x: (event.clientX - rect.left) * scaleX,
    y: (event.clientY - rect.top) * scaleY
  };
}
function onmouseUp(){
  image_new.src = 'H.png'
  /*"draggable="true" ondragstart="drag(event)"*/
  //var clonedItem = image_new.cloneNode(true);
  //canvas1.appendChild(clonedItem);
  //var x_image = event.clientX;
  //var y_image = event.clientY;
  var pos = getMousePos(canvas1,event)
  //console.log(pos)

  ctx.drawImage(image_new, pos.x, pos.y, 30, 30);
  console.log(pos)
  //posx += 60
  //posy += 60
}
