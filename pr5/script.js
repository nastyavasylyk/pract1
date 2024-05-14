var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 200;
car1.driver = {
    name: "Anastasiia Vasylyk",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "red",
    maxSpeed: 200,
    driver: {
        name: "Anastasiia Vasylyk",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

car1.drive = function() {
    console.log("I am not driving at night");
};

car2.drive = function() {
    console.log("I can drive anytime");
};

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var msg = "Driver " + this.driver.name;
        msg += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        msg += " and has " + this.driver.experience + " years of experience";
        console.log(msg);
    }
};

var truck1 = new Truck("yellow", 4000, 40, "Porsche", "911");
truck1.AssignDriver("Bill Gates", true, 30);
truck1.trip();

var truck2 = new Truck("black", 7000, 80, "Mercedes", "GLE");
truck2.AssignDriver("Mark Zuckerberg", false, 20);
truck2.trip();
