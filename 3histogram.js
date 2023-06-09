function histogram (input){
    let number = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let currentNumber = 0

    for (let i = 1; i <= number; i++){
       // console.log(input[i])
        if (input[i]<200){
            p1 += 1
        }
        else if (200 <= input[i] && input[i] <=399){
            p2 += 1
        }
        else if (400 <= input[i] && input[i] <=599){
            p3 += 1
        }
        else if (600 <= input[i] && input[i] <=799){
            p4 += 1
        }
        else if (input[i] >= 800){
            p5+=1
        }
    }

let p1Percent = p1/number*100
let p2Percent = p2/number*100
let p3Percent = p3/number*100
let p4Percent = p4/number*100
let p5Percent = p5/number*100

console.log(`${p1Percent.toFixed(2)}%`)
console.log(`${p2Percent.toFixed(2)}%`)
console.log(`${p3Percent.toFixed(2)}%`)
console.log(`${p4Percent.toFixed(2)}%`)
console.log(`${p5Percent.toFixed(2)}%`)

}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])
