

import java.util.Scanner;

public class arrays {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        int[] arr1 = {10,20,30,40,50};
        int[][] arr2 = new int[3][3];


        System.out.println("Enter the length and width(mxn) of the array: ");
        int m = sc.nextInt();
        int n = sc.nextInt();

        System.out.println("Enter the elements of the array: ");

        for(int i = 0;i<m;i++){
            for(int j = 0;j<n;j++){
                arr2[i][j] = sc.nextInt();
            }
        }
       

        System.out.println("Elements of the array are: ");
        for(int i = 0;i<arr2.length;i++){
            for(int j = 0;j<arr2[i].length;j++){
                System.out.print(arr2[i][j] + " ");
            }
            System.out.println();
        }
       
        int sum = 0;
        int product = 1;
        int minEle = Integer.MAX_VALUE;
        int maxEle = Integer.MIN_VALUE;

     


         for(int i = 0;i<arr2.length;i++){
            for(int j = 0;j<arr2[i].length;j++){
                if(arr2[i][j] < minEle){
                    minEle = arr2[i][j];
                }
                if(arr2[i][j] > maxEle){
                    maxEle = arr2[i][j];
                }
                sum += arr2[i][j];
                product *= arr2[i][j];
            }
        }

        System.out.println("Sum of all elements in the array is: " + sum);
        System.out.println("Product of all elements in the array is: " + product);
        System.out.println("Maximum elements in the array is: " + maxEle);
        System.out.println("Minimum elements in the array is: " + minEle);


        String str = "madam";
        int l = 0;
        int r = str.length()-1;
        boolean flag = true;

        while(l < r){
            if(str.charAt(l) != str.charAt(r)){
                flag = false;
            } //arr[l]
            l++;
            r--;
        }

        System.out.println(flag);


    }
}

// Write a java program that takes and array of integer as input and returns
// the sum of all alements in the array

// Write a Java program to initialize an array of integers with values
// {1,2,3,4,5}
// and print each element on separate line.

// implement a Java program to find the average value of elements in an array of
// integers / doubles

// Implement a java program that takes an array of strings as input and
// returns the concatination of all strings in the array
