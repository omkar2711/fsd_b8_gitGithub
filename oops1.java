class Parent{
    void Car(){
        System.out.println("We have a honda city");
    }
}


class Child extends Parent{
    @Override
    void Car(){
        System.out.println("We have a BMW");
    }
}

public class oops1 {
    public static void main(String[] args) {

        Parent p = new Parent();
        p.Car();
       
        Child c = new Child();
        c.Car();

    }
}
