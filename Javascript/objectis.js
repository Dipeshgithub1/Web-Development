//state of car

let myCar = {
  name: "suzuki",
  color: "red",
  model: "vvx",
  currentgear : 3,
  currentspeed : 45,
  seatcapcity : 5,

 // ---------- behavior of car ----
 accelearation:  function(speedCounter){
    this.currentspeed = this.currentspeed + speedCounter;
    return this.currentspeed;

 },

 brake : function(speedCounter){
    this.currentspeed = this.currentspeed - speedCounter;
    return this.currentspeed;
 }

} 
console.log('NAME',myCar.name)
console.log('Color',myCar.color)
console.log('model',myCar.model)
console.log('Gear',myCar.currentgear)
console.log('Capcity',myCar.seatcapcity)

console.log('Acceralation',myCar.accelearation(10))

console.log('BRAKES',myCar.brake(10))


