let data = $("<p></p>");
let btnContainer = $('#btn-container');
let canvasContainer = $("#canvas-container");
let descriptionContainer = $('#description-container');
let recBtn = $('#create-rectangle-btn');
let sqBtn = $('#create-square-btn');
let cirBtn = $('#create-circle-btn');
let triBtn = $('#create-triangle-btn');
let recWidth = $('#rectangle-width');
let recHeight = $("#rectangle-height");
let sqHeight = $("#square-height");
let cirRadius = $("#circle-radius");
let triHeight = $("#triangle-height");

//set up alert to check that input value is sufficient for shape

$(recBtn).click (() => {
    if ((recWidth.val() >= 1 && recWidth.val() <= 600) && (recHeight.val() >=  1 && recHeight.val() <= 600)) {
        let rectangle = new Rectangle(recWidth.val(), recHeight.val());
    }
    else {
        alert("Please enter a width and height between 1 and 600 for the rectangle.");
    }
});
$(sqBtn).click(() => {
    if(sqHeight.val() >= 1 && sqHeight.val() <= 600) {
        let square = new Square(sqHeight.val());
    }
    else {
        alert("Please enter a height between 1 and 600 for the square.");
    }
});
$(cirBtn).click(() => {
    if(cirRadius.val() >= 1 && cirRadius.val() <= 300) {
        let circle = new Circle(cirRadius.val());
    }
    else {
        alert("Please enter a height between 1 and 300 for the circle.");
    }
});
$(triBtn).click(() => {
    if(triHeight.val() >= 1 && triHeight.val() <= 600) {
        let triangle = new Triangle(triHeight.val());
    }
    else {
        alert("Please enter a height between 1 and 600 for the triangle.")
    }
});

class Shape {
    constructor() {
        this.div = $('<div></div>');
        $(this.div).click(this.describeShape.bind(this));
        $(this.div).dblclick(this.deleteShape);
    }
    setCoordinate() {
        this.x = Math.floor(Math.random() * (601 - this.width));
        this.y = Math.floor(Math.random() * (601 - this.height));
    }
style() {
    $(this.div).css({
    'position': 'absolute',
    'background-color': this.color,
    'width': this.width + 'px',
    'height': this.height + 'px',
    'left': this.x,
    'top': this.y,
    });
}
//append shapes to container when drawn
drawShape() {
    $(this.div).appendTo(canvasContainer);
}
describeShape() {
    this.infoText = `<b>Shape Name: </b>${this.name}<br/>
    <b>Shape Width: </b>${this.width}<br/>
    <b>Shape Height: </b>${this.height}<br/>
    <b>Shape Radius: </b>${this.radius}<br/>
    <b>Shape Area: </b>${this.area}<br/>
    <b>Shape Perimeter: </b>${this.perimeter}<br/><br/>`;

    $(data).append(this.infoText);
    $(descriptionContainer).append(data);
}
//append data to Text then container

deleteShape() {
    this.remove();
    $(data).html('');
}
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.name = 'Rectangle';
        this.color = 'green';
        this.width = width;
        this.height = height;
        this.radius = '';
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * this.width + 2 * this.height;
    }
}

class Square extends Shape {
    constructor(height) {
        super();
        this.name = 'Square';
        this.color = 'red';
        this.height = height;
        this.width = this.height;
        this.radius = '';
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return Math.pow(this.height, 2);
    }
    getPerimeter() {
        return (4 * this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = 'Circle';
        this.color = 'purple';
        this.width = radius * 2;
        this.height = radius * 2;
        this.radius = radius;
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    style() {
        $(this.div).css({
            'position': 'absolute',
            'background-color': 'purple',
            'width': this.width + 'px',
            'height': this.height + 'px',
            'left': this.x,
            'top': this.y,
            '-moz-border-radius': this.radius + 'px',
            '-webkit-border-radius': this.radius + 'px',    
        });
    }
}
class Triangle extends Shape {
    constructor(height) {
        super();
        this.name = 'Triangle';
        this.color = 'yellow';
        this.width = height;
        this.height = height;
        this.radius = '';
        this.area = this.getArea();
        this.perimeter = this.getPerimeter();
        this.setCoordinate();
        this.style();
        this.drawShape();
    }
    getArea() {
        return 0.5 * this.height * this.height;
    }
    getPerimeter() {
        return 2 * this.height + Math.pow(Math.pow(this.height, 2) + Math.pow(this.height, 2), 0.5)
    }
    style() {
        $(this.div).css({
            'position': 'absolute',
            'width': 0 + 'px',
            'height': 0 + 'px',
            'left': this.x,
            'top': this.y,
            'border-bottom': this.width + 'px solid yellow',
            'border-right': this.width + 'px solid transparent',      
        });
    }
}

