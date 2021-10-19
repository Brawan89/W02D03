class Cars {
    constructor (make, model, colour, image, registration_number, price){
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.registration_number = registration_number;
    this.price=price;
}

editPrice(newPrice) {
   return this.price = newPrice;

}

showAll(){
   this.forEach(element => {
      return this[element];
   });
  

   // for (const key in Cars) 
   //    return `${key}: ${Cars[key]}`;
}

}
const d = new Cars('W','R44','red','im' , 12 , 123098);
console.log(d.editPrice(12387));
console.log(d.showAll());