function parseCount(a) {
    let result = Number.parseFloat(a);
    if(Number.isNaN(result)) {
         throw new Error("Невалидное значение");
     }
    return result;
}

function validateCount(a) {
  try {
    return parseCount(a);
  } catch (error) {
    return error;
  }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return (this.a + this.b + this.c);
    }
    get area() {
        let halfP = 0.5 * (this.a + this.b + this.c);
        let s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return s.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() { return new Error("Ошибка! Треугольник не существует") },
            get area() { return new Error("Ошибка! Треугольник не существует") }
        }
        }
    }