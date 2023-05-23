function commissions(input){

    let city = input[0];
    let sales = Number(input[1]);
    let com = 0

    switch (city){
        case "Sofia":
            if (0 <= sales && sales <= 500){
                com = 0.05;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 500 && sales <= 1000){
                com = 0.07;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000){
                com = 0.08;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 10000){
                com = 0.12;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else {
                console.log("error")
            }
        break;
        case "Varna":
            if (sales >= 0 && sales <= 500){
                com = 0.045;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 500 && sales <= 1000){
                com = 0.075;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000){
                com = 0.1;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 10000){
                com = 0.13;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else {
                console.log("error")
        }
        break;

        case "Plovdiv":
            if (sales >= 0 && sales <= 500){
                com = 0.055;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 500 && sales <= 1000){
                com = 0.08;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 1000 && sales <= 10000){
                com = 0.12;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else if (sales > 10000){
                com = 0.145;
                result = sales * com;
                console.log(result.toFixed(2));
            }
            else{console.log("error")
        }
        break;
        default:
            console.log ("error");
            break;
        }
}
commissions(["Sofia", -5])