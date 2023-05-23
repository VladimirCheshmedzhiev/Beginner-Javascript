function trekking(input){
    let groups = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let totalPeople = 0

    for (let i = 1; i <= groups; i++){
        // console.log(input[i])
        if (input[i] <= 5){
            p1 += Number(input[i])
            totalPeople += Number(input[i])
        }
        else if (6 <= input[i] && input[i] <=12){
            p2 += Number(input[i])
            totalPeople += Number(input[i])

        }
        else if (13 <= input[i] && input[i] <=25){
            p3 += Number(input[i])
            totalPeople += Number(input[i])

        }
        else if (26 <= input[i] && input[i] <=40){
            p4 += Number(input[i])
            totalPeople += Number(input[i])

        }
        else if (input[i] >= 41){
            p5 += Number(input[i])
            totalPeople += Number(input[i])
        }
    }
let p1Percent = p1/totalPeople*100
let p2Percent = p2/totalPeople*100
let p3Percent = p3/totalPeople*100
let p4Percent = p4/totalPeople*100
let p5Percent = p5/totalPeople*100
///
console.log(`${p1Percent.toFixed(2)}%`)
console.log(`${p2Percent.toFixed(2)}%`)
console.log(`${p3Percent.toFixed(2)}%`)
console.log(`${p4Percent.toFixed(2)}%`)
console.log(`${p5Percent.toFixed(2)}%`)


}
trekking(["5",
"25",
"41",
"31",
"250",
"6"])

