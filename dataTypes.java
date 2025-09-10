import java.util.Scanner;

public class dataTypes {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value for integer a:");
        int a = sc.nextInt();
        System.out.println("Enter the value for double b:");
        double b = sc.nextDouble();
        System.out.println("Enter the value for character c:");
        char c = sc.next().charAt(0);
        System.out.println("Enter the value for string str:");
        String str = sc.next();

        sc.close();


        System.out.println("The values you entered are:");

        System.out.println("Integer: " + a);
        System.out.println("Double: " + b);
        System.out.println("Character: " + c);
        System.out.println("String: " + str);
    }
}
