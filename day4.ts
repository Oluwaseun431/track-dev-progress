// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.

function NextGrade(grades: number[]): number[] {
    return grades.map(grade => {
        if(grade < 38){
           return grade; 
        }


        const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

        if(nextMultipleOfFive - grade < 3){
            return nextMultipleOfFive;
        }else {
            return grade;
        }

    });
       
}