function oscar (input){
    let actor = input[0];
    let initialAcademyPoints = Number(input[1]);
    let numberOfJudges = Number(input[2]);
    let neededPoints = 1250.5
    let totalJudgeScore = 0;
    let score = initialAcademyPoints;
    let formula = 0;



    for (let i = 3; i < input.length; i+=2){
        let judge = input[i];
        let points = Number(input[i+1]);
        formula = (judge.length * points)/2;
        score += formula;
        if (score > neededPoints){
            console.log (`Congratulations, ${actor} got a nominee for leading role with ${score.toFixed(1)}!`)
            break;
        }
    }
    if (neededPoints >= score){
        let result = neededPoints - score
        console.log(`Sorry, ${actor} you need ${result.toFixed(1)} more!`)
    }
}
oscar(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])




