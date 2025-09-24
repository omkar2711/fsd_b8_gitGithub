package hashing;

import java.util.HashSet;

public class HashSetimplementation {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();

        set.add(1);
        set.add(2);
        set.add(3);
        set.add(4);
        set.add(5);
        set.add(6);
        set.add(7);
        set.add(8);

        System.out.println(set.contains(8));

        set.remove(8);

        System.out.println(set.contains(8));

        for (Integer i : set) {
            System.out.println(i);
        }
    }
}
