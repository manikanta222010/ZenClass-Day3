let car = {
    brand: "BMW",
    model: "i8",
    color: "white",
    horsePower: 800,
}

//for loop
for(let i=0; i<(Object.keys(car)).length ; i++){
    console.log(Object.keys(car)[i] +": "+ Object.values(car)[i])
}

//for in loop
for(const key in car){
    console.log(`${key}: ${car[key]}`);
}

//for of loop
for (let key of Object.keys(car)) {
    console.log(`${key}: ${car[key]}`)
}

//forEach loop
Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`)
});