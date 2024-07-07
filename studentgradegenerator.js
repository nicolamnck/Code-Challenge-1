function calculateGrade(mark){
    while (true) {
        let input = prompt("Enter the student's mark (between 0 and 100):");
        let mark = parseFloat(input);

        if (!isNaN(mark) && mark >= 0 && mark <= 100) {
            break;
        } else {
            alert("Please enter a valid mark between 0 and 100.");
        }
    }

        if (mark > 79) {
            return 'A';
        }
      else if (mark >=60) {
      return 'B';
    }
      else if (mark >=50){
      return 'C';
    }
else if (mark >= 40){
    return 'D';
}
else{
    return 'E'
}
}