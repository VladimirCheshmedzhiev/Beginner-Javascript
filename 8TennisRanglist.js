function tennis (input) {
    let numberOfTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let points = 0;
    let totalPoints = 0;
    let W = 0

    for (let i = 2; i <= numberOfTournaments+2; i++){

        switch (input[i]){
            case "W":
                W += 1
                points += 2000;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
        }
    }
    totalPoints = initialPoints += points;
    let average = points / numberOfTournaments
    let percent = (W / numberOfTournaments) * 100

    console.log (`Final points: ${Math.floor(totalPoints)}`);
    console.log (`Average points: ${Math.floor(average)}`)
    console.log (`${percent.toFixed(2)}%`)

}
tennis(["4",
"750",
"SF",
"W",
"SF",
"W"])

