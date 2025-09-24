package SortingAlgorithms;

import java.util.Arrays;

public class SelectionSort {

    public static void selectionSort(int[] arr){
        int n = arr.length;

        for(int i = 0; i < n-1; i++){
            int minIdx = i;

            //find the minimum element in the remaining unsorted array
            for(int j = i + 1; j< n; j++){
                if(arr[j] < arr[minIdx]){
                    minIdx = j;
                }
            }

            //Swap
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1, 8, 6, 7 };


        //print
        System.out.println("Array before sorting: ");
        System.out.println(Arrays.toString(arr));

        selectionSort(arr);

        System.out.println("Array after sorting: ");
        System.out.println(Arrays.toString(arr));

    }
}

// Time Complexity : O(n^2)
// In-place
// when swap are costly but comparisons are cheap
