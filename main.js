// function concept excersises


//functions that gives a ticekt based on user speed and sped limit
function determineTicket(speed, limit) {
    if (speed - limit == 0 || speed - limit < 0) {
        return "No ticket"
    }
    else if (speed - limit > 0 && speed - limit <= limit + 20) {
        return "Small Ticket"
    }
    else {
        return "Big Ticket"
    }
}

console.log("Going 80 km/h in a 60 km/h zone results in: " + determineTicket(80, 60) + ".");
console.log("Going 70 km/h in a 30 km/h zone results in: " + determineTicket(70, 30) + ".");
console.log("Going 50 km/h in a 50 km/h zone results in: " + determineTicket(50, 50) + ".");
