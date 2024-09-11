

function calculateFinalScore(obj) {

    if (typeof obj !== 'object'  || Array.isArray(obj)) {
        return "Invalid Input";
    }

    const finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20 : 0);

    return finalScore >= 80 ? true : false;
}



