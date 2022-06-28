// Add your Circle class here

class Circle{
    constructor(radius){
      this.radius = radius;
    }
  
    //sets diameter manually that is halving the diameter twice and setting the value to the radius
    set diameter(diameter){
      return this.radius = diameter / 2;
    }
  
    //Diameter is twice the value of the radius
    get diameter(){
      return this.radius * 2
    }
  
    //Calculates the circumfarence using mathematical argument 2*pi*r
    get circumference(){
      return Math.PI * 2 * this.radius
    }
  
    //calculates area of a circle with the mathematical argument pi*r^2
    get area(){
      return Math.PI  * this.radius* this.radius
    }

    //calculates the circumfarence of the circle
    set circumference(Circle){
      return this.radius = (Circle / (Math.PI * 2))
    }
  
    //Calculates the area of the radius with sqrt point
    set area (area){
      return this.radius = Math.sqrt(area/Math.PI)
    }
   
  }