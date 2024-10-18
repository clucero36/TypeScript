function findMinDifference(timePoints: string[]): number {
  //sort our input Array
  let sortedTimePoints = timePoints.sort((a,b) => {
    if (a > b) 
      return 1;
    if (a < b)
      return -1;

    return 0;
  });
  
  //turn our sorted array into a matrix of integers
  const sortedTimePointsMatrix = sortedTimePoints.map( (timePoint) => {
    return [parseInt(timePoint.split(':')[0]), parseInt(timePoint.split(':')[1])];
  }) 

  let minMinutesDiff = 10000;

  for (let x = 0; x < sortedTimePointsMatrix.length -1; x++) {
    //different in minutes
    let minutesDiff = Math.abs(sortedTimePointsMatrix[x][1] - sortedTimePointsMatrix[x+1][1]);
    //difference in hours
    let hoursDiff = Math.abs(sortedTimePointsMatrix[x][0] - sortedTimePointsMatrix[x+1][0]);

    // time difference is just difference in minutes
    if (hoursDiff === 0) {
      minMinutesDiff = minutesDiff < minMinutesDiff ? minutesDiff : minMinutesDiff
    }
    // the difference from hour 23 & hour 0 is just 1 hour
    else if (hoursDiff === 23) {
      let hourMinutes = 60;
      minutesDiff = hourMinutes - minutesDiff;
      minMinutesDiff = minutesDiff < minMinutesDiff ? minutesDiff : minMinutesDiff;
    }
    else { //(hoursDiff !== 0) 
      let hourMinutes = hoursDiff * 60;
      // addition or subtraction from hourMinutes is dependent on
      // if sortedTimePointsMatrix @ x+1 has a greater number of minutes or less number of minutes
      // than sortedTimePointsMatrix @ x
      // For ex: 01:01 & 02:02 we need to add 1 to hourMinutes
      //         01:02 & 02:01 we need to subtract 1 from hourMinutes
      if (sortedTimePointsMatrix[x][1] > sortedTimePointsMatrix[x+1][1])
        minutesDiff = hourMinutes - minutesDiff;
      else
        minutesDiff = hourMinutes + minutesDiff;

      minMinutesDiff = minutesDiff < minMinutesDiff ? minutesDiff : minMinutesDiff;
    }
  }

  // we've gone through the whole array
  // now we need to check if sortedTimePointsMatrix[0] & sortedTimePointsMatrix[length -1]
  // becuase the times are sorted, we need to check in circular fashion
  if (sortedTimePointsMatrix.length > 2) {
    //different in minutes
    let minutesDiff = Math.abs(sortedTimePointsMatrix[0][1] - sortedTimePointsMatrix[sortedTimePointsMatrix.length -1][1]);
    //difference in hours
    let hoursDiff = 24 - Math.abs(sortedTimePointsMatrix[0][0] - sortedTimePointsMatrix[sortedTimePointsMatrix.length -1][0]);

    // time difference is just difference in minutes
    if (hoursDiff === 0) {
      minMinutesDiff = minutesDiff < minMinutesDiff ? minutesDiff : minMinutesDiff
    }
    // the difference from hour 23 & hour 0 is just 1 hour
    else if (hoursDiff === 23) {
      let hourMinutes = 60;
      minutesDiff = hourMinutes - minutesDiff;
      minMinutesDiff = minutesDiff < minMinutesDiff ? minutesDiff : minMinutesDiff;
    }
    else { //(hoursDiff !== 0) 
      let hourMinutes = hoursDiff * 60;
      // addition or subtraction from hourMinutes is dependent on
      // if sortedTimePointsMatrix @ x+1 has a greater number of minutes or less number of minutes
      // than sortedTimePointsMatrix @ x
      // For ex: 01:01 & 02:02 we need to add 1 to hourMinutes
      //         01:02 & 02:01 we need to subtract 1 from hourMinutes
      if (sortedTimePointsMatrix[0][1] > sortedTimePointsMatrix[sortedTimePointsMatrix.length -1][1])
        minutesDiff = hourMinutes + minutesDiff;
      else
        minutesDiff = hourMinutes - minutesDiff;

      minMinutesDiff = minutesDiff < minMinutesDiff ? minutesDiff : minMinutesDiff;
    }  
  }
    
  return minMinutesDiff;
};

const timeArr1 = ["01:01","02:01","03:00"]
const timeArr2 = ["00:00","23:59","00:00"]
const timeArr3 = ["00:00","12:00"]
const timeArr4 = ["23:30","00:10"]
const timeArr5 = ["00:00","12:00","23:59"]
const timeArr6 = ["02:45","11:15","18:30","23:55"]


console.log(findMinDifference(timeArr1))
console.log(findMinDifference(timeArr2))
console.log(findMinDifference(timeArr3))
console.log(findMinDifference(timeArr4))
console.log(findMinDifference(timeArr5))
console.log(findMinDifference(timeArr6))