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
   console.log(this);
   
  
}

}
const c1 = new Cars('W','R44','red','im' , 12 , 123098);
const c2 = new Cars('R','R45','gray','im' , 13 , 200000);
const c3 = new Cars('T','R46','orange','im' , 14 , 160957);
const c4 = new Cars('J','R47','white','im' , 15 , 823098);
const c5 = new Cars('P','R48','black','im' , 16 , 23098);
console.log('price =' ,c5.price);
c5.editPrice(12387);
console.log('new price =' , c5.price);
c3.showAll();