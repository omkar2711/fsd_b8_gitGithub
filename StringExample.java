public class StringExample {
    public static void main(String[] args) {
        
        //String 
        String str = "Hello, World!";

        //Length of the string
        System.out.println("Length of the string: " + str.length());

        //Character at a specific index
        System.out.println("Character at index 4: " + str.charAt(4));

        //Substring included and excluded [7, 13)
        System.out.println("Substring from index 7 to 13: " + str.substring(7, 13));

        //equals
        String str2 = "Hello, World";
        System.out.println("str equals str2: " + str.equals(str2));

        //toUpperCase
        System.out.println("Uppercase: " + str.toUpperCase());

        //toLowerCase
        System.out.println("Lowercase: " + str.toLowerCase());

        //replace
        System.out.println("Replace 'World' with 'Java': " + str.replace("World", "Java"));

        //trim
        String str3 = "   Hello, World!   ";
        System.out.println("Trimmed string: '" + str3.trim() + "'");

        //contains
        System.out.println("str contains 'World': " + str.contains("World"));

        //split
        String[] parts = str.split("o");
        System.out.println("Split string: ");
        for(String part : parts){
            System.out.println(part);
        }

        StringBuilder sb = new StringBuilder(str);
        System.out.println("StringBuilder content: " + sb.toString());

        //append
        sb.append(" Welcome to Java.");
        System.out.println("After append: " + sb.toString());

        //insert
        sb.insert(29, " Programming");
        System.out.println("After insert: " + sb.toString());

        //replace
        sb.replace(0, 5, "Hi");
        System.out.println("After replace: " + sb.toString());

        //capacity
        System.out.println("StringBuilder capacity: " + sb.capacity());

        //reverse
        sb.reverse();
        System.out.println("After reverse: " + sb.toString());

        

    }
}
