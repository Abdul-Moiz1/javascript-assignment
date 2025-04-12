// constructor function 
function Car(image, model, year, make,  engine, fueltype, transmission, seat){
    this.image = image;
    this.model = model;
    this.year = year;
    this.make = make;
    this.engine = engine;
    this.fueltype = fueltype;
    this.transmission = transmission;
    this.seat = seat;
}

// cars object 
var car1 = new Car("https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/7740/1585801296746/front-left-side-47.jpg?impolicy=resize&imwidth=420", "Civic", 2023, "Honda", "1.5L", "Petrol", "Automatic", 4);
var car2 = new Car("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8r4igAj8rW_ES1CqVCin5j8zB0p39W4OHLQ&s", "Hyundai Sonata", 2024, "Honda", "2.5L", "Petrol", "Automatic", 4)
var car3 = new Car("https://pictures.dealer.com/p/parkplacembfortworthretail/1072/544f811cafcc276c6c37c4c82baa8f97x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520", "Mercedes", 2024, "Sedan", "2.5L", "Petrol", "Automatic", 4);
var car4 = new Car("https://hips.hearstapps.com/hmg-prod/images/2023-bmw-8-series-11-1643213634.jpg?crop=0.728xw:0.616xh;0.133xw,0.283xh&resize=2048:*", "BMW-8", 2025, "Sedan", "2.5L", "Petrol", "Automatic", 4);
var car5 = new Car("https://pictures.dealer.com/p/parkplacembfortworthretail/1072/544f811cafcc276c6c37c4c82baa8f97x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520", "Mercedes", 2024, "Sedan", "2.5L", "Petrol", "Automatic", 4);

var cars = [car1, car2, car3, car4, car5];


// Get card container id 
var cardcontainer = document.getElementById("cardContainer")

cars.forEach(car => {
    cardcontainer.innerHTML += `
     <div id="cards" class="card shadow" class="col-sm=2 col-md-3">
          <img src="${car.image}"  class="card-img-top" alt="Car Image">
          <div class="card-body">
            <h5 class="card-title">${car.make} ${car.model} (${car.year})</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Engine:</strong> ${car.engine}</li>
              <li class="list-group-item"><strong>Fuel Type:</strong> ${car.fueltype}</li>
              <li class="list-group-item"><strong>Transmission:</strong> ${car.transmission}</li>
              <li class="list-group-item"><strong>Seats:</strong> ${car.seat}</li>
            </ul>

            <button id="button">Add to Cart</button>
          </div>
        </div>
    `
});


