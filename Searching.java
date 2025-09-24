import java.util.Arrays;

public class Searching {

    public static void main(String[] args) {
        int[] arr = {3,7,2,6,4,5,9,1,8,10};

        //linear search
        int target = 10;
        int countForLinearSearch = 0;

        for(int i = 0;i<arr.length;i++){
            countForLinearSearch++;
            if(arr[i] == target){
                System.out.println("target found at index: " + i);
                break;
            }
        }
        System.out.println(countForLinearSearch);

        System.out.println("------------------------------------");

        //Array should be sorted
        Arrays.sort(arr);

        //Binary Search
        //O(log n)
        int low = 0;
        int high = arr.length-1;
        int countForBinarySearch = 0;

        while(low <= high){
            countForBinarySearch++;
            int mid = (high - low) / 2 + low;

            if(arr[mid] == target){
                System.out.println("Target found");
                break;
            }
            else if(arr[mid] < target){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
        }

        System.out.println(countForBinarySearch);

    }
}
