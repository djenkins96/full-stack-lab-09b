var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    new Triangle(triangleVal.value);
});
document.getElementById('square-button').addEventListener('click', function () {
    new Square(squareVal.value);
});
var Shape = (function () {
    function Shape(width, height) {
        this.width = width;
        this.height = height;
    }
    Shape.prototype.draw = function () {
        this.div = document.createElement('div');
        this.div.className = 'shape ' + this.cssClass;
        var x = Math.floor(Math.random() * (600 - this.height));
        var y = Math.floor(Math.random() * (600 - this.width));
        this.div.style.top = y + 'px';
        this.div.style.left = x + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.addEventListener('click', this.describe.bind(this));
        this.div.addEventListener('dblclick', function () {
            this.removeDiv();
        }.bind(this));
        document.getElementById('sand-box').appendChild(this.div);
    };
    Shape.prototype.describe = function () {
        shapeNameLabel.innerText = this.constructor.name;
        shapeWidthLabel.innerText = this.width.toString();
        shapeHeightLabel.innerText = this.height.toString();
        shapeRadiusLabel.innerText = this.radius.toString();
        shapeAreaLabel.innerText = this.area();
        shapePerimeterLabel.innerText = this.perimeter();
    };
    Shape.prototype.removeDiv = function () {
        this.div.remove();
    };
    return Shape;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.cssClass = 'rectangle';
        _this.draw();
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * this.width + 2 * this.height;
    };
    return Rectangle;
}(Shape));
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, 2 * radius, 2 * radius) || this;
        _this.radius = radius;
        _this.cssClass = 'circle';
        _this.draw();
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.perimeter = function () { };
    Circle.prototype["function"] = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle(height) {
        var _this = _super.call(this, height, height) || this;
        _this.cssClass = 'triangle';
        _this.draw();
        _this.div.style.width = '0';
        _this.div.style.height = '0';
        _this.div.style.borderRightWidth = height + 'px';
        _this.div.style.borderBottomWidth = height + 'px';
        return _this;
    }
    Triangle.prototype.area = function () {
        return 0.5 * this.height * this.height;
    };
    Triangle.prototype.perimeter = function () {
        return 2 * this.height + Math.sqrt(2 * Math.pow(this.height, 2));
    };
    return Triangle;
}(Shape));
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        var _this = _super.call(this, side, side) || this;
        _this.cssClass = 'square';
        _this.div.classList.remove('rectangle');
        _this.div.classList.add(_this.cssClass);
        return _this;
    }
    return Square;
}(Rectangle));
