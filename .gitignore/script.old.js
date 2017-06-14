//shape, circle, triangle, rectangle, square
var rectangleHeight = document.getElementById('rectangle-height');
var rectangleWidth = document.getElementById('rectangle-width');
var circleVal = document.getElementById('circle-form');
var triangleVal = document.getElementById('triangle-form');
var squareVal = document.getElementById('square-form');

var shapeNameLabel = document.getElementById('shape-name');
var shapeWidthLabel = document.getElementById('shape-width');
var shapeHeightLabel = document.getElementById('shape-height');
var shapeRadiusLabel = document.getElementById('shape-radius');
var shapeAreaLabel = document.getElementById('shape-area');
var shapePerimeterLabel = document.getElementById('shape-perimeter');


//event listeners

document.getElementById('circle-button').addEventListener('click', function () {
    new Circle(circleVal.value);
});
document.getElementById('rectangle-button').addEventListener('click', function () {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
});
document.getElementById('triangle-button').addEventListener('click', function () {
    new Triangle(triangleVal.value, triangleVal.value);
});
document.getElementById('square-button').addEventListener('click', function(){
    new Square (squareVal.value);
});


function Shape(height, width) {
    this.height = height;
    this.width = width;
}
    

Shape.prototype.draw = function(){
    this.div = document.createElement('div');
    this.div.className = 'shape ' + this.cssClass;
    
    this.x = Math.floor(Math.random() * (600 - this.height));
    this.y = Math.floor(Math.random() * (600 - this.width));

    this.div.style.top = this.y + 'px';
    this.div.style.left = this.x + 'px';
    this.div.style.width = this.width + 'px';
    this.div.style.height = this.height + 'px';

     this.div.addEventListener('click', this.describe.bind(this));
    this.div.addEventListener('dblclick', function() {
        this.removeDiv();
    }.bind(this));
    document.getElementById('sand-box').appendChild(this.div);
}

Shape.prototype.describe = function() {
    shapeNameLabel.innerText = this.constructor.name;
    shapeWidthLabel.innerText = this.width;
    shapeHeightLabel.innerText = this.height;
    shapeRadiusLabel.innerText = this.radius;
    shapeAreaLabel.innerText = this.area();
    shapePerimeterLabel.innerText = this.perimeter();
}

Shape.prototype.removeDiv = function () {
    this.div.remove();
}





function Rectangle(width, height) {
    Shape.call(this, width, height);
    this.cssClass = 'rectangle';
    this.draw();
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width * this.height;
}

Rectangle.prototype.perimeter = function() {
    return 2 * this.width + 2 * this.height;
}



function Circle(radius) {
    Shape.call(this, 2 * radius, 2 * radius);
    this.radius = radius;
    this.cssClass = 'circle'
    this.draw();
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
//circle button



Circle.prototype.area = function () {
    return Math.PI * Math.pow(this.radius, 2);
}
Circle.prototype.perimeter = function () {
    return 2 * Math.PI * this.radius;
}
Circle.prototype.diameter = function () {
    return 2 * this.radius;
}



function Triangle (height) {
    Shape.call(this, height, height);
    this.cssClass = 'triangle';
    this.draw();
    this.div.style.width = '0';
    this.div.style.height = '0';
    this.div.style.borderRightWidth = height + 'px';
    this.div.style.borderBottomWidth = height + 'px';
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.area = function() {
    return 0.5 * this.height * this.height;
}
Triangle.prototype.perimeter = function() {
    return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
}





function Square(side) {
    Rectangle.call(this, side, side);
    this.cssClass = 'square';
    this.div.classList.remove('rectangle');
    this.div.classList.add(this.cssClass);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;











