package SortingAlgorithms;

import java.util.Arrays;


public class InsertionSort {

    public static void insertionSort(int[] arr){
        int n = arr.length;

        for(int i = 1;i <n;i++){
            int key = arr[i];
            int j = i-1;

            //Move elements of arr[] that are greater than key, to one position ahead of their current position
            while( j >= 0 && arr[j] > key){
                arr[j+1] = arr[j];
                j--;
            }

            //place the key in correct position
            arr[j+1] = key;
        }
    }
    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1, 8, 6, 7 };

        System.out.println("Array Before Sorting: ");
        System.out.println(Arrays.toString(arr));

        insertionSort(arr);

        System.out.println("Array After Sorting: ");
        System.out.println(Arrays.toString(arr));

    }
}
