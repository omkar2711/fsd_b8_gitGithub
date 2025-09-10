
class Car {
    String model; //Attributes
    String color;
    String brand;

    

    //non parameterized / Default Constructors
    Car(){
        System.out.println("non parameterized / default Constructor called! ");
    }


    //parameterized Constructors
    Car(String model, String brand, String color){
        System.out.println("parameterized Constructor called! ");
        this.brand = brand;
        this.color = color;
        this.model = model;
    }

    //copy constructor
    Car( Car myCar ){
        
        this.brand = myCar.brand;
        this.color = myCar.color;
        this.model = myCar.model;
    }

    void drive(){ //method
        System.out.println("Car can be driven");
    }

    void display(){
        System.out.println("The brand of the car is: " + this.brand);
        System.out.println("The color of the car is: " + this.color);
        System.out.println("The model of the car is: "+ this.model);
    }
}


public class oops {
    public static void main(String[] args) {
        
        Car myCar1 = new Car(); //creating the object of car class

        myCar1.brand = "bmw";
        myCar1.color = "blue";
        myCar1.model = "sedan";

        // myCar1.drive();
        // myCar1.display();


        Car myCar2 = new Car();
        //new : 

        myCar2.brand = "audi";
        myCar2.color = "white";
        myCar2.model = "SUV";
        // myCar2.display();


        Car myCar3 = new Car("harrier","tata","black");
        // myCar3.display();

        Car myCar4 = new Car(myCar1);

    }



}



