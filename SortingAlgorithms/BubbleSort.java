package SortingAlgorithms;

import java.util.Arrays;

public class BubbleSort {

    public static void bubbleSort(int[] arr){
        int n = arr.length;
        boolean swapped;

        for(int i = 0;i<n-1;i++){
            swapped = false;

            for(int j = 0;j<n-i-1;j++){

                if(arr[j] > arr[j+1]){

                    //swap
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    swapped = true;
                }
            }

            // Stop if no swap were made (array is sorted)
            if(!swapped){
                break;
            }
        }
    }
    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1, 4, 6, 7 };

        System.out.println("Before Sorting: " + Arrays.toString(arr));
        bubbleSort(arr);
        System.out.println("After Sorting: " + Arrays.toString(arr));
    }
}

// Time Complexity : O(n^2)
// Space Complexity : In Place

