

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


