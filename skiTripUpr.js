function skiTrip (input){
    let days = Number(input[0]);
    let room = input[1];
    let revue = input[2];

    let discount = 0
    let price = 0
    let totalPrice = 0
    let roomForOne = 18;
    let apartment = 25;
    let president = 35;
    let nights = days - 1;

    switch (room){
        case "room for one person":
        price = roomForOne * nights
        if (revue == "positive"){
            totalPrice = price + (price*0.25);
        }
        else if(revue == "negative"){
            totalPrice = price - (price*0.1);
        }
        console.log(totalPrice.toFixed(2));
        break;
        //----------------------------//
        case "apartment":
        price = apartment * nights
        if (days < 10){
            discount = price - (price*0.3);
        }
        else if (10 <= days && days <=15){
            discount = price - (price*0.35);
        }
        else if (days > 15){
            discount = price - (price*0.5);
        }
        if (revue == "positive"){
            totalPrice = discount + (discount*0.25);
        }
        else if(revue == "negative"){
            totalPrice = discount - (discount*0.1);
        }
        console.log(totalPrice.toFixed(2));
        break;
        //-----------------------------------------//
        case "president apartment":
        price = president * nights
        if (days < 10){
            discount = price - (price*0.1);
        }
        else if (10 <= days && days <=15){
            discount = price - (price*0.15);
        }
        else if (days > 15){
            discount = price - (price*0.2);
        }
        if (revue == "positive"){
            totalPrice = discount + (discount*0.25);
        }
        else if(revue == "negative"){
            totalPrice = discount - (discount*0.1);
        }
        console.log(totalPrice.toFixed(2));
        break;
    }
}
skiTrip([30, "president apartment", "negative"])