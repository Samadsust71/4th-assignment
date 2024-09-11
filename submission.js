

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || expenses > income) {
        return  "Invalid Input" ;
    }
    return (income - expenses) * .2;
}


function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const username = email.slice(0, email.indexOf('@'));

    const domainName = email.slice(email.indexOf('@')+1);

   return username +' sent you an email from ' + domainName;
}


function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    let count =0;
    for (let i = 0; i < name.length; i++) {

      if (!isNaN(name[i])) {
        count += 1;
      }
    }

  return count > 0 ? true : false;
}


function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return "Invalid Input";
    }

    const finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);

    return finalScore >= 80 ? true : false;
}


function  waitingTime(waitingTimes  , serialNumber) {

    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
       return 'Invalid Input';
    }
    
    let totalTime = 0;
    for (const time of waitingTimes) {
        totalTime += time;
    }
    const averageTime = Math.round(totalTime / waitingTimes.length);

    const waitingPeriod =(serialNumber - waitingTimes.length - 1) * averageTime
    return waitingPeriod;
}
