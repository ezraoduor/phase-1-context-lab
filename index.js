/* Your Code Here */
function createEmployeeRecord(employeeinfo){
    return{
        firstName: employeeinfo[0],
        familyName: employeeinfo[1],
        title: employeeinfo[2],
        payPerHour: employeeinfo[3],
        timeInEvents: [],
        timeOutEvents:[]
        
    }

}
function createEmployeeRecords(employeeinfo){
    return employeeinfo.map(createEmployeeRecord);

}
function createTimeInEvent( dateTime){
    let[date, hour] = dateTime.split(" ")
    this.timeInEvents.push({
        type : 'TimeIn',
        date,
        hour: parseInt(hour)
    })
    return this;
}
function createTimeOutEvent( dateTime){
    let[date, hour] = dateTime.split(" ")
    this.timeOutEvents.push({
        type : 'TimeOut',
        date,
        hour: parseInt(hour)
    })
    return this;
}
function hoursWorkedOnDate( exactdate){
    let timeIn = this.timeInEvents.find(e => e.date === exactdate).hour
    let timeOut = this.timeOutEvents.find(e => e.date === exactdate).hour
    return (timeOut - timeIn) *0.01
}
function wagesEarnedOnDate(exactdate ){
    return hoursWorkedOnDate.call(this , exactdate) * this.payPerHour

}
//function allWagesFor(){
 //   let datesWorked = this.timeInEvents.map(event => event.date)
 //   let summedwages = 0
 //   for (let date of datesWorked){
 //       summedwages += wagesEarnedOnDate( this ,date)
 //   }
 //   return summedwages 
//}
function calculatePayroll(employeeRecords){
    let summedpay = 0
    for(let employee of employeeRecords){
        summedpay += allWagesFor.call(employee)
    }
    return summedpay
}
function findEmployeeByFirstName(collection, firstNameString){
    for(let employee of collection){
        if(employee.firstName === firstNameString){
            return employee
        }
    }

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

