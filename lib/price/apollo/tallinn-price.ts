import { Show } from "../../movie-data/cinemas/apollo-types";


export default function tallinnPrice(show: Show, age:number):number{
    let price: number = -1;
    const dateTime = new Date(show.dttmShowStart);
    if(dateTime.getDay() == 0){
        if(age <= 12){
            price = 5.99
        } else if(age <= 18) {
            price = 8.88
        } else {
            price = 9.99
        }
    } else if(dateTime.getDay() <= 5 && dateTime.getHours() < 17){
        if(age <= 12 || age >= 65){
            price = 5.29
        } else if(age <= 18) {
            price = 5.88
        } else {
            price = 8.10
        }
    } else if(dateTime.getDay() <= 4 && dateTime.getHours() >= 17){
        if(age <= 12){
            price = 5.69
        } else if(age <= 18) {
            price = 6.99
        } else {
            price = 9.21
        }
    } else {
        if(age <= 12){
            price = 5.99
        } else if(age <= 18) {
            price = 8.88
        } else {
            price = 9.99
        }

    }
    if(show.PresentationMethod == "3D"){
        price += 1
    }
    if(show.TheatreAuditorium == "3. Apollo Kinorestoran"){
        price += 2
    }
    return price
}