let rectangleHeight = <HTMLElement>document.getElementById('rectangle-height');
let rectangleWidth = <HTMLElement>document.getElementById('rectangle-width');
let circleVal = <HTMLElement>document.getElementById('circle-form');
let triangleVal = <HTMLElement>document.getElementById('triangle-form');
let squareVal = <HTMLElement>document.getElementById('square-form');

let shapeNameLabel = document.getElementById('shape-name');
let shapeWidthLabel = document.getElementById('shape-width');
let shapeHeightLabel = document.getElementById('shape-height');
let shapeRadiusLabel = document.getElementById('shape-radius');
let shapeAreaLabel = document.getElementById('shape-area');
let shapePerimeterLabel = document.getElementById('shape-perimeter');


//event listeners
document.getElementById('circle-button').addEventListener('click', function () {
    new Circle(circleVal.value);
});
document.getElementById('rectangle-button').addEventListener('click', function () {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
});
document.getElementById('triangle-button').addEventListener('click', function () {
    new Triangle(triangleVal.value);
});
document.getElementById('square-button').addEventListener('click', function () {
    new Square(squareVal.value);
});



abstract class Shape {
    protected div: HTMLDivElement;
    protected cssClass: string;
    protected radius: number;

    constructor(protected width: number, protected height: number) {
    }


    draw() {
        this.div = document.createElement('div');
        this.div.className = 'shape ' + this.cssClass;

        let x = Math.floor(Math.random() * (600 - this.height));
        let y = Math.floor(Math.random() * (600 - this.width));

        this.div.style.top = y + 'px';
        this.div.style.left = x + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';

        this.div.addEventListener('click', this.describe.bind(this));
        this.div.addEventListener('dblclick', function () {
            this.removeDiv();
        }.bind(this));
        document.getElementById('sand-box').appendChild(this.div);
    }

    describe() {
        shapeNameLabel.innerText = this.constructor.name;
        shapeWidthLabel.innerText = this.width.toString();
        shapeHeightLabel.innerText = this.height.toString();
        shapeRadiusLabel.innerText = this.radius.toString();
        shapeAreaLabel.innerText = this.area();
        shapePerimeterLabel.innerText = this.perimeter();
    }

    removeDiv() {
        this.div.remove();
    }

    abstract area();
    abstract perimeter();

}







class Rectangle extends Shape {

    constructor(width: number, height: number) {

        super(width, height);
        this.cssClass = 'rectangle';
        this.draw();
    }


    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * this.width + 2 * this.height;
    }



class Circle extends Shape {

    constructor(radius: number) {
        super(2 * radius, 2 * radius);
        this.radius = radius;
        this.cssClass = 'circle'
        this.draw();
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    perimeter() = function() {
        return 2 * Math.PI * this.radius;
    }
}



class Triangle extends Shape {

    constructor(height: number) {

        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderRightWidth = height + 'px';
        this.div.style.borderBottomWidth = height + 'px';
    }

    area() {
        return 0.5 * this.height * this.height;
    }
    perimeter() {
        return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
    }
}





class Square extends Rectangle {

    constructor(side: number) {
        super(side, side);
        this.cssClass = 'square';
        this.div.classList.remove('rectangle');
        this.div.classList.add(this.cssClass);
    }
}


