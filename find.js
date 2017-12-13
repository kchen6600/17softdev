var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

console.log(targetX);
console.log(targetY);


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt( Math.pow(x0 - x1,2)  + Math.pow(y0 - y1, 2));
};

//console.log (distance (0,0,2,2));

var findIt = function(e) {
  var x = e.clientX;
  var y = e.clientY;
  //console.log(x);
  //console.log(y);
  var dist = distance(x,y,targetX, targetY);
  var maxdist = distance(0,0, boxWidth, boxHeight);
  var diff = (maxdist - dist) % 256;

  document.body.style.background = "" + diff + ", " + diff + ", " + diff + ""; 
  //console.log( diff % 256);
  //console.log(maxdist);
  //console.log(dist);
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
