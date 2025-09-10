public class condiotionalStatements{

    public static void main(String[] args) {
      int year = 2025;
    //   if(year % 400 == 0){
    //     System.out.println("Year is leap year");
    //   }
    //   else if(year % 100 == 0){
    //     System.out.println("Year is not a leap year");
    //   }
    //   else if(year % 4 == 0){
    //     System.out.println("Year is a leap year");
    //   }
    //   else{
    //     System.out.println("Year is not a leap year");
    //   }


    // if(year % 4 == 0){
    //     if(year % 100 == 0){
    //         if(year % 400 == 0){
    //             System.out.println("Year is a leap year");
    //         }
    //         else{
    //             System.out.println("Not a leap year");
    //         }
    //     }
    //     else{
    //         System.out.println("leap year");
    //     }
    // }
    // else{
    //     System.out.println("not a leap year");
    // }


    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ){
        System.out.println("Leap year");
    } 
    else{
        System.out.println("Not a leap year");
    }








    }
}