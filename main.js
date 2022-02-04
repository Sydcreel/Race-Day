// race numbers are assigned randomly.
let raceNumber = Math.floor(Math.random() * 1000);

// indicates whether a runner registered early or not.
let earlyRegister = true;

// runner's age.
let runnerAge = 12;

// checks whether runner is adult AND registered early.
if (earlyRegister && runnerAge > 18){
    raceNumber += 1000;
}

// checks age and registration time to determine race time.
if (earlyRegister && runnerAge > 18){
    console.log(`Hello, #${raceNumber}! Your race begins at 9:30 A.M.`);
} else if (earlyRegister = false && runnerAge > 18){
    console.log(`Hello, #${raceNumber}! Your race begins at 11:00 A.M.`);
// tells runners under 18 that race will start at 12:30pm.
} else if (runnerAge < 18){
    console.log(`Hello, #${raceNumber}! Your race begins at 12:30 P.M.`);
} else {
    console.log(`Hello, #${raceNumber}! See registration desk for race start time.`);
}