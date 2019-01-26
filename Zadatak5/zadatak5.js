function tellFortune(name, gender, numOfAge) {

    const fortuneJobs = ['Actor', 'Dancer', 'Barista','Architect','Programmer','Politician'];
    const fortuneCities = ['Podgorica', 'Belgrade', 'Paris', 'Moscow', 'London'];
    const fortuneNames =
        {
        male: ['Janko', 'Marko', 'John', 'Henry'],
        female: ['Ana', 'Lana', 'Mila','Louise', 'Chloe']
        };

    if(gender === 'M'){
        var furtuneName = fortuneNames.female[(Math.random() * fortuneNames.female.length) | 0];
    }else{
        var furtuneName = fortuneNames.male[(Math.random() * fortuneNames.female.length) | 0];
    }

    const furtuneJob = fortuneJobs[(Math.random() * fortuneJobs.length) | 0];
    const fortuneCitie = fortuneCities[(Math.random() * fortuneCities.length) | 0];

    const randIfAdult = Math.floor(Math.random() * 10) + 1;
    const min = 1+18-numOfAge;
    const max = 10+18-numOfAge;
    const randIfunderage = Math.floor(min + Math.random()*(max + 1 - min));
    const fortuneNumber = numOfAge >= 18 ? randIfAdult : randIfunderage;

    var message = name + " you will be " + furtuneJob + " in " + fortuneCitie + ", and you will marry " + furtuneName + ' in ' + fortuneNumber + " years";
    console.log(message);

}
tellFortune('Ana', 'F', 16);