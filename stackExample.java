// implment queue using two stack
import java.util.Stack;


public class stackExample {
    public static void main(String[] args) {
        
        Stack<Integer> s1 = new Stack<>();
        Stack<Integer> s2 = new Stack<>();

        //10,20,30,40,50,60,70

        s1.push(10);
        s1.push(20);
        s1.push(30);
        s1.push(40);
        s1.push(50);
        s1.push(60);
        s1.push(70);

        while(!s1.isEmpty()){
            int val = s1.pop();
            s2.push(val);
        }

        // Dequeue elements from the second stack (s2)
        while(!s2.isEmpty()){
            System.out.println("Dequeued element: " + s2.pop());
        }
    }
}