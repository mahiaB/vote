function findAge (year){
    return 2021 - year;
}
function validAge(name,year){
     var name = prompt("enter your name");

     var year = prompt("enter your Year of birth");

     var age = findAge(year);
     if (age >=18){
         alert(name + ' are eligible to vote. your age is ' + age + ' years ');
     }
     else{
         alert(name + " aren't eligible to vote ");
     }
}
validAge();
