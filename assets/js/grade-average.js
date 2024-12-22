const note = [90, 47, 100]

function average(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = (total / grades.length).toFixed(0);
  return average;
}

const result = average(note);

if (result >= 90) {
  alert("Your grade is A");
} else if (result >= 80){
  alert("Your grade is B");
}else if(result >= 70) {
  alert("Your grade is C");
}else if (result >= 60){
  alert("Your grade is D");
}else  {
  alert("You fail.");
}