function getGrade(marks)
{
    if (marks >=90){
        return "A";
    } else if (marks >=75 ){
        return "B";
    }else if (marks >= 50){
        return "c";
    }else {
        return "Fail";
    }
}

let studentMarks = 82;
let grade = getGrade(studentMarks);

console.log("Marks: " + studentMarks);
console.log("Grade: " + grade);