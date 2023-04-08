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


//UC-6
{
    function calculateDailyWage(empHours)
    {
        return empHours * wagePerHour;
    }
    const MaxHrsInMonth = 160;
    const NoOfWorkingDays = 20;
    var wagePerHour = 20;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();
    while(totalEmpHrs <= MaxHrsInMonth && totalWorkingDays < NoOfWorkingDays)
    {
        totalWorkingDays++;
        let empCheck1 = Math.floor(Math.random()*10)%3;
        let empHours = getWorkingHrs(empCheck1);
        totalEmpHrs += empHours;
        empDailyWageArr.push(calculateDailyWage(empHours))
    }
    let empWage = calculateDailyWage(totalEmpHrs);
    console.log("Employee Array : " + empDailyWageArr.join(" "));
    console.log(totalWorkingDays);
    console.log(totalEmpHrs);
    console.log(empWage);


//UC-7.1

totalEmpWage = 0;
function sum(dailyWage)
{
    totalEmpWage += dailyWage;
}
function totalWage(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("Employee wage reduce array: "+ empDailyWageArr.reduce(totalWage));

empDailyWageArr.forEach(sum);
console.log(empDailyWageArr);
console.log(totalWorkingDays);
console.log(totalEmpHrs);
console.log(empWage);

//UC-7.2
//Map - It will create new array from calling a function for every array element.
//When we are having empty array it wont work.
//It never change an existing array.It will replicate array.
function totalWage(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("Employee wage reduce array : " + empDailyWageArr.reduce(totalWage));
let dailyCounter = 0;
function mapDayWithWage(dailyWage)
{
    dailyCounter ++;
    return dailyCounter + "-" + dailyWage;
}
let mapDayWithDailyWageArray = empDailyWageArr.map(mapDayWithWage);
console.log(mapDayWithDailyWageArray);

//UC7.3
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDailyWageArray = mapDayWithDailyWageArray.filter(fullTimeWage);
console.log(fullDailyWageArray);
}
{

//UC-8
const MaxHoursInMonth = 160;
const NoOfWorkingDay = 20;
let totalEmpHours = 0;
let totalWorkingDay= 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
function calculateDailyWage(empHours)
{
    return empHours * wagePerHour;
}
while(totalEmpHours <= MaxHoursInMonth && totalWorkingDay < NoOfWorkingDay)
{
    totalWorkingDay ++;
    let empCheck1 = Math.floor(Math.random()*10)%3;
    let empHours = getWorkingHrs(empCheck1);
    totalEmpHours += empHours;
    empDailyWageArr.push(calculateDailyWage(empHours));
    empDailyWageMap.set(totalWorkingDay,calculateDailyWage(empHours));
}
console.log(empDailyWageMap);
function totalWage(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log(Array.from(empDailyWageMap.values()).reduce(totalWage,0));
}

