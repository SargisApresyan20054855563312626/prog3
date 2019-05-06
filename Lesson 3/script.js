//var a = 100;
//var b = 200;
//var p = calcPer(a,b);
//var s = calcSq(a,b);
//console.log(p,s);

//function calcPer(c,d){
// return (c+d)*2
//}


//function calcSq(e,f){
// return c*d
//}



//var c = [45,60,12,98,78,154,65];
//var m = [15,98,45,33,78,98,100,56,98];
//var s1 = sumArray(c);
//var s2 = sumArray(m);
//console.log(s1, s2);


//function sumArray(a){
//let sum = 0;
// for( let i = 0; i < a.length; i++ ) {
// sum i += a[i];
//}
// return sum
//}

/*var matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
for(i = 0; i < matrix.length; i++)
*/

/*function setup() {
    createCanvas(500,500);
    background('#acacac');
}
function draw() {
    ellipse(x, y, 15, 15);
    fill("blue");
    let x = random(50);
    let y = random(-50);
}*/
/*function setup() {
    createCanvas(500,500);
    background('#acacac');
}

var matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ];*/

/*function draw() {
  fill(255,0,0);
  rect(5, 5, side, side);

    for( let y = 0; y < matrix.length; y++){
    	for( let x = 0; x < matrix[y].length; x++){
    		if( matrix[y][x] == 0){
	fill("black")
}

else if( matrix[y][x] == 1){
	fill("red")
}
    	}
    }

}*/



/*function setup() {
    createCanvas(500,500);
    background('#acacac');
}
function draw() {
    ellipse(50, 50, 20, 20);
    fill("blue");
}

for (let i = 0; i < 100; i++) {
    let r = random(-500, 500);
    ellipse(50, 50, 20, 20);
}*/


/*function setup() {
    createCanvas(640, 480);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }*/


/*function setup() {
    createCanvas(500,500);
    background('#acacac');
}
side = 40;
function draw() {
    fill("red");
    for(let y = 0; y < 10; y++){
        for( let x = 0; x < 10; x++){
            rect(x * side,y * side, side, side);
        }
    }
}*/

// Xndir 2

/*function setup() {
    createCanvas(322,322);
    background('#acacac');
}
side = 40;
function draw() {
    fill("green");
    for(let y = 0; y < 8; y++){
        for( let x = 0; x < 8; x++){
            
            if (x+y == 7){
                fill("black");
                rect(x * side,y * side, side, side);
            }
            else {
                fill("red")
                rect(x * side,y * side, side, side);
            }
            
        }
    }
}*/

//x.y

//7.0
//6.1
//5.2
//4.3
//3.4
//2.5
//1.6
//0.7


// Xndir 3


/*function setup() {
    createCanvas(322,322);
    background('#acacac');
}
side = 40;
function draw() {
    fill("green");
    for(let y = 0; y < 8; y++){
        for( let x = 0; x < 8; x++){
            
            if (y == 0 && x <= 7){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }
            else if (y == 1 && x <= 6){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }else if (y == 2 && x <= 5){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }else if (y == 3 && x <= 4){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }
            else if (y == 4 && x <= 3){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }else if (y == 5 && x <= 2){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }
            else if (y == 6 && x <= 1){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }
            else if (y == 7 && x <= 0){
                fill("yellow");
                rect(x * side,y * side, side, side);
            }
            else {
                fill("#acacac")
                rect(x * side,y * side, side, side);
            }
            
        }
    }
}*/

// Xndir 4

/*function setup() {
    createCanvas(322, 322);
    background('#acacac');
}
side = 40;
function draw() {
    fill("green");
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {

            if (y == 0 && x == 0 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 0 && x == 2 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 0 && x == 4 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 0 && x == 6 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 1 && x == 1 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 1 && x == 3 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 1 && x == 5 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 1 && x == 7 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (y == 2 && x == 0 ) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else {
                fill("white")
                rect(x * side, y * side, side, side);
            }

        }
    }
}*/



/*function setup() {
    createCanvas(322, 322);
    background('#acacac');
}
let a = 50;
let matrix = [];
function draw() {

}
for (let y = 0; y < 8; y++) {
    matrix[y] = [];
    for (let x = 0; x < 8; x++) {
        if (x == y) {
            matrix[x] = 1
        }
        else {
            matrix[y][x] = 0
        }
    }

}
console.log(matrix);*/

//das 4

/*class Human{
    constructor(x,y,){
        this.x = x;
        this.y = y;
        this.age = 20;
        this.energy = 100;
    }
    move(){
      this.x--;
      this.y--;
      this.energy -= 5;
    }
    eat(){
        this.energy += 3;
    }
}
var Human1 = new Human(10,10);
console.log(Human1);
Human1.move()
console.log(Human1);
Human1.eat()
console.log(Human1);*/

/*var matrix = [
   [0, 0, 1, 0, 0],
   [1, 0, 0, 0, 0],
   [0, 1, 0, 0, 0],
   [0, 0, 1, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0]
];

var side = 120;


function setup() {
   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');
}
function draw() {

   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {

           if (matrix[y][x] == 1) {
               fill("green");
           }
           else if (matrix[y][x] == 0) {
               fill("#acacac");
           }
	    
           rect(x * side, y * side, side, side);
    
    
      }
  }
}*/

// das 5,6

// var side = 50;
// var xotArr = []; //խոտերի զանգված
// var eatArr = []; //խոտակերների զանգված
// var gishatichArr = [];
// var krakArr = [];
// var jurArr = [];


// var matrix = [
//     [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 5, 1, 1, 1],
//     [0, 1, 0, 5, 0, 1, 0, 5, 1, 3, 1, 1, 1, 1, 5, 1, 1],
//     [0, 1, 0, 0, 4, 1, 0, 0, 1, 3, 3, 1, 1, 1, 1, 1, 1],
//     [0, 1, 0, 0, 3, 1, 4, 4, 1, 0, 3, 1, 1, 0, 3, 1, 1],
//     [0, 0, 4, 0, 0, 5, 1, 5, 1, 0, 0, 1, 0, 3, 5, 0, 1],
//     [0, 4, 0, 3, 0, 1, 4, 5, 1, 0, 0, 1, 1, 0, 5, 3, 1],
//     [0, 0, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 3, 5, 1, 3, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
//     [2, 5, 0, 4, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 3, 1, 1],
//     [2, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
// ]

// function setup() {
//     // noStroke();
//     frameRate(5);
//     createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
//     background('#acacac');


//     //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
//     //հիմնվելով մատրիցի վրա 
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 2) {
//                 var eatgrass = new Eatgrass(x, y);
//                 eatArr.push(eatgrass);
//             } else if(matrix[y][x] == 1) {
//                 var grass = new Grass(x, y);
//                 xotArr.push(grass);
//             }
//             else if (matrix[y][x] == 3){
//                 var g = new gishatich(x,y);
//                 gishatichArr.push(g);
              
//             }
//             else if (matrix[y][x] == 4){
//                 var h = new krak(x,y);
//                 krakArr.push(h);
//             }
//              else if(matrix[y][x] == 5){
//                  var b = new jur(x,y);
//                  jurArr.push(b);
//              }
//         }
//     }
// }

// //draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
// //եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
// //draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
// function draw() {
//     //Գծում է աշխարհը, հիմվելով matrix-ի վրա
//     background('#acacac');
//     for (var i = 0; i < matrix.length; i++) {
//         for (var j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] == 1) {
//                 fill("green");
//                 rect(j * side, i * side, side, side);
//             } else if (matrix[i][j] == 2) {
//                 fill("yellow");
//                 rect(j * side, i * side, side, side);
//             } else if (matrix[i][j] == 0) {
//                 fill('grey');
//                 rect(j * side, i * side, side, side);
//             }
//             else if (matrix[i][j] == 3) {
//                 fill('orange');
//                 rect(j * side, i * side, side, side);
//             }
//             else if(matrix [i][j] == 4){
//                 fill("red");
//                 rect(j * side,i * side, side, side);
//             }
//              else if(matrix [i][j] == 5){
//                  fill("blue");
//                  rect(j * side,i * side, side, side);
//              }
//         }
//     }


//     //յուրաքանչյուր խոտ փորձում է բազմանալ
//     for (var i in xotArr) {
//         xotArr[i].mul();
//     }

//     //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
//     for (var i in eatArr) {
//         eatArr[i].eat();
//     }
//     for (var i in gishatichArr) {
//         gishatichArr[i].eat();
//     }
//     for(var i in krakArr){
//         krakArr[i].eat();
//     }
//     for(var i in jurArr){
//         jurArr[i].eat();
//     }
// }

var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.listen(5000, function(){
   console.log("Example is running on port 5000");
});
var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.listen(5000, function(){
   console.log("Example is running on port 5000");
});



