function lili (input){
    let age = Number(input[0]);
    let machine = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let toys = 0;
    let brother = 0
    let currentMoney = 10 

    for (let i = 1; i <= age; i++){
        money
        if (i % 2 == 0){
            money = money += currentMoney;
            currentMoney += 10;
            brother += 1
        }
        else if (i % 2 != 0){
            toys += 1;
        }
    }
    let toySum = toyPrice * toys;
    let totalSum = (toySum + money) - brother

    if (totalSum >= machine){
        console.log (`Yes! ${(totalSum-machine).toFixed(2)}`);
    }
    else if (totalSum < machine){
        console.log (`No! ${(machine - totalSum).toFixed(2)}`);
    }
}
lili([21, 1570.98, 3])