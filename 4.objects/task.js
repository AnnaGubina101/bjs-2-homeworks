function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks === undefined){
        return marks = 0 
    } else {
        this.marks = this.marks.concat(marks);
    }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined || null) {
    return 0 
  } else {
    let sum = this.marks.reduce(function(a, b) {
        return a + b;
    }, 0)
    let total = sum / this.marks.length;
    return total
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks
  this.excluded = reason;
}
