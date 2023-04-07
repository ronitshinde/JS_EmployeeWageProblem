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

//UC3
{
    const isFullTime = 2;
    const isPartTime = 1;
    const partTimeHr = 4;
    const fullTimeHr = 8;
    const wagePerHr = 20;

    function getWorkingHrs(empCheck1)
    {
        let empHour =0;
        switch(empCheck1)
        {
            case isPartTime:
                return partTimeHr;
                case isFullTime:
                    return fullTimeHr;
                    default:
                        return 0;
        }
    }
    let empCheck1 = Math.floor(Math.random()*10)%3;
    let empHour = getWorkingHrs(empCheck1);
    let empWage = empHour * wagePerHr;
    console.log("Employee hours:" + empHour);
    console.log("Employee wage is:" + empWage);
}

//UC-4
{
    const NoOfWorkingDays = 20;
    var wagePerHour = 20;
    let totalEmpHrs = 0;
    for(let day =0; day<NoOfWorkingDays; day++)
    {
        let empCheck1 = Math.floor(Math.random()*10)%3;
        totalEmpHrs += getWorkingHrs(empCheck1);
    }
    let empWage = totalEmpHrs * wagePerHour;
    console.log("Total no of working days = " + NoOfWorkingDays);
    console.log("Total employee wage = " + empWage);
    console.log("Total working hours = " + totalEmpHrs);
}

//UC-5

const MaxHrsInMonth = 160;
const NoOfWorkingDays = 20;
var wagePerHour = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MaxHrsInMonth && totalWorkingDays < NoOfWorkingDays)
{
    totalWorkingDays++;
    let empCheck1 = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHrs(empCheck1);
}
let empWage = totalEmpHrs * wagePerHour;
console.log ("Total working days = " + totalWorkingDays);
console.log("Total emp hours = " + totalEmpHrs);
console.log("Total emp wage = " + empWage);
