package hashing;
import java.util.HashMap;

public class HashmapImplementation {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();

        map.put(1 , "Vivek");
        map.put(2 , "Sumit");
        map.put(3 , "Ganesh");
        map.put(4 , "Vijay");
        map.put(5 , "Pratik");
        map.put(6 , "kartik");
        map.put(7 , "Rohini");
        map.put(8 , "Soham");

        System.out.println(map.get(5));
        System.out.println(map.containsKey(6));

        map.remove(5);

        System.out.println(map.get(5));

        for(int key : map.keySet()) {
            System.out.println(key + " : " + map.get(key));
        }
    }
}
