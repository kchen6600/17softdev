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
    
    var dist = Math.floor(distance(x,y,targetX, targetY));
    var maxd = maxdist();

    /**
    if (dist > 255){
	dist = 255;
    }

    dist = 255 - dist; 

    //var diff = Math.floor((maxdist - dist)) ;

    //box.style.backgroundColor = 'rgb(' + [diff, diff, diff].join(',') + ')';
    //'rgb(' + diff + ',' + diff + ',' + diff + ')'
    **/

    var col = Math.floor((dist/maxd)*255);
    var color = 'rgb(' + col + ","+col+","+col+")";
    //var color =  'rgb(' + [dist, dist, dist].join(',') + ')';
    console.log(color);
    document.body.style.backgroundColor = color;
    if (dist < 20){
	document.body.style.innerHTML = document.body.style.innerHTML + " div{cursor: pointer;}";
    }
    else{
	document.body.style.innerHTML = document.body.style.innerHTML + "div{cursor: default;}";
    };

};

var maxdist = function(){
    var corner1 = distance(0,0, targetX, targetY);
    var corner2 = distance(0,boxWidth, targetX, targetY);
    var corner3 = distance(boxHeight, 0, targetX, targetY);
    var corner4 = distance(boxHeight, boxWidth, targetX, targetY);

    return Math.max(corner1, Math.max( corner2, Math.max(corner3, corner4 ) ) )
}
/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
