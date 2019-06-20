function Students (firstName, lastName, age, grade, classGrade) {
  this.firstName= firstName
  this.lastName = lastName
  this.age = age
  this.grade = grade
  this.classGrade = classGrade
  this.gpa = function(){
    if (this.classGrade >=92){
      return 4.0
    } else if (this.classGrade >= 85 && this.classGrade < 92 ){
      return 3.0
    } else if (this.classGrade >= 75 && this.classGrade < 85){
      return 2.0
    } else if (this.classGrade >= 70 && this.classGrade < 75){
      return 1.0
    } else if (this.classGrade < 70){
      return 0.0;

    }
  }
  this.gpa(this.classGrade);


};

Students.prototype.fullname = function(){
   var fullname = this.firstname + this.lastname
};

Students.prototype.graduate = function(){
var yearsleft = 12 - this.grade
};

Students.prototype.graduationAge = function(){
  var graduationAge = this.age + (12 - this.grade);
};

Students.prototype.gradePassFail = function (){
  if (this.gpa <= 2.0) {
    alert("Your aren't going to college!")
  } else if (this.gpa >= 2.1 && this.gpa < 3.0){
    alert("You might go to college!")
  } else if (this.gpa > 3.0){
    alert("Ivy league baby!")
  }
};

$(document).ready(function(){
    $("#studentInfoForm").submit(function(event){

debugger;

      // var studentName = ($("#firstName").val() + $("#lastName").val());

       var student = new Students ($("#firstName").val(), $("#lastName").val(), parseInt($("#age").val()), parseInt($("#grade").val()), parseInt($("#classGrade").val()));

      $("#outputField").append("<br>" + student.firstName + "<br> " +  student.lastName + " <br>" + student.age +  " <br>" + student.grade + " <br>" + student.classGrade + "<br> " + student.gpa(student.classGrade));


      event.preventDefault();
    });
});
