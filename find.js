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
  var diff = Math.floor((maxdist - dist)) % 256;

  //box.style.backgroundColor = 'rgb(' + [diff, diff, diff].join(',') + ')';
  //'rgb(' + diff + ',' + diff + ',' + diff + ')'
  document.body.style.backgroundColor = 'rgb(' + [diff, diff, diff].join(',') + ')';
  while (diff >= 250) {
    console.log("TRUEEEE");
    box.style.cursor = "pointer";
  }

  //console.log( diff );
  //console.log(maxdist);
  //console.log(dist);
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
