//UC1
const isAbsent=0;
let empCheck = Math.floor(Math.random()*10)%2;

if(empCheck == isAbsent)
console.log("The employee is absent")
else
console.log("The employee is present")

//UC2
const isPartTime=1;
const isFullTime=2;

const partTimeHr=4;
const fullTimeHr=8;

const wagePerHr=20;
{
    let empHour=0;
    let empCheck = Math.floor(Math.random()*10)%3;

    switch(empCheck)
    {
        case isPartTime:
             empHour=partTimeHr;
             console.log("Employee is present for part time")
             break;
        case isFullTime:
             empHour=fullTimeHr;
             console.log("Employee is present for full time")
             break;
        default:
             empHour=0;
             console.log("Employee is absent")
        }
        let empWage = empHour*wagePerHr;
        console.log("Employee hours present = " + empHour);
        console.log("Employee wage for the day = " + empWage);
}

