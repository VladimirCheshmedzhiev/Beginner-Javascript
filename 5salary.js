function salary (input){
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    let Facebook = 150;
    let Instagram = 100;
    let Reddit = 50;

    for (let i = 2; i <= tabs+2; i++){
        switch (input[i]){
            case "Facebook":
                salary -= Facebook;
                break;
            case "Instagram":
                salary -= Instagram;
                break;
            case "Reddit":
                salary -= Reddit;
                break;
            }
            if (salary == 0 || salary < 0){
                console.log ("You have lost your salary.");
                break;
            }
        }
    if (salary > 0){
        console.log(salary);
    }
}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])






